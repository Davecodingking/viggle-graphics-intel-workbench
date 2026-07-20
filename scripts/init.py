#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""AI 每日情报工作台 · 初始化向导（一键部署用）。"""
import os, sys, re

from profiles import available_profiles, load_profile

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
INDUSTRIES = {
    "ai-crypto": "AI+加密", "ai-finance": "AI+金融", "ai-healthcare": "AI+医疗",
    "ai-legal": "AI+法律", "ai-education": "AI+教育", "ai-robotics": "AI+机器人",
    "ai-gaming": "AI+游戏", "ai-general": "AI通用",
}
LANGUAGES = {
    "zh": "简体中文",
    "en": "English",
    "bilingual": "简体中文 + English",
}

def get_arg(name, default=None):
    flag = "--" + name
    if flag in sys.argv:
        i = sys.argv.index(flag)
        if i + 1 < len(sys.argv):
            return sys.argv[i + 1]
    return default

def ask(prompt, default=""):
    try:
        v = input(prompt + (" [%s]" % default if default else "") + ": ").strip()
    except EOFError:
        v = ""
    return v or default

interactive = not any(a.startswith("--") for a in sys.argv[1:])
dry = "--dry-run" in sys.argv

print("=== AI 每日情报工作台 · 初始化向导 ===\n")
profile = get_arg("profile") or (ask("情报 profile (%s)" % "/".join(available_profiles()), "viggle-graphics") if interactive else "viggle-graphics")
try:
    profile_meta = load_profile(profile)
except ValueError as exc:
    raise SystemExit(str(exc))
workspace = get_arg("workspace") or (ask("工作区目录(数据/配置存放处)", ROOT) if interactive else ROOT)
bot = get_arg("bot") or (ask("推送机器人 (lark/feishu/dingtalk/wecom/slack/none)", "lark") if interactive else "lark")
webhook = get_arg("webhook") or (ask("机器人 webhook 地址", "") if (interactive and bot != "none") else "")
port = get_arg("port") or (ask("本地工作台端口", "4318") if interactive else "4318")
schedule_time = get_arg("schedule-time") or (ask("每日定时运行时间 HH:MM", "08:30") if interactive else "08:30")
agent_command = get_arg("agent-command") or (ask("可选 agent 命令(留空则只生成调研提示)", "") if interactive else "")
language = get_arg("language") or (ask("产出语言 (zh/en/bilingual)", "zh") if interactive else "zh")
if language not in LANGUAGES:
    language = "zh"
if interactive and profile == "general-ai":
    print("\n可锚定行业:", "  ".join("%s(%s)" % (k, v) for k, v in INDUSTRIES.items()))
anchors_arg = get_arg("anchors")
anchors = anchors_arg or (ask("你的行业锚定(逗号分隔可多选)", "ai-crypto,ai-finance") if (interactive and profile == "general-ai") else "ai-crypto,ai-finance")
anchors_list = [a.strip() for a in anchors.split(",") if a.strip() in INDUSTRIES] or ["ai-general"]

print("\n--- 将写入 ---")
print("  工作区 :", workspace)
print("  Profile :", "%s (%s)" % (profile, profile_meta.get("label_zh", "")))
print("  机器人 :", bot, "|", (webhook[:50] + "..." if webhook else "(无)"))
if profile == "general-ai":
    print("  行业锚定:", ", ".join("%s(%s)" % (a, INDUSTRIES[a]) for a in anchors_list))
else:
    print("  行业锚定: 由 profile 管理；原 general-ai anchors 保持不变")
print("  本地端口:", port)
print("  定时运行:", schedule_time)
print("  产出语言:", "%s(%s)" % (language, LANGUAGES[language]))
print("  agent命令:", agent_command or "(无，运行时生成 research_prompt.md)")
if profile == "general-ai":
    print("  影响    : 行业关键词/重点维度/额外信源会注入每日调研(见 config/industry.yaml usage)")
else:
    print("  影响    : 主题维度、来源与研究规则由当前 profile 管理")

if dry:
    print("\n[dry-run] 未写入任何文件。去掉 --dry-run 即实际写入。")
    sys.exit(0)

# 1) 建目录骨架
for d in ["config", "data", "docs", "scripts"]:
    os.makedirs(os.path.join(workspace, d), exist_ok=True)

# 2) 仅 general-ai profile 写 industry.yaml 的 anchors；其它 profile 不触碰原作者配置
ind = os.path.join(workspace, "config", "industry.yaml")
if profile == "general-ai" and os.path.exists(ind):
    txt = open(ind, encoding="utf-8").read()
    new_block = "anchors:\n" + "".join("  - %s\n" % a for a in anchors_list)
    txt2 = re.sub(r'(?m)^anchors:\n(?:\s*-\s*\S+\n)+', new_block, txt, count=1)
    open(ind, "w", encoding="utf-8").write(txt2)
    print("\n✓ 已更新 config/industry.yaml → anchors =", anchors_list)
elif profile == "general-ai":
    print("\n! 未找到 config/industry.yaml（请确保工作台模板完整）")

# 3) 写 push.yaml
push = os.path.join(workspace, "config", "push.yaml")
if bot != "none" and os.path.exists(push):
    txt = open(push, encoding="utf-8").read()
    txt = re.sub(r'(?m)^enabled:.*$', "enabled: true", txt, count=1)
    txt = re.sub(r'(?m)^bot_type:.*$', "bot_type: " + bot, txt, count=1)
    if webhook:
        txt = re.sub(r'(?m)^webhook:.*$', "webhook: " + webhook, txt, count=1)
    open(push, "w", encoding="utf-8").write(txt)
    print("✓ 已更新 config/push.yaml → bot=%s" % bot + (", webhook 已设" if webhook else ""))
elif bot == "none" and os.path.exists(push):
    txt = re.sub(r'(?m)^enabled:.*$', "enabled: false", open(push, encoding="utf-8").read(), count=1)
    open(push, "w", encoding="utf-8").write(txt)
    print("✓ 已在 config/push.yaml 关闭推送")

# 4) 写 runtime.yaml
runtime = os.path.join(workspace, "config", "runtime.yaml")
runtime_txt = """# ============================================================
# 运行配置 runtime.yaml —— 本地运行、agent 命令、服务端口、定时任务
# ============================================================
workspace: {workspace}
server_host: 127.0.0.1
server_port: {port}
agent_command: {agent_command}
output_language: {language}
active_profile: {profile}
schedule_time: "{schedule_time}"
schedule_push: {schedule_push}
provider_default: public-web
""".format(
    workspace=workspace,
    port=port,
    agent_command=agent_command,
    language=language,
    profile=profile,
    schedule_time=schedule_time,
    schedule_push="true" if bot != "none" and bool(webhook) else "false",
)
open(runtime, "w", encoding="utf-8").write(runtime_txt)
print("✓ 已更新 config/runtime.yaml")

print("\n🎉 初始化完成！")
print("   查看工作台：python3 scripts/serve.py --port %s" % port)
print("   每天运行：python3 scripts/run_daily.py --date today --profile %s" % profile)
print("   安装定时：python3 scripts/install_schedule.py install --time %s" % schedule_time)
print("   换 profile/语言：改 config/runtime.yaml，或重跑本向导。")
