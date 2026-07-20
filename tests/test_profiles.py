import json
import sys
import tempfile
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from profiles import active_profile_id, available_profiles, load_profile  # noqa: E402
import run_daily  # noqa: E402
from run_daily import merge_dimensions  # noqa: E402


class ProfileTests(unittest.TestCase):
    def test_profiles_are_discoverable(self):
        self.assertEqual(available_profiles(), ["general-ai", "viggle-graphics"])

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
                output = manifest.read_text(encoding="utf-8")
                self.assertIn('profile: "general-ai"', output)
                self.assertIn('profile: "viggle-graphics"', output)
        finally:
            run_daily.ROOT = original_root


if __name__ == "__main__":
    unittest.main()
