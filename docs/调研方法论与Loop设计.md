# 调研方法论 & Loop Engineering 设计

> 本文件说明这个工作台「**怎么调研、为什么这样调研、循环如何自我进化**」。是整套系统的方法论底座。

---

## 一、设计目标与三原则

**目标**：让从业者每天花 10 分钟，就能保持对目标领域的敏感视野——知道研究、工程系统、开源生态和产业正在发生什么，以及下一步应该读、复现、评测还是观察。

**三原则**：
1. **一手优先**：官方 newsroom / arXiv / GitHub 仓库页 > 媒体二手报道 > 社媒转述。每条必须有可访问 URL。
2. **强过滤**：宁缺毋滥。砍掉营销稿、灌水、重复报道；只留「有信息量 + 近期 + 重要」的。
3. **降低认知门槛**：英文→中文，专业→大白话，抽象→配案例。让非技术背景也能秒懂。

---

## 二、Profile 与主题维度

工作台用 profile 隔离不同研究目标。解析顺序是 CLI `--profile` → `config/runtime.yaml` 的 `active_profile` → `general-ai` 兼容默认；单次命令生成一个 profile，周任务可顺序检查并补齐 `viggle-graphics`、`general-ai`、`investing-markets` 三份简报。

默认 `viggle-graphics` 采用五个主题：视频生成与人物动画、图形学/3D 重建/世界引擎、推理系统/GPU/Pipeline、评测/数据/安全、开源/产品/产业生态。论文是跨主题 `content_type`：视频论文进入 `video`，重建、渲染、Gaussian Splatting 或交互世界论文进入 `graphics`，推理与调度论文进入 `systems`，再由 Papers 筛选聚合查看。

检索使用“问题 × 方法 × 工程约束”的组合矩阵，例如 human animation / 3D reconstruction / interactive world model × diffusion / geometric foundation model / neural rendering / Gaussian Splatting × latency / memory / geometry consistency / persistence / engine export。`graphics` 下面固定拆成 3D 重建与几何基础模型、动态 4D 场景、可交互世界引擎三条子轨道；世界引擎必须区分纯帧生成、可持久 3D 表示和具有 action/physics/collision 的模拟系统。论文雷达分为每日 arXiv 与官方项目页、每周/会期 3DV/视觉/图形学/机器人与系统会议、每月/关键词触发期刊。TVCG 不是低优先级刊物，但在本 profile 中重点追踪 VR/AR、交互式 3D、Scientific Visualization 与可视化系统，而非无差别全量扫描。

`general-ai` 完整保留原作者配置与以下五维调研范式：

每个维度都遵循统一管线：**定信源 → 英文关键词搜 → 过滤排序 → 结构化 + 小白化**。

| 维度 | 核心信源 | 搜索锚点 | 特别产出 |
|---|---|---|---|
| 🏢 AI 大厂动态 | OpenAI/Anthropic/Google/Nvidia/Manus/Meta/xAI/Mistral/MS + 国产(字节/阿里/DeepSeek) 官方 | "公司名 + announcement/release/research + 月份" | 产品发布 / 研究论文 / 战略动作三类，抽象内容配案例 |
| 🗣️ KOL 观点 | X + Latent Space + Interconnects + The Batch + HN | "AI Twitter discussion / X trending / 议题名" | KOL 名单(可更新) + 议题分歧 + **可借鉴实践清单** |
| 📄 前沿论文 | HuggingFace Papers + arXiv(cs.AI/CL/LG) + alphaXiv | "huggingface papers trending / 方向 + 月份" | 过滤后 6–10 篇，每篇小白版 + 创新点 + 落地启发 |
| 🧩 开源项目 | GitHub Trending/OSSInsight + HN + Product Hunt | "github trending AI / fastest growing repo" | 做什么 + 内部逻辑 + 亮点 + 价值 + 上手难度 |
| 💰 AI×金融 | Gate-News/Gate-Info(MCP) + CoinDesk/TheBlock + 国内财经 | "AI agent/DeFAI/AI trading/券商 AI 投研" | 覆盖 加密/泛金融/股票/交易 四子方向 + 大盘情绪 |

**过滤标准（keywords.yaml 落地）**：
- 必须命中至少 1 个主题标签（`topic_tags`）
- 必须有可访问 URL
- 默认只保留最近 14 天；窗口外要破例必须 `heat=high` 并显式标注日期
- 命中噪音词（招聘/广告/纯榜单）直接丢弃或降权
- 按 `url + 中文标题` 去重

**可信度纪律**：单一来源、日期略超窗口、数字源自二手转述等，都要在 `notes` 里**诚实标注**，不假装确定。

---

## 三、Loop Engineering：六阶段闭环

这是一个**每天自动跑一圈、且能自我优化**的循环。关键在于：循环本身是被数据驱动、持续调参的对象，而不是写死的脚本。

```
  ┌──────────────────────────────────────────────────────────┐
  │                                                          │
  ▼                                                          │
① 触发 ──▶ ② 采集 ──▶ ③ 清洗 ──▶ ④ 呈现 ──▶ ⑤ 反馈 ──▶ ⑥ 优化 ─┘
 Trigger   Collect    Clean     Present   Feedback   Optimize
 (每日)    (fan-out)  (过滤+    (写日期    (你的⭐    (回流调
                      翻译总结)  文件夹)    标记)      config)
```

| 阶段 | 做什么 | 输入 | 输出 |
|---|---|---|---|
| ① 触发 Trigger | 每天定时启动（cron/launchd/云定时器），可手动补跑 | 日期 | 一次调研任务 |
| ② 采集 Collect | 按 profile 的 `sources.yaml` 分主题 fan-out，并按各来源节奏抓取 | config | 各主题原始候选 |
| ③ 清洗 Clean | 去重 + 噪音过滤 + 打标签 + 翻译 + 小白化 + 配案例 | 原始候选 | `raw/*.json` + `digest.js` |
| ④ 呈现 Present | 写入日期文件夹，更新 `manifest.js`，刷新工作台 | digest | 工作台当日视图 |
| ⑤ 反馈 Feedback | 你在工作台 ⭐ 标记感兴趣的条目 | 你的点击 | 偏好信号（哪些源/主题真有用） |
| ⑥ 优化 Optimize | 每周用反馈调权重：更新 KOL、增删信源、调阈值 | 偏好信号 | 新版 `config/*.yaml` |

### Loop 如何自我进化（核心）

阶段 ⑤ 的标记数据 + 阶段 ②③ 的「命中率」会回流到 `config/*.yaml`：

- **信源调权**：某信源连续 N 天没贡献过被标记的条目 → 降权/移出；某新信源频繁贡献被标记条目 → 升权/转正。
- **KOL 体检**：某 KOL 连续两周无被标记内容 → 移入 `candidates` 观察池或建议 `drop`；某新账号在热点议题被反复引用 → 升为 `keep`。
- **过滤阈值**：若每天噪音太多 → 收紧 `min_signal`/加噪音词；若漏掉重要内容 → 放宽时间窗口或加搜索锚点。
- **维度配比**：若你的标记高度集中在某 1–2 个维度 → 调整各维度抓取数量上限，把注意力预算分配到你真正在意的地方。

> 这就是 loop engineering 与「一次性脚本」的根本区别：**我们优化的不是某一次调研，而是调研这件事本身的策略**。

---

## 四、每日执行 SOP

1. **触发**：发起当日调研（或定时自动）。
2. **采集 + 清洗**：按 profile 主题联网调研，返回结构化结果（含来源、日期、可信度、相关性、影响和下一步动作）。
3. **落盘**：写 `data/年/月/日/<profile>/digest.js`（清洗后）并在 `manifest.js` 追加一条；同日多 profile 不互相覆盖，旧日期根目录 digest 继续兼容。
4. **查看**：打开 `index.html` → 今日速览（动态主题 + 跨维度热点 + 内容类型筛选）。
5. **标记**：感兴趣的 ⭐；想深挖的论文/项目点原文链接。
6. **（每周）复盘**：看「⭐我的标记」分布 → 据此更新 `config/*.yaml`。

---

## 五、调研 Agent 的 Prompt 设计要点（可复用）

每个维度子 Agent 的 prompt 都包含这几块，是质量的关键：

1. **锚定时间**：明确「今天是 YYYY-MM-DD，训练知识更早，必须以搜索结果为准，严禁编造」。
2. **指定信源 + 英文搜索锚点**：给官方源优先级，给具体搜索词模板。
3. **强过滤标准**：明确「只留 X，砍掉 Y，目标 N 条，按重要性排序」。
4. **小白化要求**：`summary_plain` 让非技术背景看懂；抽象内容**必须**配案例/类比。
5. **严格输出契约**：先一段中文速览，再一个结构化 JSON（统一 schema，便于落盘 + 渲染）。
6. **可信度纪律**：无法验证的不写；单源/超窗口/二手数字必须标注。

---

## 六、质量控制清单

- [ ] 每条都有真实可访问 URL 与日期
- [ ] 中文标题 + 保留英文原名
- [ ] `summary_plain` 无术语轰炸，抽象内容有案例
- [ ] 去重（url + 标题）
- [ ] 噪音过滤（营销/招聘/纯榜单）
- [ ] 时间窗口内（超窗口需 high 且标注）
- [ ] 单源/不确定信息已标注
- [ ] 跨维度热点的关联条目 id 真实存在
- [ ] `content_type/relevance/impact/next_action` 使用允许值
- [ ] 论文/技术报告保留原文 URL、日期和 venue/arXiv 信息

---

## 七、优化路径（拿到首轮效果后怎么迭代）

这套范式是**可调的**。建议按以下顺序迭代：

1. **看覆盖**：五维度是否有你关心但没覆盖的细分？→ 加信源/关键词。
2. **看信噪比**：是否有太多你完全不点的内容？→ 收紧过滤 / 调维度配比。
3. **看深度**：小白化够不够？案例是否到位？论文概述是否支撑你判断「要不要深挖」？→ 调 prompt 的总结/案例要求。
4. **看节奏**：每天的量是否合适？→ 调 `max_items_per_dimension`。
5. **看趋势**：跨天高频热点是否准确反映你的关注?→ 调标签字典 `topic_tags`。

> 首轮跑完后，正是用「单次效果 + 你的真实反应」来校准这套范式的最佳时机。
