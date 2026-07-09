// 当日聚合数据（由 Daily Intelligence Workbench 生成）。
window.__DAILY__ = window.__DAILY__ || {};
window.__DAILY__["2026/07/08"] = {
  "date": "2026-07-08",
  "date_cn": "2026年7月8日 · 周三",
  "generated_at": "2026-07-08T09:20:00+08:00",
  "language": "zh",
  "refresh_note": "基于公开 Web provider 与 X-first KOL 流程生成；未读取账号 cookie/token，所有敏感推送配置仅作为本机环境变量来源。",
  "market_mood": "今天的 AI 主线偏“agent 产品化与治理”：大厂继续推新模型和多模态能力，KOL 讨论转向 Claude Code、Skill 路由和算力金融化，AI×金融则继续围绕 agent 账户、钱包、支付与身份层。",
  "dimensions": [
    {
      "key": "lab",
      "cn": "AI 大厂动态",
      "overview": "大厂动态集中在模型安全恢复、多模态生成和形式化验证：Anthropic 的 Fable 5 体现监管与安全分类器成本，Meta Muse 把生成式媒体推向社交/广告工具链，Mistral Leanstral 1.5 把 coding agent 的后验证问题前置。",
      "notes": "优先使用 Anthropic、Meta、Mistral、NVIDIA 官方来源；NVIDIA 当日更多是 AI 基建/CPU 方向，未强行塞入大厂主线条目。"
    },
    {
      "key": "kol",
      "cn": "KOL 观点",
      "overview": "KOL 维度今天主要围绕 Claude Code 起源、AI Engineer 社区、Skill 路由瓶颈、算力金融化和 AI×Crypto 风险信号。",
      "notes": "已执行 X-first：5/5 条 KOL item 均来自公开 x.com status 或带 x_src 的 X 证据，KOL X 来源比例 100%。未使用账号态、cookie 或本机 X 登录 provider。"
    },
    {
      "key": "paper",
      "cn": "前沿论文",
      "overview": "论文信号继续围绕 agent 评测、长期记忆、多智能体自学习、世界模型和 VLA 动作评估。重点从单模型能力转向“可行动系统如何被评估和约束”。",
      "notes": "优先 arXiv 与 Hugging Face Papers；当日 HF 条目热度尚低，已在条目中标注为雷达信号。"
    },
    {
      "key": "oss",
      "cn": "开源项目",
      "overview": "开源侧重点是 GUI/电脑使用 agent、agent 友好的知识库，以及面向监管的合规扫描。开源 agent 生态正在从框架扩展到治理、记忆和可操作工作台。",
      "notes": "来源包括 GitHub 与 Hacker News；部分 HN 话题带营销式表述，已在可信度说明中降权。"
    },
    {
      "key": "fin",
      "cn": "AI × 金融",
      "overview": "AI×金融/加密主线是 agent 获得账户、钱包、支付和身份能力：交易账户、agent wallet、KYA 框架共同指向“可授权、可审计、可限额”的金融 agent。",
      "notes": "近期严格 14 天内的一手金融新闻较少，保留了超过窗口但高相关的基础设施事件，并在条目 detail 标注日期边界。"
    }
  ],
  "hot_topics_today": [
    {
      "title": "Agent 从模型能力竞争进入账户、钱包、Skill 与合规基础设施竞争",
      "heat": "high",
      "dims": [
        "kol",
        "oss",
        "fin"
      ],
      "summary": "Claude Code、Skill 路由、agent wallet、KYA 和合规扫描指向同一件事：agent 产品的关键不只是模型，而是权限、记忆、工具选择和审计。",
      "related": [
        "kol-1",
        "kol-3",
        "oss-3",
        "fin-1",
        "fin-3"
      ]
    },
    {
      "title": "多模态生成继续产品化，社交/广告/创作工具链成为落点",
      "heat": "medium",
      "dims": [
        "lab",
        "paper"
      ],
      "summary": "Meta Muse Image/Video 说明多模态生成正接入具体产品场景；论文侧的 VLA/世界模型也在强化可行动多模态系统。",
      "related": [
        "lab-2",
        "paper-3"
      ]
    },
    {
      "title": "AI×金融正在从“交易 bot”走向“可授权金融主体”",
      "heat": "high",
      "dims": [
        "fin",
        "kol"
      ],
      "summary": "Coinbase agent accounts、MetaMask Agent Wallet、KYA 讨论和 aixbt 等 agent 情报源，显示金融 agent 的身份、资金权限和风控边界成为核心议题。",
      "related": [
        "fin-1",
        "fin-2",
        "fin-3",
        "kol-5"
      ]
    },
    {
      "title": "Coding agent 的下一阶段是验证、评测和真实任务闭环",
      "heat": "high",
      "dims": [
        "lab",
        "paper",
        "kol"
      ],
      "summary": "Leanstral 1.5、TUA-Bench、Claude Code 起源和 Skill 管理讨论共同说明：写代码只是起点，能否验证、选择工具并完成真实任务才是分水岭。",
      "related": [
        "lab-3",
        "paper-1",
        "kol-1",
        "kol-3"
      ]
    }
  ],
  "items": [
    {
      "id": "lab-1",
      "dim": "lab",
      "title": "Anthropic 重新开放 Claude Fable 5，并解释安全分类器升级",
      "orig": "Redeploying Claude Fable 5",
      "source": "Anthropic News",
      "url": "https://www.anthropic.com/news/redeploying-fable-5",
      "date": "2026-07-01",
      "heat": "high",
      "tags": [
        "Agent",
        "监管/合规",
        "评测"
      ],
      "summary": "Anthropic 表示 Fable 5 从 7 月 1 日起恢复全球可用，并同步更新网络安全防护分类器。",
      "detail": "这条信息来自 Anthropic 官方说明，重点不是单纯模型发布，而是“模型能力、出口管制、安全分类器、误拦截成本”之间的产品取舍。对企业使用 Claude Code / Cowork 的团队，后续要关注安全拦截对编码与调试任务的误报影响。",
      "why": "大模型进入更强 agent/cyber 能力阶段后，发布节奏会越来越受监管和安全评估影响。",
      "why_now": "7 月 1 日恢复访问，仍处在用户迁回和云平台恢复阶段。",
      "buzz": "官方披露较完整；安全效果和误报率仍需真实开发场景继续验证。"
    },
    {
      "id": "lab-2",
      "dim": "lab",
      "title": "Meta 推出 Muse Image，并预告 Muse Video",
      "orig": "Introducing Muse Image and Muse Video",
      "source": "Meta AI Blog",
      "url": "https://ai.meta.com/blog/introducing-muse-image-muse-video-msl/",
      "date": "2026-07-07",
      "heat": "high",
      "tags": [
        "多模态",
        "Agent"
      ],
      "summary": "Meta Superintelligence Labs 发布 Muse Image，并预告具备原生音频支持的 Muse Video。",
      "detail": "Meta 将 Muse Image 定位为更强的图像生成与编辑模型，强调指令遵循、多参考图组合、Instagram 社交上下文和 agentic tool use；Muse Video 仍是预览/即将面向创作者。",
      "why": "多模态生成竞争继续从“能生成”转向“可编辑、可接入社交产品、可进广告工具链”。",
      "why_now": "发布于 7 月 7 日，属于今天最接近的一手大厂动态。",
      "buzz": "官方博客可验证；实际视频能力尚未大规模开放，需避免过度外推。"
    },
    {
      "id": "lab-3",
      "dim": "lab",
      "title": "Mistral 发布 Leanstral 1.5，继续押注形式化证明与代码验证",
      "orig": "Leanstral 1.5: Proof Abundance for All",
      "source": "Mistral AI News",
      "url": "https://mistral.ai/news/leanstral-1-5/",
      "date": "2026-07-02",
      "heat": "medium",
      "tags": [
        "编码",
        "评测",
        "开源"
      ],
      "summary": "Mistral 称 Leanstral 1.5 以 Apache-2.0 开源，面向 Lean 4 证明工程和代码验证。",
      "detail": "官方页面强调 119B total / 6B active 参数、miniF2F/PutnamBench/FATE-H/FATE-X 等结果，并提到在真实代码仓库中发现未知 bug。对 AI 编码产品来说，形式化验证可能成为“生成代码之后如何证明正确”的关键补强。",
      "why": "当 coding agent 越来越会写代码，验证与证明工具会变成质量闭环。",
      "why_now": "7 月 2 日发布，仍在 7 天观察窗口内。",
      "buzz": "官方 benchmark 可信度高于营销稿，但真实工程集成成本仍需开发者验证。"
    },
    {
      "id": "kol-1",
      "dim": "kol",
      "title": "Boris Cherny：首次公开 Claude Code 的起源故事",
      "orig": "This is our first time telling the story of how we first built and launched Claude Code",
      "source": "X / @bcherny",
      "url": "https://x.com/bcherny/status/2074247226038063316",
      "date": "2026-07-07",
      "heat": "high",
      "tags": [
        "Agent",
        "编码"
      ],
      "summary": "Claude Code 作者 Boris Cherny 在 X 上转发/介绍 Claude Code 从 Anthropic 安全研究中诞生的故事。",
      "detail": "这条公开 X status 指向 Anthropic 7 月 6 日的长文，是理解 coding agent 从内部工具走向产品化的关键线索。",
      "why": "对产品经理来说，Claude Code 的路径说明“内部工作流工具 -> 高强度真实使用 -> 外部产品”仍是 agent 产品验证的强路径。",
      "why_now": "帖子发布于昨天，且对应官方长文刚发布。",
      "buzz": "X 一手证据；正文细节需要结合 Anthropic 官方文章交叉阅读。",
      "x_src": [
        "https://x.com/bcherny/status/2074247226038063316"
      ]
    },
    {
      "id": "kol-2",
      "dim": "kol",
      "title": "swyx：AI Engineer World Fair 后继续强调 AI Engineer 身份与社区",
      "orig": "Rise of the AI Engineer",
      "source": "X / @swyx",
      "url": "https://x.com/swyx/status/2073657149067321412",
      "date": "2026-07-05",
      "heat": "medium",
      "tags": [
        "Agent",
        "AI工程"
      ],
      "summary": "swyx 在 X 上回顾 Rise of the AI Engineer，并把 AI 工程师社区与独立日叙事连接起来。",
      "detail": "近一周多条 @swyx 帖子围绕 AI Engineer World Fair、expo、社区和行业角色演化，说明“AI Engineer”已从口号变成会议、招聘、工具链和身份认同。",
      "why": "AI 工程师生态会影响工具采购、开发平台定位和企业内部岗位设计。",
      "why_now": "AI Engineer World Fair 在 6 月 29 日至 7 月 2 日举行，后续讨论仍在发酵。",
      "buzz": "X status 可验证；更多观点来自活动/博客，需要与会议材料交叉验证。",
      "x_src": [
        "https://x.com/swyx/status/2073657149067321412",
        "https://x.com/swyx/status/2071259119047315827"
      ]
    },
    {
      "id": "kol-3",
      "dim": "kol",
      "title": "Omar Saravia：agent skill 选择正在成为 coding agent 瓶颈",
      "orig": "Great paper on managing agent skills",
      "source": "X / @omarsar0",
      "url": "https://x.com/omarsar0/status/2072430551446032847",
      "date": "2026-07-02",
      "heat": "medium",
      "tags": [
        "Agent",
        "Skill",
        "编码"
      ],
      "summary": "Omar Saravia 关注“skill libraries 越来越大，如何选择正确 skill 变成 coding agent 瓶颈”。",
      "detail": "这条 X 证据把 agent 产品的痛点从模型能力转到工具/Skill 路由：当 Skill 库膨胀，召回、排序、权限和上下文预算会决定 agent 实际可用性。",
      "why": "这直接对应 Codex/Claude Code/企业插件体系的产品设计：不是能力越多越好，而是能否在正确时刻召回。",
      "why_now": "发布于 6 天前，仍在 7 天窗口内。",
      "buzz": "X 一手观点；所指论文需另行阅读全文后再下技术结论。",
      "x_src": [
        "https://x.com/omarsar0/status/2072430551446032847"
      ]
    },
    {
      "id": "kol-4",
      "dim": "kol",
      "title": "Rohan Paul：NVIDIA 以算力换创业公司未来收益，引发 AI 基建金融化讨论",
      "orig": "Smart move from NVIDIA",
      "source": "X / @rohanpaul_ai",
      "url": "https://x.com/rohanpaul_ai/status/2074622848883474693",
      "date": "2026-07-08",
      "heat": "medium",
      "tags": [
        "成本/效率",
        "AI × 金融"
      ],
      "summary": "Rohan Paul 讨论 NVIDIA 面向 AI 初创公司的算力融资/未来收益交换模式。",
      "detail": "帖子将高性能算力视为创业公司的“类资本品”，这和 AI 公司融资结构、云成本、GPU 供给绑定更紧。",
      "why": "AI 创业的瓶颈正在从模型 API 费扩展到长期算力资本结构。",
      "why_now": "今天发布，适合作为 KOL 维度近实时信号。",
      "buzz": "X 一手证据；具体项目条款需等待 NVIDIA 或参与方正式材料确认。",
      "x_src": [
        "https://x.com/rohanpaul_ai/status/2074622848883474693"
      ]
    },
    {
      "id": "kol-5",
      "dim": "kol",
      "title": "aixbt：Zcash Orchard 漏洞与升级计划成为 AI×Crypto 风险信号",
      "orig": "overnight rundown",
      "source": "X / @aixbt_agent",
      "url": "https://x.com/aixbt_agent/status/2073357005352522159",
      "date": "2026-07-04",
      "heat": "medium",
      "tags": [
        "加密+AI",
        "监管/合规"
      ],
      "summary": "aixbt 在 overnight rundown 中提到 Zcash Orchard counterfeiting bug、ZEC 下跌和 Ironwood 升级窗口。",
      "detail": "虽然这是 crypto agent 的聚合型 X 账号，但它代表 AI×Crypto 情报 agent 正在成为交易和安全事件的入口。此条应视为信号，不应替代官方安全公告。",
      "why": "AI agent 进入金融/加密情报后，来源可信度、自动交易风控和官方验证链路会更重要。",
      "why_now": "7 月 4 日发布，仍在近 7 天窗口内。",
      "buzz": "X 一手 URL 可查；具体漏洞细节需用 Zcash 官方公告交叉验证。",
      "x_src": [
        "https://x.com/aixbt_agent/status/2073357005352522159"
      ]
    },
    {
      "id": "paper-1",
      "dim": "paper",
      "title": "TUA-Bench：面向通用终端使用 Agent 的真实任务基准",
      "orig": "TUA-Bench: A Benchmark for General-Purpose Terminal-Use Agents",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2606.28480",
      "date": "2026-06-30",
      "heat": "high",
      "tags": [
        "Agent",
        "评测",
        "编码"
      ],
      "summary": "TUA-Bench 覆盖 120 个真实任务，测试 agent 在文档、邮件、网页信息、科学与工程软件中的终端使用能力。",
      "detail": "相比只测 shell 或单一软件的基准，它更接近今天 Codex/Claude Code 类工具面对的混合任务环境。",
      "why": "终端 agent 的评测如果只看代码题，会低估文件、浏览器、研究、软件操作等真实工作难度。",
      "why_now": "论文为上周新近 arXiv，和 coding agent 产品竞争高度相关。",
      "buzz": "arXiv 可验证；需要等更多模型复现实验来判断榜单稳定性。"
    },
    {
      "id": "paper-2",
      "dim": "paper",
      "title": "Agent-native Memory：评估 12 种 agent 记忆系统，没有单一架构通吃",
      "orig": "Are We Ready For An Agent-Native Memory System?",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2606.24775",
      "date": "2026-06-27",
      "heat": "medium",
      "tags": [
        "Agent",
        "上下文工程",
        "评测"
      ],
      "summary": "论文系统评估 12 个代表性记忆系统，结论是效果强依赖任务瓶颈和记忆结构匹配。",
      "detail": "这对长期 agent 产品很关键：记忆不是“加个向量库”就完事，而要区分偏好、事实、过程、工具状态、跨任务目标等不同记忆类型。",
      "why": "企业 agent 若要跨天工作，记忆系统的可解释、可编辑、可回滚会决定信任度。",
      "why_now": "6 月末新论文，仍在 14 天窗口内。",
      "buzz": "arXiv 单源，需关注后续开源代码和第三方复现。"
    },
    {
      "id": "paper-3",
      "dim": "paper",
      "title": "Hugging Face Daily Papers 显示多智能体自学习与世界模型仍是热点",
      "orig": "GaP / ACID / Look Before You Leap on Hugging Face Papers",
      "source": "Hugging Face Papers",
      "url": "https://huggingface.co/papers",
      "date": "2026-07-08",
      "heat": "medium",
      "tags": [
        "Agent",
        "世界模型",
        "多模态"
      ],
      "summary": "今日 Hugging Face Papers 出现 GaP、ACID、VLA action evaluation 等条目，集中在多智能体、规划和世界模型。",
      "detail": "这些条目热度可能还低，但方向与“让 agent 更会计划、评估动作、在世界模型里学习”一致。",
      "why": "前沿论文从单轮问答继续转向可行动系统，和机器人、GUI agent、交易 agent 都有关。",
      "why_now": "Hugging Face Papers 是当日页，适合做早期雷达。",
      "buzz": "属于论文雷达信号，单篇质量要等 arXiv/代码和社区复核。"
    },
    {
      "id": "oss-1",
      "dim": "oss",
      "title": "Agent S：开源 GUI agent 框架继续被搜索与引用",
      "orig": "Agent S: an open agentic framework that uses computers like a human",
      "source": "GitHub / simular-ai",
      "url": "https://github.com/simular-ai/agent-s",
      "date": "2026-07-08",
      "heat": "medium",
      "tags": [
        "Agent",
        "开源",
        "GUI"
      ],
      "summary": "Agent S 面向 Agent-Computer Interface，让 agent 通过 GUI 与电脑交互。",
      "detail": "仓库定位是自主操作电脑的开源框架，适合跟踪 GUI agent、电脑使用、桌面自动化等方向。",
      "why": "如果 agent 要真正完成工作，GUI 层能力和安全边界会成为产品基础设施。",
      "why_now": "近期搜索结果仍活跃，和 terminal-use / GUI-use benchmark 同频。",
      "buzz": "GitHub 官方仓库可验证；星标和活跃度需用 GitHub API 进一步量化。"
    },
    {
      "id": "oss-2",
      "dim": "oss",
      "title": "OpenKnowledge 在 HN 发布：把知识库与 Claude/Codex 等 agent 集成",
      "orig": "OpenKnowledge – open source AI-first alternative to Obsidian/Notion",
      "source": "Hacker News",
      "url": "https://news.ycombinator.com/item?id=48675435",
      "date": "2026-07-01",
      "heat": "medium",
      "tags": [
        "Agent",
        "开源",
        "知识库"
      ],
      "summary": "OpenKnowledge 以 Show HN 形式发布，主打本地/免费/开源，并集成 Claude、Codex 等 agent。",
      "detail": "这类产品把知识库从“人写人读”变成“人和 agent 共同读写”，会影响个人知识管理与企业文档工作流。",
      "why": "Codex/Claude 一旦成为写作与研发助手，知识库产品会竞争“agent 可操作的工作记忆”。",
      "why_now": "上周 HN 发布，讨论仍在近 14 天窗口内。",
      "buzz": "HN 讨论可验证；产品成熟度和开源许可需继续看仓库。"
    },
    {
      "id": "oss-3",
      "dim": "oss",
      "title": "AI agent 合规扫描工具在 HN 获得关注，EU AI Act 压力前置到代码层",
      "orig": "Open-source scanner finds 97% of AI agent code non-compliant EU AI Act",
      "source": "Hacker News / GitHub",
      "url": "https://news.ycombinator.com/item?id=47247314",
      "date": "2026-07-08",
      "heat": "medium",
      "tags": [
        "Agent",
        "监管/合规",
        "开源"
      ],
      "summary": "HN 上出现面向 AI agent 代码的开源合规扫描器讨论，强调 EU AI Act 执行窗口。",
      "detail": "无论具体 97% 数字是否需要审慎看待，方向值得关注：agent 的日志、人工监督、数据治理和注入防护正在变成工程检查项。",
      "why": "金融、企业自动化和客户支持 agent 上线前会越来越需要合规证据链。",
      "why_now": "搜索结果显示近期仍有 HN 讨论，且 2026 年 8 月是关键监管时间点。",
      "buzz": "HN/仓库信号；营销式比例数字需要独立审计后再采信。"
    },
    {
      "id": "fin-1",
      "dim": "fin",
      "title": "Coinbase 推出可交易和消费的 AI agent accounts",
      "orig": "Coinbase launches AI agent accounts that can trade and spend on your behalf",
      "source": "CoinDesk",
      "url": "https://www.coindesk.com/tech/2026/06/11/coinbase-launches-ai-agent-accounts-that-can-trade-and-spend-on-your-behalf",
      "date": "2026-06-11",
      "heat": "high",
      "tags": [
        "AI × 金融",
        "加密+AI",
        "Agent"
      ],
      "summary": "Coinbase 让 agent 通过自然语言命令访问交易工具，起步支持现货与衍生品，加速 AI×Crypto 交易基础设施落地。",
      "detail": "虽然日期已超过 14 天窗口，但这是 AI×金融主线的重要基础设施事件，和近期 KOL/支付/钱包信号连成一条线。",
      "why": "交易 agent 从演示走向账户、授权、风控、资产边界和合规系统。",
      "why_now": "后续 MetaMask、Mastercard、Keyrock 等报道都围绕 agent 资金轨道继续发酵。",
      "buzz": "CoinDesk 报道；应继续等待 Coinbase 官方文档和真实使用案例。"
    },
    {
      "id": "fin-2",
      "dim": "fin",
      "title": "MetaMask Agent Wallet：让 AI agent 在用户规则下访问 DeFi",
      "orig": "MetaMask launches AI agent wallet with built-in security for crypto trades",
      "source": "CoinDesk",
      "url": "https://www.coindesk.com/tech/2026/06/08/metamask-launches-ai-agent-wallet-with-built-in-security-for-crypto-trades",
      "date": "2026-06-08",
      "heat": "high",
      "tags": [
        "DeFAI",
        "加密+AI",
        "风控"
      ],
      "summary": "MetaMask 推出面向 AI agent 的自托管钱包，让 agent 访问 swaps、perps、prediction markets 等 DeFi 功能，同时保留用户控制。",
      "detail": "这条信息虽超过默认 14 天窗口，但在 AI×金融方向热度高，且能说明钱包层正在给 agent 增加权限、限额和交易边界。",
      "why": "agent 钱包是 DeFAI 产品能否从“建议”走向“执行”的关键组件。",
      "why_now": "近期 AI agent 交易、支付和 KYA 讨论持续升温。",
      "buzz": "CoinDesk 二手报道；风险控制细节需看 MetaMask/Consensys 官方材料。"
    },
    {
      "id": "fin-3",
      "dim": "fin",
      "title": "a16z crypto：KYA（Know Your Agent）成为 agent economy 身份瓶颈",
      "orig": "AI in 2026: 3 trends",
      "source": "a16z crypto",
      "url": "https://a16zcrypto.com/posts/article/trends-ai-agents-automation-crypto/",
      "date": "2026-01-01",
      "heat": "medium",
      "tags": [
        "Agent",
        "加密+AI",
        "监管/合规"
      ],
      "summary": "a16z crypto 将 KYA 视为 agent economy 的关键瓶颈：非人身份越来越多，但金融系统还没有成熟的 agent 身份层。",
      "detail": "这不是今天新闻，但它解释了为什么 Coinbase、MetaMask、Mastercard、稳定币和链上证明都在往 agent 支付/身份方向靠。",
      "why": "AI×金融不是只有交易收益，核心还包括身份、授权、审计、支付和责任归属。",
      "why_now": "近期 agent account、wallet、stablecoin rails 的报道都在验证这个框架。",
      "buzz": "观点源来自投资机构，应视为趋势框架，不等同于市场事实。"
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
    "把今天 KOL 维度的 X-first 做法沉淀为固定检查：每条 KOL item 至少保留 url 或 x_src。",
    "后续跟踪 agent wallet / account 时，区分“能交易”与“有授权、限额、审计、责任归属”。",
    "对 coding agent 产品研究，建议把 Skill 召回、记忆结构和验证基准单独拆成三个需求模块。"
  ]
};
