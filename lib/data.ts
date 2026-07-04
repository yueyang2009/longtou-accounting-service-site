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
  positioning: "企业高端财税服务机构",
  slogan: "让企业账更清楚，让经营决策更可靠",
  subtitle: "双师带队，专注中小企业财税规范与经营体系建设",
  phone: "400-000-0000",
  wechat: "微信二维码占位"
};

export const navItems = [
  { label: "首页", href: "/" },
  { label: "关于我们", href: "/about" },
  { label: "服务体系", href: "/services" },
  { label: "顾问团队", href: "/team" },
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
  { value: "高级会计师", label: "专家配置", detail: "× 2" },
  { value: "10年以上", label: "平均经验", detail: "" }
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
    name: "周明远",
    title: "首席财税顾问",
    focus: "集团财税风险、税务架构、重大交易筹划",
    credential: "CPA / CTA / 15年企业服务经验"
  },
  {
    name: "林清禾",
    title: "经营财务顾问",
    focus: "利润结构、成本管理、经营分析体系",
    credential: "高级会计师 / 12年财务管理经验"
  },
  {
    name: "陈启山",
    title: "内控与流程顾问",
    focus: "财务流程、内控建设、ERP落地",
    credential: "CPA / 10年制造业财务负责人经验"
  },
  {
    name: "许念",
    title: "税务合规顾问",
    focus: "税务风险扫描、历史账务修复、合规申报",
    credential: "CTA / 11年税务咨询经验"
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

