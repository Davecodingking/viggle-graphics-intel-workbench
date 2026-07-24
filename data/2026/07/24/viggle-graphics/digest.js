// 当日聚合数据（由 Daily Intelligence Workbench 生成）。
window.__DAILY__ = window.__DAILY__ || {};
window.__DAILY__["2026/07/24::viggle-graphics"] = {
  "date": "2026-07-24",
  "date_cn": "2026年7月24日 · 周五",
  "generated_at": "2026-07-24",
  "profile": "viggle-graphics",
  "language": "zh",
  "refresh_note": "手动补跑 2026-07-13 至 2026-07-24 的公开研究信号，重点执行新增的 3D 重建、动态 4D 与世界引擎子轨道；所有主链接均指向 arXiv 原文，指标为作者报告，尚未独立复现。",
  "market_mood": "本轮最明显的变化是“世界模型”开始从连续生成好看的画面，转向显式维护共享世界状态、结构化几何和未来表面；与此同时，工程问题也从单机渲染扩展到线性注意力、片上内存、压缩传输与丢包恢复。",
  "dimensions": [
    {
      "key": "video",
      "cn": "视频生成与人物动画",
      "en": "Video Generation & Human Animation",
      "icon": "video",
      "color": "#5b5ce2",
      "overview": "结构化交互图和跨物种 motion flow 正在替代只靠文本、像素轨迹或人体骨架的控制接口。",
      "notes": "纳入 2 篇近 11 天 arXiv/SIGGRAPH 论文；GraphVid 的量化结果和 Motion4Motion 的跨物种泛化均来自作者报告。"
    },
    {
      "key": "graphics",
      "cn": "图形学、3D 重建与世界引擎",
      "en": "Graphics, 3D Reconstruction & World Engines",
      "icon": "cube",
      "color": "#0d9488",
      "overview": "本周同时出现显式世界状态、拓扑约束 3DGS、动态 Gaussian 和快速固定拓扑人脸重建，覆盖世界引擎、静态重建与动态 4D。",
      "notes": "WorldWeaver 当前仍是 Minecraft 双 Agent 视频世界，不等同于可导出 mesh、collision 或 physics 的完整 3D 引擎；TopoGS、GrainGS 和 UVFaceFusion 更接近可验证的几何资产链路。"
    },
    {
      "key": "systems",
      "cn": "推理系统、GPU 与 Pipeline",
      "en": "Inference Systems, GPU & Pipelines",
      "icon": "cpu",
      "color": "#2563eb",
      "overview": "视频 DiT 的线性注意力、3DGS 的抗丢包传输，以及片上 SRAM 渲染共同指向端到端系统协同。",
      "notes": "硬件、分辨率、时长和网络条件差异较大，不横向比较倍率；优先复现可映射到现有 Pipeline 的单点机制。"
    },
    {
      "key": "eval",
      "cn": "评测、数据与安全",
      "en": "Evaluation, Data & Safety",
      "icon": "shield",
      "color": "#db2777",
      "overview": "FutureSurf 把未来几何与未来渲染拆开评测，ResponseGuard 则把实时视觉安全从慢速推理改成单次前向分类。",
      "notes": "两项都是新发布结果；FutureSurf 的受控数据规模较小，ResponseGuard 在 request harmfulness 和 image-only 单元仍有差距。"
    },
    {
      "key": "ecosystem",
      "cn": "开源、产品与产业生态",
      "en": "Open Source, Product & Ecosystem",
      "icon": "oss",
      "color": "#ea580c",
      "overview": "VLM-IE3D 已开放代码与模型，展示从 RGB 视频提取显式/隐式几何并注入空间理解模型的工程入口。",
      "notes": "本轮生态项只纳入有代码/模型声明且有原论文的项目，不按 GitHub 热度排序。"
    }
  ],
  "hot_topics_today": [
    {
      "title": "世界引擎从帧历史转向显式世界状态与可证伪几何",
      "heat": "high",
      "dims": [
        "graphics",
        "eval",
        "ecosystem"
      ],
      "summary": "WorldWeaver 用跨 Agent world-state registers 保存共享状态；FutureSurf 证明渲染指标不能替代未来表面几何；VLM-IE3D 则把视频重建得到的显式几何送进空间推理。三者共同指向“状态、几何、观测”分层。",
      "related": [
        "graphics-worldweaver",
        "eval-futuresurf",
        "ecosystem-vlm-ie3d"
      ]
    },
    {
      "title": "3D 重建正在从视觉拟合走向结构化、可编辑和可动画表示",
      "heat": "high",
      "dims": [
        "graphics"
      ],
      "summary": "TopoGS 强化平面拓扑，UVFaceFusion 直接输出固定拓扑 mesh，GrainGS 在规范空间与局部形变间解耦；这些输出比单纯 novel-view quality 更接近世界引擎资产。",
      "related": [
        "graphics-topogs",
        "graphics-uvfacefusion",
        "graphics-graings"
      ]
    },
    {
      "title": "生成与 3D Pipeline 的性能优化开始覆盖模型、渲染和网络传输",
      "heat": "high",
      "dims": [
        "systems"
      ],
      "summary": "SANA-Video 2.0 从 attention 与 kernel stack 降低视频生成成本；3DGS 方向同时探索 SRAM-local renderer 和抗丢包压缩，说明端到端体验不能只看模型前向。",
      "related": [
        "systems-sana-video2",
        "systems-3dgs-packet",
        "systems-graph-processor"
      ]
    },
    {
      "title": "人物与多主体控制接口从骨架/轨迹升级为 motion flow 与关系图",
      "heat": "rising",
      "dims": [
        "video"
      ],
      "summary": "Motion4Motion 尝试摆脱固定人体骨架，GraphVid 用交互图表达多主体关系；两者都在解决复杂角色和遮挡场景中低层控制信号难扩展的问题。",
      "related": [
        "video-motion4motion",
        "video-graphvid"
      ]
    }
  ],
  "items": [
    {
      "id": "video-graphvid",
      "dim": "video",
      "title": "GraphVid：用关系图控制多主体视频交互",
      "orig": "GraphVid: Interactive Graph-Controllable Video Generation",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2607.21580",
      "date": "2026-07-23",
      "heat": "high",
      "tags": [
        "可控视频",
        "多主体",
        "interaction graph"
      ],
      "summary": "GraphVid 不要求用户为每个对象画精确轨迹，而是用结构化交互图描述多主体关系，并配套构建 GraphVid-Bench。作者报告相对 Motion-I2V 明显改善 FID、FVD、PSNR 与 SSIM。",
      "detail": "文本很难精确表达多对象之间谁追谁、谁遮挡谁、谁与谁交互；像素轨迹虽然直接，但对象多、遮挡强时标注成本迅速上升。GraphVid 把控制接口提升为 interaction graph：节点代表主体，边和关系描述主体之间的语义交互，再由图条件驱动 image-to-video 模型。作者同时整理带结构化关系标注的 GraphVid-Bench。论文报告在训练数据和可训练参数都少于既有 motion-control 方法的情况下，相对 Motion-I2V 将 FID 最多降低 39.9%、FVD 降低 37.6%，PSNR 从 9.87 提升到 15.98，SSIM 从 0.38 提升到 0.61。对产品而言，真正值得验证的是关系图在遮挡、接触和角色身份绑定上的收益，而不是只看平均视觉指标。",
      "method": "以结构化多主体交互图作为 image-to-video 条件，并用带关系标注的 GraphVid-Bench 训练与评估。",
      "evidence": "作者在论文摘要中报告相对 Motion-I2V 的 FID、FVD、PSNR、SSIM 改善；尚未由本工作台独立复现。",
      "viggle_relation": "直接对应多人物场景中的身份—动作绑定、交互控制和遮挡关系，可作为现有 pose/trajectory 控制之外的高层接口。",
      "why": "如果关系图能稳定控制多主体交互，它可能减少复杂编舞对逐帧轨迹和手工 mask 的依赖。",
      "why_now": "2026-07-23 新提交，交互图控制与世界状态显式化在同一天出现。",
      "buzz": "Hugging Face Daily Papers 已收录；主证据仍以 arXiv 为准。",
      "content_type": "paper",
      "depth": "deep",
      "key_points": [
        "关系图替代精确多对象轨迹",
        "配套 interaction-centric benchmark",
        "重点验证遮挡和身份绑定"
      ],
      "examples": [
        "把“角色 A 追逐角色 B，随后绕过障碍物”编码成节点与关系，而不是绘制多条像素轨迹。"
      ],
      "product_implications": [
        "可在产品层提供关系/事件式控制 DSL",
        "可把交互图映射到现有角色 ID 和时间轴"
      ],
      "limitations": [
        "只有作者报告指标",
        "摘要未说明复杂交互图的最大规模",
        "关系正确不等于人物外观与物理接触都正确"
      ],
      "relevance": "direct",
      "impact": [
        "controllability",
        "quality",
        "data"
      ],
      "next_action": "prototype",
      "experiment": "选择 20 个双人/三人遮挡交互样本，对比 text-only、trajectory 和 interaction graph；分别测身份交换率、关系执行率、遮挡恢复与人工编辑时长。",
      "meta": {
        "venue": "arXiv",
        "arxiv_id": "2607.21580"
      }
    },
    {
      "id": "video-motion4motion",
      "dim": "video",
      "title": "Motion4Motion：推理时用 motion flow 做跨物种动作迁移",
      "orig": "Motion4Motion: Motion Transfer Across Subjects at Inference",
      "source": "arXiv / SIGGRAPH 2026",
      "url": "https://arxiv.org/abs/2607.11644",
      "date": "2026-07-13",
      "heat": "high",
      "tags": [
        "人物动画",
        "motion transfer",
        "training-free"
      ],
      "summary": "Motion4Motion 尝试跳出预定义人体骨架，把视频中的角色运动建模为 motion flow，并在推理时完成跨主体、跨物种迁移，目标是扩大到动物和非标准角色。",
      "detail": "传统动作迁移通常依赖人体 skeleton，优点是语义清晰，但骨骼定义一旦变化，模型和标注数据都难复用。Motion4Motion 直接从角色视频建模 motion flow，不要求为每种目标角色训练一套骨架条件模型，因此更适合从人类动作迁移到动物或比例差异较大的角色。论文定位为 training-free inference framework，并已被 SIGGRAPH 2026 接收。对 Viggle 来说，这条路线的价值在于覆盖非人类 IP、卡通角色和形变明显的目标，但 motion flow 可能把相机运动、局部非刚体形变和真正的语义动作混在一起。复现时要特别观察足端接触、肢体拓扑变化、遮挡区域和目标角色自身运动风格是否保留。",
      "method": "在推理阶段以角色 motion flow 替代预定义 skeleton 条件，执行跨主体与跨物种动作迁移。",
      "evidence": "论文由 SIGGRAPH 2026 接收并提供项目页；摘要称优于基线，但具体数据集与数值需精读正文。",
      "viggle_relation": "直接拓展现有人物动画到动物、卡通和非标准骨架角色。",
      "why": "减少骨架标注和专门训练，有机会降低新角色类别接入成本。",
      "why_now": "处于 21 天检索窗口内，且与 GraphVid 一起反映控制接口从低层骨架/轨迹升级。",
      "buzz": "当前以论文和项目页为主，未把社媒讨论作为证据。",
      "content_type": "paper",
      "depth": "deep",
      "key_points": [
        "不依赖固定人体 skeleton",
        "推理时迁移",
        "面向跨物种角色"
      ],
      "examples": [
        "把人类舞蹈迁移给四足或夸张比例角色，同时保留目标角色运动风格。"
      ],
      "product_implications": [
        "可降低非人角色 onboarding 成本",
        "可能与现有 pose pipeline 组成 fallback/ensemble"
      ],
      "limitations": [
        "摘要缺少详细数值",
        "motion flow 对相机运动和遮挡可能敏感",
        "跨拓扑接触约束仍需验证"
      ],
      "relevance": "direct",
      "impact": [
        "controllability",
        "quality",
        "developer_velocity"
      ],
      "next_action": "deep_read",
      "experiment": "建立人→四足、人→卡通、人→柔性角色三组样本，对比 skeleton pipeline；统计动作语义保持、足滑、肢体穿插与目标风格保持。",
      "meta": {
        "venue": "SIGGRAPH 2026",
        "arxiv_id": "2607.11644"
      }
    },
    {
      "id": "graphics-worldweaver",
      "dim": "graphics",
      "title": "WorldWeaver：用共享状态寄存器维持多 Agent 世界一致性",
      "orig": "Streaming Multi-Agent Autoregressive Diffusion Model with World State Registers",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2607.21594",
      "date": "2026-07-23",
      "heat": "high",
      "tags": [
        "世界引擎",
        "world state",
        "multi-agent"
      ],
      "summary": "WorldWeaver 在自回归视频扩散 rollout 中加入跨 Agent world-state registers，分别维护共享世界信息和个体状态，并在每个生成 chunk 后更新；当前实验集中在双 Agent Minecraft。",
      "detail": "许多视频世界模型把过去画面继续塞回上下文，等价于让模型从像素历史里自行恢复状态。当多个 Agent 从不同视角观察同一世界时，这种做法很难保证物体位置、Agent 状态和全局事件一致。WorldWeaver 增加可学习 world-state registers：一部分保存共享世界信息，一部分跟踪各 Agent 状态，每生成一段视频就更新；训练时使用个体状态、鸟瞰全局状态和场景文本进行监督。模型还用 Mixture-of-Transformers 将世界状态建模和视觉帧建模分开。双 Agent Minecraft 实验显示显式状态有助于逻辑一致性和生成质量。它是“状态层”进展，但输出仍是视频观测，摘要没有表明可导出 mesh、collision 或 physics，因此不能把它等同于完整 3D 世界引擎。",
      "method": "在 streaming autoregressive video diffusion 中加入跨 Agent 共享与个体 world-state registers，并用独立 Transformer 权重分别建模状态与画面。",
      "evidence": "作者在双 Agent Minecraft 视频生成上报告逻辑一致性和画质改善；论文提供项目页。",
      "viggle_relation": "可借鉴显式 role/world state 设计，解决多人物、多视角、长序列中的身份、位置和事件一致性。",
      "why": "世界状态不再完全隐含于像素/KV 历史，有利于观测、调试和多 Agent 协同。",
      "why_now": "2026-07-23 新提交，是本轮最直接的世界引擎状态管理信号。",
      "buzz": "Hugging Face Daily Papers 已收录；当前没有独立复现实证。",
      "content_type": "paper",
      "depth": "deep",
      "key_points": [
        "共享世界寄存器",
        "个体 Agent 状态",
        "状态模型与视觉模型解耦",
        "chunk 级流式更新"
      ],
      "examples": [
        "两个 Agent 从不同视角移动或改变同一 Minecraft 场景时，共享状态应保持对象和事件一致。"
      ],
      "product_implications": [
        "把人物 identity/pose/scene event 从视频上下文中显式抽出",
        "为多视角生成增加可观测 state contract"
      ],
      "limitations": [
        "只展示双 Agent Minecraft",
        "属于视频世界模型而非显式 3D asset engine",
        "未证明 physics、collision 或任意长时间持久性"
      ],
      "relevance": "transferable",
      "impact": [
        "quality",
        "controllability",
        "reliability"
      ],
      "next_action": "prototype",
      "experiment": "在两人物双视角长视频上增加最小 state register，记录角色 ID、位置和交互事件；与纯 KV memory 对比跨镜头身份交换和事件回滚错误。",
      "meta": {
        "venue": "arXiv",
        "arxiv_id": "2607.21594",
        "input_modality": "multi-agent observation history, per-agent/global state supervision, scene text",
        "camera_assumptions": "multiple agent viewpoints in Minecraft",
        "output_representation": "generated video observations plus latent world-state registers",
        "metrics": "logical consistency and generation quality, author reported",
        "runtime": "streaming chunk-wise rollout; absolute latency not stated in abstract",
        "engine_export": "no mesh, collision or physics export stated"
      }
    },
    {
      "id": "graphics-topogs",
      "dim": "graphics",
      "title": "TopoGS：把平面邻接拓扑写进 3DGS 重建",
      "orig": "TopoGS: Planar Reconstruction via Topology-aware 3D Gaussian Splatting",
      "source": "arXiv / ECCV 2026",
      "url": "https://arxiv.org/abs/2607.16838",
      "date": "2026-07-18",
      "heat": "high",
      "tags": [
        "3D重建",
        "3DGS",
        "拓扑"
      ],
      "summary": "TopoGS 从多视图分割提取全局 2D 拓扑关系，将 Gaussian 锚定到平面结构，并联合优化平面参数、渲染与邻接关系，目标是获得连通、可编辑的结构化场景。",
      "detail": "普通 3DGS 对外观拟合强，但其 Gaussian 集合不天然表达墙面、边界和邻接关系。已有 planar Gaussian 方法虽然更紧凑，却常把每个平面当成孤立片段，导致边界错位和结构断裂。TopoGS 从多视图图像分割中提取全局 2D 拓扑，把 Gaussian primitives 绑定到这些结构元素，并联合优化平面参数、渲染保真度和拓扑邻接，同时施加严格多视图一致性。作者在 ScanNet++ 上报告达到 SOTA。对世界引擎而言，它比单纯 PSNR 更值得关注：连通平面和明确边界更容易转成可编辑布局、碰撞面或 scene graph。不过摘要没有证明这些拓扑能直接导出游戏引擎，也没有覆盖动态人物与非平面物体。",
      "method": "从多视图分割提取平面拓扑，联合优化 Gaussian、平面参数、视觉重建和邻接约束。",
      "evidence": "ECCV 2026 论文；作者在 ScanNet++ 报告 SOTA。",
      "viggle_relation": "可为人物所在环境提供更稳定、可编辑的结构几何，并作为相机、遮挡和碰撞约束基础。",
      "why": "世界引擎需要结构化几何，而不只是能 novel-view render 的 splats。",
      "why_now": "2026-07-18 新提交，命中新增的结构化 3D 重建主线。",
      "buzz": "有项目页；尚未检查代码许可证与导出格式。",
      "content_type": "paper",
      "depth": "deep",
      "key_points": [
        "平面与拓扑联合约束",
        "多视图一致性",
        "结构化可编辑重建"
      ],
      "examples": [
        "室内墙面与地面不仅看起来连续，还需要边界和邻接关系在 3D 中闭合。"
      ],
      "product_implications": [
        "可探索从 splats 到 collision/layout proxy 的转换",
        "可用于稳定人物遮挡和落地平面"
      ],
      "limitations": [
        "以平面场景为主",
        "动态场景未覆盖",
        "引擎导出与实时重建速度需读正文验证"
      ],
      "relevance": "transferable",
      "impact": [
        "quality",
        "controllability",
        "developer_velocity"
      ],
      "next_action": "deep_read",
      "experiment": "在 5 个室内视频场景上比较普通 3DGS 与 TopoGS 的平面边界、墙地连接、mesh/collision proxy 可用性和人物遮挡稳定性。",
      "meta": {
        "venue": "ECCV 2026",
        "arxiv_id": "2607.16838",
        "input_modality": "multi-view RGB images and segmentations",
        "camera_assumptions": "multi-view consistency; exact pose pipeline requires paper review",
        "output_representation": "topology-aware planar 3D Gaussian scene",
        "metrics": "ScanNet++ reconstruction results, author reported SOTA",
        "runtime": "not stated in abstract",
        "engine_export": "structured/editable geometry claimed; direct engine export not demonstrated in abstract"
      }
    },
    {
      "id": "graphics-graings",
      "dim": "graphics",
      "title": "GrainGS：规范锚点与局部 Gaussian 形变解耦动态重建",
      "orig": "GrainGS: Gradient-Decoupled Gaussian Splatting for Efficient Dynamic Novel View Synthesis",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2607.21448",
      "date": "2026-07-23",
      "heat": "high",
      "tags": [
        "动态4D重建",
        "3DGS",
        "实时渲染"
      ],
      "summary": "GrainGS 用分层 anchor scaffold 保持全局结构，同时让每个 Gaussian 独立预测位置、旋转和尺度的时间偏移，并用 stop-gradient 避免形变梯度破坏规范空间。",
      "detail": "动态 Gaussian 重建常在两端取舍：逐 primitive 形变足够灵活，但容易产生冗余 Gaussian 和不稳定结构；anchor-based 方法更规整，却可能压制局部运动。GrainGS 先通过静态 warm-up 建立跨时间的规范表示，再在联合训练中阻断“形变路径→规范位置”的梯度，只允许重建目标直接修正规范位置；每个 Gaussian 仍可独立预测 position、rotation、scale 的时间偏移。外观则拆成 canonical 与 residual，避免把光照变化误塞到几何形变。作者在合成单目和真实多视图数据上报告高质量、实时渲染和紧凑存储；合成设置平均 PSNR 36.98 dB、435.6 FPS、4.67 MB。对于人物/世界引擎，核心价值是稳定 canonical state 加局部动态，而不是绝对 FPS。",
      "method": "分层 anchor scaffold、per-Gaussian temporal offsets、形变路径 stop-gradient，以及规范/残差外观分解。",
      "evidence": "作者报告合成 benchmark 平均 36.98 dB、435.6 FPS、4.67 MB，并在真实多视图数据上评估。",
      "viggle_relation": "可迁移到人物和环境的动态 4D 表示，用稳定规范空间承载身份，用局部形变承载动作。",
      "why": "规范状态与局部运动解耦，和世界状态/人物状态显式化方向一致。",
      "why_now": "2026-07-23 新提交，直接命中动态 4D 重建。",
      "buzz": "当前未发现代码链接，复现成本和训练时长需进一步确认。",
      "content_type": "paper",
      "depth": "deep",
      "key_points": [
        "规范空间稳定",
        "局部 Gaussian 独立形变",
        "外观与几何变化解耦",
        "实时紧凑表示"
      ],
      "examples": [
        "角色衣物局部摆动可以变化，但主体规范几何不应被每帧形变梯度持续拉偏。"
      ],
      "product_implications": [
        "可评估作为人物/场景统一 4D 中间表示",
        "可将 canonical state 接入身份一致性指标"
      ],
      "limitations": [
        "FPS 依赖作者硬件和合成设置",
        "未说明碰撞、物理和 mesh 导出",
        "复杂拓扑变化仍可能困难"
      ],
      "relevance": "transferable",
      "impact": [
        "quality",
        "latency",
        "memory"
      ],
      "next_action": "reproduce",
      "experiment": "固定一段单人舞蹈和一段人物—物体交互，比较 canonical drift、局部运动误差、Gaussian 数量、显存和渲染 FPS。",
      "meta": {
        "venue": "arXiv",
        "arxiv_id": "2607.21448",
        "input_modality": "synthetic monocular and real-world multi-view dynamic observations",
        "camera_assumptions": "monocular and multi-view benchmark settings",
        "output_representation": "hierarchical anchor scaffold plus per-Gaussian dynamic offsets",
        "metrics": "36.98 dB, 435.6 FPS, 4.67 MB on the reported synthetic setting",
        "runtime": "real-time rendering claimed; training time not stated in abstract",
        "engine_export": "3D Gaussian representation; no collision/physics export stated"
      }
    },
    {
      "id": "graphics-uvfacefusion",
      "dim": "graphics",
      "title": "UVFaceFusion：3 秒内输出固定拓扑人脸 Mesh",
      "orig": "UVFaceFusion: Fast Multi-view Topologically Consistent Face Reconstruction in the Wild via UV-space Neural Fusion",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2607.18798",
      "date": "2026-07-21",
      "heat": "high",
      "tags": [
        "Avatar",
        "3D重建",
        "fixed topology"
      ],
      "summary": "UVFaceFusion 将 VGGT point maps 和 Pixel3DMM UV correspondence 提升到规范 UV 空间，用 mask-aware neural fusion 合并多视图，并直接采样固定拓扑 mesh。",
      "detail": "Avatar 生产需要的不只是高保真表面，还需要固定拓扑，才能稳定绑定 blendshape、rig、材质和动画。UVFaceFusion 从多视图日常图像出发，先用 VGGT 得到 dense point maps、用 Pixel3DMM 得到每个视图的 facial UV correspondence，再把几何提升到 canonical UV space；mask-aware fusion network 输出完整 UV point map，最后直接采样 fixed-topology mesh。模型只在 Ava-256 训练，但作者称能泛化到多个公开 benchmark 和 in-the-wild captures，并在单张 RTX 4090 上用 16 个视图于 3 秒内完成 mesh 重建。代码已开放。对 Viggle，这是最接近可直接接入 Avatar asset pipeline 的条目，但多视图输入、脸部范围和固定模板可能限制全身与极端表情。",
      "method": "VGGT point maps + Pixel3DMM UV correspondence，经 canonical UV-space mask-aware neural fusion 输出固定拓扑 mesh。",
      "evidence": "作者报告 16 视图、单 RTX 4090、少于 3 秒，并开放代码。",
      "viggle_relation": "直接关联数字人、身份资产和可动画 fixed-topology mesh 的快速初始化。",
      "why": "固定拓扑输出比仅能渲染的隐式表示更容易接 rig、blendshape 和生产工具链。",
      "why_now": "2026-07-21 新提交，属于本轮 3D 重建的高直接相关项。",
      "buzz": "代码可用，适合安排轻量复现。",
      "content_type": "paper",
      "depth": "deep",
      "key_points": [
        "多视图 RGB",
        "canonical UV fusion",
        "固定拓扑 mesh",
        "RTX 4090 少于 3 秒"
      ],
      "examples": [
        "将用户多角度手机照片快速转为可绑定表情和动画的统一人脸模板。"
      ],
      "product_implications": [
        "可作为 Avatar 初始化或质量修复模块",
        "固定拓扑便于缓存、压缩和版本管理"
      ],
      "limitations": [
        "需要 16 视图的报告设置",
        "聚焦人脸而非全身",
        "极端表情、头发和遮挡需验证"
      ],
      "relevance": "direct",
      "impact": [
        "quality",
        "latency",
        "developer_velocity"
      ],
      "next_action": "reproduce",
      "experiment": "用内部允许公开测试的 10 组多视图人脸，记录输入视图数从 4/8/16 变化时的几何误差、拓扑稳定、耗时和表情 rig 可用性。",
      "meta": {
        "venue": "arXiv",
        "arxiv_id": "2607.18798",
        "input_modality": "16-view RGB images in the reported runtime setting",
        "camera_assumptions": "multi-view capture; calibration details require paper review",
        "output_representation": "fixed-topology face mesh sampled from a UV-space point map",
        "metrics": "SOTA accuracy claim across public benchmarks",
        "runtime": "under 3 seconds on one RTX 4090 for 16 input views",
        "engine_export": "fixed-topology mesh is asset-pipeline friendly; rig/physics export not directly evaluated"
      }
    },
    {
      "id": "systems-sana-video2",
      "dim": "systems",
      "title": "SANA-Video 2.0：混合线性注意力把 720p 视频生成压到单卡",
      "orig": "SANA-Video 2.0: Hybrid Linear Attention with Attention Residuals for Efficient Video Generation",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2607.21553",
      "date": "2026-07-23",
      "heat": "high",
      "tags": [
        "视频Pipeline",
        "linear attention",
        "H100"
      ],
      "summary": "SANA-Video 2.0 用 3:1 的 gated linear/softmax attention、跨 block attention residual，以及 kernel fusion、cache、sparse attention 的 Sol-Engine 全栈优化，在单 H100 上报告 720p 视频生成。",
      "detail": "纯线性 attention 对长视频友好，但容易损失 full-rank token interaction；全 softmax 则随 token 数平方增长。SANA-Video 2.0 以 3:1 比例交替 gated linear attention 和 gated-softmax anchor，周期性刷新全局交互，再用 Block Attention Residuals 把已完成 block 的摘要路由给后续线性层。模型从头训练，而非把现有 softmax 模型强行线性化。作者报告 40-step、480p 在单 H100 上 13.2 秒、VBench 84.30；compiled DiT forward 在 720p/60s 设置下比匹配的 full-softmax baseline 快 3.2 倍；Sol-Engine 再通过 kernel fusion、cache、sparse attention 加速 3.58 倍，5B pipeline 在 720p/5s 设置报告 13.06 秒。不同设置不能直接相乘或横比，但它提供了模型结构与 runtime co-design 的完整案例。",
      "method": "3:1 gated linear/softmax hybrid attention、Block Attention Residuals，以及 Sol-Engine kernel/cache/sparse stack。",
      "evidence": "作者报告 VBench 84.30、单 H100 多组延迟和相对加速；尚未独立复现。",
      "viggle_relation": "直接影响视频 DiT 的单卡延迟、长序列扩展和 kernel/runtime 协同。",
      "why": "把结构设计和 serving stack 一起优化，比只替换 attention kernel 更接近生产收益。",
      "why_now": "2026-07-23 新提交，是本轮最强系统信号。",
      "buzz": "暂无摘要级代码链接，需要确认模型、kernel 与 Sol-Engine 的开放程度。",
      "content_type": "paper",
      "depth": "deep",
      "key_points": [
        "3:1 linear/softmax",
        "attention residual",
        "单 H100",
        "model-runtime co-design"
      ],
      "examples": [
        "每隔若干线性 attention block 插入 softmax anchor，刷新全局关系后供后续层复用。"
      ],
      "product_implications": [
        "可先做 25% softmax anchor 的小模型 ablation",
        "需要分别 profiling backbone 与 full-stack 收益"
      ],
      "limitations": [
        "作者多组指标的分辨率/时长设置不同",
        "单 H100 结果不代表现有 GPU fleet",
        "代码与 kernel 可用性待确认"
      ],
      "relevance": "systems",
      "impact": [
        "latency",
        "throughput",
        "memory",
        "cost"
      ],
      "next_action": "deep_read",
      "experiment": "在现有小型 video DiT 上做 0/12.5/25/50% softmax anchor，对比质量、显存、长序列 scaling，再单独测 kernel fusion 与 cache，避免把收益混在一起。",
      "meta": {
        "venue": "arXiv",
        "arxiv_id": "2607.21553"
      }
    },
    {
      "id": "systems-3dgs-packet",
      "dim": "systems",
      "title": "3DGS 抗丢包传输：原子打包与 GNN 误差隐藏",
      "orig": "Packet-Loss Robust 3D Gaussian Compression via Atomic Packaging and GNN-based Error Concealment",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2607.17916",
      "date": "2026-07-20",
      "heat": "high",
      "tags": [
        "3DGS",
        "streaming",
        "fault tolerance"
      ],
      "summary": "该工作将一个 anchor 的相关属性原子打包，把属性损坏变成完整 anchor 缺失，再通过随机分组分散空间空洞，并用插值与轻量 GNN 恢复残差。",
      "detail": "压缩后的 3DGS bitstream 在稳定网络中效果很好，但把一个 anchor 的位置、外观等属性拆到不同 stream 后，只丢一个包就可能形成属性不一致的坏 anchor，画面出现严重伪影。该方法把每个 anchor 的所有属性原子封装，让损坏变成更容易处理的 missing-anchor erasure；分层随机 grouping 将丢包分散到空间，避免大块空洞。解码端先用 hash-grid prior 和邻域 residual 做 CARI 插值，再用两层 GNN 与 cross-attention 修复高频 residual，并在置信度不足时回退到插值。作者在 BungeeNeRF、Mip-NeRF 360、Tanks and Temples 上模拟 20% 随机丢包，报告相对无损 HAC++ 平均 PSNR 退化控制在约 3 dB。对跨设备世界引擎，这比只追求压缩率更接近真实网络条件。",
      "method": "anchor-level atomic packaging、spatially stratified grouping、CARI interpolation 与 confidence-aware GNN concealment。",
      "evidence": "作者在三个数据集、20% 随机丢包下报告相对无损参考约 3 dB 平均 PSNR 退化。",
      "viggle_relation": "可用于 3D/4D 世界资产跨服务、跨设备流式传输的容错设计。",
      "why": "世界引擎上线后，网络抖动和分片丢失会直接影响视觉稳定与交互连续性。",
      "why_now": "2026-07-20 新提交，补上了新增世界引擎轨道的网络可靠性环节。",
      "buzz": "暂无代码链接，先验证编码思想而非完整复现。",
      "content_type": "paper",
      "depth": "deep",
      "key_points": [
        "anchor 属性原子打包",
        "空间分散丢包",
        "插值 + GNN 恢复",
        "置信度回退"
      ],
      "examples": [
        "不要让一个 Gaussian 的位置包到达而颜色/尺度包丢失；宁可把它视作完整缺失再恢复。"
      ],
      "product_implications": [
        "可将 3D asset chunking 设计为 failure atomic",
        "建立网络损坏下的渲染质量 SLO"
      ],
      "limitations": [
        "仅模拟随机丢包",
        "20% 丢包不是所有真实网络模型",
        "GNN 解码成本和延迟需验证"
      ],
      "relevance": "systems",
      "impact": [
        "reliability",
        "quality",
        "latency"
      ],
      "next_action": "prototype",
      "experiment": "对现有 splat asset 做 1/5/10/20% 随机与 burst loss 注入，比较属性分流、anchor 原子打包、插值恢复的 PSNR/LPIPS、首帧时间和抖动。",
      "meta": {
        "venue": "arXiv",
        "arxiv_id": "2607.17916",
        "input_modality": "compressed 3D Gaussian anchor bitstream",
        "camera_assumptions": "rendered multi-view evaluation on standard datasets",
        "output_representation": "packet-loss concealed 3D Gaussian anchors",
        "metrics": "about 3 dB average PSNR degradation versus lossless HAC++ under 20% random loss",
        "runtime": "decoder overhead not stated in abstract",
        "engine_export": "targets streamed 3DGS representation"
      }
    },
    {
      "id": "systems-graph-processor",
      "dim": "systems",
      "title": "片上 SRAM 3DGS Renderer：用空间局部通信减少 DRAM 依赖",
      "orig": "Rendering 3D Gaussians on a Graph Processor",
      "source": "arXiv / Eurographics Symposium on Rendering 2026",
      "url": "https://arxiv.org/abs/2607.15951",
      "date": "2026-07-17",
      "heat": "rising",
      "tags": [
        "3DGS",
        "GPU系统",
        "on-chip memory"
      ],
      "summary": "该工作在拥有 1,472 个 tile、仅片上 SRAM 的 IPU 上实现 3D Gaussian renderer，将 framebuffer 区域分配给 tile，并通过局部网格路由 Gaussian。",
      "detail": "传统 GPU 3DGS renderer 常受 DRAM 带宽和不规则 workload 影响。论文选择约束更极端的 IPU：1,472 个独立 tile、仅片上 SRAM、编译期定义通信。每个 tile 负责一块 screen-space framebuffer，Gaussian 先沿 NEWS 网格路由到目标 tile，再以扩展树分发到相邻区域。作者分析了 inter-tile bandwidth、单 tile SRAM 容量以及 Gaussian 密度不均导致的负载失衡，并认为这种 local data transfer 设计对未来 GPU 的 direct inter-SM communication 也有启发。它不是可直接搬到 CUDA 的现成加速器，但非常适合反思现有 renderer 中 global memory traffic、tile ownership、binning 和 load balance 的边界。",
      "method": "screen-space tile ownership、NEWS grid routing、neighbor expansion tree，以及 BSP compile-time communication。",
      "evidence": "Eurographics Symposium on Rendering 2026 论文，提供项目页；摘要重点是瓶颈分析而非通用 GPU 加速倍率。",
      "viggle_relation": "可指导 3DGS renderer 的 tile/binning、局部数据复用和负载均衡 profiling。",
      "why": "世界引擎实时渲染的瓶颈可能来自内存与通信，而非算术吞吐。",
      "why_now": "处于 21 天窗口内，和 SANA/抗丢包工作一起形成端到端系统主题。",
      "buzz": "硬件平台特殊，价值主要在架构启发和 profiling 方法。",
      "content_type": "paper",
      "depth": "deep",
      "key_points": [
        "1,472 tiles",
        "SRAM-only",
        "空间局部路由",
        "负载不均分析"
      ],
      "examples": [
        "让负责相邻屏幕区域的处理单元直接交换 Gaussian，而不是反复经过全局 DRAM。"
      ],
      "product_implications": [
        "检查当前 splat renderer 的 DRAM traffic 和 tile imbalance",
        "评估 persistent kernel 或更局部的 binning 设计"
      ],
      "limitations": [
        "IPU 与 NVIDIA GPU 编程模型不同",
        "无法直接复用实现",
        "摘要未给通用硬件收益"
      ],
      "relevance": "systems",
      "impact": [
        "latency",
        "throughput",
        "memory"
      ],
      "next_action": "deep_read",
      "experiment": "用 Nsight 对现有 3DGS renderer 采集 DRAM bytes、L2 hit、tile Gaussian 方差和 SM idle；先验证瓶颈是否吻合，再决定是否做局部路由 prototype。",
      "meta": {
        "venue": "Eurographics Symposium on Rendering 2026",
        "arxiv_id": "2607.15951",
        "input_modality": "3D Gaussian maps from real-world sequences",
        "camera_assumptions": "screen-space rendering workload",
        "output_representation": "rendered framebuffer",
        "metrics": "bandwidth, SRAM capacity, imbalance and render quality analysis",
        "runtime": "platform-specific; no portable speedup claimed in abstract",
        "engine_export": "renderer architecture study"
      }
    },
    {
      "id": "eval-futuresurf",
      "dim": "eval",
      "title": "FutureSurf：未来画面正确，不代表未来表面几何正确",
      "orig": "Future Rendering != Future Surface: A Benchmark and Dataset for Dynamic Surface Reconstruction Beyond the Observed Window",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2607.21471",
      "date": "2026-07-23",
      "heat": "high",
      "tags": [
        "动态4D重建",
        "benchmark",
        "未来预测"
      ],
      "summary": "FutureSurf 要求模型只看序列前 75%，再用 Chamfer distance 评估未观测未来的逐帧表面；结果显示 future rendering quality 与 future-surface accuracy 统计上解耦。",
      "detail": "动态重建论文通常在已经观察过的时间窗口内评估，模型可能只是在插值；世界引擎、AR、机器人和预判式交互真正关心的是未观测未来的几何状态。FutureSurf 用八种解析定义的受控运动和精确逐帧 mesh ground truth，让模型只训练/观察前 75%，再以 future Chamfer distance 和 future/observed gap 评估后 25%。作者设置三种 falsification control，并提供 recoverability oracle，避免把理论上不可预测的未来归咎于模型。DG-Mesh 在原则上可预测的 5 个运动中有 4 个仍留下 2.7–4.1 倍 future gap；在六个动画资产和 Deformable-3DGS 上，gap 为 2.0–6.6 倍。更关键的是，未来渲染画质和未来表面准确度统计解耦，说明 PSNR/novel-view 指标不能代表世界几何预测正确。",
      "method": "观察前 75%、评估后 25% 的未来 surface protocol，使用精确 mesh、Chamfer distance、gap、falsification controls 和 recoverability oracle。",
      "evidence": "作者在 DG-Mesh、Deformable-3DGS、受控运动和动画资产上报告 2.0–6.6 倍 future gap；数据与评分代码已发布。",
      "viggle_relation": "为动态人物/场景世界状态提供比渲染质量更可信的未来几何回归指标。",
      "why": "世界引擎不能只生成看起来合理的下一帧，还要维持可交互、可碰撞的正确表面。",
      "why_now": "2026-07-23 新提交，与 WorldWeaver 的显式状态形成状态—几何评测闭环。",
      "buzz": "数据、scoring code、benchmark card 和 Croissant metadata 均已发布。",
      "content_type": "paper",
      "depth": "deep",
      "key_points": [
        "out-of-window future geometry",
        "精确 mesh ground truth",
        "可证伪控制",
        "rendering 与 surface 解耦"
      ],
      "examples": [
        "未来人物衣袖看起来合理，但其 mesh 可能漂移、穿插或与下一次交互位置不一致。"
      ],
      "product_implications": [
        "将未来几何误差加入世界模型 eval",
        "把 observed interpolation 与 actual forecasting 分开"
      ],
      "limitations": [
        "主数据只有八类受控运动",
        "Chamfer distance 不能覆盖全部语义和物理正确性",
        "现有结果集中在特定 backbone"
      ],
      "relevance": "direct",
      "impact": [
        "quality",
        "reliability",
        "data"
      ],
      "next_action": "reproduce",
      "experiment": "把现有人物动态表示切成前 75%/后 25%，同时测渲染指标和 surface/landmark future gap；检查两者是否同样解耦。",
      "meta": {
        "venue": "arXiv",
        "arxiv_id": "2607.21471",
        "input_modality": "observed first 75% of dynamic sequences",
        "camera_assumptions": "surface extraction evaluated against exact future meshes",
        "output_representation": "per-frame future surfaces",
        "metrics": "future Chamfer distance and future/observed gap",
        "runtime": "benchmark, not a serving result",
        "engine_export": "evaluation toolkit and meshes available"
      }
    },
    {
      "id": "eval-responseguard",
      "dim": "eval",
      "title": "ResponseGuard：用单次前向做实时视觉输出审核",
      "orig": "When Are Reasoning-Based Guardrails Not Efficient? ResponseGuard: A Fast Vision-Language Guard for Real-Time Moderation",
      "source": "arXiv",
      "url": "https://arxiv.org/abs/2607.21401",
      "date": "2026-07-23",
      "heat": "rising",
      "tags": [
        "安全",
        "streaming",
        "VLM"
      ],
      "summary": "ResponseGuard 不生成审核推理链，而是从请求、回答和图像的 pooled representation 一次前向输出 harmful verdict；作者报告响应审核耗时约低 150 倍。",
      "detail": "实时生成系统如果等完整回答或完整视频生成后再审核，用户可能已看到问题内容；但让 guard model 先生成长 reasoning chain 又会引入不可接受延迟。ResponseGuard 用一个 2B VLM guard 对 request、response 和 image 的 pooled representation 做单次前向分类，支持按句流式筛查回答。作者报告其 response harmfulness detection 优于一个 3B reasoning guard，时间成本约低 150 倍；但在 request harmfulness 上 reasoning guard 仍总体领先，剩余差距主要集中在 image-only cells，可能与冻结视觉编码器有关。对于视频/世界生成，它不能直接替代帧级与时序安全，但其“快筛 + 慢审”分层思路可迁移到生成内容入口和流式输出。",
      "method": "取消 chain-of-thought verdict generation，使用 request/response/image pooled representation 的单次前向分类。",
      "evidence": "作者在标准多模态 guardrail benchmark 报告 response track 优势和约 150 倍时间成本下降；代码、模型、数据均开放。",
      "viggle_relation": "可借鉴为视频生成 prompt、caption、关键帧和流式内容建立低延迟第一层安全门。",
      "why": "安全审核只有进入实时路径才有产品价值。",
      "why_now": "2026-07-23 新提交并完全开放代码、模型和数据。",
      "buzz": "开放程度高，适合小规模复测；不能从文本响应结果直接推断视频帧审核效果。",
      "content_type": "paper",
      "depth": "deep",
      "key_points": [
        "单次前向",
        "sentence-level streaming",
        "2B guard",
        "代码模型数据开放"
      ],
      "examples": [
        "先用快速 guard 在流式阶段拦截明显违规，再把边界样本送给更慢的 reasoning guard。"
      ],
      "product_implications": [
        "设计两级 safety pipeline",
        "将 moderation latency 纳入发布 SLO"
      ],
      "limitations": [
        "request harmfulness 仍落后",
        "image-only 单元较弱",
        "没有直接评估长视频时序风险"
      ],
      "relevance": "transferable",
      "impact": [
        "safety",
        "latency",
        "reliability"
      ],
      "next_action": "prototype",
      "experiment": "在现有公开安全样本上比较 fast single-pass 与 reasoning guard 的 recall、误杀、P95 延迟；再加入关键帧抽样测试，明确视频域差距。",
      "meta": {
        "venue": "arXiv",
        "arxiv_id": "2607.21401"
      }
    },
    {
      "id": "ecosystem-vlm-ie3d",
      "dim": "ecosystem",
      "title": "VLM-IE3D 开源：从 RGB 视频抽取显式/隐式几何供空间推理",
      "orig": "3D-Aware VLMs with Implicit and Explicit Geometries",
      "source": "arXiv / ECCV 2026",
      "url": "https://arxiv.org/abs/2607.21595",
      "date": "2026-07-23",
      "heat": "high",
      "tags": [
        "几何基础模型",
        "VLM",
        "开源"
      ],
      "summary": "VLM-IE3D 从 RGB 视频构建 implicit geometry tokens 和由重建 3D attributes 编码的 explicit geometry tokens，再通过 3D-aware adapter 与 2D 视觉特征融合；代码和模型已经开放。",
      "detail": "大多数 VLM 只从 2D 图像学习，很难处理细粒度 3D grounding 和空间推理。VLM-IE3D 同时引入两类几何：Implicit Geometry Tokens 从视频吸收高层几何先验，Explicit Geometry Tokens 编码重建得到的详细 3D attributes；3D-aware adapter 再把两者与 2D cues 融合。整个输入仍是 RGB，不要求额外 3D sensor。作者在 3D video detection、3D visual grounding、3D dense captioning 和 spatial reasoning 上报告一致提升，并开放代码与模型。对于世界引擎，这提供了“视频→几何 token→语义/空间理解”的可复用桥梁，但它主要输出任务预测与 reasoning，不是场景 renderer，也没有证明长期状态、交互或物理一致性。",
      "method": "Implicit Geometry Tokens + Explicit Geometry Tokens + 3D-aware adapter，将视频几何和 2D cues 注入 VLM。",
      "evidence": "ECCV 2026 接收；作者报告多个 3D task 改善，代码与模型开放。",
      "viggle_relation": "可用于理解人物与场景的 3D 关系，辅助自动标注、质量诊断和世界状态提取。",
      "why": "世界引擎不仅要重建和渲染，还需要把几何转成可查询的语义状态。",
      "why_now": "2026-07-23 新提交且可获得代码/模型，是本轮最可复用的生态入口。",
      "buzz": "已在 arXiv 标注 Open Sourced；具体 repo 依赖和许可证需实际拉取确认。",
      "content_type": "paper",
      "depth": "deep",
      "key_points": [
        "RGB-only",
        "显式与隐式几何 token",
        "3D-aware adapter",
        "代码模型开放"
      ],
      "examples": [
        "从人物视频中回答谁在物体前方、哪个对象被遮挡、动作发生在场景哪个 3D 区域。"
      ],
      "product_implications": [
        "用于生成后 3D consistency diagnosis",
        "用于自动抽取 scene graph 或 world-state labels"
      ],
      "limitations": [
        "不是可渲染世界表示",
        "长期状态与动作条件未覆盖",
        "重建属性错误可能传递到 VLM"
      ],
      "relevance": "transferable",
      "impact": [
        "quality",
        "data",
        "developer_velocity"
      ],
      "next_action": "prototype",
      "experiment": "用公开人物—物体视频测试 3D grounding 与遮挡关系，比较 2D VLM 和 VLM-IE3D；记录几何输入错误时的 failure propagation。",
      "meta": {
        "venue": "ECCV 2026",
        "arxiv_id": "2607.21595",
        "input_modality": "RGB videos",
        "camera_assumptions": "RGB-only; explicit 3D attributes are reconstructed internally",
        "output_representation": "implicit and explicit geometry tokens fused into a VLM",
        "metrics": "3D detection, grounding, dense captioning and spatial reasoning, author reported",
        "runtime": "not stated in abstract",
        "engine_export": "code and models released; not a renderer or physics engine"
      }
    }
  ],
  "kol_list": [
    {
      "handle": "NVIDIA Research",
      "name": "NVIDIA Research",
      "field": "图形学、视频生成、GPU 系统",
      "platform": "Web",
      "status": "keep"
    },
    {
      "handle": "Adobe Research",
      "name": "Adobe Research",
      "field": "视觉生成、图像视频编辑",
      "platform": "Web",
      "status": "keep"
    },
    {
      "handle": "Google DeepMind",
      "name": "Google DeepMind",
      "field": "生成模型、世界模型、视觉",
      "platform": "Web",
      "status": "keep"
    },
    {
      "handle": "Meta AI",
      "name": "Meta AI Research",
      "field": "视频、3D、感知与生成",
      "platform": "Web",
      "status": "keep"
    },
    {
      "handle": "@DrJimFan",
      "name": "Jim Fan",
      "field": "具身、世界模型、NVIDIA",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@drfeifei",
      "name": "Fei-Fei Li",
      "field": "空间智能、World Labs",
      "platform": "X",
      "status": "keep"
    },
    {
      "handle": "@ylecun",
      "name": "Yann LeCun",
      "field": "世界模型、表示学习",
      "platform": "X",
      "status": "watch"
    },
    {
      "handle": "@_akhaliq",
      "name": "AK",
      "field": "视觉论文与 demo 发现",
      "platform": "X",
      "status": "watch"
    }
  ],
  "practice_list": [
    "把 world state、3D geometry 和 rendered observation 分成三个 contract，不再用像素历史隐式承担全部状态。",
    "为动态世界模型增加 out-of-window future geometry eval，避免只用 PSNR/FVD 判断未来世界是否正确。",
    "先复现 UVFaceFusion 的固定拓扑输出和 GraphVid 的关系图接口，这两项最接近人物动画产品链路。",
    "为 3DGS streaming 建立 packet-loss 与 burst-loss 回归，并记录视觉质量、首帧时间和恢复抖动。"
  ]
};
