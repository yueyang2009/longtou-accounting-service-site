import {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  FileSearch,
  Landmark,
  Scale,
  ShieldCheck,
  Users
} from "lucide-react";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export type Lead = {
  company: string;
  industry: string;
  revenueRange: string;
  painPoints: string[];
  hasFinanceTeam: boolean;
  auditHistory: boolean;
  score: number;
};

export type Service = {
  title: string;
  summary: string;
  items: string[];
  output: string;
  icon: typeof ShieldCheck;
};

export type Expert = {
  name: string;
  title: string;
  focus: string;
  credential: string;
  slug: string;
};

export type Insight = {
  tag: "税务风险" | "经营风险" | "行业案例";
  title: string;
  risk: string;
  href: string;
};

export const brand = {
  name: "龙头会服",
  legalName: "河南龙头会计服务有限公司",
  positioning: "企业财税与经营参谋团队",
  slogan: "让企业账更清楚，让经营决策更可靠",
  subtitle: "双师带队，专注中小企业财税规范与经营体系建设",
  phone: "18103835769",
  email: "service@longtou.com",
  wechat: "李岳阳TEL18103835769",
  address: "河南省郑州市国际路60号国家知识产权大厦11层",
  addressShort: "河南省郑州市国家知识产权大厦",
  wechatQr: `${siteBasePath}/images/wechat-qr-v2.png`,
  feishuQr: `${siteBasePath}/images/feishu-qr.jpg`
};

export type SiteNavChild = {
  href: string;
  label: string;
};

export type SiteNavLink = SiteNavChild & {
  children?: SiteNavChild[];
};

export const digitalDashboardLinks: SiteNavChild[] = [
  { href: "/equity-structure", label: "股权设计" },
  { href: "/risk-heatmap", label: "风险热力图" },
  { href: "/break-even", label: "盈亏平衡点" },
  { href: "/dashboard-demo.html", label: "经营看板示例" },
  { href: "/budget-management", label: "预算管理" }
];

export const siteNavLinks: SiteNavLink[] = [
  { href: "/", label: "主页" },
  { href: "/why-annual-advisor", label: "年度顾问" },
  { href: "/services", label: "服务体系" },
  { href: "/digital-dashboard", label: "数智化看板", children: digitalDashboardLinks },
  { href: "/cases", label: "案例" },
  { href: "/about", label: "关于" },
  { href: "/team", label: "团队" },
  { href: "/blog", label: "文章" }
];

// 子页全局导航沿用同一套链接，避免与首页导航分叉
export const navItems = siteNavLinks;

export const painPoints = [
  {
    title: "利润不清晰",
    description: "账面盈利但现金流紧张，经营结果与真实体感长期不一致。"
  },
  {
    title: "风险不确定",
    description: "历史账务可能存在税务隐患，老板无法判断风险边界。"
  },
  {
    title: "决策靠经验",
    description: "缺乏数据支持经营决策，成本、利润、现金流难以联动。"
  }
];

export const trustMetrics = [
  { value: "CPA", label: "注册会计师", detail: "× 11" },
  { value: "CTA", label: "注册税务师", detail: "× 4" },
  { value: "高级会计师", label: "专家配置", detail: "× 2" },
  { value: "10000+", label: "累计服务企业", detail: "" }
];

export const homePainCards = [
  "利润到底是真的吗？",
  "税务有没有历史风险？",
  "企业越来越大，管理越来越乱？",
  "想规范，不知道从哪里开始？"
];

export const longtouMethod = [
  {
    step: "第一步",
    title: "看清",
    items: ["企业体检", "利润分析", "税务扫描"]
  },
  {
    step: "第二步",
    title: "理顺",
    items: ["历史问题", "财税体系", "经营流程"]
  },
  {
    step: "第三步",
    title: "建立",
    items: ["预算", "制度", "AI工具", "经营体系"]
  },
  {
    step: "第四步",
    title: "陪跑",
    items: ["长期经营陪伴", "持续优化", "定期复盘"]
  }
];

export const clientStories = [
  {
    category: "乱账梳理",
    type: "乱账梳理",
    background: "成长型制造企业，年营收约3000万元，多年由代账公司处理账务，财务数据与经营实际严重脱节。",
    problem: `账务长期混乱，库存账实不符，无法反映真实利润和现金流状况。企业主对"账上的钱"和"实际的钱"之间的差异感到困惑。`,
    process: "对历史账务进行结构性重建：逐月核对银行流水、发票与入账数据，清理往来账款，重新归集成本与费用，建立适配制造业的成本核算口径。",
    result: "财务数据与经营情况重新匹配，管理层首次看到按产品线拆分的真实利润结构。企业以此为基础完成了融资尽调准备。"
  },
  {
    category: "税务风险应对",
    type: "税务稽查应对",
    background: "中型商贸企业，年营收约5000万元，收到税务局风险预警提示，涉及进销项匹配异常，存在潜在补税风险。",
    problem: "企业在发票管理和成本归集中存在历史偏差，部分交易链条的发票流与资金流不一致，税局要求限期说明。",
    process: "进行全量交易结构分析：逐笔核查风险交易背后的真实业务流，还原实际经营情况，制定差异说明方案与补充证据链。",
    result: "完成风险处理与税局沟通，避免了重大处罚风险。企业建立了发票-合同-资金三流一致的内部管理机制。"
  },
  {
    category: "股权架构设计",
    type: "股权架构设计",
    background: "多人合伙的科技企业，年营收约2000万，核心技术团队已稳定，正在准备引入外部投资。",
    problem: "合伙企业股权结构停留在创业初期的均分模式，无明确控制权安排，影响投资人决策信心。",
    process: "重新设计股权架构：明确创始团队控制权分配，设置员工持股平台预留期权池，同步测算股权调整中的税务影响。",
    result: "形成清晰的控制权结构和可执行的股权激励方案，企业顺利完成了首轮融资，投资人认可其治理规范性。"
  },
  {
    category: "财务体系重建",
    type: "财务体系重建",
    background: "快速扩张的连锁服务企业，年营收约1亿元，自建财务团队时间短，缺乏规范的财务核算和管理流程。",
    problem: "财务体系无法支撑多门店经营分析，各门店成本口径不统一，管理层无法准确判断各门店的真实盈利能力。",
    process: "从门店维度重新搭建财务核算框架：统一成本归集标准，建立标准化凭证流转流程，设计门店经营分析报表模板。",
    result: "管理层每月能收到按门店拆分的经营分析报告，异常成本可追溯到具体门店和工序环节。"
  },
  {
    category: "两账合一",
    type: "两账合一",
    background: "建材贸易企业，年营收约8000万元，长期存在对内经营账与对外申报账两套口径，老板无法判断企业真实家底。",
    problem: "两套账并行多年，收入、成本与库存互相打架，既担心税务口径风险，也说不清真实利润和可动用现金。",
    process: "以真实业务流为基准，逐笔比对两套账差异，区分永久性差异与时间性差异，设计分阶段并账方案与历史差异的处理路径。",
    result: "形成单一、可追溯的真实账套，历史差异按计划消化，企业与老板对利润、库存和现金的认知重新统一。"
  },
  {
    category: "经营分析体系",
    type: "利润口径校准",
    background: "食品加工企业，年营收约6000万元，账面上持续盈利，但经营活动现金流长期紧张。",
    problem: "利润与现金流长期背离，老板怀疑“账面赚钱、手里没钱”，却无法定位差异来自存货、应收还是费用确认口径。",
    process: "重建利润与现金流双口径分析：拆解应收账龄、存货周转与费用确认节点，建立“利润—现金”差异追踪表与预警指标。",
    result: "定位出存货与应收是主要资金占用来源，企业据此调整了账期与备货策略，现金流节奏明显改善。"
  },
  {
    category: "成本核算",
    type: "产品成本重构",
    background: "机械制造企业，年营收约1.2亿元，多产品线并行，报价与排产长期依赖经验判断。",
    problem: "成本核算停留在“大锅饭”式分摊，无法判断各产品线、各订单的真实毛利，接单决策缺乏依据。",
    process: "按工序与设备工时重建成本归集模型，区分直接成本与制造费用，测算各产品线与典型订单的贡献毛利。",
    result: "识别出低贡献甚至亏损的订单类型，企业据此调整报价策略与排产优先级，整体毛利结构趋于健康。"
  },
  {
    category: "税务合规体系",
    type: "税务合规体系搭建",
    background: "医疗器械企业，年营收约4000万元，业务增长快，但发票、合同与资金管理缺乏统一规则。",
    problem: "销售、采购与财务各管一段，发票流、合同流与资金流时常不一致，存在被认定为进销项异常的风险。",
    process: "梳理业务全流程中的凭证节点，制定“三流一致”的操作规范与审批边界，配套建立税务风险季度自查机制。",
    result: "形成可执行的合规操作规范，业务部门与财务在票据和资金管理上口径一致，历史遗留风险点逐一闭环。"
  }
];

export const testimonials = [
  {
    industry: "制造业",
    scale: "年营收约3000万",
    quote: "以前看账像看天书，现在每个月能看懂利润从哪里来、钱花在哪里。顾问不是替我做决定，而是让我做决定时心里有数。"
  },
  {
    industry: "商贸企业",
    scale: "年营收约5000万",
    quote: "最认可的是不回避问题。历史遗留的票据和口径问题，他们逐条摊开讲清楚，先告诉我风险边界，再一起定处理节奏。"
  },
  {
    industry: "科技企业",
    scale: "融资阶段",
    quote: "股权和财务两件事原来各说各话，他们把控制权、激励和税务影响放在一张图上算给我看，投资人尽调时省了很多解释。"
  },
  {
    industry: "连锁服务",
    scale: "年营收约1亿",
    quote: "门店多了以后最怕账不清。他们帮我们把口径统一、报表标准化，现在开经营会终于能用同一套数字讨论问题。"
  }
];


export const capabilitySystems = [
  {
    title: "企业财税风险管理系统",
    description: "围绕历史账务、税务口径、交易链条建立风险识别与分级机制。",
    icon: ShieldCheck
  },
  {
    title: "企业经营财务分析系统",
    description: "把利润结构、成本结构、现金流表现转化为可讨论的经营语言。",
    icon: BarChart3
  },
  {
    title: "企业财税架构设计系统",
    description: "从股权、交易、税务与组织边界出发，设计更稳定的经营架构。",
    icon: Building2
  },
  {
    title: "企业财务体系建设系统",
    description: "建设流程、内控、报表、工具与管理节奏，让财务真正支持经营。",
    icon: ClipboardCheck
  }
];

export const services: Service[] = [
  {
    title: "企业财税体检与风险扫描",
    summary: "对历史账务、税务申报、业务合同和资金流进行系统性体检。",
    items: ["历史账务清理", "税务风险排查"],
    output: "风险事项清单",
    icon: FileSearch
  },
  {
    title: "企业经营财务分析系统",
    summary: "把财务数据转化为利润、成本、现金流和业务单元的经营分析。",
    items: ["利润结构分析", "成本结构拆解"],
    output: "经营分析报告",
    icon: BarChart3
  },
  {
    title: "企业财税架构设计系统",
    summary: "围绕股权、税务、交易路径和主体安排，设计更清晰的财税架构。",
    items: ["股权架构设计", "税务架构优化"],
    output: "架构方案",
    icon: Scale
  },
  {
    title: "企业财务体系建设系统",
    summary: "帮助企业建立流程、内控、ERP 与管理报表体系。",
    items: ["内控体系", "财务流程设计", "ERP选型"],
    output: "财务体系方案",
    icon: Landmark
  }
];

export const conversionPaths = [
  {
    label: "低门槛入口",
    title: "获取企业财税风险初步评估",
    description: "适合尚未明确需求的企业",
    cta: "开始初步评估"
  },
  {
    label: "高意向入口",
    title: "预约顾问沟通",
    description: "适合已有明确财税问题企业",
    cta: "预约顾问沟通"
  }
];

export const annualPlan = {
  title: "企业年度财税顾问计划",
  summary: '不是按次处理，不是代账服务。而是全年陪伴，帮企业建立起"能自己运转"的财税管理体系。',
  suitable: ["经营规模正在扩大，管理复杂度明显上升", "已有会计或代账，但缺少财税统筹", "老板想规范经营，但不清楚从哪里入手"],
  whatYouGet: [
    "经营数据看板——让利润、现金流、风险事项进入同一张图",
    "阶段性经营复盘——围绕企业当下问题调整下一阶段重点",
    "财税风险前置——发现隐患及时讨论，不等问题积累后再处理",
    "日常沟通支持——遇到拿不准的经营财税事项，有人一起判断",
    "年度健康报告——沉淀全年问题、改进记录和下一阶段建议"
  ],
  process: [
    { step: "第一步", title: "经营交流", desc: "初步了解企业现状，判断是否适合年度顾问服务" },
    { step: "第二步", title: "方案确认", desc: "根据行业和问题优先级，输出年度服务计划" },
    { step: "第三步", title: "签约启动", desc: "签订年度顾问合同，正式进入服务体系" }
  ]
};

export const cooperationSteps = [
  {
    title: "预约沟通",
    description: "先进行一次经营交流，确认企业当下最需要被看见的问题。"
  },
  {
    title: "签约付款",
    description: "确认合作方向，签订年度顾问合同并支付服务费用。"
  },
  {
    title: "企业经营尽调",
    description: "围绕账、税、现金流、合同和管理流程做初步梳理。"
  },
  {
    title: "制定年度顾问计划",
    description: "根据问题优先级，形成年度陪伴节奏和阶段性重点。"
  },
  {
    title: "开始年度陪伴",
    description: "进入长期顾问机制，按节奏持续复盘、定期预警并推动改善落地。"
  }
];

export const annualTimeline = [
  {
    title: "年度了解与经营基线",
    items: ["财税体检", "利润口径校准", "风险清单"],
    back: "先看清企业的真实经营状态，再谈规范与优化——这一步决定全年顾问往哪用力。"
  },
  {
    title: "历史问题理顺",
    items: ["账务修正", "税务口径确认", "流程断点识别"],
    back: "把过去的账务与税务口径一次性理顺，避免旧账在后续决策里反复添乱。"
  },
  {
    title: "经营看板建立",
    items: ["利润看板", "现金流节奏", "项目或产品核算"],
    back: "让老板随时看得见利润、现金与项目核算，把专业报表变成可决策的数据。"
  },
  {
    title: "预算与制度落地",
    items: ["预算机制", "审批边界", "财务协同机制"],
    back: "把预算与审批边界落到机制里，减少拍脑袋决策和部门之间的扯皮。"
  },
  {
    title: "年度复盘与来年规划",
    items: ["年度健康报告", "风险复盘", "下一年度重点"],
    back: "一年结束回头看成效，带着结论规划下一年，让陪伴真正沉淀为经营节奏。"
  }
];

export const principles = [
  {
    title: "长期陪伴",
    description: "不把服务做成一次交付，而是陪企业形成稳定的经营节奏。"
  },
  {
    title: "专业判断",
    description: "用会计、税务和经营视角共同判断问题，不只看单一凭证。"
  },
  {
    title: "风险前置",
    description: "把风险放到决策前处理，减少事后补救和被动应对。"
  },
  {
    title: "尊重经营",
    description: "方案服从企业真实业务，而不是让业务迁就漂亮表格。"
  }
];
export const revenueRanges = [
  "起步发展期",
  "稳定经营期",
  "快速扩张期",
  "组织升级期"
];

export const formPainOptions = ["利润不清晰", "税务风险", "成本控制", "股权设计", "财务体系"];

export function scoreLead(input: Omit<Lead, "score">): Lead {
  let score = 0;

  if (input.revenueRange !== "起步发展期") {
    score += 3;
  }

  if (input.hasFinanceTeam) {
    score += 2;
  }

  if (input.auditHistory) {
    score += 3;
  }

  if (input.painPoints.length > 1) {
    score += 2;
  }

  return {
    ...input,
    score
  };
}

export function getLeadPriority(score: number) {
  return score >= 6 ? "高优先级线索" : "标准线索";
}

export const experts: Expert[] = [
  {
    name: "杜楠楠",
    title: "高端财税事业部 总经理",
    focus: "税务合规筹划、股权架构设计、历史乱账清理、财务体系搭建",
    credential: "专业财税顾问",
    slug: "du-nannan"
  },
  {
    name: "李岳阳",
    title: "高端财税事业部",
    focus: "财税合规、ERP实施、股权架构、企业经营落地",
    credential: "财税与经营顾问",
    slug: "li-yueyang"
  },
  {
    name: "刘宏义",
    title: "高端财税事业部",
    focus: "内部控制、税收风险防范、IPO辅导、专项审计",
    credential: "风险与内控顾问",
    slug: "liu-hongyi"
  },
  {
    name: "吴新明",
    title: "高端财税事业部",
    focus: "上市辅导、IPO审计、税务筹划、尽职调查",
    credential: "税务与审计顾问",
    slug: "wu-xinming"
  }
];

export const extendedExperts = [
  "制造业成本核算顾问组",
  "建筑与工程行业财税顾问组",
  "商贸流通企业税务顾问组",
  "股权与投资架构顾问组",
  "财务数字化与ERP顾问组",
  "企业内控流程顾问组"
];

export const insights: Insight[] = [
  {
    tag: "税务风险",
    title: "企业长期低利润申报，可能隐藏哪些税务风险？",
    risk: "收入、成本和费用结构长期不匹配，容易形成税务解释压力。",
    href: "/contact"
  },
  {
    tag: "经营风险",
    title: "账面盈利但现金流紧张，问题通常不在会计分录",
    risk: "利润、应收、存货和付款节奏没有被放到同一套经营模型里。",
    href: "/contact"
  },
  {
    tag: "行业案例",
    title: "制造企业成本核算粗放，如何影响老板决策？",
    risk: "产品线、订单和部门利润不清，会让管理层误判真实盈利来源。",
    href: "/contact"
  },
  {
    tag: "税务风险",
    title: "历史账务清理为什么不能只看凭证？",
    risk: "凭证只是结果，真正的风险常在业务合同、资金路径与票据逻辑。",
    href: "/contact"
  },
  {
    tag: "经营风险",
    title: "企业扩张前，为什么要先重建财务报表体系？",
    risk: "没有经营口径的报表，会让扩张决策失去可验证的数据基础。",
    href: "/contact"
  },
  {
    tag: "行业案例",
    title: "建筑工程企业项目制核算，最容易遗漏哪些风险？",
    risk: "项目收入确认、成本归集和分包票据管理常常交织在一起。",
    href: "/contact"
  }
];

export const processSteps = [
  {
    title: "预约沟通",
    description: "通过一次经营交流，了解企业阶段和核心问题。"
  },
  {
    title: "企业经营尽调",
    description: "围绕账、税、现金流、合同和管理流程做初步梳理。"
  },
  {
    title: "年度陪伴",
    description: "确认顾问计划后，进入长期复盘和风险前置机制。"
  }
];

export const faqs = [
  {
    category: "服务与适配",
    question: "一年顾问适合哪些企业？",
    answer: "更适合经营规模正在扩大、管理复杂度上升，并且希望把财税问题纳入经营决策的企业。通常年营收在2000万元以上、已有一定业务基础的企业体会更明显。"
  },
  {
    category: "服务与适配",
    question: "我们和代账公司有什么区别？",
    answer: "代账公司主要处理记账与申报，解决“报得出去”；我们更关注财税风险、经营分析和财务体系建设，解决“看得清、管得住、能决策”。两者不冲突，可以并行。"
  },
  {
    category: "服务与适配",
    question: "已经有专职会计，还需要年度顾问吗？",
    answer: "需要与否取决于会计的定位。专职会计解决日常核算，年度顾问提供跨会计、税务、法律与经营的综合判断，以及会计不容易独立给出的外部视角和风险前置建议。"
  },
  {
    category: "服务与适配",
    question: "初创企业或只需要代账的企业适合吗？",
    answer: "不一定适合。如果企业尚在起步阶段，或当前只需要基础代账服务，年度顾问可能不是最优选择。我们会在初步交流时明确告知是否适配。"
  },
  {
    category: "合作与费用",
    question: "一年顾问是怎么收费的？",
    answer: "采用年度顾问制，费用与企业规模、业务复杂度、服务范围相关，按年计费。我们不公开统一价目，而是在初步交流、了解实际需求后给出明确报价，做到先诊断、后报价。"
  },
  {
    category: "合作与费用",
    question: "费用包含哪些？是否包含代账、审计等第三方费用？",
    answer: "年度顾问费对应顾问服务本身，包含约定范围内的诊断、分析、方案与年度陪伴。代账、专项审计、评估等第三方服务费用不包含在内，如需要我们会协助对接并单独说明。"
  },
  {
    category: "合作与费用",
    question: "是否可以按次或按项目合作？",
    answer: "我们以年度顾问为主，原因是一次性咨询很难解决长期积累的系统性问题。对于个别明确、边界清晰的专项事项，可在年度顾问框架内单独约定。"
  },
  {
    category: "合作与费用",
    question: "是否签订正式合同？",
    answer: "会。正式合作前会明确服务边界、交付方式、沟通机制和双方责任，并签订正式服务文件；付款通常按服务阶段分批进行。"
  },
  {
    category: "合作与费用",
    question: "如何开始合作？",
    answer: "先预约一次经营交流，再做企业经营尽调，随后制定年度顾问计划，确认并签约后进入长期陪伴。整个前期沟通不以签约为前提。"
  },
  {
    category: "交付与沟通",
    question: "一般多久上门一次？",
    answer: "上门频率会根据企业阶段、资料复杂度和当期重点安排，不用固定频次替代真实需要；关键节点我们会到场，日常以线上沟通为主。"
  },
  {
    category: "交付与沟通",
    question: "是否支持微信和电话沟通？",
    answer: "支持。日常问题可以通过微信和电话沟通，重要事项会沉淀成书面建议或会议纪要，避免口头结论没有依据。"
  },
  {
    category: "交付与沟通",
    question: "每年会交付哪些成果？",
    answer: "通常包括财税体检与风险清单、利润与现金流口径校准、经营看板或分析报表、阶段性复盘记录，以及年度健康报告与下一年度建议。具体交付以合同约定为准。"
  },
  {
    category: "交付与沟通",
    question: "服务过程中会更换顾问吗？",
    answer: "原则上保持稳定的顾问配置，由双师团队协同。如涉及特殊专业问题，会引入相应领域的顾问共同参与，并由主责顾问统一对接口径。"
  },
  {
    category: "风险与合规",
    question: "遇到税务检查怎么办？",
    answer: "我们会先协助企业梳理事实、资料与风险边界，再根据具体事项给出应对建议与沟通口径，不隐瞒、不扩大，把影响控制在合理范围。"
  },
  {
    category: "风险与合规",
    question: "你们能保证不被查、或少交税吗？",
    answer: "不能，也不做这类承诺。财税顾问的价值在于基于真实业务的判断与建议，帮助企业识别风险、规范经营，而不是承诺规避检查或减少税负。"
  },
  {
    category: "风险与合规",
    question: "历史遗留的账务和税务问题，还来得及处理吗？",
    answer: "多数情况可以，关键是分清楚问题的性质和边界，安排合理的处理节奏。我们会在体检阶段评估历史问题的影响范围，再决定先处理什么、怎么处理。"
  }
];


export const differentiators = [
  {
    icon: BriefcaseBusiness,
    title: "从经营结果倒推财税系统",
    description: "不是只看账，而是把财务、税务、现金流与经营决策放在同一张图里。"
  },
  {
    icon: Users,
    title: "双师团队协同交付",
    description: "注册会计师与税务师共同参与，兼顾财务真实性与税务安全边界。"
  },
  {
    icon: CheckCircle2,
    title: "输出可执行方案",
    description: "每次交流都沉淀为问题清单、优先级和下一步行动建议。"
  }
];

export type ServicePackage = {
  title: string;
  desc: string;
  intro: string;
  key?: boolean;
  deliverables: string[];
  cycle: string;
  fit: string;
};

export const servicePackages: ServicePackage[] = [
  {
    title: "审计支持（年审/专项/内审）",
    desc: "内部审计、年度审计与专项审计，围绕企业经营真实性进行判断",
    intro:
      "年审怕查出问题、专项审计不会配合、想摸清家底没人手。我们不只出报告——审前扫雷、审中配合沟通、审后跟进整改，让审计从“被查”变成“帮您看清问题”，不被动、不怕查。",
    deliverables: [
      "审前风险自查与整改清单",
      "审计过程配合与沟通口径",
      "审计问题台账与整改跟踪",
      "内控改进建议"
    ],
    cycle: "随审计周期推进，通常 2–6 周",
    fit: "需要年度审计、专项资金审计，或想通过内审摸清家底的企业"
  },
  {
    title: "财务乱账重建",
    desc: "对历史账务混乱企业进行结构性梳理与体系重建",
    intro:
      "历史账目混乱、两套账、银行流水没入账、往来挂账几年不清。我们把乱账拆开理清，重建一套能对上银行、对上税局、对上经营实际的账。",
    deliverables: [
      "历史账务差异清单与处理路径",
      "重建后的真实账套",
      "往来账款与库存核对表",
      "后续记账与对账规范"
    ],
    cycle: "视历史跨度与数据量，通常 3–10 周",
    fit: "长期代账但账实不符、两套账并行、准备融资或规范的企业"
  },
  {
    title: "税务稽查应对",
    desc: "针对稽查、协查及预警事项提供风险分析与应对支持",
    intro:
      "被税局约谈、来函或上门了。我们帮企业梳理事实、评估风险额度、准备情况说明材料，不扩大、不隐瞒，把影响控制在合理范围。",
    deliverables: [
      "风险事项事实梳理与证据链清单",
      "风险额度评估与应对策略",
      "情况说明与书面材料",
      "后续合规整改建议"
    ],
    cycle: "按税局要求时限推进，通常 1–4 周",
    fit: "收到预警、协查通知，或面临约谈、现场检查的企业"
  },
  {
    title: "股权架构设计",
    desc: "控制权设计、股权分配、业务拆分及税务影响测算",
    intro:
      "合伙没约定、股权平均分、自然人直接持股、钱投了但退出路径不清。我们帮企业把股权结构理清楚，兼顾控制权、激励效果和税负成本。",
    deliverables: [
      "股权架构图与控制权安排",
      "股权调整方案与退出机制",
      "持股平台与激励框架建议",
      "股权变动的税务测算"
    ],
    cycle: "通常 2–5 周，视方案复杂度",
    fit: "合伙创业、准备引入投资或激励、业务拆分与集团化的企业"
  },
  {
    title: "高端合规账体系",
    desc: "构建同时满足合规要求与经营分析的财务体系",
    key: true,
    intro:
      "代账只解决“报得出去”，解决不了老板看账时的一堆问号——成本准不准、利润真不真、库存对不对、钱到底在哪。我们帮企业建一套合规账，不只为应付税局，更让老板每个月能看清经营实况，决策有依据。",
    deliverables: [
      "会计政策与核算口径手册",
      "科目体系与凭证流转规范",
      "成本与费用归集口径说明",
      "月度经营分析报表模板"
    ],
    cycle: "通常 4–8 周完成体系搭建，之后按月运行与校准",
    fit: "账务口径混乱、代账数据无法支撑经营分析、准备规范化的成长型企业"
  }
];
