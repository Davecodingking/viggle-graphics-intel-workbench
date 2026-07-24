# AI 每日情报工作台

[English](README.md) | [中文](README.zh-CN.md)

本项目是一个**本地优先、可开源安装部署**的每日 AI 行业情报工作台。它把配置化信源、X-first KOL 追踪、行业锚定、Agent 调研、结构化 digest、本地 HTML 工作台、机器人推送和本地定时任务串成一套可复用流程。

当前默认启用 `viggle-graphics` profile，面向视频生成、人物动画、3D 重建、世界引擎、图形学与 3D/4D、推理系统/GPU Pipeline、评测安全和产业生态。`graphics` 维度进一步覆盖 SfM/MVS/SLAM、前馈几何基础模型、静态/动态场景重建，以及可持久、可导航、可编辑、可交互并可接渲染或物理引擎的世界模型。原作者的泛 AI 工作流完整保留为 `general-ai`，原有 sources、keywords、KOL 和 radar 配置不删不改。另有独立的 `investing-markets`，覆盖 A 股、港股和美股的公告优先型投资研究。

只要你的 Agent 具备读取 skill/说明文档、运行本地脚本、设置或触发定时任务的能力，就可以使用这个仓库完成初始化、每日调研、看板更新和可选机器人推送。

![中文看板](assets/screenshots/dashboard-zh.png)

适用环境：

- Codex：作为本地 plugin 使用，读取 `.codex-plugin/plugin.json` 与 `skills/`。
- Claude Code：作为本地仓库/skill 工作流使用，读取 `CLAUDE.md` 与 `skills/daily-intelligence-workbench/SKILL.md`。
- 普通本地运行：只依赖 Python 3 标准库即可打开工作台、校验数据、推送和设置定时任务。

> 开源默认不内置任何个人 webhook、cookie、token 或账号态。X/Twitter 登录态、API Key、推送机器人都由用户本地自行配置。

> 默认配置已内置 `config/kol.yaml` 作为初始 KOL 池，共 59 人，覆盖 AI 研究者、大厂负责人/研究员、AI 工程与 Agent、开源与模型、评测安全、AI x Crypto 和中文 AI 圈。你可以直接用它启动，也可以按自己的领域增删。

> 2026-07-09 起新增 `config/research_radar.yaml`：每日调研会优先扫描研究员 X Article / 长文、Anthropic Research、OpenAI Research / Alignment、DeepSeek、Kimi/Moonshot、Z.ai/智谱、Qwen 等官方研究页、模型卡和技术报告，避免只靠普通新闻或 GitHub Trending 漏掉高价值研究。

---

## 目录结构

```text
ai-intel-workbench/
├── .codex-plugin/plugin.json              # Codex plugin 元数据
├── AGENTS.md                              # Codex 仓库内协作说明
├── CLAUDE.md                              # Claude Code 仓库内协作说明
├── index.html                             # 零依赖本地 HTML 工作台
├── config/
│   ├── industry.yaml                      # 行业锚定：AI+加密 / AI+金融 / 自定义
│   ├── sources.yaml                       # 信源配置
│   ├── keywords.yaml                      # 搜索词与噪音过滤
│   ├── kol.yaml                           # KOL 名单
│   ├── research_radar.yaml                # 研究员长文/官方研究/国产模型/金融量化 Agent 雷达
│   ├── push.yaml                          # Lark/飞书等机器人配置
│   ├── runtime.yaml                       # 本地端口、agent 命令、定时配置
│   ├── profiles/general-ai/profile.json   # 原作者工作流映射
│   ├── profiles/viggle-graphics/          # Viggle 图形学 profile 与独立 YAML 配置
│   ├── profiles/investing-markets/         # A 股/港股/美股投资研究 profile
│   └── secrets.example.env                # 本地密钥示例，不提交真实 secrets
├── data/
│   ├── manifest.js                        # 历史 digest 清单
│   └── 2026/06/29/digest.js               # 内置样例数据，可 smoke test
├── docs/
│   └── 调研方法论与Loop设计.md
├── scripts/
│   ├── init.py                            # 初始化向导
│   ├── run_daily.py                       # 每日运行入口
│   ├── validate_digest.py                 # digest 校验
│   ├── serve.py                           # 本地静态服务
│   ├── push_lark.py                       # Lark/飞书推送
│   └── install_schedule.py                # launchd / cron 定时任务
└── skills/
    └── daily-intelligence-workbench/      # Codex / Claude Code 可读 skill
```

---

## 快速开始

```bash
git clone https://github.com/Davecodingking/viggle-graphics-intel-workbench.git
cd viggle-graphics-intel-workbench

# 1. 初始化默认 Viggle 图形学 profile
python3 scripts/init.py --profile viggle-graphics

# 临时切回原作者工作流；只有该 profile 使用行业 anchors
python3 scripts/init.py --profile general-ai --anchors ai-crypto,ai-finance --language zh --bot none

# 使用独立的投资与股票 profile
python3 scripts/init.py --profile investing-markets --language zh --bot none

# 2. 打开本地工作台
python3 scripts/serve.py --port 4318
# 浏览器访问 http://127.0.0.1:4318/

# 3. 校验内置样例
python3 scripts/validate_digest.py --date latest --profile viggle-graphics

# 4. 生成今天的调研任务
python3 scripts/run_daily.py --date today --profile viggle-graphics
```

如果没有配置 agent 命令，`run_daily.py` 会生成：

```text
.daily-intel/runs/YYYY-MM-DD/research_prompt.md
```

把这个 prompt 交给 Codex 或 Claude Code 执行，它会按 skill 说明完成调研，并用 canonical JSON 写回 `digest.js`。

## Profile 与论文检索

Profile 解析顺序为：CLI `--profile` → `config/runtime.yaml` 的 `active_profile` → `general-ai` 兼容默认。v1 每次只运行一个 profile。

网页顶部可在“图形学”“原版 AI＋金融”和“投资与股票”之间切换。切换后会打开该 profile 的最新 digest，并将历史归档、近期高频和收藏范围限定到当前 profile。`data/manifest.js` 的每条记录都带有 `profile`；没有该字段的旧记录自动按 `general-ai` 读取。新数据写入 `data/年/月/日/<profile>/digest.js`，因此同一天可以保存三份简报，旧路径继续兼容。

`investing-markets` 使用市场与宏观、公司与基本面、财报/公告/催化剂、估值与情景、风险与组合五个维度。它优先读取巨潮资讯/交易所、HKEXnews、SEC EDGAR、公司 IR、央行和统计机构，输出逻辑、证据、风险、证伪条件与观察触发器；不自动下单，也不构成个性化投资建议。

原版的“AI × 金融”并不是普通荐股栏目。它关注 AI 如何进入投研、量化、交易、支付、风控和监管，也观察芯片、算力与 AI 产品变化如何传导到上市公司和市场。默认保留原作者的栏目和来源结构，内容只用于技术与产业情报，不构成投资建议。

`viggle-graphics` 使用五个主题维度：`video`、`graphics`、`systems`、`eval`、`ecosystem`。论文不是单独维度，而是可跨主题筛选的 `content_type: paper`；看板可切换 All、Papers、Technical Reports、Repos/Models、News 和 KOL。

论文雷达按节奏分层：每日扫描 arXiv `cs.CV/cs.GR/cs.LG`、官方研究页、项目页和 Hugging Face；每周或会期关注 CVPR、ICCV、ECCV、SIGGRAPH、SIGGRAPH Asia、TOG、ICLR、NeurIPS、ICML、MLSys、OSDI、NSDI、SOSP、ACM MM；每月或关键词触发时追踪 TPAMI、IJCV、TVCG、TMM、Computer Graphics Forum。TVCG 重点看 VR/AR、交互式 3D、Scientific Visualization 和可视化系统。

具体源、关键词与“问题 × 方法 × 工程约束”查询矩阵位于 `config/profiles/viggle-graphics/`。

## 如何测试

### 1. 运行自动测试（不会写入正式历史）

```bash
python3 -m unittest discover -s tests -v
python3 -m py_compile scripts/*.py
```

预期结果是全部测试显示 `ok`，最后输出 `OK`。

### 2. 验证旧 digest 兼容性

```bash
python3 scripts/validate_digest.py --date 2026-06-29 --profile general-ai
python3 scripts/validate_digest.py --date latest
```

两条命令都应以 `[validate] OK` 结束。第一条专门验证原作者旧版 digest；第二条验证当前 manifest 中的最新版。

### 3. 在临时副本中查看 Viggle 动态看板

下面的命令只修改系统临时目录，不会向本仓库的正式 `data/` 写入样例：

```bash
TMP_DIR="$(mktemp -d)"
rsync -a --exclude .git --exclude .daily-intel ./ "$TMP_DIR/ai-intel-workbench/"
cd "$TMP_DIR/ai-intel-workbench"

python3 scripts/run_daily.py \
  --date 2026-07-20 \
  --profile viggle-graphics \
  --from-json tests/fixtures/viggle_digest.json

python3 scripts/serve.py --port 4319
```

浏览器打开 `http://127.0.0.1:4319/`，然后检查：

- 左侧显示 video、graphics、systems、eval、ecosystem 五个动态主题。
- 顶部 Papers 筛选后只剩三条论文样例。
- ZH / EN 能切换界面语言。
- 点击热点能看到四条关联内容。
- 论文详情能看到 venue、方法、证据、局限、与 Viggle 的关系和建议实验。
- 历史归档可以切换到 `2026-06-29`，旧条目仍能打开和收藏。

测试结束后在终端按 `Ctrl+C` 停止本地服务。

### 4. 测试真实每日入口

```bash
python3 scripts/run_daily.py --date today --profile viggle-graphics
```

如果尚未配置 `agent_command`，命令不会伪造资讯，而会在 `.daily-intel/runs/YYYY-MM-DD/research_prompt.md` 生成当日调研任务。推送和定时任务不会因为上述测试自动启用。

---

## Codex 使用方式

仓库已经包含 Codex plugin 元数据：

```text
.codex-plugin/plugin.json
skills/daily-intelligence-workbench/SKILL.md
```

本地开发时，可把整个仓库作为 local plugin 源安装到 Codex；也可以在 Codex 中直接打开本目录工作。触发语示例：

- 初始化每日资讯工作台
- 帮我关注 AI+加密和 AI+金融，每天 08:30 自动生成每日情报
- 初始化这个工作台，输出英文，不推送，先每天早上生成本地看板
- 生成今天的 AI 情报 digest
- 帮我安装每日定时任务
- 配置 X/Twitter 采集 provider

Codex agent 应先读取 `skills/daily-intelligence-workbench/SKILL.md`，再执行脚本。

### 直接用自然语言初始化

你不需要手动记所有 Python 命令，也可以直接对 Agent 说：

```text
帮我初始化每日资讯工作台，关注 AI+加密和 AI+金融，产出中文；如果没有推送机器人，就先只更新本地看板；每天早上 08:30 自动运行。
```

或：

```text
Set up AI Intel Workbench for AI + finance, English output, no push yet, and schedule your daily run at 08:30.
```

Agent 应该读取 skill 后自动完成：初始化配置、写入行业锚定、设置产出语言、判断是否启用推送，并在支持 agent 原生定时任务的环境中创建自己的每日任务；若当前 Agent 没有原生定时能力，则使用 `scripts/install_schedule.py` 安装本地 launchd / cron 定时任务。

---

## Claude Code 使用方式

Claude Code 可直接在仓库根目录工作：

```bash
cd ai-intel-workbench
claude
```

然后让 Claude Code 读取：

```text
CLAUDE.md
skills/daily-intelligence-workbench/SKILL.md
docs/调研方法论与Loop设计.md
```

也可以在 `config/runtime.yaml` 里配置定时调用的 agent 命令，例如：

```yaml
agent_command: claude -p "$(cat {prompt})"
```

其中占位符：

- `{date}`：当天日期，格式 `YYYY-MM-DD`
- `{root}`：工作台根目录
- `{prompt}`：`run_daily.py` 生成的调研提示文件

---

## 产出语言

初始化时可选择 digest 的用户可见语言：

```bash
python3 scripts/init.py --language zh
python3 scripts/init.py --language en
python3 scripts/init.py --language bilingual
```

也可以编辑 `config/runtime.yaml`：

```yaml
output_language: zh        # zh | en | bilingual
```

运行时可临时覆盖：

```bash
python3 scripts/run_daily.py --date today --language en
```

## 研究雷达与长文详情

普通热点搜索容易漏掉两类内容：一类是 Anthropic / OpenAI 研究员发在 X Article 或个人账号里的长文，另一类是 DeepSeek、Kimi、智谱等国产实验室发在 Hugging Face / GitHub / 项目页里的模型卡和技术报告。

为了解决这个问题，工作流新增 `config/research_radar.yaml`：

- `researcher_longform_watchlist`：研究员长文/X Article，例如 Anthropic Claude Code 相关研究员。
- `lab_research_watchlist`：Anthropic Research、OpenAI Research、OpenAI Alignment、Google DeepMind Research。
- `chinese_frontier_lab_watchlist`：DeepSeek、Kimi/Moonshot、Z.ai/GLM、Qwen。
- `open_source_finance_quant_watchlist`：金融 Agent、量化 Agent、AI 投研、回测/交易所/券商接口类开源项目。

长文或技术报告入选时，应设置：

```json
{
  "content_type": "x_article",
  "depth": "deep",
  "key_points": [],
  "examples": [],
  "product_implications": [],
  "limitations": []
}
```

`detail` 不再只写短摘要，而应尽量让用户在工作台里了解原文的核心逻辑、案例、价值和边界。

语言含义：

- `zh`：简体中文输出，技术术语、公司名、项目名、URL 保留原文。
- `en`：英文输出，来源名、项目名、ticker、URL 保留原文。
- `bilingual`：中文优先，标题和关键摘要可补简短英文对照。

---

## X/Twitter 数据源设计

开源版不默认依赖某个用户的 Chrome 登录态。

KOL 观点维度采用 X-first：优先从 `config/kol.yaml` 的 handle 出发，检索公开 `x.com/.../status/...`、公开 profile、已配置 X provider 和 Gate-News `news_feed_search_x`，再 fallback 到 newsletter / blog / 媒体聚合。校验脚本会输出 `kol_x_sources`，用于发现 KOL 维度是否又退回二手来源。

默认 provider：

- 公共网页搜索发现 URL
- 官方博客 / arXiv / GitHub / HuggingFace / 媒体源
- 公开 X status 页面
- 公开 X profile 页面

可选 provider：

- 用户本地 Chrome/浏览器扩展，复用用户自己的登录态
- X API 或第三方数据 API
- Gate-News MCP，尤其是 `news_feed_search_x`，用于 X/Twitter 讨论聚合和可用时的推文级证据
- 用户导出的 CSV/JSON/bookmarks

安全原则：

- 不读取、不导出、不提交 cookie / localStorage / session token。
- 不关注、不点赞、不发帖、不私信、不绕过 CAPTCHA 或安全拦截。
- 不承诺“防封”；只做低频、只读、用户自带凭证的本地采集。

详见 `skills/daily-intelligence-workbench/references/source-providers.md`。

---

## 每日运行

### 只生成调研提示

```bash
python3 scripts/run_daily.py --date today
```

### 从 canonical JSON 写入 digest

```bash
python3 scripts/run_daily.py --date 2026-06-30 --from-json /path/to/digest.json
python3 scripts/validate_digest.py --date 2026-06-30
```

### 用内置样例做 smoke test

```bash
python3 scripts/run_daily.py --date today --sample
```

### 生成后推送

先配置 `config/push.yaml`，或使用环境变量/命令行临时传入 webhook：

```bash
export DAILY_INTEL_LARK_WEBHOOK="https://open.larksuite.com/open-apis/bot/v2/hook/xxx"
python3 scripts/run_daily.py --date today --push

# 或单独推送某天
python3 scripts/push_lark.py "https://open.larksuite.com/open-apis/bot/v2/hook/xxx" 2026/06/29
```

也可以在本机 `config/secrets.env` 或环境变量中配置多个机器人，真实 webhook 不进仓库：

```bash
DAILY_INTEL_LARK_WEBHOOK_1=https://open.larksuite.com/open-apis/bot/v2/hook/xxx
DAILY_INTEL_LARK_WEBHOOK_2=https://open.larksuite.com/open-apis/bot/v2/hook/yyy

python3 scripts/push_lark.py 2026/06/29 --dry-run
```

---

## 安装定时任务

macOS 使用 LaunchAgent，Linux 使用 crontab。

```bash
# 每天 08:30 运行，不推送
python3 scripts/install_schedule.py install --time 08:30

# 每天 08:30 运行并推送
python3 scripts/install_schedule.py install --time 08:30 --push

# 查看状态
python3 scripts/install_schedule.py status

# 卸载
python3 scripts/install_schedule.py uninstall
```

定时任务会调用：

```bash
python3 scripts/run_daily.py --date today
```

若 `config/runtime.yaml` 或环境变量配置了 `agent_command`，会自动把 research prompt 交给该命令执行。

---

## 配置

### 行业锚定

编辑 `config/industry.yaml`：

```yaml
anchors:
  - ai-crypto
  - ai-finance
```

可改为：

```yaml
anchors:
  - ai-healthcare
  - ai-robotics
```

### 推送机器人

编辑 `config/push.yaml`：

```yaml
enabled: true
bot_type: lark
webhook: https://open.larksuite.com/open-apis/bot/v2/hook/xxx
```

开源提交前应保持：

```yaml
enabled: false
webhook: ""
```

### agent 命令

编辑 `config/runtime.yaml`：

```yaml
agent_command: claude -p "$(cat {prompt})"
```

或：

```yaml
agent_command: codex exec "$(cat {prompt})"
```

具体 CLI 参数以用户本机安装版本为准。

### 产出语言

编辑 `config/runtime.yaml`：

```yaml
output_language: zh
```

支持 `zh` / `en` / `bilingual`。

---

## 数据契约

新版 digest 按 Profile 写入，同一天可同时保存三份：

```text
data/YYYY/MM/DD/<profile-id>/digest.js
```

历史 `data/YYYY/MM/DD/digest.js` 仍可直接读取，无需迁移。

并更新：

```text
data/manifest.js
```

canonical JSON schema 见：

```text
skills/daily-intelligence-workbench/references/data-schema.md
```

---

## 当前路线图

- [x] 本地 HTML 工作台
- [x] 初始化配置
- [x] Lark/飞书推送
- [x] 多 Lark/飞书机器人本机私密配置
- [x] Codex plugin manifest
- [x] Claude Code / Codex skill
- [x] 本地 run / validate / serve 脚本
- [x] macOS launchd / Linux cron 定时任务
- [x] 默认 55 人 KOL 池
- [x] KOL 维度 X-first 校验
- [ ] 完整公共网页采集器
- [ ] Chrome provider 示例
- [ ] X API provider 示例
- [ ] 反馈闭环：星标数据回流调权

---

## 免责声明

本项目只做信息聚合与辅助分析，不构成投资建议。AI × 金融 / AI × 交易类内容尤其需要自行判断。每条信息应保留来源 URL、日期和可信度说明。
