// 当日聚合数据（由 Daily Intelligence Workbench 生成）。
window.__DAILY__ = window.__DAILY__ || {};
window.__DAILY__["2026/07/21::general-ai"] = {
  "date": "2026-07-21",
  "date_cn": "2026年7月21日 · 周二",
  "generated_at": "2026-07-21",
  "profile": "general-ai",
  "language": "zh",
  "refresh_note": "补齐 2026-W30 泛 AI 周报；检索窗口为 2026-07-14 至 2026-07-21，先扫研究雷达与公开 X，再回到官方研究页、模型博客、arXiv、GitHub 和监管/公司页面验证。",
  "market_mood": "本周最强主线是 Kimi K3 把开放权重模型推进到 2.8T 参数、1M context 与长程 Agent 工作流，同时 AgentCompass、PerceptionBench 和 Grok Build 暴露了评测碎片化、视觉猜测与 Agent 数据边界三类工程问题。AI×金融侧从“聊天回答”向受约束的行动型助手推进，但监管和责任边界仍是先决条件。",
  "dimensions": [
    {
      "key": "lab",
      "cn": "AI 大厂动态",
      "en": "AI Labs",
      "icon": "lab",
      "color": "#2563eb",
      "overview": "Moonshot 推出 Kimi K3，Google DeepMind 发布 bioresilience 方法框架。",
      "notes": "优先使用实验室官方页面；模型指标主要来自发布方，尚需独立复测。"
    },
    {
      "key": "kol",
      "cn": "KOL 观点",
      "en": "KOL Insights",
      "icon": "kol",
      "color": "#7c3aed",
      "overview": "公开 X 讨论集中在 Kimi K3 的开放权重价值、部署门槛与安全/可用性权衡。",
      "notes": "已执行 X-first；公开 provider 只能稳定读取 X 趋势聚合，未能可靠抽取指定 KOL 的 tweet-level status。两条 KOL 信号均回到 Kimi 官方技术博客核验，不能把趋势摘要当成单一作者原话。"
    },
    {
      "key": "paper",
      "cn": "前沿论文",
      "en": "Frontier Papers",
      "icon": "paper",
      "color": "#0d9488",
      "overview": "Agent 评测基础设施与原子视觉感知成为本周两条高复用研究线。",
      "notes": "采用 arXiv 与官方研究页；结论均受作者自报实验与尚未广泛复现限制。"
    },
    {
      "key": "oss",
      "cn": "开源项目",
      "en": "Open Source",
      "icon": "oss",
      "color": "#ea580c",
      "overview": "AgentCompass 与 Grok Build 提供可审计的评测和 Agent harness，但成熟度差异明显。",
      "notes": "优先官方 GitHub；不以 star 单独判断质量，Grok Build 的开放源码也不等同于历史数据风险已经消失。"
    },
    {
      "key": "fin",
      "cn": "AI × 金融",
      "en": "AI × Finance",
      "icon": "fin",
      "color": "#db2777",
      "overview": "Visa 与英国政府都把 Agentic AI 引入金融服务议程，重点是受控行动、审计和消费者保护。",
      "notes": "栏目只讨论 AI 与金融工作流/产业交叉，不构成股票建议，也不推导自动交易结论。"
    }
  ],
  "hot_topics_today": [
    {
      "title": "Kimi K3 把开放模型推到 3T 级",
      "heat": "high",
      "dims": [
        "lab",
        "kol"
      ],
      "summary": "规模、长上下文与 Agent case study 同时上台，但完整权重和技术报告尚未发布，独立验证是下一步。",
      "related": [
        "lab-kimi-k3",
        "kol-k3-open-weight",
        "kol-k3-deployment"
      ]
    },
    {
      "title": "Agent 评测从榜分转向轨迹与环境",
      "heat": "high",
      "dims": [
        "paper",
        "oss"
      ],
      "summary": "AgentCompass 将 benchmark、harness、environment 解耦，并加入容错运行与轨迹诊断，适合建立可重复的 Agent 回归线。",
      "related": [
        "paper-agentcompass",
        "oss-agentcompass"
      ]
    },
    {
      "title": "视觉模型可能在“猜”而非稳定感知",
      "heat": "medium",
      "dims": [
        "paper"
      ],
      "summary": "PerceptionBench 用重复提问与原子任务暴露感知不稳定，提示评测要关注一致性而非单次正确率。",
      "related": [
        "paper-perceptionbench"
      ]
    },
    {
      "title": "金融 Agent 进入受约束行动阶段",
      "heat": "medium",
      "dims": [
        "fin"
      ],
      "summary": "Visa 产品与英国政策计划都强调从洞察走向行动，但权限、责任、欺诈与人工接管必须先设计。",
      "related": [
        "fin-visa-assistant",
        "fin-uk-adoption-plan"
      ]
    }
  ],
  "items": [
    {
      "id": "lab-kimi-k3",
      "dim": "lab",
      "title": "Kimi K3：2.8T 参数、1M context 的开放前沿模型",
      "orig": "Kimi K3: Open Frontier Intelligence",
      "source": "Moonshot AI / Kimi",
      "url": "https://www.kimi.com/blog/kimi-k3",
      "date": "2026-07-16",
      "heat": "high",
      "tags": [
        "Kimi K3",
        "MoE",
        "Agent",
        "国产模型",
        "Open Weights"
      ],
      "summary": "Moonshot 发布 Kimi K3：总参数 2.8T，16/896 experts 激活，原生多模态与 1M-token context，面向长程 coding、knowledge work 和 reasoning。完整权重承诺在 7 月 27 日前发布。",
      "detail": "事实：Kimi K3 采用 Kimi Delta Attention、Attention Residuals、Stable LatentMoE、Gated MLA，并从 SFT 阶段进行 MXFP4 权重/MXFP8 激活的量化感知训练；官方称相对 K2 整体 scaling efficiency 提升约 2.5 倍。发布页给出 GPU kernel 优化、从零构建 MiniTriton、48 小时芯片设计、长程研究与可视化等案例，并明确建议用 64 个以上加速器的 supernode 部署。推断：真正可复用的价值不只是参数规模，而是训练、稀疏路由、长上下文缓存和 Agent harness 的协同设计。边界：所有主性能数字与案例主要由发布方提供，harness 不同会显著影响结果；官方也承认 K3 对 thinking history 敏感、可能过度主动，整体体验仍落后于最强闭源模型。完整技术报告和权重尚未落地，因此当前只能视为高价值待验证发布，而不是已被独立复现的结论。",
      "content_type": "technical_report",
      "depth": "deep",
      "method": "KDA + AttnRes + Stable LatentMoE（16/896 experts）+ MXFP4/MXFP8 QAT，并配套长程 Agent harness 与 KDA prefill cache。",
      "evidence": "官方列出 coding、kernel、compiler、knowledge work、多模态与内部 benchmark；给出 H200/H20 等硬件和部分 harness/运行设置。",
      "why": "开放模型首次跨到 2.8T 规模，且把模型结构、推理系统和 Agent 长程工作放在同一条产品链上。",
      "why_now": "完整权重计划 7 月 27 日前发布，当前适合提前准备独立复测与部署成本评估。",
      "key_points": [
        "2.8T 总参数，16/896 experts 激活",
        "原生视觉与 1M-token context",
        "官方建议 64+ accelerators supernode",
        "完整权重与技术报告尚待发布"
      ],
      "product_implications": [
        "Agent harness 必须完整回传 thinking history",
        "长上下文部署需同时评估 cache、通信域与成本",
        "对过度主动行为增加显式权限边界和审批点"
      ],
      "limitations": [
        "发布方自报结果，尚缺独立复现",
        "不同 harness 与 fallback 使跨模型比较不完全同口径",
        "本地/小集群运行门槛极高"
      ],
      "meta": {
        "source_quality": "官方模型技术博客；一手但带发布方自评偏差",
        "availability": "API/应用已上线，完整权重与技术报告承诺 2026-07-27 前发布"
      }
    },
    {
      "id": "lab-deepmind-bioresilience",
      "dim": "lab",
      "title": "DeepMind 与 Isomorphic Labs 发布 bioresilience 双轨框架",
      "orig": "Our approach to bioresilience",
      "source": "Google DeepMind",
      "url": "https://deepmind.google/blog/our-approach-to-bioresilience/",
      "date": "2026-07-16",
      "heat": "medium",
      "tags": [
        "AI Safety",
        "Biosecurity",
        "AI for Science"
      ],
      "summary": "两家机构提出双轨思路：降低前沿模型被滥用于生物威胁的风险，同时让政府、科学家与生物安全专家利用 AI 提升疫情和生物风险响应能力。",
      "detail": "事实：官方文章把 bioresilience 拆成预防滥用与提升防御能力两条线，并以 AlphaFold、IsoDDE、AlphaGenome 等能力说明 AI 既可能扩展风险，也能加速检测和响应。推断：这类框架会把模型访问控制、能力评估与科研工具链更紧密地绑定。边界：文章是方法与治理立场，不是新的实验 benchmark；具体执行标准、外部审计与效果数据仍有限。",
      "content_type": "official_research",
      "depth": "normal",
      "key_points": [
        "防滥用与增强防御双轨",
        "生物能力评估需结合实际科研工作流",
        "政府和外部专家协作是必要条件"
      ],
      "product_implications": [
        "高风险科学 Agent 应采用分级权限与审计",
        "能力评测要覆盖端到端实验链而非只测知识问答"
      ],
      "limitations": [
        "缺少可直接复现的新实验数据",
        "治理效果依赖外部实施细节"
      ],
      "meta": {
        "source_quality": "Google DeepMind 官方研究/责任页面；一手立场与方法说明"
      }
    },
    {
      "id": "kol-k3-open-weight",
      "dim": "kol",
      "title": "X 讨论把 Kimi K3 推向“开放权重 vs 闭源前沿”主线",
      "orig": "Moonshot AI's Kimi K3 Tops Coding Benchmarks as Open-Weight Challenger",
      "source": "X Trends（聚合）",
      "url": "https://x.com/i/trending/2078476778365243487",
      "x_src": [
        "https://x.com/Kimi_Moonshot",
        "https://www.kimi.com/blog/kimi-k3"
      ],
      "date": "2026-07-20",
      "heat": "high",
      "tags": [
        "X-first",
        "Kimi K3",
        "Open Weights",
        "Coding Agent"
      ],
      "summary": "公开 X 聚合显示，讨论焦点不是单一榜分，而是开放权重模型在 coding、安全任务可用性与成本上的竞争力。官方博客确认了模型结构、价格、权重发布时间与若干 benchmark 口径。",
      "detail": "事实：X 趋势页聚合多位开发者与产业人士围绕 Kimi K3 的 coding、安全任务、成本和开放权重展开讨论；Kimi 官方页确认 API 定价、1M context、2.8T 参数与 7 月 27 日前发布权重。推断：社区关注点正在从“开放模型是否追平”转向“开放模型在真实 Agent harness 中是否更可控、更少拒绝且成本可承受”。不确定性：公开 provider 未能稳定返回具体 status 文本与作者时间线，因此本条不能归因给某一个 KOL，也不把 X 聚合中的成本或安全数字当作已独立验证事实。",
      "content_type": "x_status",
      "depth": "normal",
      "key_points": [
        "开放权重成为核心讨论变量",
        "真实 harness 可用性比单榜分更受关注",
        "权重未发布前部署与复现判断仍提前"
      ],
      "limitations": [
        "X 趋势是聚合摘要，可能遗漏语境或产生错误",
        "未取得指定 KOL 的 tweet-level status"
      ],
      "meta": {
        "source_quality": "公开 X 趋势聚合，仅作发现；关键事实回到 Kimi 官方博客验证",
        "provider_limit": "公开 X status/profile 可见性不稳定"
      }
    },
    {
      "id": "kol-k3-deployment",
      "dim": "kol",
      "title": "“本地运行 Kimi K3”讨论暴露开放权重的基础设施门槛",
      "orig": "Meme Mocks 'Local' Run of Massive Kimi K3 AI Model",
      "source": "X Trends（聚合）",
      "url": "https://x.com/i/trending/2078127536496840936",
      "x_src": [
        "https://x.com/Kimi_Moonshot",
        "https://www.kimi.com/blog/kimi-k3"
      ],
      "date": "2026-07-19",
      "heat": "medium",
      "tags": [
        "X-first",
        "Inference",
        "MoE",
        "Deployment"
      ],
      "summary": "X 讨论以“local run”梗图强调：开放权重并不等于个人可本地部署。Kimi 官方明确建议 64+ accelerators supernode，这使 API、量化、路由与缓存效率比下载权重本身更关键。",
      "detail": "事实：X 趋势聚合围绕 2.8T 模型的硬件和能耗门槛展开；官方技术博客明确写出推荐 64 个以上加速器的 supernode，并说明 KDA 对 prefix cache 提出新挑战。推断：K3 更可能先由云厂商、推理伙伴和大型研究集群采用，个人开发者主要通过 API 或后续量化衍生版本参与。边界：X 趋势页提到的具体硬件成本属于聚合估算，未作为本条结论；实际成本将取决于权重格式、量化、通信拓扑、token 吞吐与并发目标。",
      "content_type": "x_status",
      "depth": "normal",
      "key_points": [
        "开放权重不等于消费级本地运行",
        "通信域与 KV/prefill cache 是一等问题",
        "API 与推理伙伴将先于个人部署受益"
      ],
      "limitations": [
        "趋势聚合不是逐条原帖证据",
        "完整权重和部署实现尚未发布"
      ],
      "meta": {
        "source_quality": "公开 X 趋势聚合；部署建议以官方博客为准",
        "provider_limit": "未能稳定解析具体 KOL status"
      }
    },
    {
      "id": "paper-agentcompass",
      "dim": "paper",
      "title": "AgentCompass：把 benchmark、harness、environment 解耦",
      "orig": "AgentCompass: A Unified Evaluation Infrastructure for Agent Capabilities",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2607.13705",
      "date": "2026-07-15",
      "heat": "high",
      "tags": [
        "Agent Eval",
        "Benchmark",
        "Reproducibility"
      ],
      "summary": "AgentCompass 提供轻量、可扩展的 Agent 评测基础设施，将 Benchmark、Harness、Environment 拆成独立组件，并加入异步容错运行与 trajectory analysis。",
      "detail": "背景：当前 Agent 评测往往把任务、模型工具封装和环境实现耦合在一起，复现实验需要重复工程。方法：AgentCompass 用三组件抽象统一配置，原生支持 20 多个 benchmark、五类能力，并通过异步 runtime、故障恢复和轨迹诊断分析 reward hacking 等细粒度失败。价值：团队可以让同一任务在不同 harness/模型/环境上做矩阵实验，减少“换模型也换了一套执行器”的混淆。边界：论文主要展示基础设施覆盖和工程能力，并不能自动保证各 benchmark 的任务质量、judge 可靠性或跨环境公平；对生产级成本、隔离和长时间稳定性仍需独立压测。",
      "content_type": "paper",
      "depth": "deep",
      "method": "Benchmark/Harness/Environment 三组件解耦，异步容错 runtime 与 trajectory analysis。",
      "evidence": "论文称支持 20+ benchmarks、五类能力，并展示 reward-hacking 等轨迹诊断。",
      "key_points": [
        "评测组件可组合",
        "异步容错减少长跑中断",
        "轨迹分析补足终局分数"
      ],
      "product_implications": [
        "建立 Agent 回归矩阵",
        "统一采集工具调用、失败恢复与成本指标"
      ],
      "limitations": [
        "尚需独立验证 benchmark 适配正确性",
        "基础设施统一不等于评测有效性统一"
      ],
      "meta": {
        "arxiv": "2607.13705",
        "source_quality": "arXiv 一手论文；未见顶会同行评审信息"
      }
    },
    {
      "id": "paper-perceptionbench",
      "dim": "paper",
      "title": "PerceptionBench：用失败驱动 taxonomy 检查模型到底有没有“看见”",
      "orig": "PerceptionBench: Evaluating Atomic Visual Perception in Multimodal Large Language Models",
      "source": "Kimi Research",
      "url": "https://www.kimi.com/blog/perception-bench",
      "date": "2026-07-16",
      "heat": "high",
      "tags": [
        "Multimodal Eval",
        "Visual Perception",
        "Benchmark"
      ],
      "summary": "Kimi 团队从 40 多个现有 benchmark 的最早视觉错误出发，整理 10 类原子感知能力和 3,000 个经验证问题；其报告称没有受测模型超过 60% accuracy，且许多正确答案在重复提问时不稳定。",
      "detail": "背景：综合多模态榜单常把感知、知识和推理混在一个分数里，很难知道模型究竟错在“没看见”还是“没想对”。方法：团队以真实失败为起点，归因到最早视觉原因，形成关系、计数、属性、深度与 3D、定位、比较、细粒度识别、上下文整合、OCR、幻觉十类原子任务；样本强调只需观察即可回答，并经过验证与难度平衡。证据：3,000 个样本，现有来源 benchmark 的错误分布重合度较低；作者还用 repeated ask 检查答案稳定性。价值：可把单次准确率改造成能力覆盖与一致性回归。边界：数据集由模型失败反向构建，可能偏向当前模型族；重复提问的采样设置和完整代码/数据审计仍会影响结论。",
      "content_type": "paper",
      "depth": "deep",
      "method": "从 40+ benchmark 的最早视觉失败归因，构建 10 类原子能力与 repeated-ask consistency 检查。",
      "evidence": "3,000 个验证样本；官方称无模型超过 60%，并观察到正确答案重复稳定性不足。",
      "key_points": [
        "感知与推理解耦",
        "failure-driven taxonomy",
        "重复提问测试稳定性"
      ],
      "product_implications": [
        "多模态回归应记录一致性而非只看 pass@1",
        "按失败类型建立可定位的数据闭环"
      ],
      "limitations": [
        "官方自建 benchmark 需外部审计",
        "当前模型失败分布可能影响 taxonomy 的长期稳定性"
      ],
      "meta": {
        "source_quality": "Moonshot/Kimi 官方研究页；一手但尚待独立复现",
        "sample_count": 3000
      }
    },
    {
      "id": "oss-grok-build",
      "dim": "oss",
      "title": "Grok Build 开源：Agent harness 可审计，但历史数据边界仍需复核",
      "orig": "Grok Build is Now Open Source",
      "source": "SpaceXAI / GitHub",
      "url": "https://github.com/xai-org/grok-build",
      "date": "2026-07-15",
      "heat": "high",
      "tags": [
        "Coding Agent",
        "Rust",
        "Agent Harness",
        "Privacy"
      ],
      "summary": "SpaceXAI 将 Grok Build coding-agent harness 与 TUI 以 Apache-2.0 开源。源码提高了客户端运行、工具层和上传路径的可审计性，但不能自动证明托管服务与公开代码一致，也不能追溯消除此前的数据处理风险。",
      "detail": "事实：官方 7 月 15 日公告开源 Grok Build；公开仓库是以 Rust 为主的 Agent harness 和交互式 TUI。同期公开分析指出早期版本存在上传范围过宽的争议，官方称已关闭默认 retention 并删除保留数据。推断：真正可复用的是 Agent runtime、TUI、工具层与本地推理接入，而不是模型权重。边界：开源是审计入口，不是安全证明；仓库快照、发布二进制和在线服务仍需 hash、网络行为与配置层面的独立核对。",
      "content_type": "github_repo",
      "depth": "normal",
      "key_points": [
        "Apache-2.0 的 harness/TUI",
        "客户端路径可审计",
        "需验证二进制与源码一致性"
      ],
      "product_implications": [
        "借鉴 tool loop 与 TUI 结构",
        "对上传、retention 和网络端点做默认拒绝式审计"
      ],
      "limitations": [
        "不含 Grok 模型权重",
        "开源不能追溯消除历史数据风险",
        "仓库成熟度和贡献流程仍在早期"
      ],
      "meta": {
        "source_quality": "官方 GitHub + 官方公告；隐私风险描述由公开可复现实验交叉验证",
        "license": "Apache-2.0"
      }
    },
    {
      "id": "oss-agentcompass",
      "dim": "oss",
      "title": "AgentCompass 仓库可作为 Agent 回归测试骨架",
      "orig": "open-compass/AgentCompass",
      "source": "GitHub",
      "url": "https://github.com/open-compass/AgentCompass",
      "date": "2026-07-20",
      "heat": "medium",
      "tags": [
        "Agent Eval",
        "OpenCompass",
        "Trajectory"
      ],
      "summary": "开源仓库实现论文所述的可组合评测基础设施，适合先做小规模 smoke test，再评估对现有 Agent harness 的接入成本。",
      "detail": "事实：仓库公开且在本周持续更新，描述为可扩展的 LLM/VLM Agent 评测基础设施。建议先选择一个已有 benchmark、两个 harness 与固定环境做最小矩阵，检查任务适配、轨迹采集、重试语义和最终分数是否一致。边界：当前社区规模仍小，不能从 star 或 README 推断生产稳定性；依赖和环境镜像需单独审计。",
      "content_type": "github_repo",
      "depth": "normal",
      "key_points": [
        "论文与代码同周可用",
        "适合小矩阵验证",
        "先审计适配器与重试语义"
      ],
      "product_implications": [
        "减少不同 Agent 评测脚本重复建设"
      ],
      "limitations": [
        "早期项目，维护与兼容性待观察",
        "未在本工作区实际运行"
      ],
      "meta": {
        "source_quality": "官方 GitHub 仓库；更新与描述可直接验证",
        "discovery_date": "2026-07-20"
      }
    },
    {
      "id": "fin-visa-assistant",
      "dim": "fin",
      "title": "Visa 推出面向银行的 AI Financial Assistant",
      "orig": "Visa Introduces AI Financial Assistant, Helping Banks Guide Customers from Insight to Action",
      "source": "Visa Investor Relations",
      "url": "https://investor.visa.com/news/news-details/2026/Visa-Introduces-AI-Financial-Assistant-Helping-Banks-Guide-Customers-from-Insight-to-Action/default.aspx",
      "date": "2026-07-14",
      "heat": "medium",
      "tags": [
        "AI Finance",
        "Banking",
        "Agentic AI",
        "Payments"
      ],
      "summary": "Visa 面向金融机构发布 AI Financial Assistant，目标是把银行 App 中的财务洞察推进到受控行动。信号在于支付网络开始把 Agent 接入既有银行权限与合规边界，而不是独立做荐股或无人监管交易。",
      "detail": "事实：Visa 官方 IR 将其描述为帮助银行把客户洞察转成行动的增值服务。推断：竞争重点将从聊天体验转到身份、授权、支付轨迹、审计与责任分配。边界：公司发布未披露足够的客户上线规模、错误率、拒绝策略和责任分担数据，因此暂不能判断实际采用率和单位经济性。",
      "content_type": "news",
      "depth": "normal",
      "key_points": [
        "面向银行而非直接面向交易",
        "从 insight 到 action",
        "权限与审计是产品核心"
      ],
      "product_implications": [
        "金融 Agent 应把行动白名单和人工接管做成一等能力"
      ],
      "limitations": [
        "发布方公告，缺少真实部署指标",
        "不等于自动投资或自动交易能力已成熟"
      ],
      "meta": {
        "source_quality": "Visa 官方投资者关系公告；一手产品信息"
      }
    },
    {
      "id": "fin-uk-adoption-plan",
      "dim": "fin",
      "title": "英国发布金融服务 AI Adoption Plan",
      "orig": "AI Adoption Plan: Financial Services",
      "source": "UK Government",
      "url": "https://www.gov.uk/government/publications/ai-adoption-plan-financial-services",
      "date": "2026-07-14",
      "heat": "medium",
      "tags": [
        "AI Finance",
        "Policy",
        "Financial Services",
        "Governance"
      ],
      "summary": "英国政府发布金融服务 AI 采用计划，聚焦政府、监管机构与产业如何加速安全采用。它说明 AI×金融的瓶颈正在从单点模型能力转向行业级数据、责任和监管协同。",
      "detail": "事实：计划由金融服务领域的独立 AI Champions 提出，面向政府、监管与行业的下一步行动。推断：合规可证明性、共享评测与受控数据访问会决定金融 Agent 能否从试点进入核心流程。边界：政策计划不等于强制法规，也不提供单一公司的业绩或投资结论；落地节奏取决于后续预算、监管细则和机构采纳。",
      "content_type": "official_research",
      "depth": "normal",
      "key_points": [
        "行业级采用而非单点 demo",
        "安全、监管和创新同步",
        "金融 Agent 需可审计、可问责"
      ],
      "product_implications": [
        "将监管证据包、模型变更记录和人工审批纳入产品设计"
      ],
      "limitations": [
        "是采用计划，不是法律或效果评估",
        "暂无统一的实施指标"
      ],
      "meta": {
        "source_quality": "英国政府官方发布；一手政策文件"
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
      "handle": "@OpenAI",
      "name": "OpenAI",
      "field": "OpenAI 官方研究/产品",
      "platform": "X",
      "status": "new"
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
      "handle": "@trq212",
      "name": "Thariq Shihipar",
      "field": "Anthropic Claude Code/研究员长文",
      "platform": "X",
      "status": "new"
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
      "handle": "@jietang",
      "name": "唐杰",
      "field": "Z.ai/智谱 创始人与 GLM",
      "platform": "X",
      "status": "new"
    },
    {
      "handle": "@Kimi_Moonshot",
      "name": "Kimi.ai",
      "field": "Moonshot/Kimi 官方模型更新",
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
    "为 Kimi K3 设计一套权重发布后的独立验证矩阵：固定 harness、固定任务、记录 token/latency/失败恢复与主动越权行为。",
    "用 AgentCompass 做一个 benchmark × harness × environment 的 2×2×1 smoke test，确认轨迹和重试语义。",
    "把 PerceptionBench 的 repeated-ask consistency 思路迁移到现有多模态回归集。"
  ]
};
