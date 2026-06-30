#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""Install, uninstall, and inspect local schedules for the workbench."""

import argparse
import os
import platform
import subprocess
import sys
from pathlib import Path

from common import ROOT, read_text, write_text

LABEL = "com.daily-intelligence-workbench"
MARKER = "# daily-intelligence-workbench"


def parse_time(value):
    parts = value.split(":")
    if len(parts) != 2:
        raise SystemExit("--time 应为 HH:MM")
    hour, minute = int(parts[0]), int(parts[1])
    if not (0 <= hour <= 23 and 0 <= minute <= 59):
        raise SystemExit("--time 应为 HH:MM")
    return hour, minute


def command_args(push):
    args = [sys.executable, str(ROOT / "scripts" / "run_daily.py"), "--date", "today"]
    if push:
        args.append("--push")
    return args


def install_launchd(time_value, push):
    hour, minute = parse_time(time_value)
    logs = ROOT / ".daily-intel" / "logs"
    logs.mkdir(parents=True, exist_ok=True)
    plist = Path.home() / "Library" / "LaunchAgents" / (LABEL + ".plist")
    args_xml = "\n".join("    <string>%s</string>" % a for a in command_args(push))
    content = """<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN"
 "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
  <key>Label</key>
  <string>{label}</string>
  <key>WorkingDirectory</key>
  <string>{root}</string>
  <key>ProgramArguments</key>
  <array>
{args_xml}
  </array>
  <key>StartCalendarInterval</key>
  <dict>
    <key>Hour</key>
    <integer>{hour}</integer>
    <key>Minute</key>
    <integer>{minute}</integer>
  </dict>
  <key>StandardOutPath</key>
  <string>{out_log}</string>
  <key>StandardErrorPath</key>
  <string>{err_log}</string>
</dict>
</plist>
""".format(
        label=LABEL,
        root=ROOT,
        args_xml=args_xml,
        hour=hour,
        minute=minute,
        out_log=logs / "schedule.out.log",
        err_log=logs / "schedule.err.log",
    )
    write_text(plist, content)
    subprocess.call(["launchctl", "unload", str(plist)], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    rc = subprocess.call(["launchctl", "load", str(plist)])
    print("[schedule] launchd plist:", plist)
    print("[schedule] launchctl load rc=%s" % rc)
    return rc


def uninstall_launchd():
    plist = Path.home() / "Library" / "LaunchAgents" / (LABEL + ".plist")
    subprocess.call(["launchctl", "unload", str(plist)], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    if plist.exists():
        plist.unlink()
        print("[schedule] 已删除", plist)
    else:
        print("[schedule] 未找到", plist)


def status_launchd():
    plist = Path.home() / "Library" / "LaunchAgents" / (LABEL + ".plist")
    print("[schedule] platform=macOS")
    print("[schedule] plist=%s exists=%s" % (plist, plist.exists()))
    if plist.exists():
        print(read_text(plist))


def install_cron(time_value, push):
    hour, minute = parse_time(time_value)
    cmd = " ".join(command_args(push))
    line = "%d %d * * * cd %s && %s %s" % (minute, hour, ROOT, cmd, MARKER)
    current = subprocess.run(["crontab", "-l"], text=True, capture_output=True)
    lines = [] if current.returncode != 0 else current.stdout.splitlines()
    lines = [l for l in lines if MARKER not in l]
    lines.append(line)
    proc = subprocess.run(["crontab", "-"], input="\n".join(lines) + "\n", text=True)
    print("[schedule] crontab line:", line)
    return proc.returncode


def uninstall_cron():
    current = subprocess.run(["crontab", "-l"], text=True, capture_output=True)
    if current.returncode != 0:
        print("[schedule] 当前无 crontab")
        return
    lines = [l for l in current.stdout.splitlines() if MARKER not in l]
    subprocess.run(["crontab", "-"], input="\n".join(lines) + "\n", text=True)
    print("[schedule] 已移除 crontab 标记行")


def status_cron():
    current = subprocess.run(["crontab", "-l"], text=True, capture_output=True)
    print("[schedule] platform=%s" % platform.system())
    if current.returncode != 0:
        print("[schedule] 当前无 crontab")
        return
    for line in current.stdout.splitlines():
        if MARKER in line:
            print(line)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("action", choices=["install", "uninstall", "status"])
    parser.add_argument("--time", default="08:30", help="Daily run time HH:MM")
    parser.add_argument("--push", action="store_true", help="Run push_lark.py after validation")
    args = parser.parse_args()

    is_macos = platform.system() == "Darwin"
    if args.action == "install":
        return install_launchd(args.time, args.push) if is_macos else install_cron(args.time, args.push)
    if args.action == "uninstall":
        return uninstall_launchd() if is_macos else uninstall_cron()
    return status_launchd() if is_macos else status_cron()


if __name__ == "__main__":
    sys.exit(main())
