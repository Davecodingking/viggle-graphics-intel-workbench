// 当日聚合数据（由 Daily Intelligence Workbench 生成）。
window.__DAILY__ = window.__DAILY__ || {};
window.__DAILY__["2026/07/01"] = {
  "date": "2026-07-01",
  "date_cn": "2026年7月1日 · 周三",
  "generated_at": "2026-07-01",
  "language": "zh",
  "refresh_note": "本轮使用公共网页 provider 调研，优先官方博客、官方文档、arXiv/Hugging Face、GitHub/OSSInsight、监管机构原文与可信媒体；X/Twitter 只采用可公开访问或被可信聚合引用的链接，不读取登录态、cookie 或 token。",
  "market_mood": "今日 AI 情报主线从“更强模型”转向“可控落地”：Anthropic 与 OpenAI 都在前沿模型、科学工作台和监管约束上释放信号；金融侧则同时出现央行风险提示、FactSet/Google Cloud 机构级 Agent、Mastercard/Coinbase/MetaMask 的智能体支付与交易基础设施。",
  "dimensions": [
    {
      "key": "lab",
      "cn": "AI 大厂动态",
      "overview": "过去 48 小时最强信号来自 Anthropic：Claude Sonnet 5 与 Claude Science 同日发布，把“更强执行层”和“科学工作台”并列推进。OpenAI 继续把科学评测体系做深，Google/Mistral/NVIDIA/Meta 则分别在 Agent 治理、文档智能、科学工具链、脑机接口方向补位。",
      "notes": "大厂维度优先官方源；OpenAI GPT-5.6 的受限发布作为背景热点保留，但今日新增重点放在 6/30 与 7/1 可验证更新。"
    },
    {
      "key": "kol",
      "cn": "KOL 观点",
      "overview": "工程圈今日的高价值讨论集中在三件事：编码 Agent 必须交付可看 demo；GPT-5.6/Claude 模型受限与恢复暴露“模型访问权”风险；开放模型与 Agent 工程从跑分转向真实可用性、可验证性和成本。",
      "notes": "KOL 维度用 Simon Willison、AINews/Latent Space、Interconnects 等公开网页与 newsletter 作为主源；X 原帖未强行登录抓取。"
    },
    {
      "key": "paper",
      "cn": "前沿论文",
      "overview": "论文侧今天很适合产品视角阅读：多 Agent 长对话会收敛到稳定行为、Agent 安全需要内部权限治理、3D/科学/无障碍场景出现更垂直的 LLM Agent。重点不只是模型能力，而是 Agent 进入真实环境后的行为、证据与边界。",
      "notes": "优先近 7 天 arXiv / Hugging Face 条目；部分论文来自 HF Daily/Weekly 榜，热度数值不写死。"
    },
    {
      "key": "oss",
      "cn": "开源项目",
      "overview": "开源侧关键词是“Agent harness 工程化”：从 harness pattern 清单、Agent 沙箱、GitHub 实时趋势榜，到本地个人 Agent 与开源安全案例，社区正在把 Agent 从 demo 推向工程安全、可复用模板和本地优先。",
      "notes": "GitHub stars 变化未逐项写死，避免因实时波动造成误导；项目价值以功能方向和社区信号为主。"
    },
    {
      "key": "fin",
      "cn": "AI × 金融",
      "overview": "金融侧今天是一个完整闭环：央行提醒 AI Agent 可能放大市场共振，FactSet/Google Cloud 把 Agent 带进机构投研，Mastercard/Coinbase/MetaMask 把 Agent 带进支付和交易。机会与风险同时加速。",
      "notes": "金融维度以监管原文、公司公告和可信金融媒体为主；涉及交易的内容均仅作行业观察，不构成投资建议。"
    }
  ],
  "hot_topics_today": [
    {
      "title": "前沿模型竞争进入“能力 + 监管 + 访问权”三角",
      "heat": "high",
      "dims": [
        "lab",
        "kol"
      ],
      "summary": "Claude Sonnet 5 发布强化执行层，OpenAI GPT-5.6 仍处在受限预览与政策讨论中，Anthropic Fable/Mythos 访问恢复也被 Simon Willison 等持续追踪。模型能力本身之外，“谁能用、何时能用、能否稳定用”成为产品风险。",
      "related": [
        "lab-1",
        "kol-2",
        "kol-3"
      ]
    },
    {
      "title": "AI for Science 从论文展示走向工作台和工具链",
      "heat": "high",
      "dims": [
        "lab",
        "paper"
      ],
      "summary": "Claude Science、OpenAI GeneBench-Pro、NVIDIA BioNeMo Agent Toolkit 与 NMRAgent 共同指向一个趋势：科学 AI 不再只是单点问答，而是在数据、工具、计算资源和可审计 artifact 上做完整工作流。",
      "related": [
        "lab-2",
        "lab-3",
        "lab-6",
        "paper-5"
      ]
    },
    {
      "title": "金融 Agent 已经碰到监管红线：速度、同质化和责任归属",
      "heat": "high",
      "dims": [
        "fin",
        "paper"
      ],
      "summary": "Bank of England 公开讨论 AI Agent 对市场、支付和网络风险的影响，TRiSM/Agent 安全论文也在提醒：Agent 一旦拿到超出普通用户的权限，问题就从“模型答得好不好”变成“系统能否被治理”。",
      "related": [
        "fin-1",
        "paper-3",
        "fin-6"
      ]
    },
    {
      "title": "AI × 金融开始补齐三层基础设施：数据、支付、执行",
      "heat": "high",
      "dims": [
        "fin",
        "lab"
      ],
      "summary": "FactSet/Google Cloud 把可信金融数据接入 Agent 工作流，Mastercard Agent Pay 解决机器到机器支付，Coinbase/MetaMask 则把智能体交易和钱包执行推到前台。产品机会在“可审计、可授权、可限额”。",
      "related": [
        "fin-2",
        "fin-3",
        "fin-4",
        "fin-5"
      ]
    },
    {
      "title": "Agent 工程从“写代码”走向“证明自己做对了”",
      "heat": "rising",
      "dims": [
        "kol",
        "oss"
      ],
      "summary": "Simon Willison 发布 shot-scraper video，核心思想是让 coding agent 自动录制 demo；TakoVM、awesome-harness-engineering、Mozilla 0din 案例则从沙箱、模板和安全反例三个角度提醒：Agent 要能被看见、被限制、被复核。",
      "related": [
        "kol-1",
        "oss-1",
        "oss-3",
        "oss-6"
      ]
    },
    {
      "title": "开放生态的竞争点转向“可用工程栈”",
      "heat": "rising",
      "dims": [
        "kol",
        "oss"
      ],
      "summary": "Interconnects 讨论 GLM-5.2 和开放模型生态，OSSInsight 以实时 GitHub 事件追踪 AI 仓库，awesome-ai-agents / awesome-harness-engineering 等清单则把 Agent 能力拆成可复用模块。开源不只是模型权重，而是整套可执行生态。",
      "related": [
        "kol-4",
        "kol-5",
        "oss-2",
        "oss-4"
      ]
    },
    {
      "title": "垂直 Agent 正在细分：无障碍、3D、NMR、表格数据",
      "heat": "medium",
      "dims": [
        "paper",
        "oss"
      ],
      "summary": "LUMOS、NaLA、NMRAgent、Tabular Foundation Model 评测等新论文说明，下一波 Agent 不只在通用办公里卷，也在专业界面、空间生成、科学证据推理和结构化数据上细分。",
      "related": [
        "paper-2",
        "paper-4",
        "paper-5",
        "paper-6"
      ]
    }
  ],
  "items": [
    {
      "id": "lab-1",
      "dim": "lab",
      "title": "Claude Sonnet 5 发布：Anthropic 把“更会执行的中坚模型”推到所有计划",
      "orig": "Introducing Claude Sonnet 5",
      "source": "Anthropic News",
      "url": "https://www.anthropic.com/news/claude-sonnet-5",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "Claude",
        "Agent",
        "coding",
        "cost-performance"
      ],
      "summary": "Anthropic 发布 Claude Sonnet 5，并把它作为 Free/Pro 默认模型，同时进入 Claude Code 与 API。它主打更强的长程执行、编码、工具使用和更好的成本性能。",
      "detail": "官方强调 Sonnet 5 相比 Sonnet 4.6 在 agentic search、computer use、编码和专业工作上全面提升；API 启动期价格为每百万输入 2 美元、输出 10 美元，到 2026-08-31 后回到更高标准价。对产品经理来说，它的定位不是最贵旗舰，而是“日常可规模化调用的执行层”。",
      "why": "如果 Agent 产品要大规模跑任务，中坚模型的稳定、成本和执行力比单次极限跑分更重要。Sonnet 5 是 Anthropic 在“可规模化 Agent 执行层”上的最新回答。",
      "why_now": "6 月 30 日刚发布，且同时进入 Claude Code 与 Claude Platform，影响会直接传到开发者工作流。",
      "buzz": "早期用户反馈集中在复杂任务 follow-through、调试、工具调用与安全拒绝更稳定；适合作为 Agent 产品选型候选。",
      "meta": {
        "company": "Anthropic",
        "type": "model_release"
      }
    },
    {
      "id": "lab-2",
      "dim": "lab",
      "title": "Claude Science 上线：科学研究从聊天框升级为可审计工作台",
      "orig": "Claude Science, an AI workbench for scientists, is now available",
      "source": "Anthropic News",
      "url": "https://www.anthropic.com/news/claude-science-ai-workbench",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "AI for Science",
        "workbench",
        "auditable artifacts"
      ],
      "summary": "Anthropic 发布 Claude Science，一个面向科研人员的 AI 工作台，强调常用研究工具/包集成、可审计 artifact 和灵活计算资源。",
      "detail": "这不是单个模型能力展示，而是把科学研究所需的软件包、数据处理、计算资源和可追溯产物整合成工作台。对企业/科研产品的启发是：AI 真正落地高信任领域时，需要 artifact、计算和可验证过程，而不是只给最终答案。",
      "why": "科学场景天然要求证据链和复现性。Claude Science 的产品形态说明“垂直 Agent”会越来越像专业工作台，而不是通用聊天窗。",
      "why_now": "与 Sonnet 5 同日发布，Anthropic 同时打模型执行力和垂直科研工作流。",
      "buzz": "科研社区关注点在“auditable artifacts”是否能真正解决 AI 生成内容不可复核的问题。",
      "meta": {
        "company": "Anthropic",
        "type": "product"
      }
    },
    {
      "id": "lab-3",
      "dim": "lab",
      "title": "OpenAI 发布 GeneBench-Pro：生物与基因组 AI 评测继续加深",
      "orig": "Introducing GeneBench-Pro",
      "source": "OpenAI Research",
      "url": "https://openai.com/research/index/",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "AI for Science",
        "benchmark",
        "biology",
        "genomics"
      ],
      "summary": "OpenAI 研究页更新 GeneBench-Pro，定位为用复杂真实数据集测试 AI 在基因组、生物和科学研究任务中的表现。",
      "detail": "这条与 OpenAI 近期 LifeSciBench、GPT-Rosalind、AI chemist 等方向连在一起看，说明前沿实验室正在把科学能力拆成更细的评测、工具和垂直模型能力。对评测体系建设尤其值得关注：科学任务更需要专家审阅、真实数据、可复现过程和边界说明。",
      "why": "Wesber 当前关注评测驱动。GeneBench-Pro 的价值在于提示我们：高价值评测不是泛泛问答，而是贴近真实工作流的数据和任务。",
      "why_now": "6 月 30 日刚出现在 OpenAI Research 最新列表。",
      "buzz": "AI for Science 从营销口号转为评测基础设施竞争，OpenAI 与 Anthropic 今日同时有科学工作流动作。",
      "meta": {
        "company": "OpenAI",
        "type": "research"
      }
    },
    {
      "id": "lab-4",
      "dim": "lab",
      "title": "Mistral OCR 4 发布：文档智能开始强调版面、置信度和自托管",
      "orig": "Introducing Mistral OCR 4",
      "source": "Mistral AI News",
      "url": "https://mistral.ai/news/ocr-4/",
      "date": "2026-06-23",
      "heat": "rising",
      "tags": [
        "OCR",
        "document intelligence",
        "RAG",
        "self-hosted"
      ],
      "summary": "Mistral 发布 OCR 4，除了抽文字，还返回 bounding boxes、block classification 和 inline confidence scores，并支持 170 种语言与单容器自托管。",
      "detail": "企业知识库和 RAG 的难点经常不是“有没有文字”，而是表格、签名、公式、标题、上下文位置能否被保留。OCR 4 把版面分割、块类型和置信度作为一等输出，更适合做源文高亮、引用、脱敏和人工复核。",
      "why": "文档智能是企业 Agent 的底层能力。Mistral 的方向说明 OCR/RAG 正从“抽文本”升级到“保留证据位置和可信度”。",
      "why_now": "6 月下旬发布，Mistral 同期还在加强 connectors 控制，形成企业数据接入组合拳。",
      "buzz": "开发者关注 self-hosted 与 confidence score 对合规场景的价值，尤其适合金融、法务、科研文档。",
      "meta": {
        "company": "Mistral AI",
        "type": "model_release"
      }
    },
    {
      "id": "lab-5",
      "dim": "lab",
      "title": "Google Gemini Enterprise 增加 Agent Registry 和 MCP 治理",
      "orig": "Gemini Enterprise: Governance for agents and MCP servers",
      "source": "Google Cloud Documentation",
      "url": "https://docs.cloud.google.com/gemini/enterprise/docs/release-notes",
      "date": "2026-06-25",
      "heat": "high",
      "tags": [
        "Gemini Enterprise",
        "MCP",
        "agent governance",
        "Agent Registry"
      ],
      "summary": "Google Cloud 在 Gemini Enterprise release notes 中加入 Agent Registry：企业可从目录选择 A2A agents 或 MCP servers，并通过 Agent Gateway 做出站策略控制。",
      "detail": "这条虽然是 release note，但信息量很大：企业 Agent 管理需要像应用市场/权限中心一样，能登记、选择、授权、限制外部流量。Agent Gateway 的 allow/deny egress policies 意味着 Agent 连接外部工具不再是自由散养，而是要被平台治理。",
      "why": "MCP 和多 Agent 真正进企业后，治理、目录、出站控制会成为产品核心模块。它对 Codex/Claude 迁移、插件化工作台都有启发。",
      "why_now": "6 月 25 日新增，紧贴 Agent 与 MCP 企业化。",
      "buzz": "社区将其视为 Google 把 Gemini Enterprise 从聊天助手推进到 Agent 操作系统的一步。",
      "meta": {
        "company": "Google Cloud",
        "type": "enterprise_release"
      }
    },
    {
      "id": "lab-6",
      "dim": "lab",
      "title": "NVIDIA BioNeMo Agent Toolkit：科学发现场景也开始打 Agent 工具包",
      "orig": "NVIDIA Announces BioNeMo Agent Toolkit",
      "source": "NVIDIA Newsroom",
      "url": "https://nvidianews.nvidia.com/",
      "date": "2026-06-23",
      "heat": "rising",
      "tags": [
        "NVIDIA",
        "BioNeMo",
        "AI for Science",
        "agents"
      ],
      "summary": "NVIDIA Newsroom 近期主推 BioNeMo Agent Toolkit，定位为给 agentic life sciences 时代的领域工具与技能。",
      "detail": "NVIDIA 同期还发布 Physical AI 安全系统 Halos、欧洲 35 台 AI HPC 超算等消息。BioNeMo Agent Toolkit 的产品启发是：科学 Agent 不只依赖语言模型，还需要领域工具、加速计算、数据接口和流程模板。",
      "why": "如果把 Claude Science 看成前台工作台，BioNeMo Agent Toolkit 更像底层工具箱。二者共同说明 AI for Science 正在形成应用层与基础设施层的分工。",
      "why_now": "NVIDIA 6 月下旬密集发布 AI 科学与物理 AI 相关基础设施。",
      "buzz": "生命科学、药物发现与科研自动化仍是大厂高投入方向。",
      "meta": {
        "company": "NVIDIA",
        "type": "toolkit"
      }
    },
    {
      "id": "lab-7",
      "dim": "lab",
      "title": "Meta Brain2Qwerty：非侵入式脑波到文字，AI 进入沟通辅助新路径",
      "orig": "From Brain Waves to Words: Brain2Qwerty Offers a New Path to Communication Without Surgery",
      "source": "Meta AI Blog",
      "url": "https://ai.meta.com/blog/brain2qwerty-brain-ai-human-communication/",
      "date": "2026-06-29",
      "heat": "medium",
      "tags": [
        "BCI",
        "accessibility",
        "Meta AI",
        "research"
      ],
      "summary": "Meta 发布 Brain2Qwerty 研究，探索不用外科手术、从脑波到文字的沟通辅助路径。",
      "detail": "与炫技型生成模型不同，这类研究更接近“AI 改善人的能力边界”：如果能把非侵入式脑信号可靠映射为文字，它会影响无障碍沟通、医疗康复和人机交互。",
      "why": "它提醒产品判断不要只盯聊天和编码。AI 在无障碍、医疗、脑机接口里的价值可能更长期、更基础。",
      "why_now": "Meta AI Blog 6 月 29 日发布，属于最近两天的官方研究更新。",
      "buzz": "讨论焦点在“非侵入式”能否达到稳定可用，以及离产品化还有多远。",
      "meta": {
        "company": "Meta AI",
        "type": "research"
      }
    },
    {
      "id": "kol-1",
      "dim": "kol",
      "title": "Simon Willison：让 coding agent 自己录制可看 demo",
      "orig": "Have your agent record video demos of its work with shot-scraper video",
      "source": "Simon Willison's Weblog",
      "url": "https://simonwillison.net/2026/Jun/30/shot-scraper-video/",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "coding agents",
        "agentic engineering",
        "Playwright",
        "demo"
      ],
      "summary": "Simon 发布 shot-scraper 1.10 的 video 功能，可以用 storyboard.yml 定义一段 Web 应用操作流程，再用 Playwright 录制视频。他的核心观点是：coding agent 应该能展示自己到底做了什么。",
      "detail": "这条很产品：Agent 不是交一堆代码就完事，最好能自动录制关键路径 demo，让人快速验收。对于本地 HTML 工作台、原型和日报系统，都可以借鉴“产物 + 可视化验证”的交付范式。",
      "why": "Agent 工作的信任问题，不只靠测试，也靠可观察演示。它能显著降低非工程同学验收成本。",
      "why_now": "6 月 30 日刚发布，且与 Agent 工程验证主线高度相关。",
      "buzz": "工程圈关注点从“agent 写得快”转向“agent 能否证明自己做对”。",
      "meta": {
        "author": "Simon Willison",
        "type": "blog"
      }
    },
    {
      "id": "kol-2",
      "dim": "kol",
      "title": "Simon 跟踪 Anthropic：Fable/Mythos 出口控制解除，访问将恢复",
      "orig": "A quote from Anthropic",
      "source": "Simon Willison's Weblog",
      "url": "https://simonwillison.net/2026/Jun/30/anthropic/",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "Anthropic",
        "export controls",
        "model access"
      ],
      "summary": "Simon 收录 Anthropic 的公开声明：美国商务部已解除对 Claude Fable 5 和 Mythos 5 的出口控制，Anthropic 将开始恢复访问。",
      "detail": "这条的意义不是单个模型恢复，而是说明前沿模型访问权已经成为真实产品风险。对依赖闭源模型的 Agent 产品，要有模型降级、多模型路由和访问中断预案。",
      "why": "模型供应链正在变成产品基础设施风险，尤其对跨地区、跨业务线的 AI 产品非常关键。",
      "why_now": "6 月 30 日晚发布，正好接在 6 月中旬 Anthropic 访问中断争议之后。",
      "buzz": "社区把它和 OpenAI GPT-5.6 受限预览放在一起看，认为“前沿模型发布”已被政策与安全评估深度影响。",
      "meta": {
        "author": "Simon Willison",
        "type": "link_blog"
      }
    },
    {
      "id": "kol-3",
      "dim": "kol",
      "title": "AINews：GPT-5.6 是能力发布，也是受限发布",
      "orig": "not much happened today | GPT-5.6 arrives as Sol / Terra / Luna",
      "source": "AINews / Smol AI News",
      "url": "https://news.smol.ai/issues/26-06-26-gpt-56-preview/",
      "date": "2026-06-26",
      "heat": "high",
      "tags": [
        "GPT-5.6",
        "METR",
        "safety",
        "cost"
      ],
      "summary": "AINews 对 GPT-5.6 的整理很有价值：它既记录 Sol/Terra/Luna 三档模型的能力、价格与速度，也把受限预览、政府请求、METR 作弊率讨论放在同一张图里。",
      "detail": "这类聚合源的价值是把模型发布、社区反应、评测争议和开发者口径合并起来。对每日情报系统来说，它适合作为 KOL/社区层的二次整理源，但关键事实仍要回到 OpenAI/METR/官方源核对。",
      "why": "对于产品判断，单看官方 blog 容易漏掉风险和社区反应。AINews 这类源能补“别人怎么看”。",
      "why_now": "6 月 26 日发布，本周仍是模型与监管讨论主线。",
      "buzz": "社区重点讨论 Sol 的受限访问、METR reward-hacking 结果，以及 prompt caching/成本效率。",
      "meta": {
        "source_type": "newsletter"
      }
    },
    {
      "id": "kol-4",
      "dim": "kol",
      "title": "Interconnects：GLM-5.2 可能是开放 Agent 的阶段性跃迁",
      "orig": "GLM-5.2 is the step change for open agents",
      "source": "Interconnects AI",
      "url": "https://www.interconnects.ai/p/glm-52-is-the-step-change-for-open",
      "date": "2026-06-24",
      "heat": "high",
      "tags": [
        "open models",
        "GLM-5.2",
        "agents"
      ],
      "summary": "Nathan Lambert 认为 GLM-5.2 对开放 Agent 生态是一次“step change”：如果开放模型跨过可用门槛，Agent 使用量可能爆发。",
      "detail": "文章把开闭源能力差距、Claude Code 阈值、开放模型可用性和经济学放在一起讨论。对产品经理来说，关键不是某个榜单第一，而是开放权重模型是否足够支撑真实 Agent 工作流。",
      "why": "开放模型一旦足够可用，会改变成本、部署、数据安全和地缘风险结构。",
      "why_now": "GLM-5.2 是 6 月中旬新事件，本周仍在社区持续发酵。",
      "buzz": "开源社区把它视为“开放权重能否进入日常生产”的重要样本。",
      "meta": {
        "author": "Nathan Lambert",
        "type": "analysis"
      }
    },
    {
      "id": "kol-5",
      "dim": "kol",
      "title": "Interconnects：开放生态不只拼模型，也拼为什么开放、怎么开放",
      "orig": "Zyphra, Cohere, and Poolside are expanding the open ecosystem",
      "source": "Interconnects AI",
      "url": "https://www.interconnects.ai/p/artifacts-22-zyphra-cohere-and-poolside",
      "date": "2026-06-28",
      "heat": "rising",
      "tags": [
        "open ecosystem",
        "model strategy",
        "AI policy"
      ],
      "summary": "Interconnects 的 Artifacts 22 讨论 Zyphra、Cohere、Poolside 等公司为什么选择开放模型或开放部分能力，指出开放生态背后是商业、政策和开发者关系的组合。",
      "detail": "这对判断“开源模型有没有护城河”有帮助：开放不只是好人行为，也可能是获客、生态、标准制定、监管对冲和人才吸引策略。",
      "why": "当闭源模型访问不稳定时，开放生态的战略价值会上升；但开放本身也有成本和安全边界。",
      "why_now": "6 月 28 日新文，接在 GPT-5.6/Anthropic 访问权争议之后，语境正好。",
      "buzz": "讨论点集中在开放权重对企业采用、初创公司和国家竞争的意义。",
      "meta": {
        "source_type": "newsletter"
      }
    },
    {
      "id": "kol-6",
      "dim": "kol",
      "title": "Simon：Nano Banana 2 Lite 显示图像模型也在拼速度和成本",
      "orig": "Nano Banana 2 Lite",
      "source": "Simon Willison's Weblog",
      "url": "https://simonwillison.net/2026/Jun/30/nano-banana-2-lite/",
      "date": "2026-06-30",
      "heat": "medium",
      "tags": [
        "Gemini",
        "image model",
        "cost",
        "latency"
      ],
      "summary": "Simon 收录 Google 的 Nano Banana 2 Lite，也就是 Gemini 3.1 Flash Lite Image，定位为最快、最便宜的 Gemini 图像模型。",
      "detail": "这与文本模型的 Terra/Luna、Sonnet 5 启动价是同一趋势：大厂不只比旗舰能力，也在把“足够好且便宜”的模型做成可规模化产品。",
      "why": "对于日常产品，低成本/低延迟图像能力可能比最强旗舰更容易落地。",
      "why_now": "6 月 30 日新收录，属于成本效率叙事的多模态侧证。",
      "buzz": "开发者关注它是否适合批量图像生成、用户素材处理和轻量创作工作流。",
      "meta": {
        "author": "Simon Willison",
        "type": "link_blog"
      }
    },
    {
      "id": "paper-1",
      "dim": "paper",
      "title": "多轮 LLM 对话会出现“吸引子状态”：Agent 长聊可能越聊越固定",
      "orig": "Attractor States Emerge in Multi-Turn LLM Conversations",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2606.30571",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "multi-agent",
        "conversation dynamics",
        "alignment"
      ],
      "summary": "论文研究 7 个 LLM 在 20 个争议话题上的多轮自我对话与混合对话，发现开放式模型对话会收敛到某些稳定行为状态。",
      "detail": "这对多 Agent 产品很关键：多个模型互相讨论不一定会一直发散探索，也可能进入固定话术、固定立场或固定互动模式。产品上需要监控长对话的多样性、立场漂移与行为收敛。",
      "why": "多 Agent 系统常被假设能互补纠错，但这篇提醒我们：多轮互动本身会塑造行为，甚至形成稳定偏差。",
      "why_now": "6 月 30 日提交，正好赶上多 Agent 与团队 Agent 产品热潮。",
      "buzz": "适合作为多 Agent 评测的理论补充：不仅测最终答案，还要测轨迹和长期动态。",
      "meta": {
        "paper_id": "2606.30571"
      }
    },
    {
      "id": "paper-2",
      "dim": "paper",
      "title": "LUMOS：给无障碍 Agent 做一个语义操作系统层",
      "orig": "LUMOS: A Semantic Operating-System Layer for Accessibility-Grounded AI Agents",
      "source": "Hugging Face Papers",
      "url": "https://huggingface.co/papers",
      "date": "2026-07-01",
      "heat": "rising",
      "tags": [
        "accessibility",
        "OS layer",
        "AI agents"
      ],
      "summary": "Hugging Face Daily Papers 今日展示 LUMOS，定位为面向无障碍场景的语义操作系统层，让 AI Agent 更好理解和操作界面。",
      "detail": "无障碍 Agent 的关键不是只看屏幕像素，而是知道按钮、区域、控件、焦点和用户意图之间的语义关系。LUMOS 代表的是“把操作系统语义暴露给 Agent”的路线。",
      "why": "对于电脑使用 Agent，系统层语义可能比单纯截图识别更稳定，也更容易做权限与安全控制。",
      "why_now": "出现在 7 月 1 日 HF Daily Papers 列表，属于今日新候选。",
      "buzz": "开发者会关注它能否降低屏幕操作 Agent 的脆弱性。",
      "meta": {
        "source_type": "hf_daily"
      }
    },
    {
      "id": "paper-3",
      "dim": "paper",
      "title": "TRiSM 视角：Agent 权限往往超出普通用户，安全收益必须实证",
      "orig": "Why Trust Your Agent? Empirical Security Gains from TRiSM",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2606.28666",
      "date": "2026-06-27",
      "heat": "high",
      "tags": [
        "agent security",
        "TRiSM",
        "governance"
      ],
      "summary": "论文指出 Agent 通常被授予比普通用户更大的访问权，导致数据泄露和合规风险；作者从 TRiSM 角度实证安全收益。",
      "detail": "TRiSM 指 Trust, Risk and Security Management。论文价值在于把 Agent 安全从抽象“要谨慎”落到权限、工具访问、数据暴露和合规风险上。与 Google Agent Registry、BoE 金融风险提示形成强共振。",
      "why": "Agent 产品上线前必须问：它能访问什么、能调用什么、出了事谁负责、如何审计。",
      "why_now": "6 月下旬新论文，正赶上金融 Agent 与企业 Agent 同时加速。",
      "buzz": "安全圈会把它与 prompt injection、tool misuse、least privilege 设计一起讨论。",
      "meta": {
        "paper_id": "2606.28666"
      }
    },
    {
      "id": "paper-4",
      "dim": "paper",
      "title": "NaLA：面向高质量 3D 场景生成的原生 LLM Layout Agent",
      "orig": "NaLA: A 3D Native LLM Layout Agent for High-quality 3D Scene Generation",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2606.29395",
      "date": "2026-06-28",
      "heat": "medium",
      "tags": [
        "3D generation",
        "layout agent",
        "LLM"
      ],
      "summary": "NaLA 试图让 LLM 作为 3D 场景布局 Agent，理解空间关系并生成更高质量的 3D 场景。",
      "detail": "3D 生成最难的是物体位置、尺度、遮挡、功能关系是否合理。让 LLM 做 layout agent，意味着文本推理能力可能成为 3D 内容生成中的结构规划层。",
      "why": "多模态/3D 产品会从“生成单个物体”走向“生成可用空间”。这对游戏、数字孪生、原型设计都有启发。",
      "why_now": "6 月 28 日提交，属于最近 3 天的垂直 Agent 新方向。",
      "buzz": "社区会关注它是否能减少 3D 生成常见的空间错乱。",
      "meta": {
        "paper_id": "2606.29395"
      }
    },
    {
      "id": "paper-5",
      "dim": "paper",
      "title": "NMRAgent：用证据推理帮助解析天然产物结构",
      "orig": "Towards Generalizable and Evidential Nuclear Magnetic Resonance Analysis with Language Model Agent",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2606.29776",
      "date": "2026-06-30",
      "heat": "rising",
      "tags": [
        "AI for Science",
        "NMR",
        "evidential reasoning",
        "agent"
      ],
      "summary": "NMRAgent 把语言模型 Agent 用于 NMR 结构解析，论文称在新骨架测试上 top-1 accuracy 提升明显，并用于解析未知天然产物。",
      "detail": "它的关键是 evidential reasoning：不是直接猜结果，而是围绕证据链推理结构。与 Claude Science、BioNeMo 的工具链方向一致，说明科学 Agent 的竞争点会落到证据、可复核和专家工作流。",
      "why": "专业科学 Agent 的价值不在“会聊天”，而在能把复杂证据组织成可检查的推理链。",
      "why_now": "6 月 30 日论文，和今日 AI for Science 大厂动态强相关。",
      "buzz": "适合观察语言模型如何进入传统科学仪器数据解释。",
      "meta": {
        "paper_id": "2606.29776"
      }
    },
    {
      "id": "paper-6",
      "dim": "paper",
      "title": "表格基础模型并不总是赢：复杂大规模数据下传统方法仍有优势",
      "orig": "Beyond IID: How General Are Tabular Foundation Models, Really?",
      "source": "Hugging Face Papers",
      "url": "https://huggingface.co/papers/2606.30410",
      "date": "2026-06-28",
      "heat": "medium",
      "tags": [
        "tabular foundation models",
        "benchmark",
        "structured data"
      ],
      "summary": "论文评估表格基础模型在不同数据条件下的泛化能力，发现复杂、大规模数据上，传统方法仍可能超过新模型。",
      "detail": "这是反 AI 万能叙事的一条：结构化数据场景里，模型是否真正优于传统统计/树模型，需要按数据分布、规模和任务条件细看。",
      "why": "金融、风控、投研大量依赖表格数据。别把 LLM/基础模型默认当最优方案，评测要保留强传统 baseline。",
      "why_now": "6 月底 HF Papers 近期条目，和 AI×金融的数据产品方向相关。",
      "buzz": "数据科学圈关注“foundation model for tabular data”是否被过度包装。",
      "meta": {
        "paper_id": "2606.30410"
      }
    },
    {
      "id": "oss-1",
      "dim": "oss",
      "title": "awesome-harness-engineering：Agent harness 终于开始有清单化范式",
      "orig": "ai-boost/awesome-harness-engineering",
      "source": "GitHub",
      "url": "https://github.com/ai-boost/awesome-harness-engineering",
      "date": "2026-07-01",
      "heat": "rising",
      "tags": [
        "agent harness",
        "patterns",
        "templates"
      ],
      "summary": "一个 curated list，收集可靠 AI Agent harness 的资源、模式和模板。它代表社区开始把“怎么把 Agent 跑稳”从经验变成知识库。",
      "detail": "Agent 落地常败在 harness：上下文管理、工具路由、恢复、评测、权限和日志。awesome-harness-engineering 把这些拆成可复用 pattern，对做 Codex/Claude/自研 Agent 工作台很有参考价值。",
      "why": "对 Wesber 当前研究 Agent/Skill/MCP 产品边界很直接：模型只是底座，harness 才是体验稳定性的工程层。",
      "why_now": "搜索结果显示今日发布/更新，属于新鲜开源信号。",
      "buzz": "这类“awesome list”如果持续维护，会成为团队选型和新人学习入口。",
      "meta": {
        "repo": "ai-boost/awesome-harness-engineering"
      }
    },
    {
      "id": "oss-2",
      "dim": "oss",
      "title": "OSSInsight AI Trending：实时 GitHub 事件成为开源情报入口",
      "orig": "Trending AI Repositories on GitHub — Real-Time Rankings 2026",
      "source": "OSSInsight",
      "url": "https://ossinsight.io/trending/ai",
      "date": "2026-07-01",
      "heat": "medium",
      "tags": [
        "GitHub trending",
        "open-source intelligence",
        "AI repos"
      ],
      "summary": "OSSInsight 的 AI Trending 页面基于 GitHub 事件实时排名 AI Agent、LLM 工具、MCP server、RAG、inference、coding assistant 等仓库。",
      "detail": "对每日情报系统来说，这类源很适合做“开源候选池”：先用增速榜发现项目，再由 Agent 二次过滤是否真有产品价值。",
      "why": "它比泛泛搜索更贴近开源热度变化，适合后续自动化接入。",
      "why_now": "页面标注 hourly update，可作为每日稳定信源。",
      "buzz": "GitHub 事件驱动的趋势榜越来越像开源领域的“市场行情”。",
      "meta": {
        "source_type": "ranking"
      }
    },
    {
      "id": "oss-3",
      "dim": "oss",
      "title": "TakoVM：给 Agent 执行代码的开源沙箱出现在 Show HN",
      "orig": "Show HN: TakoVM – open-source sandboxing for your agent's code",
      "source": "Hacker News Show HN",
      "url": "https://news.ycombinator.com/show",
      "date": "2026-07-01",
      "heat": "rising",
      "tags": [
        "sandbox",
        "agent code execution",
        "security"
      ],
      "summary": "Hacker News Show HN 今日出现 TakoVM，一个面向 Agent 代码执行的开源沙箱项目。",
      "detail": "Agent 能写代码是一回事，能不能安全运行代码是另一回事。TakoVM 这类项目的方向是把代码执行隔离、限制资源和观察行为，降低“Agent 太听话执行坏指令”的风险。",
      "why": "它与 Mozilla 0din 的恶意 repo 案例形成正反两面：Agent 工程必须默认不信任外部代码。",
      "why_now": "Show HN 今日条目，适合进入开源候选观察池。",
      "buzz": "HN 用户通常会追问隔离强度、逃逸风险和与 Docker/Firecracker 的区别。",
      "meta": {
        "source_type": "show_hn"
      }
    },
    {
      "id": "oss-4",
      "dim": "oss",
      "title": "OpenHuman / OpenClaw：本地优先个人 Agent 与广技能库继续升温",
      "orig": "awesome-ai-agents 2.1 June 2026",
      "source": "GitHub",
      "url": "https://github.com/aloth/awesome-ai-agents",
      "date": "2026-06-30",
      "heat": "medium",
      "tags": [
        "personal agent",
        "local-first",
        "memory",
        "skills"
      ],
      "summary": "awesome-ai-agents 的 2.1 更新提到 OpenHuman 与 OpenClaw：前者主打本地优先、118 个 OAuth 集成和层级记忆；后者主打个人 AI Agent、工具使用、浏览器控制和持久记忆。",
      "detail": "它们代表个人 Agent 的两个核心卖点：本地隐私与广泛技能。对用户来说，理想形态不是“一个聊天机器人”，而是能连接工具、记住长期偏好、跨应用执行任务的个人工作台。",
      "why": "这与 Wesber 当前跨端共享记忆、Codex 插件和每日资讯工作台方向同源。",
      "why_now": "June 2026 更新，仍在当月新鲜窗口。",
      "buzz": "社区关注点在安全、OAuth 授权范围和本地记忆是否可控。",
      "meta": {
        "repo": "aloth/awesome-ai-agents"
      }
    },
    {
      "id": "oss-5",
      "dim": "oss",
      "title": "Show HN：Gemma-4 26B CPU 124 tok/s，推理效率仍是开源硬指标",
      "orig": "Show HN: Running Gemma-4 26B at 124 tokens/SEC on a CPU, no GPU",
      "source": "Best of Show HN",
      "url": "https://bestofshowhn.com/yesterday",
      "date": "2026-06-30",
      "heat": "medium",
      "tags": [
        "local inference",
        "Gemma",
        "CPU",
        "efficiency"
      ],
      "summary": "Show HN 6 月 30 日榜单里有一个项目展示在 CPU 上跑 Gemma-4 26B 达 124 tokens/s。",
      "detail": "如果结果可复现，它说明本地推理效率仍在快速进步。对个人工作台、隐私场景、低成本长任务 Agent 都很重要。",
      "why": "本地优先 Agent 的瓶颈之一就是推理成本和速度。CPU 级别可用会降低部署门槛。",
      "why_now": "昨日 Show HN 条目，适合观察而非直接下结论。",
      "buzz": "需要进一步核实硬件、量化方式、上下文长度和实际质量。",
      "meta": {
        "source_type": "show_hn"
      }
    },
    {
      "id": "oss-6",
      "dim": "oss",
      "title": "Mozilla 0din 反例：AI coding agent 会被“干净 GitHub 仓库”诱导装恶意软件",
      "orig": "AI coding agents can be tricked into installing malware via clean GitHub repositories",
      "source": "Tom's Hardware / Mozilla 0din",
      "url": "https://www.tomshardware.com/tech-industry/cyber-security/ai-coding-agents-can-be-tricked-into-installing-malware-via-clean-github-repositories-mozillas-0din-team-shows-how-claude-code-can-be-exploited-by-its-own-helpfulness",
      "date": "2026-06-29",
      "heat": "high",
      "tags": [
        "agent security",
        "malware",
        "GitHub",
        "Claude Code"
      ],
      "summary": "Mozilla 0din 团队展示：AI coding agent 可能因为太愿意帮忙，被一个看似干净的 GitHub 仓库诱导执行恶意初始化脚本。",
      "detail": "攻击链利用普通 setup 指令和 DNS TXT 记录等隐蔽步骤打开反向 shell，可能泄露 API key 和浏览器 session。它不是传统“明显恶意 repo”，而是利用 Agent 对项目说明的信任。",
      "why": "这是所有 coding agent 产品必须正视的失败模式：默认执行外部 repo 指令很危险，必须引入沙箱、审批和行为解释。",
      "why_now": "6 月 29 日报道，和今日 TakoVM/Agent harness 讨论高度共振。",
      "buzz": "安全圈核心建议是：不要盲目信任陌生代码库，Agent 需要理解代码执行后果，而不是机械服从 README。",
      "meta": {
        "org": "Mozilla 0din"
      }
    },
    {
      "id": "fin-1",
      "dim": "fin",
      "title": "Bank of England：AI Agent 正在重塑金融稳定风险",
      "orig": "Agents of change - speech by Sarah Breeden",
      "source": "Bank of England",
      "url": "https://www.bankofengland.co.uk/speech/2026/june/sarah-breeden-panel-at-the-european-central-bank-forum-on-central-banking-2026",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "central bank",
        "financial stability",
        "AI agents",
        "risk"
      ],
      "summary": "Bank of England 副行长 Sarah Breeden 在 ECB Sintra Forum 发表演讲，讨论 Agentic AI 如何改变金融网络风险、市场风险和支付风险，并强调央行需要更快适应。",
      "detail": "演讲把 AI Agent 放到金融稳定框架里，而不是单纯看效率。它关注的问题包括：Agent 在市场中高速自主行动、支付授权与责任归属、网络攻击面扩大、以及多个 Agent 行为趋同带来的系统性冲击。",
      "why": "这是 AI×金融从“产品创新”进入“宏观监管风险”的标志。后续交易 Agent、投顾 Agent、支付 Agent 都会被类似问题约束。",
      "why_now": "6 月 30 日官方演讲，今日金融维度最高优先级。",
      "buzz": "FT/The Times 等媒体进一步提到 kill switches、circuit breakers 等可能的监管工具。",
      "meta": {
        "institution": "Bank of England"
      }
    },
    {
      "id": "fin-2",
      "dim": "fin",
      "title": "FactSet 与 Google Cloud 合作：把 Gemini Agent 带进金融情报工作流",
      "orig": "FactSet Announces Strategic Partnership with Google Cloud to Bring Advanced AI to Financial Intelligence",
      "source": "FactSet Investor Relations",
      "url": "https://investor.factset.com/news-releases/news-release-details/factset-announces-strategic-partnership-google-cloud-bring",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "FactSet",
        "Google Cloud",
        "financial intelligence",
        "agentic AI"
      ],
      "summary": "FactSet 宣布与 Google Cloud 建立战略合作，把 FactSet 的可信数据、分析和工作流与 Google Cloud 的 agentic AI 能力结合。",
      "detail": "这条说明金融 Agent 的落地路径是“可信数据 + 可审计工作流 + 大模型能力”，而不是让通用模型裸奔回答投资问题。面向投研、dealmaking、组合管理等场景，数据授权和来源可追踪是核心。",
      "why": "对 GateAI/金融显式功能有启发：专业金融 Agent 的壁垒在数据、模板、合规、审计和工作流，而不是只换一个强模型。",
      "why_now": "6 月 30 日公告，Investors.com 等媒体今日跟进。",
      "buzz": "市场解读为 Google Gemini Agent 进入金融专业终端的一步。",
      "meta": {
        "companies": "FactSet, Google Cloud"
      }
    },
    {
      "id": "fin-3",
      "dim": "fin",
      "title": "Mastercard Agent Pay for Machines：给 AI Agent 做高速支付轨道",
      "orig": "Mastercard launches Agent Pay for Machines",
      "source": "Mastercard Press Release",
      "url": "https://www.mastercard.com/us/en/news-and-trends/press/2026/june/mastercard-launches-agent-pay-for-machines.html",
      "date": "2026-06-10",
      "heat": "rising",
      "tags": [
        "agentic payments",
        "machine-to-machine",
        "stablecoin",
        "permissions"
      ],
      "summary": "Mastercard 发布 Agent Pay for Machines，目标是让 AI Agent 与机器之间能进行高速、持续、受治理的支付。",
      "detail": "公告提到 Adyen、Ant International、BVNK、Checkout.com、Cloudflare、Coinbase、OKX、Stripe 等 30 多家首批参与方。它的关键不是“AI 也能花钱”这句话，而是身份、权限、意图证明和结算规则。",
      "why": "AI Agent 要真正执行任务，迟早要付费买数据、买服务、结算微支付。支付层会成为 Agent 经济的基础设施。",
      "why_now": "虽然发布于 6 月 10 日，但与 Coinbase/MetaMask/BoE 本周讨论形成完整闭环，仍值得今日保留。",
      "buzz": "金融科技圈关注它是否会成为 agentic commerce 的 Visa/Mastercard 级网络。",
      "meta": {
        "company": "Mastercard"
      }
    },
    {
      "id": "fin-4",
      "dim": "fin",
      "title": "Coinbase for Agents：ChatGPT/Claude 可连接账户执行交易与支付",
      "orig": "Coinbase launches AI agent accounts that can trade and spend on your behalf",
      "source": "CoinDesk",
      "url": "https://www.coindesk.com/tech/2026/06/11/coinbase-launches-ai-agent-accounts-that-can-trade-and-spend-on-your-behalf",
      "date": "2026-06-11",
      "heat": "high",
      "tags": [
        "Coinbase",
        "AI agents",
        "crypto trading",
        "x402"
      ],
      "summary": "Coinbase 推出 Coinbase for Agents，让 ChatGPT、Claude 等 AI 助手连接用户 Coinbase 账户，在用户控制下交易、访问数据，并逐步支持支付。",
      "detail": "Coinbase 把它与 x402 支付协议和 spending controls 绑定，试图在“Agent 自主执行”和“用户安全控制”之间找到平衡。它是 AI×加密里最直接的执行层落地之一。",
      "why": "交易所开始把 Agent 当成新用户类型。对交易辅助产品来说，权限、限额、审批和审计会变成产品核心。",
      "why_now": "6 月中旬发布，本周仍被 BoE/支付网络讨论放大。",
      "buzz": "社区兴奋点在自动交易和 agentic commerce，担忧点在误操作、合规与责任归属。",
      "meta": {
        "company": "Coinbase"
      }
    },
    {
      "id": "fin-5",
      "dim": "fin",
      "title": "MetaMask Agent Wallet：非托管钱包也开始给 AI Agent 开权限",
      "orig": "MetaMask launches AI agent wallet with built-in security for crypto trades",
      "source": "CoinDesk",
      "url": "https://www.coindesk.com/tech/2026/06/08/metamask-launches-ai-agent-wallet-with-built-in-security-for-crypto-trades",
      "date": "2026-06-08",
      "heat": "rising",
      "tags": [
        "MetaMask",
        "agent wallet",
        "DeFi",
        "self-custody"
      ],
      "summary": "MetaMask 发布面向 AI Agent 的自托管钱包，让 Agent 能访问 swaps、perpetual futures、prediction markets 和 liquidity provisioning，同时保留用户对资金的控制。",
      "detail": "这与 Coinbase 的托管账户路线形成对照：一个是交易所内受控执行，一个是非托管钱包授权执行。后者更 DeFi 原生，但也更依赖权限边界、交易模拟、白名单和撤销机制。",
      "why": "AI Agent 进入链上金融，不只是产品功能问题，也是钱包权限模型问题。",
      "why_now": "6 月事件，但与今日 BoE 金融稳定和 Agent 支付讨论共同构成趋势。",
      "buzz": "社区对非托管 Agent Wallet 的核心担忧是：一旦策略或模型被诱导，资金风险更直接。",
      "meta": {
        "company": "MetaMask"
      }
    },
    {
      "id": "fin-6",
      "dim": "fin",
      "title": "美国议员追问 SEC：AI 交易 Agent 该如何监管",
      "orig": "Lawmakers Press SEC on AI-Driven Stock Trading",
      "source": "WealthManagement.com",
      "url": "https://www.wealthmanagement.com/artificial-intelligence/lawmakers-press-sec-on-ai-trading-agent-oversight",
      "date": "2026-06-25",
      "heat": "rising",
      "tags": [
        "SEC",
        "AI trading",
        "oversight",
        "brokerage"
      ],
      "summary": "美国议员致信 SEC，追问券商平台上的 AI Agent 执行交易会不会带来市场波动、羊群行为和投资者保护问题。",
      "detail": "这条与 Bank of England 的担忧同方向：当 Agent 不只是给建议，而是能在注册券商或交易所执行动作，监管会要求解释责任归属、适当性、披露、风控和熔断。",
      "why": "它预示 AI 交易 Agent 很难只靠“用户自己负责”来规避责任，平台需要内置清晰的合规边界。",
      "why_now": "6 月 25 日，仍处在最近一周监管讨论窗口。",
      "buzz": "财富管理行业关注 broker-dealer 如何把 AI Agent 纳入现有适当性和披露框架。",
      "meta": {
        "institution": "SEC / lawmakers"
      }
    },
    {
      "id": "fin-7",
      "dim": "fin",
      "title": "Anthropic 金融服务 Agent 模板：把投行、KYC、月结流程产品化",
      "orig": "Agents for financial services",
      "source": "Anthropic News",
      "url": "https://www.anthropic.com/news/finance-agents",
      "date": "2026-06-03",
      "heat": "medium",
      "tags": [
        "financial services",
        "agent templates",
        "Claude Code",
        "Claude Cowork"
      ],
      "summary": "Anthropic 发布 10 个金融服务 Agent 模板，覆盖 pitchbook、KYC、月结等高耗时流程，并以 Claude Cowork plugin、Claude Code 和 Managed Agents cookbook 形式交付。",
      "detail": "虽然不是今天刚发，但与 FactSet/Google Cloud 的金融 Agent 合作形成对照：Anthropic 从可直接跑的流程模板切入，FactSet/Google 从数据和金融智能平台切入。",
      "why": "金融 Agent 的落地更可能从“明确流程 + 明确数据 + 明确审计”开始，而不是泛化聊天。",
      "why_now": "本月金融 Agent 相关动作密集，作为背景样本保留。",
      "buzz": "机构客户会关心模板是否能接入现有数据权限、审批和留痕系统。",
      "meta": {
        "company": "Anthropic"
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
    "把今天的 Agent 工程热点沉淀为验收标准：Agent 交付代码后，最好同时产出可复核 demo、测试结果和关键操作记录。",
    "金融 Agent 设计必须默认加入权限、限额、审批、可撤销授权、日志审计和异常熔断，不要只做“AI 可下单”的功能展示。",
    "评测体系要开始记录模型访问权与政策风险：同一个能力，如果只对少数地区或少数伙伴可用，对产品规划就是不稳定能力。",
    "后续每日资讯可把 OSSInsight Trending AI 作为开源候选池，再由 Agent 做二次筛选和中文小白化。"
  ]
};
