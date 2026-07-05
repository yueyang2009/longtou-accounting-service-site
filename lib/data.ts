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
  wechatQr: `${siteBasePath}/images/wechat-qr.jpg`
};

export const navItems = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  { label: "年度顾问", href: "/annual-advisory" },
  { label: "解决方案", href: "/solutions" },
  { label: "团队", href: "/team" },
  { label: "风险洞察", href: "/insights" },
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
  { value: "律师", label: "法律协同", detail: "× 2" },
  { value: "高级会计师", label: "专家配置", detail: "× 2" },
  { value: "1000+", label: "累计服务企业", detail: "" }
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
    industry: "一家制造企业（年营收8000万）",
    problem: '代账做了3年，账面显示盈利但老板说"口袋没钱"。老板想搞清楚每个产品线到底赚不赚钱。',
    process: "我们先重建成本核算口径——拆分材料、人工、制造费用和异常损耗。再按产品线做利润还原，发现两条产品线一直在亏本运营。",
    result: "老板关停了亏损产品线，调整了报价体系。三个月后，毛利率从12%提升到21%，账面和口袋对上了。",
    quote: "不是会计不好，是过去没人把账翻译成经营语言。"
  },
  {
    industry: "一家建筑企业（年营收1.2亿）",
    problem: "项目多、周期长、分包发票管理混乱。税局要求自查时，老板才发现几笔分包款存在发票和合同主体不一致的问题。",
    process: "我们先梳理每个项目的资金流和票据链，理清分包商资质和实际施工人。然后建立了分包商准入机制和项目财务台账制度。",
    result: "消除了虚开发票的隐患风险，并且做到了每个项目的收入、成本、回款可追溯、可审计。",
    quote: "以前发票入账就完事了，现在项目财务台账变成了管理工具。"
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
    output: "风险诊断报告",
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
    items: ["股权结构设计", "税务架构优化"],
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
    title: "预约1对1顾问沟通（限量）",
    description: "适合已有明确财税问题企业",
    cta: "预约顾问沟通"
  }
];

export const annualPlan = {
  title: "企业年度财税顾问计划",
  summary: '不是按次咨询，不是代账服务。而是全年陪伴，帮企业建立起"能自己运转"的财税管理体系。',
  suitable: ["年营收 2000万—2亿的成长型企业", "已有会计或代账，但缺少财税统筹", "老板想规范经营，但不清楚从哪里入手"],
  whatYouGet: [
    "每月一次经营数据看板——利润、现金流、风险指标一目了然",
    "季度深度沟通——复盘经营状况，调整下季度重点",
    "全年财税风险预警——发现隐患及时处理，不等税局找上门",
    "日常即时响应——有拿不准的事，一个电话有人接得住",
    "年度健康报告——全年经营总结+来年规划建议"
  ],
  process: [
    { step: "第一步", title: "免费诊断", desc: "初步了解企业现状，判断是否适合年度顾问服务" },
    { step: "第二步", title: "方案确认", desc: "根据行业和问题优先级，输出年度服务计划" },
    { step: "第三步", title: "签约启动", desc: "签订年度顾问合同，正式进入服务体系" }
  ]
};
export const revenueRanges = [
  "2000万以下",
  "2000万—5000万",
  "5000万—1亿",
  "1亿—5亿",
  "5亿以上"
];

export const formPainOptions = ["利润不清晰", "税务风险", "成本控制", "股权设计", "财务体系"];

export function scoreLead(input: Omit<Lead, "score">): Lead {
  let score = 0;

  if (input.revenueRange !== "2000万以下") {
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
    credential: "CPA / CTA / 高级会计师 / 15年"
  },
  {
    name: "李岳阳",
    title: "高端财税事业部",
    focus: "财税合规、ERP实施、股权架构、企业经营落地",
    credential: "CPA / 律师 / 高级管理会计师 / 15年"
  },
  {
    name: "刘宏义",
    title: "高端财税事业部",
    focus: "内部控制、税收风险防范、IPO辅导、专项审计",
    credential: "CPA / 注册造价师 / 省总会计师协会理事"
  },
  {
    name: "吴新明",
    title: "高端财税事业部",
    focus: "上市辅导、IPO审计、税务筹划、尽职调查",
    credential: "CPA / CTA / 高级会计师"
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
    title: "免费财税诊断",
    description: "通过基础信息与风险访谈，判断企业当前财税系统状态。"
  },
  {
    title: "初步方案输出",
    description: "根据企业阶段、行业和问题优先级，输出初步改善路径。"
  },
  {
    title: "正式合作",
    description: "进入专项咨询、体系建设或长期顾问服务。"
  }
];

export const faqs = [
  {
    question: "你们与代账公司有什么区别？",
    answer: "代账公司主要处理记账申报，龙头会服更关注财税风险、经营分析和财务体系建设。"
  },
  {
    question: "收费方式是怎样的？",
    answer: "根据企业规模、问题复杂度和服务周期定制报价，免费诊断阶段不收取费用。"
  },
  {
    question: "服务范围覆盖哪些企业？",
    answer: "更适合年营收 2000万—5亿、已有稳定经营规模并希望升级财税体系的企业。"
  },
  {
    question: "是否支持远程服务？",
    answer: "支持远程诊断、资料审阅和阶段性会议，必要时可安排现场访谈。"
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
    description: "每次诊断都沉淀为问题清单、优先级和下一步行动建议。"
  }
];
