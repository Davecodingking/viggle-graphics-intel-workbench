import json
import sys
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(ROOT / "scripts"))

from profiles import load_profile  # noqa: E402
from run_daily import merge_dimensions  # noqa: E402
from validate_digest import _profile_for_payload, _validate_strict_payload, validate_digest  # noqa: E402


class ValidationTests(unittest.TestCase):
    def setUp(self):
        self.profile = load_profile("viggle-graphics")
        self.payload = json.loads((ROOT / "tests" / "fixtures" / "viggle_digest.json").read_text())
        self.payload["dimensions"] = merge_dimensions(self.payload["dimensions"], self.profile)

    def validate(self, payload=None):
        errors, warnings = [], []
        _validate_strict_payload(payload or self.payload, self.profile, errors, warnings)
        return errors, warnings

    def test_viggle_fixture_is_valid(self):
        errors, warnings = self.validate()
        self.assertEqual(errors, [])
        self.assertEqual(warnings, [])
        papers = [item for item in self.payload["items"] if item.get("content_type") == "paper"]
        self.assertTrue(all(item.get("method") and item.get("evidence") and item.get("viggle_relation") for item in papers))

    def test_unknown_dimension_and_related_id_fail(self):
        payload = json.loads(json.dumps(self.payload))
        payload["items"][0]["dim"] = "unknown"
        payload["hot_topics_today"][0]["related"].append("missing")
        errors, _ = self.validate(payload)
        self.assertTrue(any("不在 dimensions" in error for error in errors))
        self.assertTrue(any("不存在" in error for error in errors))

    def test_paper_requires_venue_or_arxiv(self):
        payload = json.loads(json.dumps(self.payload))
        payload["items"][0]["meta"] = {}
        errors, _ = self.validate(payload)
        self.assertTrue(any("meta.venue" in error for error in errors))

    def test_decision_fields_use_allowlists(self):
        payload = json.loads(json.dumps(self.payload))
        payload["items"][0]["relevance"] = "viral"
        payload["items"][0]["impact"] = ["magic"]
        payload["items"][0]["next_action"] = "ship"
        errors, _ = self.validate(payload)
        self.assertGreaterEqual(len([error for error in errors if "无效" in error]), 3)

    def test_profile_mismatch_fails(self):
        with self.assertRaisesRegex(ValueError, "不一致"):
            _profile_for_payload(self.payload, "general-ai")

    def test_viggle_profile_field_is_required(self):
        payload = json.loads(json.dumps(self.payload))
        payload.pop("profile")
        errors, _ = self.validate(payload)
        self.assertTrue(any("根字段 profile" in error for error in errors))

    def test_legacy_digest_still_validates(self):
        self.assertEqual(validate_digest("2026-06-29", "general-ai"), 0)


if __name__ == "__main__":
    unittest.main()
