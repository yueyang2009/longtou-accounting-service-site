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

const siteBasePath = process.env.GITHUB_PAGES === "true" ? "/longtou-accounting-service-site" : "";

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
};

export type Insight = {
  tag: "税务风险" | "经营风险" | "行业案例";
  title: string;
  risk: string;
  href: string;
};

export const brand = {
  name: "龙头会服",
  positioning: "企业财税与经营参谋团队",
  slogan: "让企业账更清楚，让经营决策更可靠",
  subtitle: "双师带队，专注中小企业财税规范与经营体系建设",
  phone: "18103835769",
  wechat: "李小阳TEL18103835769",
  wechatQr: `${siteBasePath}/images/wechat-qr.jpg`,
  feishuQr: `${siteBasePath}/images/feishu-qr.jpg`
};

export const navItems = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  { label: "年度顾问", href: "/annual-advisory" },
  { label: "为什么需要顾问", href: "/why-annual-advisor" },
  { label: "联系我们", href: "/contact" }
];

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
  { value: "CPA", label: "注册会计师", detail: "× 8" },
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
    type: "乱账梳理",
    background: "成长型制造企业，年营收约3000万元，多年由代账公司处理账务，财务数据与经营实际严重脱节。",
    problem: `账务长期混乱，库存账实不符，无法反映真实利润和现金流状况。企业主对"账上的钱"和"实际的钱"之间的差异感到困惑。`,
    process: "对历史账务进行结构性重建：逐月核对银行流水、发票与入账数据，清理往来账款，重新归集成本与费用，建立适配制造业的成本核算口径。",
    result: "财务数据与经营情况重新匹配，管理层首次看到按产品线拆分的真实利润结构。企业以此为基础完成了融资尽调准备。"
  },
  {
    type: "税务稽查应对",
    background: "中型商贸企业，年营收约5000万元，收到税务局风险预警提示，涉及进销项匹配异常，存在潜在补税风险。",
    problem: "企业在发票管理和成本归集中存在历史偏差，部分交易链条的发票流与资金流不一致，税局要求限期说明。",
    process: "进行全量交易结构分析：逐笔核查风险交易背后的真实业务流，还原实际经营情况，制定差异说明方案与补充证据链。",
    result: "完成风险处理与税局沟通，避免了重大处罚风险。企业建立了发票-合同-资金三流一致的内部管理机制。"
  },
  {
    type: "股权架构设计",
    background: "多人合伙的科技企业，年营收约2000万，核心技术团队已稳定，正在准备引入外部投资。",
    problem: "合伙企业股权结构停留在创业初期的均分模式，无明确控制权安排，影响投资人决策信心。",
    process: "重新设计股权架构：明确创始团队控制权分配，设置员工持股平台预留期权池，同步测算股权调整中的税务影响。",
    result: "形成清晰的控制权结构和可执行的股权激励方案，企业顺利完成了首轮融资，投资人认可其治理规范性。"
  },
  {
    type: "财务体系重建",
    background: "快速扩张的连锁服务企业，年营收约1亿元，自建财务团队时间短，缺乏规范的财务核算和管理流程。",
    problem: "财务体系无法支撑多门店经营分析，各门店成本口径不统一，管理层无法准确判断各门店的真实盈利能力。",
    process: "从门店维度重新搭建财务核算框架：统一成本归集标准，建立标准化凭证流转流程，设计门店经营分析报表模板。",
    result: "管理层每月能收到按门店拆分的经营分析报告，异常成本可追溯到具体门店和工序环节。"
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
    items: ["财税体检", "利润口径校准", "风险清单"]
  },
  {
    title: "历史问题理顺",
    items: ["账务修正", "税务口径确认", "流程断点识别"]
  },
  {
    title: "经营看板建立",
    items: ["利润看板", "现金流节奏", "项目或产品核算"]
  },
  {
    title: "预算与制度落地",
    items: ["预算机制", "审批边界", "财务协同机制"]
  },
  {
    title: "年度复盘与来年规划",
    items: ["年度健康报告", "风险复盘", "下一年度重点"]
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
    credential: "专业财税顾问"
  },
  {
    name: "李岳阳",
    title: "高端财税事业部",
    focus: "财税合规、ERP实施、股权架构、企业经营落地",
    credential: "财税与经营顾问"
  },
  {
    name: "刘宏义",
    title: "高端财税事业部",
    focus: "内部控制、税收风险防范、IPO辅导、专项审计",
    credential: "风险与内控顾问"
  },
  {
    name: "吴新明",
    title: "高端财税事业部",
    focus: "上市辅导、IPO审计、税务筹划、尽职调查",
    credential: "税务与审计顾问"
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
    question: "一年顾问适合哪些企业？",
    answer: "更适合经营规模正在扩大、管理复杂度上升，并且希望把财税问题纳入经营决策的企业。"
  },
  {
    question: "一般多久上门一次？",
    answer: "上门频率会根据企业阶段、资料复杂度和当期重点安排，不用固定频次替代真实需要。"
  },
  {
    question: "是否签订正式合同？",
    answer: "正式合作前会明确服务边界、交付方式、沟通机制和双方责任，并签订正式服务文件。"
  },
  {
    question: "是否支持微信和电话沟通？",
    answer: "支持。日常问题可以通过微信和电话沟通，重要事项会沉淀成书面建议或会议纪要。"
  },
  {
    question: "遇到税务检查怎么办？",
    answer: "我们会先协助企业梳理事实、资料和风险边界，再根据具体事项给出应对建议。"
  },
  {
    question: "如何开始合作？",
    answer: "先预约一次经营交流，再做企业经营尽调，随后制定年度顾问计划，确认后进入长期陪伴。"
  },
  {
    question: "你们与代账公司有什么区别？",
    answer: "代账公司主要处理记账申报，我们更关注财税风险、经营分析和财务体系建设。"
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
