#!/usr/bin/env python3
# -*- coding: utf-8 -*-
from pathlib import Path
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter

ROOT = Path(__file__).resolve().parents[2]
OUT = Path(__file__).resolve().parent
W, H = 1080, 1440

FONT_BOLD = "/System/Library/Fonts/STHeiti Medium.ttc"
FONT_REG = "/System/Library/Fonts/STHeiti Light.ttc"
FONT_LATIN = "/System/Library/Fonts/HelveticaNeue.ttc"

COLORS = {
    "ink": (30, 35, 48),
    "muted": (107, 116, 132),
    "soft": (246, 247, 250),
    "line": (226, 230, 238),
    "blue": (73, 92, 224),
    "teal": (18, 150, 137),
    "coral": (218, 79, 77),
    "gold": (210, 148, 52),
    "purple": (126, 87, 194),
    "green": (56, 146, 99),
}


def font(size, bold=False, latin=False):
    path = FONT_LATIN if latin else (FONT_BOLD if bold else FONT_REG)
    return ImageFont.truetype(path, size)


def draw_gradient(draw, top=(250, 251, 253), bottom=(236, 241, 250)):
    for y in range(H):
        t = y / (H - 1)
        c = tuple(int(top[i] * (1 - t) + bottom[i] * t) for i in range(3))
        draw.line([(0, y), (W, y)], fill=c)


def add_noise(img, alpha=13):
    # deterministic paper texture
    px = img.load()
    for y in range(0, H, 2):
        for x in range(0, W, 2):
            v = ((x * 17 + y * 31) % 19) - 9
            r, g, b = px[x, y][:3]
            c = (max(0, min(255, r + v)), max(0, min(255, g + v)), max(0, min(255, b + v)))
            px[x, y] = c
    return img


def card_canvas():
    img = Image.new("RGB", (W, H), (246, 247, 250))
    d = ImageDraw.Draw(img)
    draw_gradient(d)
    add_noise(img)
    return img, ImageDraw.Draw(img)


def rounded(draw, box, radius=32, fill="white", outline=None, width=1):
    draw.rounded_rectangle(box, radius=radius, fill=fill, outline=outline, width=width)


def shadow_layer(img, box, radius=34, blur=22, offset=(0, 12), alpha=50):
    layer = Image.new("RGBA", img.size, (0, 0, 0, 0))
    ld = ImageDraw.Draw(layer)
    ox, oy = offset
    ld.rounded_rectangle((box[0] + ox, box[1] + oy, box[2] + ox, box[3] + oy),
                         radius=radius, fill=(20, 30, 60, alpha))
    layer = layer.filter(ImageFilter.GaussianBlur(blur))
    return Image.alpha_composite(img.convert("RGBA"), layer).convert("RGB")


def text(draw, xy, value, size, fill=None, bold=False, anchor=None, latin=False, spacing=8):
    draw.text(xy, value, font=font(size, bold=bold, latin=latin), fill=fill or COLORS["ink"], anchor=anchor, spacing=spacing)


def wrap(draw, value, max_width, size, bold=False):
    f = font(size, bold=bold)
    lines, cur = [], ""
    for ch in value:
        test = cur + ch
        if draw.textlength(test, font=f) <= max_width:
            cur = test
        else:
            if cur:
                lines.append(cur)
            cur = ch
    if cur:
        lines.append(cur)
    return lines


def multiline(draw, xy, value, max_width, size, fill=None, bold=False, line_gap=10):
    x, y = xy
    f = font(size, bold=bold)
    for line in wrap(draw, value, max_width, size, bold=bold):
        draw.text((x, y), line, font=f, fill=fill or COLORS["ink"])
        y += size + line_gap
    return y


def pill(draw, xy, label, color, fill=(255, 255, 255), pad_x=18, pad_y=8, size=26):
    x, y = xy
    f = font(size, bold=True)
    tw = draw.textlength(label, font=f)
    box = (x, y, x + tw + pad_x * 2, y + size + pad_y * 2)
    rounded(draw, box, radius=18, fill=fill, outline=(229, 232, 240))
    draw.ellipse((x + 13, y + 13, x + 25, y + 25), fill=color)
    draw.text((x + pad_x + 18, y + pad_y - 1), label, font=f, fill=COLORS["ink"])
    return box[2]


def paste_screenshot(base, path, box, radius=30):
    src = Image.open(path).convert("RGB")
    bw, bh = box[2] - box[0], box[3] - box[1]
    src.thumbnail((bw, bh), Image.LANCZOS)
    canvas = Image.new("RGB", (bw, bh), (255, 255, 255))
    x = (bw - src.width) // 2
    y = (bh - src.height) // 2
    canvas.paste(src, (x, y))
    mask = Image.new("L", (bw, bh), 0)
    md = ImageDraw.Draw(mask)
    md.rounded_rectangle((0, 0, bw, bh), radius=radius, fill=255)
    base.paste(canvas, (box[0], box[1]), mask)


def header(draw, index, kicker="AI INTEL WORKBENCH"):
    text(draw, (72, 72), kicker, 24, COLORS["muted"], bold=True, latin=True)
    text(draw, (1008, 72), f"{index:02d}/05", 24, COLORS["muted"], bold=True, anchor="ra", latin=True)
    draw.line((72, 118, 1008, 118), fill=(224, 229, 238), width=2)


def footer(draw, label="weishao831/ai-intel-workbench"):
    text(draw, (72, 1352), label, 27, COLORS["muted"], latin=True)
    draw.line((72, 1322, 1008, 1322), fill=(224, 229, 238), width=2)


def card1():
    img, d = card_canvas()
    header(d, 1)
    text(d, (72, 192), "我搭了一个", 58, bold=True)
    text(d, (72, 270), "AI 资讯工作台", 88, COLORS["blue"], bold=True)
    multiline(d, (76, 402), "每天自动追行业动态、KOL 观点、论文和开源项目。", 760, 38, COLORS["ink"], bold=True, line_gap=14)
    for i, (label, color) in enumerate([
        ("行业动态", COLORS["blue"]), ("KOL观点", COLORS["teal"]),
        ("前沿论文", COLORS["coral"]), ("开源项目", COLORS["gold"]),
        ("Webhook推送", COLORS["purple"]),
    ]):
        row = i // 2
        col = i % 2
        pill(d, (78 + col * 300, 570 + row * 74), label, color, size=28)
    box = (90, 835, 990, 1245)
    shadow = shadow_layer(img, box, radius=42, blur=26, offset=(0, 18), alpha=62)
    img.paste(shadow)
    d = ImageDraw.Draw(img)
    rounded(d, box, radius=42, fill=(255, 255, 255), outline=(220, 225, 235), width=2)
    paste_screenshot(img, ROOT / "assets/screenshots/dashboard-zh.png", (112, 858, 968, 1222), radius=28)
    text(d, (106, 770), "把碎片信息变成每天可回看的情报库", 36, COLORS["ink"], bold=True)
    footer(d)
    return img


def card2():
    img, d = card_canvas()
    header(d, 2)
    text(d, (72, 176), "一个可视化", 62, bold=True)
    text(d, (72, 252), "本地 Web 看板", 72, COLORS["teal"], bold=True)
    multiline(d, (76, 358), "不用在不同网站之间反复刷，热点、维度、历史归档都在一页。", 840, 34, COLORS["ink"], line_gap=12)
    box = (64, 515, 1016, 1064)
    img = shadow_layer(img, box, radius=40, blur=25, offset=(0, 16), alpha=58)
    d = ImageDraw.Draw(img)
    rounded(d, box, radius=40, fill=(255, 255, 255), outline=(219, 225, 235), width=2)
    paste_screenshot(img, ROOT / "assets/screenshots/dashboard-zh.png", (86, 538, 994, 1042), radius=30)
    callouts = [
        ((92, 1108), "今日热点", COLORS["coral"]),
        ((315, 1108), "五大维度", COLORS["blue"]),
        ((538, 1108), "星标收藏", COLORS["gold"]),
        ((761, 1108), "历史归档", COLORS["teal"]),
    ]
    for xy, label, color in callouts:
        rounded(d, (xy[0], xy[1], xy[0] + 185, xy[1] + 82), radius=24, fill=(255, 255, 255), outline=(223, 228, 237))
        d.ellipse((xy[0] + 18, xy[1] + 28, xy[0] + 38, xy[1] + 48), fill=color)
        text(d, (xy[0] + 50, xy[1] + 24), label, 28, COLORS["ink"], bold=True)
    footer(d)
    return img


def card3():
    img, d = card_canvas()
    header(d, 3)
    text(d, (72, 176), "每天重点看什么？", 66, bold=True)
    text(d, (76, 272), "不追全网噪音，只抓高价值信号", 36, COLORS["muted"], bold=True)
    items = [
        ("AI 大厂动态", "模型、产品、监管、人才流动", COLORS["blue"]),
        ("典型 KOL 观点", "圈内真实讨论和争议", COLORS["teal"]),
        ("前沿论文", "新方法、新基准、新方向", COLORS["coral"]),
        ("开源项目", "GitHub 热点与潜力项目", COLORS["gold"]),
        ("AI + 金融 / 加密", "交易、投研、钱包、预测市场", COLORS["purple"]),
    ]
    y = 388
    for idx, (title, desc, color) in enumerate(items, start=1):
        box = (76, y, 1004, y + 142)
        rounded(d, box, radius=32, fill=(255, 255, 255), outline=(224, 229, 238), width=2)
        d.rounded_rectangle((104, y + 34, 168, y + 98), radius=18, fill=color)
        text(d, (136, y + 50), f"{idx}", 33, (255, 255, 255), bold=True, anchor="ma", latin=True)
        text(d, (200, y + 30), title, 38, COLORS["ink"], bold=True)
        text(d, (200, y + 84), desc, 30, COLORS["muted"])
        y += 164
    text(d, (78, 1246), "每条信息保留来源、日期和维度，方便回看。", 34, COLORS["ink"], bold=True)
    footer(d)
    return img


def card4():
    img, d = card_canvas()
    header(d, 4)
    text(d, (72, 176), "Agent 怎么跑起来？", 64, bold=True)
    text(d, (76, 266), "一句自然语言，也能完成初始化和定时任务", 34, COLORS["muted"], bold=True)
    steps = [
        ("定义关注行业", "AI+加密 / AI+金融 / 自定义"),
        ("Agent 每日调研", "按信源、KOL、论文、开源项目并行收集"),
        ("写入 digest", "结构化保存到本地 data/"),
        ("刷新 Web 看板", "按日期归档，可搜索、可星标"),
        ("Webhook 推送", "配置后推到 Lark / 飞书机器人"),
    ]
    y = 420
    colors = [COLORS["blue"], COLORS["teal"], COLORS["coral"], COLORS["gold"], COLORS["purple"]]
    for i, (title, desc) in enumerate(steps):
        cx, cy = 118, y + 42
        d.line((cx, cy + 48, cx, cy + 142), fill=(205, 214, 228), width=4)
        d.ellipse((cx - 34, cy - 34, cx + 34, cy + 34), fill=colors[i])
        text(d, (cx, cy - 18), str(i + 1), 32, (255, 255, 255), bold=True, anchor="ma", latin=True)
        rounded(d, (178, y, 1000, y + 112), radius=28, fill=(255, 255, 255), outline=(224, 229, 238), width=2)
        text(d, (216, y + 22), title, 36, COLORS["ink"], bold=True)
        text(d, (216, y + 72), desc, 28, COLORS["muted"])
        y += 154
    text(d, (76, 1236), "支持：Agent 自己的每日任务 / 本地 launchd / cron", 33, COLORS["ink"], bold=True)
    footer(d)
    return img


def card5():
    img, d = card_canvas()
    header(d, 5)
    text(d, (72, 176), "已经整理成", 58, bold=True)
    text(d, (72, 252), "开源工作流", 84, COLORS["gold"], bold=True)
    multiline(d, (76, 370), "你可以改行业、改语言、改推送机器人，也可以只当本地看板用。", 850, 36, COLORS["ink"], bold=True, line_gap=12)
    rounded(d, (76, 558, 1004, 830), radius=38, fill=(255, 255, 255), outline=(222, 228, 238), width=2)
    text(d, (120, 610), "GitHub", 34, COLORS["muted"], bold=True, latin=True)
    text(d, (120, 682), "weishao831/ai-intel-workbench", 42, COLORS["blue"], bold=True, latin=True)
    text(d, (120, 760), "Local-first · Agent-ready · Webhook-ready", 28, COLORS["muted"], latin=True)
    grid = [
        ("行业锚定", "AI+任何方向", COLORS["blue"]),
        ("多语言", "中文 / English / bilingual", COLORS["teal"]),
        ("定时任务", "每天自动运行", COLORS["coral"]),
        ("推送服务", "Webhook 地址即可", COLORS["purple"]),
    ]
    y = 910
    for i, (title, desc, color) in enumerate(grid):
        x = 76 + (i % 2) * 464
        yy = y + (i // 2) * 150
        rounded(d, (x, yy, x + 432, yy + 120), radius=30, fill=(255, 255, 255), outline=(224, 229, 238), width=2)
        d.ellipse((x + 30, yy + 34, x + 58, yy + 62), fill=color)
        text(d, (x + 78, yy + 25), title, 32, COLORS["ink"], bold=True)
        text(d, (x + 78, yy + 72), desc, 24, COLORS["muted"])
    text(d, (76, 1256), "给 Agent 一个固定工作流，让每天的信息自动沉淀。", 32, COLORS["ink"], bold=True)
    footer(d)
    return img


def main():
    cards = [card1(), card2(), card3(), card4(), card5()]
    for i, img in enumerate(cards, start=1):
        img.save(OUT / f"xhs_ai_intel_workbench_{i:02d}.png", optimize=True)
        print(OUT / f"xhs_ai_intel_workbench_{i:02d}.png")


if __name__ == "__main__":
    main()
