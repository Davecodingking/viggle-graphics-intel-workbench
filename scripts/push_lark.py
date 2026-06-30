#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
读当天 digest 的精华，推送到 config/push.yaml 配置的机器人 webhook。
当前实现 lark / 飞书 自定义机器人(interactive 卡片)。开源后可在 build_card 旁加其它机器人 builder。
用法：python3 scripts/push_lark.py [可选:webhook 覆盖] [可选:YYYY/MM/DD]
依赖：仅标准库（不需要 PyYAML / requests）。
"""
import re, json, sys, os, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
def read(p): return open(p, encoding="utf-8").read()

# ---------- 读配置（极简 yaml：只取顶层 key） ----------
cfg = read(os.path.join(ROOT, "config", "push.yaml"))
def cfg_get(key, default=""):
    m = re.search(r'(?m)^' + re.escape(key) + r':\s*(.+?)\s*$', cfg)
    if not m: return default
    val = re.split(r'\s+#', m.group(1))[0]   # 去掉行内 # 注释
    return val.strip().strip('"').strip("'")

enabled  = cfg_get("enabled", "true").lower()
webhook  = cfg_get("webhook")
bot_type = cfg_get("bot_type", "lark")
n_hot    = int(re.sub(r"\D", "", cfg_get("hot_topics", "5")) or 5)

# 命令行覆盖
args = sys.argv[1:]
override_hook = next((a for a in args if a.startswith("http")), None)
override_date = next((a for a in args if re.match(r"\d{4}/\d{2}/\d{2}", a)), None)
env_hook = os.environ.get("DAILY_INTEL_LARK_WEBHOOK", "").strip()
if env_hook:
    webhook = env_hook
    enabled = "true"
if override_hook:
    webhook = override_hook
    enabled = "true"

if enabled != "true":
    print("[push] 已在 config/push.yaml 中禁用 (enabled: false)"); sys.exit(0)
if not webhook:
    print("[push] 未配置 webhook"); sys.exit(1)

# ---------- 找当天 digest ----------
date = override_date
if not date:
    mani = read(os.path.join(ROOT, "data", "manifest.js"))
    m = re.search(r'latest:\s*"([^"]+)"', mani)
    date = m.group(1) if m else "2026/06/29"
digest_path = os.path.join(ROOT, "data", date, "digest.js")
raw = read(digest_path)

m = re.search(r'date_cn:\s*"([^"]+)"', raw)
date_cn = m.group(1) if m else date

# 今日热点（含 related: 的行 = hot_topics_today 条目）
hots = []
for line in raw.splitlines():
    if "related:" in line and "title:" in line:
        t = re.search(r'title:"([^"]*)"', line); s = re.search(r'summary:"([^"]*)"', line)
        if t: hots.append((t.group(1), s.group(1) if s else ""))

# 各维度精选（top3_dimensions 配置的维度出 Top3，其余 per_dimension 条）
DIM = [("lab", "🏢 AI 大厂"), ("kol", "🗣️ KOL 观点"), ("paper", "📄 前沿论文"),
       ("oss", "🧩 开源项目"), ("fin", "💰 AI×金融")]
top3_dims = [s.strip() for s in cfg_get("top3_dimensions", "kol,oss,fin").split(",") if s.strip()]
per_dim = int(re.sub(r"\D", "", cfg_get("per_dimension", "1")) or 1)
dim_items = {}
for line in raw.splitlines():
    if re.search(r'\bid:\s*"', line) and re.search(r'\bdim:"', line):
        d = re.search(r'dim:"(\w+)"', line); t = re.search(r'title:"([^"]*)"', line); u = re.search(r'url:"([^"]*)"', line)
        if d and t:
            dim_items.setdefault(d.group(1), []).append((t.group(1), u.group(1) if u else ""))

# ---------- 构造 lark 卡片 ----------
def safe(s): return s.replace('"', "'")
def build_lark_card():
    el = [{"tag": "div", "text": {"tag": "lark_md", "content": "**🔥 今日值得注意（跨维度共振）**"}}]
    for t, s in hots[:n_hot]:
        el.append({"tag": "div", "text": {"tag": "lark_md", "content": "**· " + safe(t) + "**\n" + safe(s)[:90]}})
    el.append({"tag": "hr"})
    el.append({"tag": "div", "text": {"tag": "lark_md", "content": "**📌 各维度精选**（KOL / 开源 / 金融出 Top3）"}})
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
    el.append({"tag": "note", "elements": [{"tag": "lark_md", "content": "AI 每日情报工作台 · 仅辅助分析、不构成投资建议 · 以原文为准"}]})
    return {"msg_type": "interactive", "card": {
        "config": {"wide_screen_mode": True},
        "header": {"title": {"tag": "plain_text", "content": "🛰️ " + cfg_get("title_prefix", "AI 每日情报") + " · " + date_cn + " 精华"}, "template": "blue"},
        "elements": el}}

builders = {"lark": build_lark_card, "feishu": build_lark_card}
if bot_type not in builders:
    print("[push] 暂不支持 bot_type=" + bot_type + "（当前实现 lark/feishu）"); sys.exit(1)
payload = builders[bot_type]()

# ---------- 推送 ----------
print("[push] %s 维度(KOL/开源/金融 Top3) + %d 条热点 → %s" % (len(dim_items), min(n_hot, len(hots)), webhook[:60] + "..."))
req = urllib.request.Request(webhook, data=json.dumps(payload).encode("utf-8"),
                             headers={"Content-Type": "application/json"})
try:
    resp = urllib.request.urlopen(req, timeout=15)
    print("[push] HTTP", resp.status, resp.read().decode())
except Exception as e:
    print("[push] 失败:", e); sys.exit(1)
