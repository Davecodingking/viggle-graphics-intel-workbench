// 当日聚合数据（由 Daily Intelligence Workbench 生成）。
window.__DAILY__ = window.__DAILY__ || {};
window.__DAILY__["2026/07/02"] = {
  "date": "2026-07-02",
  "date_cn": "2026年7月2日 · 周四",
  "generated_at": "2026-07-02",
  "language": "zh",
  "refresh_note": "本轮为 X-first 优化后重跑：KOL 观点优先使用公开 X status/profile、Gate-News search_x 聚合与一手来源；部分 X 检索只能返回公开搜索摘要，已在 KOL 维度 notes 中标注。未触发 Lark 推送。",
  "market_mood": "今日 AI 情报主线在 X 上更清晰地聚焦三件事：AIEWF 带火 software factory / loops 叙事，前沿模型访问权与安全栈成为公开争议点，Google/OpenAI/Anthropic 的模型更新通过 X 形成最快传播。",
  "dimensions": [
    {
      "key": "lab",
      "cn": "AI 大厂动态",
      "overview": "大厂维度今天最重要的不是单一跑分，而是模型、工作台、访问权和开发者生态的组合信号。Anthropic 一边恢复 Fable/Mythos 访问并解释安全框架，一边把 Sonnet 5 与 Claude Science 推向规模化执行；OpenAI 继续用 GPT-5.6、DevDay 和模型下线节奏管理开发者预期。",
      "notes": "优先官方源；模型能力相关表述以厂商公告为主，不把社区猜测写成事实。"
    },
    {
      "key": "kol",
      "cn": "KOL 观点",
      "overview": "X-first 重跑后，KOL/前沿观点维度从 newsletter 退回到公开 X 信号：AIEWF、software factory、Claude Code/Codex loops、GPT-5.6、Fable/Mythos 访问权、Gemini 媒体模型等讨论优先引用 X status 或 X search 证据。newsletter 只作为交叉验证，不再作为主来源。",
      "notes": "优先使用 `site:x.com/<handle>/status`、公开 X status/profile 与 Gate-News search_x；本机未读取 X cookie/token。Gate-News search_x 对部分查询只给聚合摘要、不返回 tweet-level cited_tweets，因此对应条目会标注为 X aggregate signal。"
    },
    {
      "key": "paper",
      "cn": "前沿论文",
      "overview": "论文侧今天围绕 Agent 行为适配、运行时监管、全仓库修复、合成数据和本地记忆层展开。共同问题是：Agent 已经能做更多事，下一步要解决的是何时介入、怎样监督、如何留下证据。",
      "notes": "优先近 7 天 arXiv / Hugging Face 论文；偏方法论与产品启发，避免把未复现论文当成熟能力。"
    },
    {
      "key": "oss",
      "cn": "开源项目",
      "overview": "开源侧最值得看的是 Agent 运行时治理与供应链安全：TealTiger、deptrust、GitHub Advanced Security with agents 等项目把关注点从框架选择转向权限、成本、依赖漏洞和证据链。",
      "notes": "GitHub star、榜单排名会实时波动，今天只写方向性信号和可验证项目链接。"
    },
    {
      "key": "fin",
      "cn": "AI × 金融",
      "overview": "金融侧是机会与红线同日出现：FactSet 与 Google Cloud 把 Agent 带进机构投研，Coinbase 把 Agent 账户推向交易与支付；同时 Bank of England、IMF/BIS 相关讨论提示市场同质化、速度和责任归属风险。",
      "notes": "金融内容仅作行业观察，不构成投资建议；优先监管原文、公司公告和可信财经媒体。"
    }
  ],
  "hot_topics_today": [
    {
      "title": "前沿模型进入“能力发布 + 访问权治理”并行阶段",
      "heat": "high",
      "dims": [
        "lab",
        "kol"
      ],
      "summary": "OpenAI、Anthropic 的官方 X thread 把 GPT-5.6、Fable/Mythos 访问权和安全栈推到最前台。产品经理需要把模型能力、可用范围、政策限制和替代路线放在同一张风险表里。",
      "related": [
        "lab-1",
        "lab-5",
        "kol-3",
        "kol-4"
      ]
    },
    {
      "title": "Software factory 成为 Agent 工程的新共同语言",
      "heat": "high",
      "dims": [
        "kol",
        "oss"
      ],
      "summary": "X-first 重跑后，AIEWF 现场帖、swyx 的 domain expert/slop 讨论、Gate-News search_x 聚合共同显示：software factory / loops 已经从 newsletter 叙事变成 X 上的高频工程共识。",
      "related": [
        "kol-1",
        "kol-2",
        "kol-6",
        "oss-4"
      ]
    },
    {
      "title": "金融 Agent 的落地速度开始逼近监管红线",
      "heat": "high",
      "dims": [
        "fin",
        "paper"
      ],
      "summary": "Bank of England 公开讨论 agentic AI 对金融稳定、市场和支付的影响，FactSet/Google 与 Coinbase 则分别在机构数据工作流和交易账户上推进 Agent。下一步竞争点会是授权、限额、审计和熔断。",
      "related": [
        "fin-1",
        "fin-2",
        "fin-3",
        "paper-2"
      ]
    },
    {
      "title": "Agent 治理从模型安全扩展到运行时安全",
      "heat": "high",
      "dims": [
        "oss",
        "paper",
        "lab"
      ],
      "summary": "TealTiger、deptrust、GitHub Advanced Security with agents 与 Agent oversight 论文都指向同一个问题：Agent 的真实风险不只来自模型回答，还来自它能安装什么、调用什么、花多少钱、改哪些代码。",
      "related": [
        "oss-1",
        "oss-2",
        "oss-3",
        "paper-2",
        "lab-1"
      ]
    },
    {
      "title": "AI for Science 正在从 demo 走向工作台",
      "heat": "rising",
      "dims": [
        "lab",
        "paper"
      ],
      "summary": "Claude Science 与 Autodata/BioInsight 等论文共同说明，科学场景需要的不只是问答模型，而是能连接数据、工具、计算资源和可审计 artifact 的工作流。",
      "related": [
        "lab-3",
        "paper-4",
        "paper-5"
      ]
    },
    {
      "title": "开放 Agent 生态的竞争点变成“完整工程栈”",
      "heat": "rising",
      "dims": [
        "kol",
        "oss"
      ],
      "summary": "GLM-5.2、awesome-ai-agents、OSSInsight AI 趋势榜和各类 agent harness 项目说明，开源竞争不只是模型权重，而是模型、工具、评测、工作流和安全层能否组合成可用栈。",
      "related": [
        "kol-4",
        "oss-4",
        "oss-5",
        "oss-6"
      ]
    },
    {
      "title": "长程 Agent 的瓶颈转向记忆、兼容性和证据",
      "heat": "medium",
      "dims": [
        "paper",
        "oss"
      ],
      "summary": "RepoRescue、PROJECTMEM 和 whole-repo / pre-action gate 相关工作都在补长程 Agent 的底座：它要理解旧仓库、记住项目规则、在动作前先判断风险，并能留下可复核证据。",
      "related": [
        "paper-3",
        "paper-6",
        "oss-2"
      ]
    }
  ],
  "items": [
    {
      "id": "lab-1",
      "dim": "lab",
      "title": "Anthropic 恢复 Fable 5 / Mythos 5 访问，并公开解释安全分类器和 jailbreak 框架",
      "orig": "Redeploying Fable 5",
      "source": "Anthropic News",
      "url": "https://www.anthropic.com/news/redeploying-fable-5",
      "date": "2026-07-01",
      "heat": "high",
      "tags": [
        "Anthropic",
        "frontier model",
        "safety",
        "access control"
      ],
      "summary": "Anthropic 更新称 Claude Fable 5 和 Mythos 5 访问已恢复，并解释此前暂停、恢复和安全分类器更新的过程。",
      "detail": "这篇公告把模型发布、出口管制、网络安全能力、安全分类器、误杀率和行业 jailbreak 严重性框架放到同一叙事里。对产品侧的意义是：前沿模型已经不是单纯的 API 选择题，而是会受到政策、权限、地区、用途和安全分类器共同影响。",
      "why": "任何依赖前沿模型的 Agent 产品都要准备降级模型、区域限制、误拒绝和审计解释，否则能力上线后可能被访问权风险打断。",
      "why_now": "页面在 2026-07-01 更新，明确写到访问恢复。",
      "buzz": "社区讨论的焦点从“模型有多强”转向“模型什么时候能稳定可用、被谁可用、被什么机制限制”。",
      "meta": {
        "company": "Anthropic",
        "type": "policy_update"
      }
    },
    {
      "id": "lab-2",
      "dim": "lab",
      "title": "Claude Sonnet 5 上线：Anthropic 把规模化 Agent 执行层推到默认模型位",
      "orig": "Introducing Claude Sonnet 5",
      "source": "Anthropic News",
      "url": "https://www.anthropic.com/news/claude-sonnet-5",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "Claude",
        "coding agent",
        "execution layer"
      ],
      "summary": "Anthropic 发布 Claude Sonnet 5，强调在编码、工具使用、长程执行和专业任务上的提升，并进入 Claude Code 与 API。",
      "detail": "Sonnet 5 的产品位置很关键：它不是只展示极限能力的昂贵旗舰，而是被推到更大用户面和开发者工作流里的中坚模型。对 Agent 产品来说，真正影响成本结构的是这类默认执行层模型，而不是少数演示中的最强模型。",
      "why": "如果要做长期运行的自动化任务，稳定、便宜、可被大量调用的执行模型比单次 benchmark 更重要。",
      "why_now": "6 月 30 日发布后仍是今天开发者讨论和模型选型的核心变量。",
      "buzz": "开发者关注点集中在长任务 follow-through、工具调用稳定性和价格窗口。"
    },
    {
      "id": "lab-3",
      "dim": "lab",
      "title": "Claude Science 发布：科学 AI 从聊天框变成可审计工作台",
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
      "summary": "Anthropic 发布 Claude Science，定位为面向科学家的 AI 工作台，强调工具/包集成、计算资源和可审计 artifact。",
      "detail": "科学研究场景天然要求证据链、复现和数据处理。Claude Science 的信号不是“模型会回答科学问题”，而是把科学任务包装成可追踪工作流，接入工具、计算与 artifact。",
      "why": "垂直 Agent 会越来越像专业工作台，而不是通用聊天窗；这对金融投研、审计、法务等高信任场景也有启发。",
      "why_now": "与 Sonnet 5 同期发布，说明 Anthropic 在同时推进模型执行力和垂直工作流。"
    },
    {
      "id": "lab-4",
      "dim": "lab",
      "title": "OpenAI 宣布 DevDay 2026：开发者生态节奏延续到 9 月",
      "orig": "Announcing OpenAI DevDay 2026",
      "source": "OpenAI",
      "url": "https://openai.com/index/devday-2026/",
      "date": "2026-06-30",
      "heat": "medium",
      "tags": [
        "OpenAI",
        "developer ecosystem",
        "conference"
      ],
      "summary": "OpenAI 宣布 DevDay 2026 将在 9 月 29 日于旧金山举办，为开发者生态和平台路线图预留重要节点。",
      "detail": "DevDay 本身不是新模型发布，但它通常代表平台能力、SDK、Agent 工具链和商业政策的集中沟通窗口。对依赖 OpenAI 平台的团队，9 月底会是一次路线图校准点。",
      "why": "平台型公司通过开发者大会管理生态预期；产品规划需要把这类节点纳入模型/工具链选型节奏。",
      "why_now": "DevDay 官方页已公开，今天仍在开发者社区传播。"
    },
    {
      "id": "lab-5",
      "dim": "lab",
      "title": "OpenAI GPT-5.6 Sol 仍是本周前沿模型讨论中心",
      "orig": "Previewing GPT-5.6 Sol",
      "source": "OpenAI",
      "url": "https://openai.com/index/previewing-gpt-5-6-sol/",
      "date": "2026-06-26",
      "heat": "high",
      "tags": [
        "OpenAI",
        "GPT-5.6",
        "coding",
        "science"
      ],
      "summary": "OpenAI 上周预览 GPT-5.6 Sol，强调编码、科学与网络安全任务能力；今天相关社区讨论仍在延续。",
      "detail": "GPT-5.6 Sol 的意义在于把高难编码、科学、网络安全和 token 效率放进同一叙事。它也与模型可访问性、评测安全和受限发布策略绑定，适合作为观察前沿模型商业化节奏的样本。",
      "why": "对 Agent 产品来说，模型升级不只是准确率提高，还会改变任务边界、成本曲线和安全审查要求。",
      "why_now": "AINews 等社区源仍在围绕 GPT-5.6 的受限发布、评测和安全讨论做追踪。"
    },
    {
      "id": "lab-6",
      "dim": "lab",
      "title": "ChatGPT Release Notes 标记模型下线节奏，提示平台依赖要做生命周期管理",
      "orig": "ChatGPT Release Notes",
      "source": "OpenAI Help Center",
      "url": "https://help.openai.com/en/articles/6825453-chatgpt-release-notes",
      "date": "2026-06-26",
      "heat": "medium",
      "tags": [
        "OpenAI",
        "model lifecycle",
        "product operations"
      ],
      "summary": "OpenAI Release Notes 提到若干模型在 ChatGPT 侧的退役/变更节奏，是平台产品做模型生命周期管理的重要信号。",
      "detail": "模型能力不断升级的同时，旧模型也会退役。对企业产品来说，这会影响提示词、评测基线、成本、输出风格和用户习惯；不能只在上线时做一次适配。",
      "why": "模型生命周期管理应成为 Agent 产品的长期运维项：版本、评测、回滚、迁移说明都要留痕。",
      "why_now": "OpenAI 近期模型节奏密集，Release Notes 是最容易被忽略但最实用的产品运维源。"
    },
    {
      "id": "kol-1",
      "dim": "kol",
      "title": "swyx 在 AIEWF 现场把“Fable talk / Autoresearch / Keynotes”推到当天 X 讨论中心",
      "orig": "WF2026: Autoresearch & Keynotes ft. Anthropic, Google DeepMind",
      "source": "X / @swyx",
      "url": "https://x.com/swyx/status/2072356250998964673",
      "date": "2026-07-02",
      "heat": "high",
      "tags": [
        "AIEWF",
        "software factory",
        "frontier models",
        "KOL"
      ],
      "summary": "AIEWF 最后一日，swyx 围绕 Autoresearch、Anthropic / DeepMind keynotes 和 Fable talk 持续制造 X 讨论热度。",
      "detail": "这类现场 X 信号比会后长文更早反映工程圈注意力：前沿模型、研究自动化、软件工厂和 Agent workflow 被放在同一个大会语境中讨论。",
      "why": "对每日情报来说，X 上的大会现场帖能更快捕捉“工程圈正在把什么词连在一起”。今天的答案是 Autoresearch、Fable、Keynotes 与 software factory。",
      "why_now": "搜索结果显示该 X status 为今天发布，直接对应 7 月 2 日 AIEWF 现场。",
      "buzz": "X 讨论体现出 AIEWF 已成为 AI 工程圈的高密度信号场，而不只是会后 newsletter 的二次总结。",
      "x_src": [
        "https://x.com/swyx/status/2072356250998964673"
      ]
    },
    {
      "id": "kol-2",
      "dim": "kol",
      "title": "swyx 提到“without slop”的扩展方式：domain experts 成为 Agent 规模化关键",
      "orig": "we have been scaling without slop by working with aligned domain experts",
      "source": "X / @swyx",
      "url": "https://x.com/swyx/status/2070606851377672675",
      "date": "2026-06-27",
      "heat": "high",
      "tags": [
        "AI engineering",
        "domain experts",
        "quality control"
      ],
      "summary": "swyx 在 AIEWF 相关 X 帖中强调，通过 aligned domain experts 扩展覆盖范围，可以避免 AI 内容规模化后的“slop”。",
      "detail": "这条观点补上了 software factory 叙事里最容易被忽略的一环：规模化不是让 Agent 无限制生成，而是把领域专家、覆盖范围和质量控制嵌入生产循环。",
      "why": "如果做情报、研究或软件工厂类 Agent，domain expert 不是可选审核人，而是系统质量上限的一部分。",
      "why_now": "AIEWF 期间该帖被公开搜索命中，是今天 loops / software factory 讨论的上游 X 信号。",
      "buzz": "从“自动生成更多”转向“如何不制造 slop”，是工程圈成熟化的信号。",
      "x_src": [
        "https://x.com/swyx/status/2070606851377672675"
      ]
    },
    {
      "id": "kol-3",
      "dim": "kol",
      "title": "OpenAI 在 X 上强调 GPT-5.6 Sol 的 Terminal-Bench 2.1 表现",
      "orig": "GPT-5.6 Sol sets a new state of the art on Terminal-Bench 2.1",
      "source": "X / @OpenAI",
      "url": "https://x.com/OpenAI/status/2070555276370169969",
      "date": "2026-06-26",
      "heat": "high",
      "tags": [
        "OpenAI",
        "GPT-5.6",
        "Terminal-Bench",
        "coding agents"
      ],
      "summary": "OpenAI 官方 X thread 强调 GPT-5.6 Sol 在 Terminal-Bench 2.1 上达到新 SOTA，测试复杂命令行工作流中的规划、迭代和调试。",
      "detail": "这条 X 信号比官网长文更适合用于“前沿观点”维度：它明确把新模型价值锚定到终端工作流和 coding agent 可执行能力，而不是泛泛的聊天能力。",
      "why": "Terminal-Bench 这类评测正在成为 Agent 产品选型的新证据链，尤其适合衡量命令行、工具调用和长程调试能力。",
      "why_now": "近 7 天官方 X thread 仍是 GPT-5.6 社区讨论入口。",
      "buzz": "X 上围绕 GPT-5.6 的争议主要落在可访问性、评测可信度和安全边界。",
      "x_src": [
        "https://x.com/OpenAI/status/2070555276370169969"
      ]
    },
    {
      "id": "kol-4",
      "dim": "kol",
      "title": "Anthropic 在 X 上更新 Fable/Mythos 出口管制解除，访问权成为模型产品风险",
      "orig": "Department of Commerce has lifted export controls on Claude Fable 5 and Mythos 5",
      "source": "X / @AnthropicAI",
      "url": "https://x.com/AnthropicAI/status/2072106151890809341",
      "date": "2026-07-01",
      "heat": "high",
      "tags": [
        "Anthropic",
        "model access",
        "export control",
        "safety"
      ],
      "summary": "Anthropic 官方 X 表示已收到商务部解除 Claude Fable 5 / Mythos 5 出口管制的通知。",
      "detail": "这条 X 更新直接解释了为什么模型能力之外还必须关注访问权、地区、监管和恢复节奏。前沿模型产品不是“API 永远可用”，而是受政策与安全机制共同约束。",
      "why": "依赖前沿模型的 Agent 产品需要模型降级、替代路线和可解释的访问权风险管理。",
      "why_now": "7 月 1 日 X 更新，比长文解读更适合作为当天访问权变化的快讯源。",
      "buzz": "X 上该类消息通常会引发开发者对可用性、合规和模型供应商集中风险的讨论。",
      "x_src": [
        "https://x.com/AnthropicAI/status/2072106151890809341"
      ]
    },
    {
      "id": "kol-5",
      "dim": "kol",
      "title": "Logan Kilpatrick 在 X 上发布 Gemini API 新媒体模型，低延迟成为新卖点",
      "orig": "Introducing Nano Banana 2 Lite and Gemini Omni Flash",
      "source": "X / @OfficialLoganK",
      "url": "https://x.com/OfficialLoganK/status/2071988351083921690",
      "date": "2026-06-30",
      "heat": "medium",
      "tags": [
        "Gemini API",
        "media models",
        "latency",
        "developer platform"
      ],
      "summary": "Google AI Studio / Gemini API 负责人 Logan Kilpatrick 在 X 上介绍 Nano Banana 2 Lite 与 Gemini Omni Flash，强调速度、价格和视频编辑能力。",
      "detail": "这条信号说明多模态模型竞争正在进入“低延迟 + 低成本 + API 可集成”的产品阶段，而不是只比单次生成质量。",
      "why": "对 Agent 工具链来说，低延迟媒体模型会打开交互式设计、视频编辑、实时翻译和工作流自动化的新场景。",
      "why_now": "公开搜索显示该 X status 为 2 天内发布。",
      "buzz": "开发者关注点集中在 latency-sensitive use cases：低延迟可能比最高画质更快进入产品。",
      "x_src": [
        "https://x.com/OfficialLoganK/status/2071988351083921690"
      ]
    },
    {
      "id": "kol-6",
      "dim": "kol",
      "title": "Gate-News search_x 聚合：X 上 Agent loops / Claude Code / Codex 讨论偏乐观但强调人工监督",
      "orig": "X discussion: AI agents, software factories, loops, coding agents",
      "source": "Gate-News search_x / X aggregate",
      "url": "https://x.com/search?q=AI%20agents%20software%20factories%20loops%20coding%20agents%20Claude%20Code%20OpenAI%20Codex%20AIEWF&src=typed_query&f=live",
      "date": "2026-07-02",
      "heat": "medium",
      "tags": [
        "X aggregate",
        "Claude Code",
        "OpenAI Codex",
        "loops",
        "human review"
      ],
      "summary": "Gate-News search_x 对近 7 天 X 讨论的聚合显示：Claude Code、OpenAI Codex、Agent loops 和 software factory 被频繁连在一起，整体情绪偏积极。",
      "detail": "聚合结果提到，主流叙事是 Agent 通过循环迭代提升编码效率，少数观点提醒幻觉、上下文管理和人工审核仍是硬边界。本次工具没有返回 tweet-level cited_tweets，因此按 X aggregate signal 处理。",
      "why": "这补足了单条 status 之外的群体讨论温度：software factory 的热度不是单个作者在讲，而是在 X 上形成了多点共识。",
      "why_now": "查询窗口为 2026-06-25 至 2026-07-02，覆盖今天。",
      "buzz": "X 聚合偏乐观，但“人工监督需求”仍是反复出现的现实约束。",
      "x_src": [
        "https://x.com/search?q=AI%20agents%20software%20factories%20loops%20coding%20agents%20Claude%20Code%20OpenAI%20Codex%20AIEWF&src=typed_query&f=live"
      ],
      "meta": {
        "provider": "Gate-News search_x",
        "tweet_level_evidence": false
      }
    },
    {
      "id": "paper-1",
      "dim": "paper",
      "title": "行为自适应对话 Agent：人格表达不能太弱也不能太强",
      "orig": "Behavior-Adaptive Conversational Agents: Toward a Fluid Personality Framework",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2607.01034",
      "date": "2026-07-02",
      "heat": "medium",
      "tags": [
        "conversational agents",
        "personality",
        "UX"
      ],
      "summary": "论文提出 fluid personality framework，研究对话 Agent 如何根据场景调节人格表达。",
      "detail": "作者关注的是 Agent 行为与用户感受之间的匹配，而不是单纯回答准确率。产品启发是：Agent 的“性格”应该是动态参数，需要随任务严肃度、用户状态和风险等级调整。",
      "why": "这对面向 PM、客服、教育、陪伴和专业工作台的 Agent 都有直接影响：人格一致性与场景适配要同时设计。",
      "why_now": "arXiv 编号 2607.01034，今天新增。"
    },
    {
      "id": "paper-2",
      "dim": "paper",
      "title": "运行时人类监管可被建模为双边私有信息的 contextual-bandit 游戏",
      "orig": "A Contextual-Bandit Oversight Game with Two-Sided Private Information",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2607.00155",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "oversight",
        "human-in-the-loop",
        "AI governance"
      ],
      "summary": "论文把 AI Agent 的运行时监管问题建模为人类与系统都掌握部分私有信息的博弈。",
      "detail": "对产品而言，监管不是简单加一个“人工确认”按钮，而是要决定哪些时刻值得打断、谁掌握判断信息、干预成本是多少、错误放行风险是多少。",
      "why": "金融、代码提交、交易、支付和合规 Agent 都需要这种精细化 oversight 模型。",
      "why_now": "与今天金融 Agent 风险和运行时治理主题高度相关。"
    },
    {
      "id": "paper-3",
      "dim": "paper",
      "title": "RepoRescue 研究 LLM Agent 处理全仓库兼容性修复的真实难点",
      "orig": "RepoRescue: An Empirical Study of LLM Agents on Whole-Repository Compatibility Rescue",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2607.01213",
      "date": "2026-07-02",
      "heat": "high",
      "tags": [
        "coding agents",
        "whole repository",
        "maintenance"
      ],
      "summary": "RepoRescue 关注 LLM Agent 在整个仓库中处理依赖、兼容性和生态漂移问题的能力。",
      "detail": "现实软件维护很少是单文件补丁，更多是版本变化、依赖冲突、测试失败和历史约束叠加。RepoRescue 的价值在于把 coding agent 拉回真实维护场景。",
      "why": "如果要做企业级 coding agent，必须评估它在旧仓库、复杂依赖和长链测试中的表现。",
      "why_now": "今天新增，正好呼应 software factory 与长程 Agent 讨论。"
    },
    {
      "id": "paper-4",
      "dim": "paper",
      "title": "Autodata：用 Agentic Data Scientist 生成训练/评测数据",
      "orig": "Autodata: An Agentic Data Scientist for High-Quality Synthetic Data",
      "source": "Hugging Face Papers",
      "url": "https://huggingface.co/papers/2606.25996",
      "date": "2026-06-28",
      "heat": "medium",
      "tags": [
        "synthetic data",
        "agentic data science",
        "evaluation"
      ],
      "summary": "Autodata 研究如何用 Agent 生成高质量合成训练和评测数据。",
      "detail": "模型和 Agent 的迭代越来越依赖数据生成、筛选、标注和评测闭环。Autodata 代表一种趋势：数据科学本身也被 Agent 化，但质量控制和偏差管理会变得更重要。",
      "why": "对任何 Agent 产品，评测数据和用户场景数据都会成为核心资产。",
      "why_now": "近几日 HF Papers 高关注，适合作为 AI for Science / eval workflow 的补充。"
    },
    {
      "id": "paper-5",
      "dim": "paper",
      "title": "BioInsight 展示多 Agent 编排在生物医学知识发现中的交互形态",
      "orig": "BioInsight: Multi-Agent Orchestration for Interactive Biomedical Knowledge Discovery",
      "source": "Hugging Face Papers",
      "url": "https://huggingface.co/papers",
      "date": "2026-07-02",
      "heat": "medium",
      "tags": [
        "biomedical AI",
        "multi-agent",
        "knowledge discovery"
      ],
      "summary": "BioInsight 出现在 HF Daily Papers，方向是用多 Agent 编排支持交互式生物医学知识发现。",
      "detail": "多 Agent 在科学场景的优势不是“聊天更热闹”，而是把检索、假设生成、证据检查、可视化和专家确认拆成不同角色。",
      "why": "这类工作说明垂直 AI 工作台会从单助手走向角色化编排。",
      "why_now": "今天出现在 HF Daily Papers，适合作为 Claude Science 之外的论文侧信号。"
    },
    {
      "id": "paper-6",
      "dim": "paper",
      "title": "PROJECTMEM：为 AI coding agent 增加本地优先记忆和动作前判断层",
      "orig": "PROJECTMEM",
      "source": "Hugging Face Papers",
      "url": "https://huggingface.co/papers/2606.12329",
      "date": "2026-06-14",
      "heat": "medium",
      "tags": [
        "agent memory",
        "MCP",
        "coding agents"
      ],
      "summary": "PROJECTMEM 提出面向 AI coding agent 的本地优先记忆和 pre-action gate 方案。",
      "detail": "长程 coding agent 最大的问题之一是忘记项目规则、重复踩坑、动作前不判断风险。PROJECTMEM 这类方向把记忆、判断和动作前拦截变成 Agent 的基础设施。",
      "why": "这和当前本地工作台、跨端共享记忆、自动化任务都有直接关联：Agent 要能记住规则，也要知道什么时候不能行动。",
      "why_now": "虽然不是今天新发，但与今天的 RepoRescue / software factory 主题高度互补。"
    },
    {
      "id": "oss-1",
      "dim": "oss",
      "title": "TealTiger：开源 Agent 运行时治理层，把安全、成本和证据链放到执行时",
      "orig": "agentguard-ai/tealtiger",
      "source": "GitHub",
      "url": "https://github.com/agentguard-ai/tealtiger",
      "date": "2026-07-01",
      "heat": "high",
      "tags": [
        "agent governance",
        "security",
        "runtime"
      ],
      "summary": "TealTiger 是开源 AI Agent 保护/治理 SDK，强调安全策略、成本追踪和结构化证据。",
      "detail": "Agent 进入生产后，运行时层的重要性会快速上升：它要知道哪些工具可用、每次调用是否越权、花费是否异常、执行证据是否可追踪。",
      "why": "这类项目会成为企业采用 Agent 的基础配套，而不是可有可无的安全插件。",
      "why_now": "GitHub 页面显示近期仍在活跃更新，适合作为今天运行时治理趋势的代表。"
    },
    {
      "id": "oss-2",
      "dim": "oss",
      "title": "deptrust：面向 AI Agent 的依赖漏洞检查 CLI / MCP 信号升温",
      "orig": "Show HN: CLI that helps AI agents avoid vulnerable dependencies",
      "source": "Hacker News",
      "url": "https://news.ycombinator.com/item?id=48752948",
      "date": "2026-07-02",
      "heat": "high",
      "tags": [
        "dependency security",
        "MCP",
        "coding agents"
      ],
      "summary": "Hacker News 今日出现 deptrust 讨论，定位是帮助 AI Agent 在安装或推荐依赖前识别已知漏洞。",
      "detail": "Coding agent 常会自动安装包、升级依赖或建议组件。把漏洞检查做成 CLI/MCP，等于把供应链安全前置到 Agent 决策时刻。",
      "why": "未来 Agent 工具调用前的“动作前检查”会成为默认能力，尤其是包管理、shell、git、云资源等高风险动作。",
      "why_now": "Show HN 今天发布，和 Agent 运行时安全主题高度贴合。"
    },
    {
      "id": "oss-3",
      "dim": "oss",
      "title": "GitHub Advanced Security with AI coding agents：安全扫描被接入 Agent 工作流",
      "orig": "Use GitHub Advanced Security with AI coding agents",
      "source": "GitHub Docs",
      "url": "https://docs.github.com/en/code-security/how-tos/use-ghas-with-ai-coding-agents",
      "date": "2026-07-02",
      "heat": "medium",
      "tags": [
        "GitHub",
        "security",
        "coding agents"
      ],
      "summary": "GitHub 文档强调可在 AI coding agent 工作流中捕捉 secrets、依赖漏洞和不安全依赖。",
      "detail": "这说明安全能力正在从 CI 末端左移到 Agent 编码过程。Agent 不只是写代码，也会成为安全扫描、修复和审查的调用方。",
      "why": "研发工具产品应把 secret scanning、dependency alerts、policy checks 设计成 Agent 原生能力。",
      "why_now": "GitHub 文档页当前可访问，适合作为安全工具链方向的稳定源。"
    },
    {
      "id": "oss-4",
      "dim": "oss",
      "title": "OSSInsight AI Trending：实时观察 Agent 框架、MCP 与 LLM 工具热度",
      "orig": "OSSInsight Trending AI",
      "source": "OSSInsight",
      "url": "https://ossinsight.io/trending/ai",
      "date": "2026-07-02",
      "heat": "medium",
      "tags": [
        "GitHub trends",
        "OSS",
        "AI tools"
      ],
      "summary": "OSSInsight 提供 AI 类 GitHub 项目的实时趋势观察，可用来辅助发现 Agent 框架、MCP server 和 LLM 工具变化。",
      "detail": "单日榜单不能直接等同于长期价值，但它很适合做情报系统的“雷达”：发现突然活跃的新项目，再回到 GitHub README、issue、release 做二次验证。",
      "why": "每日资讯工作台需要这类动态源来补足官方博客之外的社区变化。",
      "why_now": "今天继续作为开源维度的实时信号源。"
    },
    {
      "id": "oss-5",
      "dim": "oss",
      "title": "awesome-ai-agents-2026：Agent 资源清单继续扩展，说明生态碎片化加剧",
      "orig": "awesome-ai-agents-2026",
      "source": "GitHub",
      "url": "https://github.com/caramaschiHG/awesome-ai-agents-2026",
      "date": "2026-07-02",
      "heat": "medium",
      "tags": [
        "awesome list",
        "agent ecosystem",
        "curation"
      ],
      "summary": "该 GitHub 清单收集 2026 年 AI Agent 相关工具、资源和项目，覆盖多个类别。",
      "detail": "清单类项目本身不是技术突破，但它们反映了生态碎片化：框架、记忆、浏览、编码、评测、安全、金融、个人助手都在快速分叉。",
      "why": "产品经理做 Agent 选型时，不能只看单个爆款项目，需要用分类清单建立版图。",
      "why_now": "今天开源搜索中仍是高相关入口。"
    },
    {
      "id": "oss-6",
      "dim": "oss",
      "title": "OpenClaw 优化指南和社区材料显示本地/开源 Agent 工程仍在升温",
      "orig": "OpenClaw optimization guide",
      "source": "GitHub",
      "url": "https://github.com/OnlyTerp/openclaw-optimization-guide",
      "date": "2026-07-02",
      "heat": "medium",
      "tags": [
        "OpenClaw",
        "agent framework",
        "local AI"
      ],
      "summary": "围绕 OpenClaw 的优化指南、市场和社区材料继续出现，说明本地/开源 Agent 工程栈仍在扩张。",
      "detail": "OpenClaw 相关内容代表一个方向：开发者不只关心模型，还关心 agent harness、性能调优、插件市场和本地部署体验。",
      "why": "如果开放 Agent 栈继续成熟，企业会在隐私、成本和可控性上有更多部署方案。",
      "why_now": "今日搜索中出现新的 OpenClaw 优化材料，可作为开源工程热度信号。"
    },
    {
      "id": "fin-1",
      "dim": "fin",
      "title": "Bank of England：agentic AI 正在重塑金融市场、支付和网络风险",
      "orig": "Agents of change",
      "source": "Bank of England",
      "url": "https://www.bankofengland.co.uk/speech/2026/june/sarah-breeden-panel-at-the-european-central-bank-forum-on-central-banking-2026",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "central bank",
        "financial stability",
        "agentic AI"
      ],
      "summary": "Bank of England 副行长 Sarah Breeden 在 ECB 论坛演讲中讨论 agentic AI 对金融体系的影响。",
      "detail": "演讲把 AI Agent 放到市场、支付、网络安全、监管协作和央行能力建设中看待。它说明金融监管者已经不再只讨论 AI 模型风险，而是在讨论自治系统如何影响金融稳定。",
      "why": "金融 Agent 产品需要内置授权、限额、审计、异常停止和责任归属，否则很难进入高信任场景。",
      "why_now": "6 月 30 日发布，今天被多家媒体继续引用。"
    },
    {
      "id": "fin-2",
      "dim": "fin",
      "title": "FactSet 与 Google Cloud 合作，把 Agentic AI 引入金融智能工作流",
      "orig": "FactSet Announces Strategic Partnership with Google Cloud",
      "source": "FactSet Investor Relations",
      "url": "https://investor.factset.com/news-releases/news-release-details/factset-announces-strategic-partnership-google-cloud-bring",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "FactSet",
        "Google Cloud",
        "financial intelligence"
      ],
      "summary": "FactSet 宣布与 Google Cloud 建立战略合作，将可信金融数据、分析和工作流与 Google Cloud 的 agentic AI 能力结合。",
      "detail": "这类合作的关键在于“可信数据 + 工作流 + Agent”。机构投研和企业金融不是缺聊天机器人，而是缺能在受控数据环境中完成任务的智能工作流。",
      "why": "AI × 金融的商业机会会优先出现在有高质量数据和既有工作流入口的公司。",
      "why_now": "6 月 30 日官方公告后，7 月 1 日多家财经媒体跟进解读。"
    },
    {
      "id": "fin-3",
      "dim": "fin",
      "title": "Coinbase 推出 AI Agent Accounts，让 Agent 可在授权下交易和支付",
      "orig": "Coinbase launches AI agent accounts that can trade and spend on your behalf",
      "source": "CoinDesk",
      "url": "https://www.coindesk.com/tech/2026/06/11/coinbase-launches-ai-agent-accounts-that-can-trade-and-spend-on-your-behalf",
      "date": "2026-06-11",
      "heat": "high",
      "tags": [
        "Coinbase",
        "AI agents",
        "crypto payments"
      ],
      "summary": "CoinDesk 报道 Coinbase 推出面向 AI Agent 的账户能力，使 Agent 可在用户授权和控制下交易、支付。",
      "detail": "这不是普通钱包功能，而是把 Agent 当成可执行经济行为的主体来设计。核心问题会变成：谁授权、额度多少、失败怎么办、欺诈如何识别、责任由谁承担。",
      "why": "Agent 支付/交易是 AI × Crypto 的关键基础设施，也会暴露最尖锐的产品责任问题。",
      "why_now": "虽然发布在 6 月中旬，但在今天金融 Agent 监管讨论中仍是重要实践样本。"
    },
    {
      "id": "fin-4",
      "dim": "fin",
      "title": "财经媒体跟进 FactSet/Google：投资组合、交易和企业财务将成为 Agent 落地入口",
      "orig": "FactSet, Google: New Generation Of AI Agents For Finance",
      "source": "Investor's Business Daily",
      "url": "https://www.investors.com/news/factset-google-new-generation-of-ai-agents-finance/",
      "date": "2026-07-01",
      "heat": "medium",
      "tags": [
        "finance agents",
        "portfolio operations",
        "corporate finance"
      ],
      "summary": "IBD 报道 FactSet/Google 合作，讨论金融市场中的新一代 AI Agent。",
      "detail": "媒体解读把场景落到 portfolio operations、deal advisory、corporate finance 等具体工作。对产品侧来说，这些场景共同特点是数据密集、流程明确、结果可审查。",
      "why": "金融 Agent 的首批高价值场景不会是完全自主交易，而是辅助研究、组合运营、交易前检查和文档生成。",
      "why_now": "7 月 1 日报道，是官方公告之后的市场解读。"
    },
    {
      "id": "fin-5",
      "dim": "fin",
      "title": "IMF/BIS 相关讨论提醒：AI 热潮与杠杆可能放大市场脆弱性",
      "orig": "IMF's Tobias Adrian on AI risks / BIS warning on AI frenzy",
      "source": "WSJ / MarketWatch",
      "url": "https://www.wsj.com/livecoverage/stock-market-today-dow-sp-500-nasdaq-07-01-2026/card/-money-quote-imf-s-tobias-adrian-on-ai-risks-HgpFBR2ypNWQeXLDP5Tn",
      "date": "2026-07-01",
      "heat": "medium",
      "tags": [
        "IMF",
        "BIS",
        "market risk"
      ],
      "summary": "财经媒体继续引用 IMF/BIS 相关观点，提示 AI 投资热潮、杠杆和估值拥挤可能带来市场风险。",
      "detail": "这些风险并非直接否定 AI 产业，而是提醒：当大量资金、相似模型和自动化策略拥挤到同一方向，市场共振和流动性风险会被放大。",
      "why": "AI × 金融产品不能只讲效率提升，也要设计极端行情、同质化策略和自动化失控的保护机制。",
      "why_now": "7 月 1 日 WSJ/MarketWatch 等媒体仍在跟进相关讨论。"
    },
    {
      "id": "fin-6",
      "dim": "fin",
      "title": "“kill switch / circuit breaker” 成为 AI 自主交易讨论中的产品关键词",
      "orig": "AI agents market meltdown / kill switches for autonomous trading",
      "source": "The Times / Financial Times",
      "url": "https://www.thetimes.com/business/technology/article/bank-of-england-ai-agents-market-meltdown-h36jqjzc6",
      "date": "2026-07-01",
      "heat": "high",
      "tags": [
        "autonomous trading",
        "kill switch",
        "risk controls"
      ],
      "summary": "英媒围绕 Bank of England 演讲继续讨论 AI Agent 可能引发市场共振，并把 kill switch / circuit breaker 作为治理关键词。",
      "detail": "产品启发非常直接：一旦 Agent 可以下单、调仓、支付或移动资产，就必须有紧急停止、限额、人工复核和异常监控。否则“更快的执行”也会变成“更快的事故”。",
      "why": "金融 Agent 的护栏不是合规装饰，而是产品核心功能。",
      "why_now": "7 月 1 日多家金融媒体围绕该主题跟进。"
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
    "把今天的前沿模型信号拆成四列：能力提升、访问范围、政策/安全限制、可替代模型；以后评估 Agent 方案时按这四列做风险表。",
    "为自己的 Agent 产品草拟一个最小运行时治理清单：工具白名单、成本上限、动作前确认、日志证据、异常停止。",
    "用 software factory 视角重写一个现有工作流：从需求、计划、执行、review、部署、反馈六步找出哪些环节可以让 Agent 参与循环。",
    "金融/交易类 Agent 不要先想“自动赚钱”，先画授权、限额、审计、撤销、熔断五个产品模块。",
    "下次阅读开源 Agent 项目时，不只看 star，还看它是否处理 memory、dependency security、tool permission、evaluation 和 observability。"
  ]
};
