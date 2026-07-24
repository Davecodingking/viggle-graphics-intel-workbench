import json
import sys
import tempfile
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from profiles import active_profile_id, available_profiles, load_profile  # noqa: E402
import run_daily  # noqa: E402
import common  # noqa: E402
import validate_digest as validator  # noqa: E402
from run_daily import merge_dimensions  # noqa: E402


class ProfileTests(unittest.TestCase):
    def test_profiles_are_discoverable(self):
        self.assertEqual(available_profiles(), ["general-ai", "investing-markets", "viggle-graphics"])

    def test_cli_override_precedes_runtime(self):
        self.assertEqual(
            active_profile_id("general-ai", {"active_profile": "viggle-graphics"}),
            "general-ai",
        )
        self.assertEqual(active_profile_id(None, {"active_profile": "viggle-graphics"}), "viggle-graphics")
        self.assertEqual(active_profile_id(None, {}), "general-ai")

    def test_unknown_profile_fails_cleanly(self):
        with self.assertRaisesRegex(ValueError, "未知 profile"):
            load_profile("does-not-exist")

    def test_profile_dimensions_and_paths_are_valid(self):
        for profile_id in available_profiles():
            profile = load_profile(profile_id)
            keys = [dim["key"] for dim in profile["dimensions"]]
            self.assertEqual(len(keys), len(set(keys)))
            self.assertTrue(profile["_config_paths"])
            self.assertTrue(all(path.exists() for path in profile["_config_paths"].values()))

    def test_viggle_fixture_inherits_machine_readable_dimension_metadata(self):
        profile = load_profile("viggle-graphics")
        payload = json.loads((ROOT / "tests" / "fixtures" / "viggle_digest.json").read_text())
        dimensions = merge_dimensions(payload["dimensions"], profile)
        self.assertEqual([dim["key"] for dim in dimensions], ["video", "graphics", "systems", "eval", "ecosystem"])
        self.assertTrue(all(dim.get("en") and dim.get("icon") and dim.get("color") and dim.get("notes") for dim in dimensions))

    def test_viggle_radar_covers_3d_reconstruction_and_world_engines(self):
        profile = load_profile("viggle-graphics")
        graphics = next(dim for dim in profile["dimensions"] if dim["key"] == "graphics")
        self.assertIn("3D 重建", graphics["cn"])
        self.assertIn("世界引擎", graphics["cn"])

        config_text = "\n".join(
            path.read_text(encoding="utf-8")
            for key, path in profile["_config_paths"].items()
            if key in {"keywords", "radar", "sources"}
        )
        for required in (
            "3D reconstruction",
            "structure from motion",
            "dynamic scene reconstruction",
            "interactive world model",
            "action-conditioned",
            "International Conference on 3D Vision",
            "World Labs Research",
        ):
            self.assertIn(required, config_text)

    def test_manifest_writer_adds_profile_and_preserves_legacy_entries(self):
        original_root = run_daily.ROOT
        try:
            with tempfile.TemporaryDirectory() as tmp:
                run_daily.ROOT = Path(tmp)
                manifest = run_daily.ROOT / "data" / "manifest.js"
                manifest.parent.mkdir(parents=True)
                manifest.write_text(
                    'window.__MANIFEST__ = { dates: [\n'
                    '  { date: "2026/06/29", label: "2026年6月29日", count: 44, file: "data/2026/06/29/digest.js" }\n'
                    '] };\n',
                    encoding="utf-8",
                )
                run_daily.update_manifest("2026-07-20", 8, "viggle-graphics")
                run_daily.update_manifest("2026-07-20", 12, "investing-markets")
                output = manifest.read_text(encoding="utf-8")
                self.assertIn('profile: "general-ai"', output)
                self.assertIn('profile: "viggle-graphics"', output)
                self.assertIn('profile: "investing-markets"', output)
                self.assertIn('data/2026/07/20/viggle-graphics/digest.js', output)
                self.assertIn('data/2026/07/20/investing-markets/digest.js', output)
                self.assertEqual(output.count('date: "2026/07/20"'), 2)
        finally:
            run_daily.ROOT = original_root

    def test_two_profiles_can_share_one_date_and_validate(self):
        original_common_root = common.ROOT
        original_run_root = run_daily.ROOT
        original_validate_root = validator.ROOT
        try:
            with tempfile.TemporaryDirectory() as tmp:
                root = Path(tmp)
                common.ROOT = root
                run_daily.ROOT = root
                validator.ROOT = root
                run_daily.write_digest_from_json(
                    "2026-07-20", ROOT / "tests" / "fixtures" / "viggle_digest.json",
                    profile_override="viggle-graphics",
                )
                run_daily.write_digest_from_json(
                    "2026-07-20", ROOT / "tests" / "fixtures" / "investing_digest.json",
                    profile_override="investing-markets",
                )
                self.assertTrue((root / "data/2026/07/20/viggle-graphics/digest.js").exists())
                self.assertTrue((root / "data/2026/07/20/investing-markets/digest.js").exists())
                manifest = (root / "data/manifest.js").read_text(encoding="utf-8")
                self.assertEqual(manifest.count('date: "2026/07/20"'), 2)
                self.assertEqual(validator.validate_digest("2026-07-20", "viggle-graphics"), 0)
                self.assertEqual(validator.validate_digest("2026-07-20", "investing-markets"), 0)
        finally:
            common.ROOT = original_common_root
            run_daily.ROOT = original_run_root
            validator.ROOT = original_validate_root


if __name__ == "__main__":
    unittest.main()
