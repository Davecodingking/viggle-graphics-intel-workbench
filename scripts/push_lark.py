#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
读当天 digest 的精华，推送到 config/push.yaml 或 config/secrets.env 配置的机器人 webhook。
当前实现 lark / 飞书 自定义机器人(interactive 卡片)。开源后可在 build_card 旁加其它机器人 builder。
用法：python3 scripts/push_lark.py [可选:webhook 覆盖] [可选:YYYY/MM/DD] [--dry-run]
依赖：仅标准库（不需要 PyYAML / requests）。
"""
import re, json, sys, os, urllib.request
import time, hmac, hashlib, base64

from profiles import load_profile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def read(p): return open(p, encoding="utf-8").read()

def prop(key):
    return r'(?:"' + re.escape(key) + r'"|' + re.escape(key) + r')\s*:\s*'

def load_strict_payload(raw):
    m = re.search(r'window\.__DAILY__\[[^\]]+\]\s*=\s*(\{.*\})\s*;?\s*$', raw, re.S)
    if not m:
        return None
    try:
        return json.loads(m.group(1))
    except json.JSONDecodeError:
        return None

# ---------- 读配置（极简 yaml：只取顶层 key） ----------
cfg = read(os.path.join(ROOT, "config", "push.yaml"))
def cfg_get(key, default=""):
    m = re.search(r'(?m)^' + re.escape(key) + r':\s*(.+?)\s*$', cfg)
    if not m: return default
    val = re.split(r'\s+#', m.group(1))[0]   # 去掉行内 # 注释
    return val.strip().strip('"').strip("'")

enabled  = cfg_get("enabled", "true").lower()
webhook  = cfg_get("webhook")
sign_secret = cfg_get("sign_secret") or cfg_get("secret")
bot_type = cfg_get("bot_type", "lark")
n_hot    = int(re.sub(r"\D", "", cfg_get("hot_topics", "5")) or 5)

def load_env_file(path):
    if not os.path.exists(path):
        return
    for raw in read(path).splitlines():
        line = raw.strip()
        if not line or line.startswith("#") or "=" not in line:
            continue
        key, val = line.split("=", 1)
        key = key.strip()
        val = val.strip().strip('"').strip("'")
        if key and key not in os.environ:
            os.environ[key] = val

load_env_file(os.path.join(ROOT, "config", "secrets.env"))
load_env_file(os.path.join(ROOT, "config", "local.env"))

# 命令行覆盖
args = sys.argv[1:]
override_hook = next((a for a in args if a.startswith("http")), None)
override_date = next((a for a in args if re.match(r"\d{4}/\d{2}/\d{2}", a)), None)
env_hook = os.environ.get("DAILY_INTEL_LARK_WEBHOOK", "").strip()
env_secret = os.environ.get("DAILY_INTEL_LARK_SECRET", "").strip()

def split_hooks(value):
    return [x.strip() for x in re.split(r"[\s,;]+", value or "") if x.strip().startswith("http")]

def configured_hooks():
    hooks = []
    hooks.extend(split_hooks(os.environ.get("DAILY_INTEL_LARK_WEBHOOKS", "")))
    for key, val in os.environ.items():
        if key == "DAILY_INTEL_LARK_WEBHOOK" or re.match(r"DAILY_INTEL_LARK_WEBHOOK_\d+$", key):
            hooks.extend(split_hooks(val))
    if not hooks:
        hooks.extend(split_hooks(webhook))
    seen, out = set(), []
    for hook in hooks:
        if hook not in seen:
            seen.add(hook)
            out.append(hook)
    return out

env_hooks = configured_hooks()
if env_hooks:
    webhook = env_hooks[0]
    enabled = "true"
if env_secret:
    sign_secret = env_secret
if override_hook:
    webhook = override_hook
    enabled = "true"

if enabled != "true":
    print("[push] 已在 config/push.yaml 中禁用 (enabled: false)"); sys.exit(0)
webhooks = [override_hook] if override_hook else configured_hooks()
if not webhooks:
    print("[push] 未配置 webhook"); sys.exit(1)

# ---------- 找当天 digest ----------
date = override_date
if not date:
    mani = read(os.path.join(ROOT, "data", "manifest.js"))
    m = re.search(r'latest:\s*"([^"]+)"', mani)
    date = m.group(1) if m else "2026/06/29"
digest_path = os.path.join(ROOT, "data", date, "digest.js")
raw = read(digest_path)
payload_data = load_strict_payload(raw)

if payload_data:
    date_cn = payload_data.get("date_cn") or date
else:
    m = re.search(prop("date_cn") + r'"([^"]+)"', raw)
    date_cn = m.group(1) if m else date

# 今日热点（含 related: 的行 = hot_topics_today 条目）
hots = []
if payload_data:
    for topic in payload_data.get("hot_topics_today", []):
        title = topic.get("title")
        if title:
            hots.append((title, topic.get("summary", "")))
else:
    for line in raw.splitlines():
        if re.search(prop("related"), line) and re.search(prop("title"), line):
            t = re.search(prop("title") + r'"([^"]*)"', line); s = re.search(prop("summary") + r'"([^"]*)"', line)
            if t: hots.append((t.group(1), s.group(1) if s else ""))

# 各维度精选：严格 JSON digest 使用动态维度，legacy digest 回退旧五维。
legacy_dims = [("lab", "🏢 AI 大厂"), ("kol", "🗣️ KOL 观点"), ("paper", "📄 前沿论文"),
               ("oss", "🧩 开源项目"), ("fin", "💰 AI×金融")]
emoji = {"video": "🎬", "cube": "🧊", "cpu": "⚙️", "shield": "🛡️", "oss": "🧩",
         "lab": "🏢", "kol": "🗣️", "paper": "📄", "fin": "💰"}
if payload_data and payload_data.get("dimensions"):
    DIM = [
        (dim.get("key"), "%s %s" % (emoji.get(dim.get("icon"), "•"), dim.get("cn") or dim.get("en") or dim.get("key")))
        for dim in payload_data.get("dimensions")
        if dim.get("key")
    ]
else:
    DIM = legacy_dims

configured_top = cfg_get("top_dimensions")
if configured_top:
    top3_dims = [s.strip() for s in configured_top.split(",") if s.strip()]
elif payload_data and payload_data.get("profile"):
    try:
        top3_dims = load_profile(payload_data["profile"]).get("push_priority") or []
    except ValueError:
        top3_dims = []
else:
    top3_dims = ["kol", "oss", "fin"]
per_dim = int(re.sub(r"\D", "", cfg_get("per_dimension", "1")) or 1)
dim_items = {}
if payload_data:
    for item in payload_data.get("items", []):
        dim = item.get("dim")
        title = item.get("title")
        if dim and title:
            dim_items.setdefault(dim, []).append((title, item.get("url", "")))
else:
    for line in raw.splitlines():
        if re.search(prop("id") + r'"', line) and re.search(prop("dim") + r'"', line):
            d = re.search(prop("dim") + r'"(\w+)"', line); t = re.search(prop("title") + r'"([^"]*)"', line); u = re.search(prop("url") + r'"([^"]*)"', line)
            if d and t:
                dim_items.setdefault(d.group(1), []).append((t.group(1), u.group(1) if u else ""))

# ---------- 构造 lark 卡片 ----------
def safe(s): return s.replace('"', "'")
def build_lark_card():
    el = [{"tag": "div", "text": {"tag": "lark_md", "content": "**🔥 今日值得注意（跨维度共振）**"}}]
    for t, s in hots[:n_hot]:
        el.append({"tag": "div", "text": {"tag": "lark_md", "content": "**· " + safe(t) + "**\n" + safe(s)[:90]}})
    el.append({"tag": "hr"})
    el.append({"tag": "div", "text": {"tag": "lark_md", "content": "**📌 各维度精选**"}})
    for k, cn in DIM:
        items = dim_items.get(k, [])
        n = 3 if k in top3_dims else per_dim
        picks = items[:n]
        if not picks:
            continue
        if len(picks) > 1:
            lines = ["**" + cn + " · Top" + str(len(picks)) + "**"]
            for i, (t, u) in enumerate(picks):
                link = "  [原文](" + u + ")" if u else ""
                lines.append(str(i + 1) + ". " + safe(t) + link)
            el.append({"tag": "div", "text": {"tag": "lark_md", "content": "\n".join(lines)}})
        else:
            t, u = picks[0]
            link = "  [原文](" + u + ")" if u else ""
            el.append({"tag": "div", "text": {"tag": "lark_md", "content": cn + "　" + safe(t) + link}})
    el.append({"tag": "hr"})
    el.append({"tag": "note", "elements": [{"tag": "lark_md", "content": "每日情报工作台 · 仅作辅助分析 · 以一手原文为准"}]})
    return {"msg_type": "interactive", "card": {
        "config": {"wide_screen_mode": True},
        "header": {"title": {"tag": "plain_text", "content": "🛰️ " + cfg_get("title_prefix", "AI 每日情报") + " · " + date_cn + " 精华"}, "template": "blue"},
        "elements": el}}

builders = {"lark": build_lark_card, "feishu": build_lark_card}
if bot_type not in builders:
    print("[push] 暂不支持 bot_type=" + bot_type + "（当前实现 lark/feishu）"); sys.exit(1)
payload = builders[bot_type]()
if sign_secret and bot_type in ("lark", "feishu"):
    ts = str(int(time.time()))
    string_to_sign = ("%s\n%s" % (ts, sign_secret)).encode("utf-8")
    payload["timestamp"] = ts
    payload["sign"] = base64.b64encode(hmac.new(string_to_sign, digestmod=hashlib.sha256).digest()).decode("utf-8")

# ---------- 推送 ----------
def mask_hook(hook):
    m = re.search(r"/hook/([^/?#]+)", hook)
    if not m:
        return "<configured-webhook>"
    token = m.group(1)
    return "<lark-webhook:%s...%s>" % (token[:4], token[-4:])

dry_run = "--dry-run" in args
print("[push] %s 个动态维度 + %d 条热点 → %d 个机器人" % (len(dim_items), min(n_hot, len(hots)), len(webhooks)))
if dry_run:
    for i, hook in enumerate(webhooks, 1):
        print("[push][dry-run] bot#%d %s" % (i, mask_hook(hook)))
    sys.exit(0)

failed = 0
for i, hook in enumerate(webhooks, 1):
    req = urllib.request.Request(hook, data=json.dumps(payload).encode("utf-8"),
                                 headers={"Content-Type": "application/json"})
    try:
        resp = urllib.request.urlopen(req, timeout=15)
        print("[push] bot#%d %s HTTP %s %s" % (i, mask_hook(hook), resp.status, resp.read().decode()))
    except Exception as e:
        failed += 1
        print("[push] bot#%d %s 失败: %s" % (i, mask_hook(hook), e))
if failed:
    sys.exit(1)
