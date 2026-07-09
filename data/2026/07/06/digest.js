// 当日聚合数据（由 Daily Intelligence Workbench 生成）。
window.__DAILY__ = window.__DAILY__ || {};
window.__DAILY__["2026/07/06"] = {
  "date": "2026-07-06",
  "date_cn": "2026年7月6日 · 周一",
  "generated_at": "2026-07-06T09:30:00+08:00",
  "language": "zh",
  "refresh_note": "基于公开网页与一手来源生成；KOL 维度执行 X-first，公开 X 正文抓取受限处已标注 provider 限制。",
  "market_mood": "今日主线是“agent 从能力演示进入执行治理”：大厂在推更快、更便宜、更可接入的模型，社区在补验证链，金融侧开始讨论 AI agent 的风险、权限和资本回报。",
  "dimensions": [
    {
      "key": "lab",
      "cn": "AI 大厂动态",
      "overview": "OpenAI、Anthropic、Google 的近窗发布都指向同一个方向：模型能力必须和吞吐、工具调用、多模态生成入口一起交付。",
      "notes": "以官方博客/开发者文档为主，Google 条目用官方博客与 AI Developers 文档交叉验证。"
    },
    {
      "key": "kol",
      "cn": "KOL 观点",
      "overview": "KOL 讨论集中在 loop engineering、Gemini 多模态入口、skill 选择瓶颈和 OpenClaw 治理边界。",
      "notes": "已执行 X-first：4/4 KOL 条目来自公开 X status/profile URL 或 x_src，比例 100%。当前环境公开 X status 页面正文返回空 HTML，因此正文依据 site:x.com 搜索摘要，并用官方博客/项目背景交叉验证；未使用 newsletter/blog 作为 KOL 主来源。"
    },
    {
      "key": "paper",
      "cn": "前沿论文",
      "overview": "论文侧关注模型治理、RAG 证据一致性、可验证生成和高风险场景评测。",
      "notes": "以 arXiv recent/listing 为一手来源；多为预印本或会议接收信息，结论需要后续复现。"
    },
    {
      "key": "oss",
      "cn": "开源项目",
      "overview": "开源社区今天继续围绕 coding agent 的循环、证明链和 MCP 应用做早期实验。",
      "notes": "以 Hacker News Show HN 当天条目为主，热度偏早期，已避免把低分 demo 解读为成熟趋势。"
    },
    {
      "key": "fin",
      "cn": "AI × 金融",
      "overview": "AI × 金融同时出现监管风险、agentic commerce 基础设施和资本市场回报率三条线。",
      "notes": "监管条目采用 Bank of England 一手讲话；加密与市场条目来自 CoinDesk/Business Insider，并标注媒体属性与日期窗口。"
    }
  ],
  "hot_topics_today": [
    {
      "title": "Agent 产品化进入 loop + verification 阶段",
      "heat": "high",
      "dims": [
        "kol",
        "oss",
        "paper"
      ],
      "summary": "KOL、Show HN 与论文共同指向一个产品判断：下一阶段 agent 竞争重点是循环、证据、验证和失败恢复。",
      "related": [
        "kol-1",
        "oss-1",
        "oss-2",
        "paper-2"
      ]
    },
    {
      "title": "多模态生成从高质量 demo 转向高频低成本工作流",
      "heat": "medium",
      "dims": [
        "lab",
        "kol"
      ],
      "summary": "Google 的 Nano Banana 2 Lite/Gemini Omni Flash 把速度、成本和对话式编辑放到前台，适合创意 A/B 和原型生成。",
      "related": [
        "lab-3",
        "kol-2"
      ]
    },
    {
      "title": "AI agent 成为金融监管和加密支付共同对象",
      "heat": "high",
      "dims": [
        "fin",
        "paper"
      ],
      "summary": "英国央行谈 agentic AI 风险，Coinbase 推 agent 账户，说明 AI agent 正被当成金融系统中的行为主体来设计。",
      "related": [
        "fin-1",
        "fin-2",
        "paper-1"
      ]
    },
    {
      "title": "模型发布叙事开始绑定基础设施效率",
      "heat": "high",
      "dims": [
        "lab",
        "fin"
      ],
      "summary": "OpenAI、Anthropic 和 Google 都在强调吞吐、工具调用与成本，资本市场也在追问 AI capex 的商业回报。",
      "related": [
        "lab-1",
        "lab-2",
        "lab-3",
        "fin-3"
      ]
    }
  ],
  "items": [
    {
      "id": "lab-1",
      "dim": "lab",
      "title": "OpenAI 预览 GPT-5.6 Sol，把新模型与高吞吐推理绑定",
      "orig": "Previewing GPT-5.6 Sol: a next-generation model",
      "source": "OpenAI Blog",
      "url": "https://openai.com/index/previewing-gpt-5-6-sol/",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "推理",
        "成本/效率",
        "模型发布"
      ],
      "summary": "OpenAI 继续围绕 GPT-5.6 Sol 做有限预览，核心信号是把前沿模型能力、吞吐和企业接入节奏放在同一个发布叙事里。",
      "detail": "一手来源显示 OpenAI 仍在先给可信伙伴/企业场景放量，而不是一次性全面开放。对多步骤 agent、客服、投研等高并发场景，延迟和单位成本会和模型智力一样成为采购变量。",
      "why": "Wesber 当前关注 agent 工作台和投研自动化，Sol 的价值不只是更强模型，而是能否支撑稳定、低延迟的执行链。",
      "why_now": "仍处在近期预览与等待更广泛开放阶段，适合继续跟踪 API 价格、速率限制和企业案例。",
      "buzz": "讨论焦点集中在高吞吐推理是否会改变实时 agent 产品的体验边界。",
      "meta": {
        "credibility": "official-primary"
      }
    },
    {
      "id": "lab-2",
      "dim": "lab",
      "title": "Anthropic 发布 Claude Sonnet 5，强调 agentic 软件工程与工具调用",
      "orig": "Introducing Claude Sonnet 5",
      "source": "Anthropic News",
      "url": "https://www.anthropic.com/news/claude-sonnet-5",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "Agent",
        "编码",
        "工具调用"
      ],
      "summary": "Anthropic 将 Claude Sonnet 5 定位为更适合自主规划、浏览器/终端工具调用和长链路软件工程的 Sonnet 模型。",
      "detail": "官方发布与客户案例都把重点放在真实工作流完成率，而不是单轮问答分数；但具体能力仍需要第三方 benchmark 和本地任务复测。",
      "why": "对产品经理来说，Sonnet 线代表“中高能力 + 可规模化成本”的执行层，可能影响代码、文档、运营自动化的默认模型选择。",
      "why_now": "发布仍在近 7 天窗口内，且与 KOL 圈关于 loop engineering 的讨论形成呼应。",
      "buzz": "开发者主要关注 brownfield code、长任务计划保持、工具错误恢复和成本上限。",
      "meta": {
        "credibility": "official-primary"
      }
    },
    {
      "id": "lab-3",
      "dim": "lab",
      "title": "Google 推出 Nano Banana 2 Lite 与 Gemini Omni Flash，创意生成转向低成本高频迭代",
      "orig": "Start building with Nano Banana 2 Lite and Gemini Omni Flash",
      "source": "Google Blog / Google AI Developers",
      "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-omni-flash-nano-banana-2-lite/",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "多模态",
        "成本/效率",
        "视频生成"
      ],
      "summary": "Google 发布面向高速图片生成的 Nano Banana 2 Lite，并开放 Gemini Omni Flash 视频生成/对话式编辑预览。",
      "detail": "官方博客和开发者文档均显示，Google 正把图片、视频和对话式编辑组合成更低门槛的创意 API，重点是吞吐、速度和消费级/企业级双入口。",
      "why": "这会影响营销素材、产品原型、短视频和知识内容生成的工作流，尤其适合需要大量变体测试的团队。",
      "why_now": "6 月 30 日发布后，本周已有开发者文档和媒体实测跟进，适合观察稳定性与区域限制。",
      "buzz": "外部讨论既认可 4 秒级快速迭代，也提醒视频编辑仍可能出现拒绝、失败和一致性问题。",
      "meta": {
        "credibility": "official-primary",
        "secondary_url": "https://ai.google.dev/gemini-api/docs/omni"
      }
    },
    {
      "id": "kol-1",
      "dim": "kol",
      "title": "Andrew Ng：loop engineering 不是口号，而是让 agent 长时间迭代的关键结构",
      "orig": "Loop engineering is a hot buzzphrase...",
      "source": "X / Andrew Ng",
      "url": "https://x.com/AndrewYNg/status/2071988145667928442",
      "date": "2026-07-01",
      "heat": "high",
      "tags": [
        "Agent",
        "编码",
        "上下文工程"
      ],
      "summary": "Andrew Ng 在 X 上讨论 loop engineering，强调通过多种 loop 让 AI agent 能在软件构建中持续迭代。",
      "detail": "这是 KOL 一手 X status 证据；公开页面正文抓取受限，正文依据搜索摘要与 X URL。观点与近期编码 agent 产品化趋势一致。",
      "why": "对 PM 来说，loop 是把 agent 从“回答问题”变成“反复验证并推进任务”的产品结构，不只是提示词技巧。",
      "why_now": "近 7 天内发布，并与 Anthropic Sonnet 5、OpenClaw/Aletheia 等讨论形成同一热点。",
      "buzz": "工程圈正在把评价重点从模型单次输出转向循环、验证、回滚和证据管理。",
      "meta": {
        "credibility": "x-public-status",
        "provider_limit": "公开 X 页面在当前环境返回空 HTML，采用 site:x.com 搜索摘要 + status URL 作为 X-first 证据。"
      },
      "x_src": [
        "https://x.com/AndrewYNg/status/2071988145667928442"
      ]
    },
    {
      "id": "kol-2",
      "dim": "kol",
      "title": "Logan Kilpatrick：Gemini API/AI Studio 新增快速图像与视频模型入口",
      "orig": "Introducing Nano Banana 2 Lite and Gemini Omni Flash",
      "source": "X / Logan Kilpatrick",
      "url": "https://x.com/OfficialLoganK/status/2071988351083921690",
      "date": "2026-07-01",
      "heat": "medium",
      "tags": [
        "多模态",
        "成本/效率"
      ],
      "summary": "Logan Kilpatrick 在 X 上同步 Nano Banana 2 Lite 与 Gemini Omni Flash，强调开发者可在 Gemini API 和 AI Studio 中使用。",
      "detail": "这是 Google DevRel 的 X 一手扩散，已用 Google 官方博客和开发者文档交叉验证。",
      "why": "KOL 扩散说明 Google 不只发布模型，也在引导开发者把创意生成接入实际 app。",
      "why_now": "发布发生在 6 月 30 日后，仍处在开发者试用窗口。",
      "buzz": "讨论集中在快速图像生成、视频编辑 API 和消费端 Gemini 入口的一致性。",
      "meta": {
        "credibility": "x-public-status",
        "provider_limit": "公开 X 页面正文不可直接读取，采用 status URL + Google 官方页面交叉验证。"
      },
      "x_src": [
        "https://x.com/OfficialLoganK/status/2071988351083921690"
      ]
    },
    {
      "id": "kol-3",
      "dim": "kol",
      "title": "Omar Saravia：agent skill 选择正在成为 coding agent 的瓶颈",
      "orig": "Great paper on managing agent skills",
      "source": "X / Omar Saravia",
      "url": "https://x.com/omarsar0/status/2072430551446032847",
      "date": "2026-07-02",
      "heat": "medium",
      "tags": [
        "Agent",
        "编码",
        "评测"
      ],
      "summary": "Omar Saravia 在 X 上指出，随着 skill library 变大，coding agent 如何选择正确 skill 正变成关键瓶颈。",
      "detail": "这是近 7 天 X status 证据；具体论文需继续追踪原文，但观点与 Codex/Claude Code 生态的 skill 化方向高度相关。",
      "why": "产品启发是：未来 agent 平台的差异化不只是模型，而是 skill 检索、权限、适配和可观测性。",
      "why_now": "技能库规模增长后，召回错误会直接变成任务失败或误调用风险。",
      "buzz": "社区讨论从“有没有 skill”进入“何时调用哪个 skill、怎么评估调用效果”。",
      "meta": {
        "credibility": "x-public-status",
        "provider_limit": "公开 X 页面正文不可直接读取，采用 site:x.com 搜索摘要作为 X-first 证据。"
      },
      "x_src": [
        "https://x.com/omarsar0/status/2072430551446032847"
      ]
    },
    {
      "id": "kol-4",
      "dim": "kol",
      "title": "Peter Steinberger 澄清 OpenClaw 独立性，开源 agent 生态开始重视治理边界",
      "orig": "OpenClaw was not acquired by OpenAI",
      "source": "X / Peter Steinberger",
      "url": "https://x.com/steipete/status/2071972239734616146",
      "date": "2026-07-01",
      "heat": "medium",
      "tags": [
        "Agent",
        "开源",
        "治理"
      ],
      "summary": "Peter Steinberger 在 X 上澄清 OpenClaw 不是 OpenAI 产品或收购对象，而是 OpenClaw Foundation 下的独立开源项目。",
      "detail": "这是项目核心人物的一手 X 证据；它说明热门开源 agent 在商业化、基金会治理和大厂关系上需要更清晰的边界。",
      "why": "对开源工具选型而言，治理结构会影响长期维护、插件安全、品牌信任和企业采用。",
      "why_now": "OpenClaw 近期热度仍高，独立性澄清可降低市场误解。",
      "buzz": "讨论重点从 star 数和功能转向“谁负责、谁治理、谁兜底”。",
      "meta": {
        "credibility": "x-public-status",
        "provider_limit": "公开 X 页面正文不可直接读取，采用搜索摘要与 status URL 作为 X-first 证据。"
      },
      "x_src": [
        "https://x.com/steipete/status/2071972239734616146"
      ]
    },
    {
      "id": "paper-1",
      "dim": "paper",
      "title": "LACUNA：用测试床评估 LLM unlearning 的定位精度",
      "orig": "LACUNA: A Testbed for Evaluating Localization Precision for LLM Unlearning",
      "source": "arXiv cs.CL",
      "url": "https://arxiv.org/abs/2607.02513",
      "date": "2026-07-03",
      "heat": "medium",
      "tags": [
        "安全",
        "评测",
        "微调/训练"
      ],
      "summary": "arXiv 7 月 3 日新论文提出 LACUNA，用于评估模型遗忘/反学习时能否精确定位需要移除的知识。",
      "detail": "论文仍是预印本，可信度来自 arXiv 一手条目；需要后续看实验设置和是否有代码。",
      "why": "随着模型合规、版权和企业知识删除需求增加，unlearning 的可验证性会成为安全产品能力。",
      "why_now": "近期模型治理和企业私有知识处理都在升温，定位精度比“声称删除”更关键。",
      "buzz": "研究圈关注点从泛化安全转向可测、可审计的具体控制能力。",
      "meta": {
        "credibility": "arxiv-primary"
      }
    },
    {
      "id": "paper-2",
      "dim": "paper",
      "title": "CheckRLM：检查 RAG 推理中的知识与思考一致性",
      "orig": "CheckRLM: Effective Knowledge-Thought Coherence Checking in Retrieval-Augmented Reasoning",
      "source": "arXiv cs.CL",
      "url": "https://arxiv.org/abs/2607.02262",
      "date": "2026-07-03",
      "heat": "high",
      "tags": [
        "RAG",
        "评测",
        "幻觉治理"
      ],
      "summary": "CheckRLM 关注检索增强推理中“引用知识”和“中间思考/答案”是否一致，试图降低 RAG 幻觉与错引。",
      "detail": "这是 arXiv 近期条目，适合纳入 RAG/agent 评测雷达；结论仍需复现实验确认。",
      "why": "对投研、法务、企业知识库等高风险场景，答案是否来自正确证据比流畅表达更重要。",
      "why_now": "长上下文和 RAG 已是企业落地基础设施，证据一致性检查会成为上线前必要环节。",
      "buzz": "社区越来越重视“带证据的自动化”，而不是只看最终回答。",
      "meta": {
        "credibility": "arxiv-primary"
      }
    },
    {
      "id": "paper-3",
      "dim": "paper",
      "title": "PairCoder++：把结对编程范式用于可验证的多模态与结构化产物生成",
      "orig": "PairCoder++: Pair Programming as a Universal Paradigm for Verified Code-Driven Multimodal and Structured-Artifact Generation",
      "source": "arXiv cs.CL",
      "url": "https://arxiv.org/abs/2607.01883",
      "date": "2026-07-03",
      "heat": "medium",
      "tags": [
        "编码",
        "多模态",
        "评测"
      ],
      "summary": "PairCoder++ 把“结对编程”抽象成可验证生成范式，覆盖代码驱动的多模态和结构化产物。",
      "detail": "arXiv 条目显示该论文被 ACL 2026 接收并有项目页；适合继续跟踪 benchmark 与开源实现。",
      "why": "这与当前 agent 产品中的 reviewer/executor 双角色、自动验证和结构化输出高度相关。",
      "why_now": "近期 coding agent 讨论已从代码生成扩展到表格、图表、网页、文档等复杂产物。",
      "buzz": "对产品原型和报告生成流水线，有机会借鉴“生成者 + 验证者”的流程结构。",
      "meta": {
        "credibility": "arxiv-primary"
      }
    },
    {
      "id": "oss-1",
      "dim": "oss",
      "title": "Aletheia：面向 Claude Code 和 Codex 的“不确定性循环”agent",
      "orig": "Aletheia - The Uncertainty Loop Agent for Claude Code and Codex",
      "source": "Hacker News / GitHub",
      "url": "https://news.ycombinator.com/item?id=48796189",
      "date": "2026-07-06",
      "heat": "medium",
      "tags": [
        "Agent",
        "编码",
        "评测"
      ],
      "summary": "Aletheia 在 Show HN 发布，主打在没有明确测试套件的场景中维护不确定性视图，并按能改变判断的信息价值选择下一步搜索。",
      "detail": "HN 条目是今天的一手社区信号，项目仍早期、热度不高，需要看 GitHub 代码质量和维护节奏。",
      "why": "它把“现实没有测试套件”的问题产品化，契合调研、审计、需求分析等开放任务。",
      "why_now": "今天刚发布，适合作为 coding/research agent 设计思路观察样本。",
      "buzz": "HN 讨论点在 loop engineering、证据冲突和置信度更新。",
      "meta": {
        "credibility": "community-primary",
        "repo_hint": "github.com/nsankar"
      }
    },
    {
      "id": "oss-2",
      "dim": "oss",
      "title": "Make No Mistakes：要求 AI coding agent 证明自己的工作",
      "orig": "Make No Mistakes - AI coding agents must prove their work",
      "source": "Hacker News / GitHub",
      "url": "https://news.ycombinator.com/item?id=48797101",
      "date": "2026-07-06",
      "heat": "medium",
      "tags": [
        "编码",
        "评测",
        "Agent"
      ],
      "summary": "Show HN 今日出现 Make No Mistakes，核心命题是让 AI 编程代理留下可验证的工作证明，而不是只交付代码。",
      "detail": "HN 与 Natural 20 聚合均显示该项目在当天发布；仍需进一步检查仓库实现。",
      "why": "这正击中 agent 落地瓶颈：用户不是只要结果，而是要知道结果为什么可信、验证过什么。",
      "why_now": "近期 coding agent 失败模式被大量讨论，证明链和验收证据会成为产品标配。",
      "buzz": "社区对 unattended coding 的态度更谨慎，验证优先于炫技自动化。",
      "meta": {
        "credibility": "community-primary"
      }
    },
    {
      "id": "oss-3",
      "dim": "oss",
      "title": "GameFork：通过 MCP 让 AI agent 发布和 fork 浏览器游戏",
      "orig": "GameFork - AI agents publish and fork browser games via MCP",
      "source": "Hacker News / GameFork",
      "url": "https://news.ycombinator.com/item?id=48796620",
      "date": "2026-07-06",
      "heat": "low",
      "tags": [
        "Agent",
        "MCP",
        "应用"
      ],
      "summary": "GameFork 在 Show HN 展示用 MCP 让 AI agent 发布和 fork 浏览器游戏，属于 agent + 内容生产 + 分发的轻量实验。",
      "detail": "这是当天社区信号，热度和成熟度都偏早期；但能观察 MCP 如何从工具调用走向内容平台能力。",
      "why": "对产品研究而言，它说明 MCP 不只服务企业工具，也可能成为创作平台的 agent 接口层。",
      "why_now": "今天发布，适合低权重跟踪，避免过度解读。",
      "buzz": "讨论更多是 demo 性质，需看是否有真实用户和安全边界。",
      "meta": {
        "credibility": "community-primary"
      }
    },
    {
      "id": "fin-1",
      "dim": "fin",
      "title": "Bank of England：agentic AI 正在改变金融市场、支付与网络风险",
      "orig": "Agents of change - speech by Sarah Breeden",
      "source": "Bank of England",
      "url": "https://www.bankofengland.co.uk/speech/2026/june/sarah-breeden-panel-at-the-european-central-bank-forum-on-central-banking-2026",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "AI金融",
        "监管/合规",
        "Agent"
      ],
      "summary": "英国央行副行长 Sarah Breeden 在 ECB Sintra Forum 讲话，系统讨论 agentic AI 对金融市场、支付、网络风险和金融稳定的影响。",
      "detail": "这是监管机构一手原文，可信度高。重点不是禁止 AI，而是要求央行和监管体系适应高速度、自主化、跨市场的 agent 风险。",
      "why": "对 AI × 金融产品，合规设计需要提前考虑 kill switch、责任归属、授权和异常监控。",
      "why_now": "本周多家媒体继续跟进“AI trading kill switch”议题，监管讨论正在进入主流金融语境。",
      "buzz": "市场讨论从 AI 提效转向 AI agent 是否会放大羊群行为和系统性风险。",
      "meta": {
        "credibility": "official-primary"
      }
    },
    {
      "id": "fin-2",
      "dim": "fin",
      "title": "Coinbase for Agents 让 AI 助手连接账户、交易和未来支付",
      "orig": "Coinbase launches AI agent accounts that can trade and spend on your behalf",
      "source": "CoinDesk",
      "url": "https://www.coindesk.com/tech/2026/06/11/coinbase-launches-ai-agent-accounts-that-can-trade-and-spend-on-your-behalf",
      "date": "2026-06-11",
      "heat": "high",
      "tags": [
        "加密+AI",
        "DeFAI",
        "支付"
      ],
      "summary": "Coinbase 推出 Coinbase for Agents，允许 ChatGPT、Claude 等 AI 助手连接用户 Coinbase 账户进行交易、访问数据，并逐步支持自主支付。",
      "detail": "CoinDesk 报道较早但仍在 14 天行业窗口外一点；因其是 AI×Crypto 基础设施核心事件，作为高热延续项保留并标注日期。",
      "why": "它代表加密交易所把 agentic commerce 具体化：账户权限、支付协议、额度控制会成为产品核心。",
      "why_now": "与近期 x402、稳定币支付和 agent wallet 讨论共同推动“AI agent 作为金融用户”的叙事。",
      "buzz": "社区关注安全护栏、权限粒度和一旦 agent 出错谁负责。",
      "meta": {
        "credibility": "reputable-media"
      }
    },
    {
      "id": "fin-3",
      "dim": "fin",
      "title": "AI 投资交易分化：芯片/内存强势，超大规模云厂商承压",
      "orig": "The one question that will shape the AI trade for the rest of 2026",
      "source": "Business Insider",
      "url": "https://www.businessinsider.com/ai-stocks-chips-rally-mag7-divergence-hyperscalers-hardware-memory-2026-7",
      "date": "2026-07-06",
      "heat": "medium",
      "tags": [
        "AI金融",
        "市场情绪",
        "成本/效率"
      ],
      "summary": "Business Insider 今日报道，2026 年 AI 交易出现“卖铲人”与 hyperscaler 的表现分化，市场开始追问 AI capex 回报。",
      "detail": "这是可靠媒体的二手市场观察，适合做情绪信号，不应当作投资建议。报道引用 JPMorgan 等观点，显示估值讨论从增长切到回报率。",
      "why": "对 AI 产品和金融跟踪，资本市场开始要求 AI 投入可货币化、可测算，而不是只看发布节奏。",
      "why_now": "今天发布，能补足官方技术消息之外的市场定价视角。",
      "buzz": "投资者讨论集中在 AI capex 是否过热、芯片链条是否仍是相对确定的收益端。",
      "meta": {
        "credibility": "reputable-media"
      }
    }
  ],
  "kol_list": [
    {
      "handle": "@karpathy",
      "name": "Andrej Karpathy",
      "field": "LLM 教育/agent 思辨",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@ylecun",
      "name": "Yann LeCun",
      "field": "世界模型/深度学习",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@demishassabis",
      "name": "Demis Hassabis",
      "field": "DeepMind CEO",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@ilyasut",
      "name": "Ilya Sutskever",
      "field": "对齐(SSI)",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@fchollet",
      "name": "François Chollet",
      "field": "ARC-AGI/Keras",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@drfeifei",
      "name": "Fei-Fei Li",
      "field": "空间智能(World Labs)",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@sama",
      "name": "Sam Altman",
      "field": "OpenAI CEO",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@gdb",
      "name": "Greg Brockman",
      "field": "OpenAI 总裁",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@merettm",
      "name": "Jakub Pachocki",
      "field": "OpenAI 首席科学家",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@DarioAmodei",
      "name": "Dario Amodei",
      "field": "Anthropic CEO",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@alexalbert__",
      "name": "Alex Albert",
      "field": "Anthropic DevRel",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@OfficialLoganK",
      "name": "Logan Kilpatrick",
      "field": "Google AI Studio",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@arthurmensch",
      "name": "Arthur Mensch",
      "field": "Mistral CEO",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@miramurati",
      "name": "Mira Murati",
      "field": "Thinking Machines",
      "platform": "X",
      "status": "watch"
    },
    {
      "handle": "@bcherny",
      "name": "Boris Cherny",
      "field": "Claude Code 作者/loop",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@swyx",
      "name": "Shawn Wang",
      "field": "Latent Space/AI 工程",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@simonw",
      "name": "Simon Willison",
      "field": "agent 安全/prompt injection",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@steipete",
      "name": "Peter Steinberger",
      "field": "loop engineering 推手",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@addyosmani",
      "name": "Addy Osmani",
      "field": "agentic engineering(Google)",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@mipsytipsy",
      "name": "Charity Majors",
      "field": "可观测性/AI 工程",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@omarsar0",
      "name": "Elvis Saravia",
      "field": "prompt(DAIR.AI)",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@natolambert",
      "name": "Nathan Lambert",
      "field": "post-training(Ai2)",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@jeremyphoward",
      "name": "Jeremy Howard",
      "field": "fast.ai/模型评测",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@Teknium",
      "name": "Teknium",
      "field": "Nous Research",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@Zai_org",
      "name": "Z.ai (智谱)",
      "field": "GLM 开源模型",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@METR_Evals",
      "name": "METR",
      "field": "危险能力评测",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@apolloaievals",
      "name": "Apollo Research",
      "field": "对齐/欺骗评测",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@DrJimFan",
      "name": "Jim Fan",
      "field": "具身智能(NVIDIA)",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@JohnJumperSci",
      "name": "John Jumper",
      "field": "AI for science(诺奖→Anthropic)",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@chelseabfinn",
      "name": "Chelsea Finn",
      "field": "机器人(Physical Intelligence)",
      "platform": "X",
      "status": "watch"
    },
    {
      "handle": "@svlevine",
      "name": "Sergey Levine",
      "field": "机器人 RL",
      "platform": "X",
      "status": "watch"
    },
    {
      "handle": "@_akhaliq",
      "name": "AK",
      "field": "论文/demo 第一传播",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@rohanpaul_ai",
      "name": "Rohan Paul",
      "field": "AI 资讯/论文解读",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@kimmonismus",
      "name": "Chubby",
      "field": "AI 突发快报",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@mreflow",
      "name": "Matt Wolfe",
      "field": "AI 工具科普",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@sharbel",
      "name": "Sharbel",
      "field": "GitHub 增速榜/开源情报",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@seelffff",
      "name": "self.dll",
      "field": "开源 repo 速递",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@emollick",
      "name": "Ethan Mollick",
      "field": "AI 与职场(Wharton)",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@AndrewYNg",
      "name": "Andrew Ng",
      "field": "AI 教育/趋势",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@bindureddy",
      "name": "Bindu Reddy",
      "field": "企业 AI agent(Abacus)",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@a16z",
      "name": "a16z",
      "field": "AI 投资",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@martin_casado",
      "name": "Martin Casado",
      "field": "AI 投资/政策(a16z)",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@0xCodez",
      "name": "Codez",
      "field": "loop engineering 解读",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@sairahul1",
      "name": "Rahul",
      "field": "loop/agent 工程",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@AravSrinivas",
      "name": "Aravind Srinivas",
      "field": "Perplexity CEO",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@shawmakesmagic",
      "name": "Shaw Walters",
      "field": "Eliza 框架",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@aixbt_agent",
      "name": "aixbt",
      "field": "AI×crypto 情报 agent",
      "platform": "X",
      "status": "watch"
    },
    {
      "handle": "@KyleSamani",
      "name": "Kyle Samani",
      "field": "Multicoin/理性质疑",
      "platform": "X",
      "status": "watch"
    },
    {
      "handle": "@bengoertzel",
      "name": "Ben Goertzel",
      "field": "去中心化 AI/AGI",
      "platform": "X",
      "status": "watch"
    },
    {
      "handle": "@op7418",
      "name": "歸藏 (guizang.ai)",
      "field": "AI 视觉/资讯(AIGC Weekly)",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@dotey",
      "name": "宝玉 (Baoyu)",
      "field": "AI 工程/翻译",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@_zheergen",
      "name": "爱吃折耳根的Ace",
      "field": "AI+股票投研(UZI-Skill)",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "微博·歸藏的AI工具箱",
      "name": "歸藏",
      "field": "AI 工具",
      "platform": "微博",
      "status": "new"
    },
    {
      "handle": "微博·宝玉xp",
      "name": "宝玉",
      "field": "AI 工程",
      "platform": "微博",
      "status": "new"
    },
    {
      "handle": "即刻·orange.ai",
      "name": "Orange",
      "field": "AI 创业/内容",
      "platform": "即刻",
      "status": "watch"
    }
  ],
  "practice_list": [
    "把今日 agent 相关条目拆成两类跟踪：loop/verification 产品形态，以及金融/支付里的权限与责任边界。",
    "对 Gemini Omni Flash / Nano Banana 2 Lite 做一次低成本素材生成小测，记录速度、失败率、可控性和实际可用场景。",
    "把 Bank of England 的 agentic AI 风险框架映射到 AI 投研/交易 agent：授权、额度、kill switch、日志审计四项必须前置。"
  ]
};
