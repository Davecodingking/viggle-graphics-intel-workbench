// 当日聚合数据（由 Daily Intelligence Workbench 生成）。
window.__DAILY__ = window.__DAILY__ || {};
window.__DAILY__["2026/07/03"] = {
  "date": "2026-07-03",
  "date_cn": "2026年7月3日 · 周五",
  "generated_at": "2026-07-03T00:00:00+08:00",
  "language": "zh",
  "refresh_note": "按 Asia/Taipei 日期生成；优先英文关键词、一手来源和公开 X 证据，过滤营销、招聘、重复与不可验证信息。",
  "market_mood": "今日主线是 agent 从模型发布走向可执行工作流：大厂强调高吞吐与编码执行，论文集中在 agent 评测/闭环/安全，金融监管开始把 agentic AI 视为市场与支付稳定议题。",
  "dimensions": [
    {
      "key": "lab",
      "cn": "AI 大厂动态",
      "overview": "OpenAI、Anthropic、Meta 的近期信号分别指向高吞吐模型供给、企业 agent 执行层和新交互研究。",
      "notes": "以官方博客/公司新闻为主，避免二手转述；Meta 条目偏研究阶段，已标注产品化限制。"
    },
    {
      "key": "kol",
      "cn": "KOL 观点",
      "overview": "KOL 讨论围绕 AI Engineer World Fair、个人 agent 生态和 AI 漏洞发现风险展开，工程化与安全成为主轴。",
      "notes": "已执行 X-first：3/3 KOL 条目来自公开 X status/profile URL 或 x_src，比例 100%。本机公开 X 页面打开为空 HTML，正文依赖搜索摘要和交叉来源，已在每条 meta.provider_limit 标注。"
    },
    {
      "key": "paper",
      "cn": "前沿论文",
      "overview": "论文集中在 agent 闭环评测、垂直行业仿真约束和 LLM 静态分析，说明 agent 研究正在走向可验证系统。",
      "notes": "以 arXiv/Hugging Face 近 3 天预印本为主；预印本尚未同行评审，结论需复测。"
    },
    {
      "key": "oss",
      "cn": "开源项目",
      "overview": "OpenClaw 与周边模板/数据 provider 生态继续活跃，开源热点从单工具转向运行时、技能包和真实数据接入。",
      "notes": "以 GitHub release/repo/issue 为主；聚合榜条目已标为二级来源，采用前需验仓库活跃度和安全边界。"
    },
    {
      "key": "fin",
      "cn": "AI × 金融",
      "overview": "金融维度由监管和机构风险框架主导：agentic AI 的速度、授权、市场联动和安全问题受到更多关注。",
      "notes": "优先央行/BIS/大型金融机构官方来源；包含监管、宏观融资和安全三条线。"
    }
  ],
  "hot_topics_today": [
    {
      "title": "Agent 从演示走向可执行系统",
      "heat": "high",
      "dims": [
        "lab",
        "kol",
        "oss",
        "paper"
      ],
      "summary": "Sonnet 5、OpenClaw release、AI Engineer World Fair 与多篇 agent 评测论文共同指向“可执行、可验证、可恢复”的工作流竞争。",
      "related": [
        "lab-2",
        "kol-1",
        "oss-1",
        "paper-1"
      ]
    },
    {
      "title": "安全成为 coding agent 的产品底线",
      "heat": "high",
      "dims": [
        "kol",
        "paper",
        "fin"
      ],
      "summary": "KOL 讨论 AI 发现漏洞、Phoenix 用 agent 找框架 Bug、J.P. Morgan 提醒金融 cyber 风险，说明权限和审计设计不能滞后。",
      "related": [
        "kol-3",
        "paper-3",
        "fin-3"
      ]
    },
    {
      "title": "AI+金融进入监管级 agent 讨论",
      "heat": "high",
      "dims": [
        "fin",
        "paper"
      ],
      "summary": "英格兰银行和 BIS 把 agentic AI、AI capex 和金融稳定放入同一议程，投研/交易 agent 需要更严的责任链和回测框架。",
      "related": [
        "fin-1",
        "fin-2",
        "paper-2"
      ]
    },
    {
      "title": "技能包与 provider 正在成为 agent 基础设施",
      "heat": "medium",
      "dims": [
        "oss",
        "kol"
      ],
      "summary": "OpenClaw 模板生态与真实互联网数据接入项目升温，说明 agent 能力会逐步模块化、可分发、可监控。",
      "related": [
        "oss-2",
        "oss-3",
        "kol-2"
      ]
    }
  ],
  "items": [
    {
      "id": "lab-1",
      "dim": "lab",
      "title": "OpenAI 预览 GPT-5.6 Sol，重点放在高吞吐推理与企业接入",
      "orig": "Previewing GPT-5.6 Sol: a next-generation model",
      "source": "OpenAI Blog",
      "url": "https://openai.com/index/previewing-gpt-5-6-sol/",
      "date": "2026-06-27",
      "heat": "high",
      "tags": [
        "推理",
        "成本/效率",
        "模型发布"
      ],
      "summary": "OpenAI 预览 GPT-5.6 Sol，并称 7 月将通过 Cerebras 提供最高 750 tokens/s 的接入能力，初期面向有限客户。",
      "detail": "这是官方一手发布，可信度高。重点不是单纯参数竞争，而是把前沿模型与高速推理供给绑定，利好需要低延迟、多步骤 agent 执行的企业场景。",
      "why": "对产品侧，模型能力与吞吐/成本被一起打包，未来模型选择会更像“能力 + 延迟 + 批量成本”的综合采购。",
      "why_now": "7 月进入选择性客户接入窗口，适合跟踪早期案例和价格/限额变化。",
      "buzz": "公开讨论集中在高吞吐推理能否支撑实时 agent、客服和投研工作流。",
      "meta": {
        "credibility": "official-primary"
      }
    },
    {
      "id": "lab-2",
      "dim": "lab",
      "title": "Anthropic 发布 Claude Sonnet 5，主打编码、agent 与专业工作负载",
      "orig": "Introducing Claude Sonnet 5",
      "source": "Anthropic News",
      "url": "https://www.anthropic.com/news/claude-sonnet-5",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "Agent",
        "编码",
        "成本/效率"
      ],
      "summary": "Anthropic 将 Sonnet 5 定位为面向大规模专业工作的执行层模型，强调多步骤软件工程、工具调用和更稳的拒答。",
      "detail": "官方发布与客户证言互相印证，但具体 benchmark 仍需等待第三方复测。对企业 agent 来说，Sonnet 线如果保持成本优势，会推动更多“自动执行 + 人审签收”工作流落地。",
      "why": "Wesber 当前关注 agent 底座与评测，Sonnet 5 的叙事直接指向真实工作流完成率，而不是单轮问答。",
      "why_now": "发布时间为 6 月 30 日，仍在当周窗口内。",
      "buzz": "开发者讨论重点在 brownfield code、长任务保持计划和工具调用可靠性。",
      "meta": {
        "credibility": "official-primary"
      }
    },
    {
      "id": "lab-3",
      "dim": "lab",
      "title": "Meta 发布 Brain2Qwerty，展示非侵入式脑信号到文字的新路径",
      "orig": "From Brain Waves to Words: Brain2Qwerty Offers a New Path to Communication Without Surgery",
      "source": "Meta AI Blog",
      "url": "https://ai.meta.com/blog/brain2qwerty-brain-ai-human-communication/",
      "date": "2026-06-29",
      "heat": "medium",
      "tags": [
        "多模态",
        "AI for science",
        "人机交互"
      ],
      "summary": "Meta AI 介绍 Brain2Qwerty，用脑电相关信号探索无需手术的文字输入路径。",
      "detail": "官方研究博客可信度较高，但仍属于研究阶段，不宜解读为近期产品化。值得关注的是多模态 AI 从文本/图像/视频扩展到生理信号与辅助沟通。",
      "why": "对长期产品观察，这是“AI 作为新交互层”的信号，尤其关系到无障碍、医疗辅助和下一代输入设备。",
      "why_now": "6 月 29 日发布，符合本期时间窗口。",
      "buzz": "讨论更多来自研究社区，商业落地需要等待设备、隐私和临床验证。",
      "meta": {
        "credibility": "official-primary"
      }
    },
    {
      "id": "kol-1",
      "dim": "kol",
      "title": "swyx 聚焦 AI Engineer World Fair：agent 工程开始从工具热潮转向领域对齐",
      "orig": "AI Engineer World Fair 2026 discussion",
      "source": "X / @swyx",
      "url": "https://x.com/swyx/status/2070606851377672675",
      "date": "2026-06-27",
      "heat": "high",
      "tags": [
        "Agent",
        "AI工程",
        "上下文工程"
      ],
      "summary": "swyx 围绕 AI Engineer World Fair 2026 强调与领域专家协作、减少“slop”的工程化趋势。",
      "detail": "X 公开 status 由搜索发现；页面公开读取在本机 provider 中无正文，故以搜索摘要和 event 官网上下文交叉判断。可信度为 X-first 但正文可见性受限。",
      "why": "KOL 观点从“会不会用 agent”转向“如何把 agent 放入具体行业流程”，与本工作台 AI+金融/加密锚点高度相关。",
      "why_now": "帖子位于近 7 天内，且会议日期覆盖 6 月 29 日至 7 月 2 日。",
      "buzz": "AI 工程圈讨论重点是领域知识、评测、工作流约束和可验证交付。",
      "x_src": [
        "https://x.com/swyx/status/2070606851377672675"
      ],
      "meta": {
        "credibility": "x-first-search-snippet-public-status",
        "provider_limit": "X status page opened with empty public HTML in this environment"
      }
    },
    {
      "id": "kol-2",
      "dim": "kol",
      "title": "Peter Steinberger 转发 AI Engineer World Fair，继续强化本地/个人 agent 生态热度",
      "orig": "AI Engineer World Fair 2026 reference",
      "source": "X / @steipete",
      "url": "https://x.com/steipete/status/2071807582252195925",
      "date": "2026-06-30",
      "heat": "medium",
      "tags": [
        "Agent",
        "开源项目",
        "AI工程"
      ],
      "summary": "@steipete 近 3 天公开 X 动态指向 AI Engineer World Fair，延续开发者对个人 agent、OpenClaw 类项目和工程实践的关注。",
      "detail": "这是 X-first 证据，正文来自搜索摘要；由于公开页面直接打开无正文，可信度备注为“公开 status URL 可定位，但正文读取受 provider 限制”。",
      "why": "Steinberger 同时关联 OpenClaw 生态，KOL 信号与今日开源维度形成共振。",
      "why_now": "搜索结果标记为 3 天前，落在近 7 天 KOL 窗口。",
      "buzz": "工程圈关注从模型切换扩展到 agent harness、插件市场和持续运行的个人助手。",
      "x_src": [
        "https://x.com/steipete/status/2071807582252195925"
      ],
      "meta": {
        "credibility": "x-first-search-snippet-public-status",
        "provider_limit": "X status page opened with empty public HTML in this environment"
      }
    },
    {
      "id": "kol-3",
      "dim": "kol",
      "title": "Ethan Mollick 提醒：AI 正在规模化发现软件漏洞，安全边界成为 agent 落地核心",
      "orig": "AI appears to be finding software vulnerabilities at scale",
      "source": "X / @emollick",
      "url": "https://x.com/emollick/status/2072778376494895139",
      "date": "2026-07-03",
      "heat": "high",
      "tags": [
        "安全",
        "Agent",
        "编码"
      ],
      "summary": "@emollick 今日讨论 AI 在软件漏洞发现上的规模化能力，并关联 2026 年 6 月相关研究/案例。",
      "detail": "X-first 证据来自公开 status 搜索摘要；页面直接读取正文受限。观点与近期 Anthropic Fable 5 安全分类器、Mozilla 0din coding-agent 安全讨论相互印证。",
      "why": "企业使用 coding agent 时，漏洞发现与漏洞利用之间的边界会成为产品策略、权限设计和审计日志的关键。",
      "why_now": "这是当天 X 信号，适合作为今日 KOL 维度高热条目。",
      "buzz": "社区讨论焦点是“agent 能发现漏洞”与“agent 也可能被诱导执行恶意代码”的双重风险。",
      "x_src": [
        "https://x.com/emollick/status/2072778376494895139"
      ],
      "meta": {
        "credibility": "x-first-search-snippet-public-status",
        "provider_limit": "X status page opened with empty public HTML in this environment"
      }
    },
    {
      "id": "paper-1",
      "dim": "paper",
      "title": "EPC 协议关注 evaluator 偏好如何耦合进 LLM agent 策略",
      "orig": "EPC: A Standardized Protocol for Measuring Evaluator Preference Dynamics in LLM Agent Systems",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2607.00297",
      "date": "2026-07-02",
      "heat": "high",
      "tags": [
        "评测",
        "Agent",
        "对齐"
      ],
      "summary": "论文提出 EPC，用于衡量 agent 在闭环中根据 evaluator 反馈调整行为时，评价器偏差如何传播进策略分布。",
      "detail": "arXiv 一手论文，可信度为预印本。它提示 agent 评测不能只看最终分数，还要看评价器偏好是否把系统训练偏。",
      "why": "对多模型评测和 agent 自动优化流程，EPC 是一个重要风险提醒：LLM judge 本身可能塑造被评系统。",
      "why_now": "7 月 2 日提交，属于最新论文。",
      "buzz": "适合纳入评测 SOP 的“评价器偏差/闭环污染”风险项。",
      "meta": {
        "credibility": "primary-preprint"
      }
    },
    {
      "id": "paper-2",
      "dim": "paper",
      "title": "Agri-SAGE 将多 agent 推理接入农业仿真，用闭环验证生成建议",
      "orig": "Agri-SAGE: Simulation-Grounded Multi-Agent LLM for Agronomic Advisory Generation",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2607.00454",
      "date": "2026-07-03",
      "heat": "medium",
      "tags": [
        "Agent",
        "仿真",
        "垂直行业"
      ],
      "summary": "Agri-SAGE 把检索增强、多 agent 推理和 APSIM 生物物理仿真结合，用历史回测验证农业建议。",
      "detail": "这是今日 arXiv 预印本。价值在于展示“LLM agent + 专业仿真器”的垂直行业模式，能把建议放进可验证环境，而非只生成文本。",
      "why": "对 AI+金融/加密也有启发：agent 输出交易、风控或投研建议时，应尽量接入回测/仿真而不是只接自然语言判断。",
      "why_now": "7 月 3 日提交，时间新鲜。",
      "buzz": "垂直行业 agent 正从通用助手转向“专业模型/仿真器约束下的闭环系统”。",
      "meta": {
        "credibility": "primary-preprint"
      }
    },
    {
      "id": "paper-3",
      "dim": "paper",
      "title": "Phoenix 用多 agent 静态分析发现深度学习框架 Bug，已向 PyTorch 上游提交修复",
      "orig": "Rise From The Ashes: LLM-based Static Analysis for Deep Learning Framework Bugs",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2607.00555",
      "date": "2026-07-01",
      "heat": "high",
      "tags": [
        "编码",
        "Agent",
        "安全"
      ],
      "summary": "Phoenix 将 bug 摘要、符号检索、语义桥表示和 LLM 分析 agent 组合起来，报告称发现 31 个新的 PyTorch 后端 Bug。",
      "detail": "arXiv 预印本，需等待同行复现；但“20 个修复 patch 已合并”的说法若属实，说明 agentic static analysis 已开始产生工程产出。",
      "why": "这类系统会影响研发效能、安全审计和模型框架质量，也解释了为什么 coding agent 权限边界必须更精细。",
      "why_now": "7 月 1 日提交，且与今日 KOL 安全讨论互相呼应。",
      "buzz": "开发者关注点是 agent 是否能稳定定位真实 bug，而不是只生成可疑报告。",
      "meta": {
        "credibility": "primary-preprint"
      }
    },
    {
      "id": "oss-1",
      "dim": "oss",
      "title": "OpenClaw 继续升温，最新 release 增加 GPT-5.6 家族识别与外部 harness attach",
      "orig": "OpenClaw releases",
      "source": "GitHub",
      "url": "https://github.com/openclaw/openclaw/releases",
      "date": "2026-07-02",
      "heat": "high",
      "tags": [
        "Agent",
        "开源项目",
        "编码"
      ],
      "summary": "OpenClaw release 提到支持 GPT-5.6 模型族，并提供外部 harness attachment，方便恢复和检查 Codex-style 工作流。",
      "detail": "GitHub release 是一手工程信源。OpenClaw 从个人助手转向更完整的 agent 运行时生态，和插件/技能市场趋势一致。",
      "why": "对本地优先 AI 工作台，OpenClaw 类项目展示了“长驻 agent + 多渠道入口 + 可观察运行时”的产品方向。",
      "why_now": "release 搜索结果标记为昨日，属于今日可跟踪开源动态。",
      "buzz": "社区讨论集中在持续运行、权限控制、成本可见性和安全隔离。",
      "meta": {
        "credibility": "primary-github-release"
      }
    },
    {
      "id": "oss-2",
      "dim": "oss",
      "title": "Awesome OpenClaw Agents 收录 205 个可复用 agent 模板，技能生态继续包管理化",
      "orig": "awesome-openclaw-agents",
      "source": "GitHub",
      "url": "https://github.com/mergisi/awesome-openclaw-agents",
      "date": "2026-07-03",
      "heat": "medium",
      "tags": [
        "Agent",
        "开源项目",
        "技能"
      ],
      "summary": "该仓库围绕 OpenClaw 生态收集生产就绪 agent 模板，强调复制 SOUL.md 即可复用。",
      "detail": "GitHub 仓库为一手来源，但模板质量需抽样验证。它反映 agent 能力正在从单个提示词沉淀为可分发、可复用的技能包。",
      "why": "这对 Codex/Claude Skill 研究有直接产品启发：技能包需要版本、依赖、适用边界和安全声明。",
      "why_now": "搜索结果显示该生态近期活跃，适合作为趋势观察而非成熟采用建议。",
      "buzz": "开发者开始把 agent 经验封装成模板市场，后续竞争点会落在质量评分和供应链安全。",
      "meta": {
        "credibility": "primary-github-repo",
        "caveat": "quality-not-independently-verified"
      }
    },
    {
      "id": "oss-3",
      "dim": "oss",
      "title": "Agent-Reach 出现在 AI 开源趋势榜：agent 对真实互联网数据接入的需求上升",
      "orig": "AI Open Source Trends 2026-06-27",
      "source": "GitHub Issue / agents-radar",
      "url": "https://github.com/duanyytop/agents-radar/issues/1835",
      "date": "2026-06-27",
      "heat": "medium",
      "tags": [
        "Agent",
        "数据源",
        "开源项目"
      ],
      "summary": "趋势榜提到 Agent-Reach，为 AI agent 提供 Twitter、Reddit、YouTube、GitHub、Bilibili、小红书等读取入口。",
      "detail": "这是二级趋势聚合，不等于官方 repo 发布；但它和本工作台 X-first provider 需求一致，说明“真实世界上下文接入”正在成为 agent 基础设施热点。",
      "why": "对每日情报工作台，provider 抽象很关键：不能依赖单一登录态，必须能记录来源、限制和 fallback。",
      "why_now": "6 月 27 日趋势 issue，仍处近 7 天窗口边缘。",
      "buzz": "关注点是零 API 费用、跨平台读取和合规边界。",
      "meta": {
        "credibility": "secondary-github-trend",
        "caveat": "verify-project-before-use"
      }
    },
    {
      "id": "fin-1",
      "dim": "fin",
      "title": "英格兰银行警示 agentic AI 可能改变金融市场、支付和网络风险",
      "orig": "Agents of change - speech by Sarah Breeden",
      "source": "Bank of England",
      "url": "https://www.bankofengland.co.uk/speech/2026/june/sarah-breeden-panel-at-the-european-central-bank-forum-on-central-banking-2026",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "AI × 金融",
        "Agent",
        "监管/合规"
      ],
      "summary": "Sarah Breeden 在 ECB Sintra 论坛表示，agentic AI 正在快速改变金融服务，央行需要适应并加强韧性与全球协作。",
      "detail": "央行官方演讲可信度高。重点不是禁止 agent，而是识别在市场、支付和 cyber risk 中的速度、规模与责任归属问题。",
      "why": "AI 投研/交易 agent 如果进入真实市场，产品设计必须预置 kill switch、授权边界、审计和责任链。",
      "why_now": "6 月 30 日发布，仍在本周窗口。",
      "buzz": "金融监管讨论从模型风险扩展到 agent 行为和系统性联动。",
      "meta": {
        "credibility": "official-regulator"
      }
    },
    {
      "id": "fin-2",
      "dim": "fin",
      "title": "BIS 年报把 AI capex 与债务融资列为宏观金融稳定观察点",
      "orig": "BIS Annual Economic Report 2026 - Progress and peril",
      "source": "Bank for International Settlements",
      "url": "https://www.bis.org/publ/arpdf/ar2026e1.htm",
      "date": "2026-06-28",
      "heat": "high",
      "tags": [
        "AI × 金融",
        "资本开支",
        "监管/合规"
      ],
      "summary": "BIS 年报指出大型 hyperscaler 2025-2026 AI 相关资本开支规模巨大，并提醒融资结构和市场预期可能带来宏观风险。",
      "detail": "BIS 是权威官方来源。该条不是单个产品新闻，而是为 AI 投资热度提供宏观风险框架。",
      "why": "对 AI 股票/债券和基础设施投资判断，不能只看模型发布，还要看 capex、现金流和债务融资压力。",
      "why_now": "6 月 28 日发布，处于近期宏观窗口。",
      "buzz": "市场关注 AI 基建是否会重演电信/互联网泡沫中的过度投资与融资错配。",
      "meta": {
        "credibility": "official-institutional"
      }
    },
    {
      "id": "fin-3",
      "dim": "fin",
      "title": "J.P. Morgan 关注 AI 网络安全融资与支付欺诈，金融 AI 落地先过风控关",
      "orig": "AI Cybersecurity: Threats, Funding & Builder Priorities",
      "source": "J.P. Morgan",
      "url": "https://www.jpmorgan.com/insights/banking/commercial-banking/ai-cybersecurity-threats-funding-and-builder-priorities",
      "date": "2026-06-22",
      "heat": "medium",
      "tags": [
        "AI × 金融",
        "安全",
        "风控"
      ],
      "summary": "J.P. Morgan 讨论 AI-enabled cyber 公司融资与金融机构面临的深度伪造、支付流程攻击等安全问题。",
      "detail": "机构研究/商业银行内容，可信度中高但带业务视角。对金融 AI 来说，安全和身份验证是 agent 自动化之前的前置条件。",
      "why": "AI 金融产品不只是提升投研效率，也会放大欺诈自动化和身份冒用风险。",
      "why_now": "6 月 22 日仍在 14 天窗口内，是金融维度的安全补充。",
      "buzz": "支付、财务审批和客户服务流程会成为 deepfake 与 agent 滥用的高风险入口。",
      "meta": {
        "credibility": "institutional-analysis"
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
    "评估 agent 产品时，把“模型能力、吞吐/成本、权限边界、审计日志、回测验证”放在同一张表里看。",
    "KOL 维度继续保持 X-first，但要记录 provider 限制；公开页面打不开正文时，不要把二级摘要伪装成一手全文。",
    "对 AI×金融条目，区分效率机会和系统性风险：监管/央行来源优先于营销型案例。"
  ]
};
