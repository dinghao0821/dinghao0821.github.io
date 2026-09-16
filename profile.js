// 在这里填写公开展示的资料。空数组会显示明确的待补充提示。
// 教育：{ title: "学校 · 专业", meta: "学位 | 起止时间", description: "研究方向、课程或其他介绍" }
// 论文：{ title: "论文标题", meta: "作者 · 期刊/会议 · 年份", description: "简介", url: "https://...", abstract: "摘要" }
// 项目：{ title: "项目名称", meta: "时间 · 技术栈", description: "项目介绍和个人贡献", url: "https://..." }
// 奖项：{ title: "奖项名称", meta: "获奖年份", description: "补充说明" }
window.PROFILE = {
  name: "丁浩",
  bio: "我是深圳大学人工智能学院计算机科学与技术专业的硕士研究生，研究方向为小样本目标检测（Few-Shot Object Detection）。\n我的工作连接计算机视觉研究与 AI 应用开发，关注有限样本下的视觉学习，以及 RAG、多智能体系统在实际场景中的应用。",
  interests: "Few-Shot Learning · Computer Vision · Agentic RAG · Multi-Agent Systems",
  education: [
    {title:"深圳大学",meta:"人工智能学院 · 计算机科学与技术 · 学术型硕士（保研） | 2024.09—2027.06（预计）",description:"GPA：3.61 / 4.0\n研究方向：小样本目标检测（Few-Shot Object Detection）。"},
    {title:"湖南农业大学",meta:"信息与智能科学技术学院 · 数据科学与大数据技术 · 理学学士 | 2020.09—2024.06",description:"GPA：3.68 / 4.0 · 专业排名：3 / 108\n获学业一等奖学金、国家励志奖学金。"}
  ],
  publications: [
    {title:"Support-Conditioned Dynamic Convolution for FSOD",url:"https://ieeexplore.ieee.org/abstract/document/11462618/",meta:"第一作者 · ICASSP 2026 · CCF-B · 已发表",description:"面向小样本目标检测，研究支持集信息如何引导查询特征的空间滤波与语义对齐。",abstract:"针对样本稀缺时密集注意力模型容易过拟合的问题，提出支持条件动态卷积（SCDC）模块。在 Meta R-CNN 框架内，通过支持集动态生成卷积核与通道调制参数，将支持信息注入查询特征，协同实现空间滤波与语义对齐。"},
    {title:"UINO-FSS: Unifying Representation Learning and Few-shot Segmentation via Hierarchical Distillation and Mamba-HyperCorrelation",url:"https://ieeexplore.ieee.org/abstract/document/11659830/",meta:"学生第二作者 · IEEE TIP 研究工作",description:"围绕表示学习与小样本分割开展研究。"}
  ],
  experience: [
    {title:"腾讯科技有限公司",meta:"IEG 电竞业务部客户端开发组 · AI 应用开发暑期实习 | 2026.05—2026.08",description:"参与面向研发提效的多 Agent 平台与电竞直播 AI 实时高光剪辑系统建设。",details:["Specworker：负责核心编排机制及 Flutter PC 方向建设，以阶段化工作流覆盖需求、设计、实现、测试、部署与知识沉淀。","设计主 Agent 与专项 SubAgent 协作机制，支持阶段状态持久化、断点续跑、输入输出契约与质量检查。","建设 Flutter PC E2E 与韧性测试能力，结合自动化脚本完成 UI 操作、截图取证、故障注入和恢复验证。","AIClipService：参与拉流缓冲、高光检测、集锦生成、上传与推送流程；设计视觉识别与游戏数据事件双轨检测、时间轴对齐、断流自愈及高光评分。"]},
    {title:"湖南虹桥工业科技股份有限公司",meta:"算法实习生 · 石油泄漏检测算法研发 | 2025.03—2025.05",description:"参与石油泄漏检测项目，负责目标检测模型搭建、训练和调优，通过准确率、召回率与 F1 等指标定位问题并优化检测性能。"}
  ],
  projects: [
    {title:"SAGE · 面向老年医学的多智能体智能辅助平台",url:"https://github.com/dinghao0821/medical_agent",meta:"核心开发者 · Agent 架构与后端 | 2025.08—至今",description:"参与“十四五”国家重点研发计划相关项目，面向老年医学咨询、辅助分析与专业评估，构建涵盖医疗问答、知识检索、医学影像分析、结构化评估与案例管理的多智能体平台。",tags:["Python","FastAPI","LangGraph","Agentic RAG","SQLAlchemy","Redis"],details:["基于 LangGraph 编排医疗对话、检索、医学影像与研究 Agent，支持置信度路由、Agent 交接、Checkpoint 和中断恢复。","融合 CRAG / Self-RAG，对文档相关性、证据一致性和幻觉风险进行分阶段评估；支持网络检索与可追溯引用。","设计 Plan-and-Execute 与 Reflection 流程，通过证据评估对低可信结论进行降级。","引入医生审核节点，将 ADL、认知风险、居住环境及辅助器具需求等四类专项评估交由确定性规则评分引擎处理。","实现认证、权限、并发控制、审计和监控，建设 63 个自动化测试用例覆盖认证、安全、缓存及 Agent 工具链路。"]},
    {title:"深大智规 · 垂直领域智能问答系统",meta:"核心开发者 · 全栈 | 2025.10—2026.02",description:"面向高校规章制度查询，基于 50 余份深圳大学规章文档构建问答系统，将回答与原文证据、文件名、页码和条款关联。",tags:["RAG","LangGraph","ReAct","多模态文档理解"],details:["采用向量与关键词双路召回及父子索引策略，改善长文档检索中的信息碎片化问题。","整合视觉语言模型解析表格与流程图，支持跨模态文档理解。","基于 LangGraph 构建 ReAct 决策流，实现检索、排序与工具调用路由，并支持用户自定义工具和安全沙箱。","设计引用溯源机制，将生成结论与对应证据片段、文档元数据关联。"]}
  ],
  awards: [
    {title:"全国大学生数学建模竞赛 · 全国一等奖",meta:"队长",description:"论文：《基于 K-means 聚类的古代玻璃制品的成分分析与鉴别》"},
    {title:"全国大学生电工杯数学建模竞赛 · 全国一等奖",meta:"队长"},
    {title:"中国软件杯 · 全国二等奖"},
    {title:"国家励志奖学金 · 研究生特等奖学金 · 学业一等奖学金"}
  ]
};
