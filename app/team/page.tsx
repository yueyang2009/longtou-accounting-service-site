import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Award, Handshake, ShieldCheck, Users } from "lucide-react";

import { HomeHeader } from "@/components/HomeHeader";
import { Footer } from "@/components/Footer";
import { TeamOrbit, type OrbitMember } from "@/components/TeamOrbit";
import { AdvisorMatrix, type AdvisorMember } from "@/components/AdvisorMatrix";
import { brand, trustMetrics, extendedExperts } from "@/lib/data";

const assetBasePath = process.env.GITHUB_PAGES === "true" ? "/longtou-accounting-service-site" : "";

export const metadata: Metadata = {
  title: `团队介绍｜${brand.name}`,
  description: "龙头会服高端财税事业部专家顾问团队，覆盖财务、税务、法律、经营与企业内控。"
};

const coreMembers: OrbitMember[] = [
  {
    name: "杜楠楠",
    title: "高端财税事业部 总经理",
    avatar: `${assetBasePath}/images/team/du-nannan.jpg`,
    summary: "税务合规、股权架构、财务体系",
    fullIntro:
      "资深财税风控专家、注册会计师、注册税务师、高级会计师。深耕财税领域15年，拥有10年大型集团一线财务管理经验，具备5年财税事务所从业及团队管理经验。擅长高端财税顾问、税务合规筹划、股权架构设计、历史乱账清理、财务体系搭建、企业内控体系搭建、专项审计及全域财税风险排查。",
    slug: "du-nannan"
  },
  {
    name: "李岳阳",
    title: "高端财税事业部 高级顾问",
    avatar: `${assetBasePath}/images/team/li-yueyang.png`,
    summary: "财税风控、法律经营、企业落地",
    fullIntro:
      "资深财税风控专家、注册会计师、律师、高级管理会计师。15年一线财税实战经验，7年头部会计师事务所执业，8年集团财务总监管理经验。深耕财务、税务、法律、经营四维体系，精通财税合规与企业经营落地，提供全链条企业财税解决方案。",
    slug: "li-yueyang"
  },
  {
    name: "刘宏义",
    title: "高端财税事业部 高级合伙人",
    avatar: `${assetBasePath}/images/team/liu-hongyi.png`,
    summary: "内部控制、税收风险、IPO辅导",
    fullIntro:
      "注册会计师、注册造价师、河南省总会计师协会理事。曾任双汇发展、泰丰集团、嘉里建设等大型企业集团财务负责人。擅长内部控制建设及评价、财税体系优化和建立、税收风险识别和防范、IPO企业财务辅导和审计、日常财税咨询、财务报表审计及专项审计。",
    slug: "liu-hongyi"
  },
  {
    name: "吴新明",
    title: "高端财税事业部 高级合伙人",
    avatar: `${assetBasePath}/images/team/wu-xinming.png`,
    summary: "上市辅导、IPO审计、尽职调查",
    fullIntro:
      "注册会计师、注册税务师、高级会计师。曾任全国前20强会计师事务所项目经理、地产全国前20强区域财务总监、消费品全国前10强财务部门负责人。擅长上市辅导、发债、IPO审计、税务筹划、财税咨询、内控设计、尽职调查等。",
    slug: "wu-xinming"
  }
];

const advisorMembers: AdvisorMember[] = [
  {
    name: "李现文",
    title: "高端财税事业部 高级顾问",
    credential: "注册会计师 / 注册税务师",
    focus: "企业ERP设计与实施、全面预算管理、企业资本运作、股权架构搭建、企业财务体系建设",
    avatar: `${assetBasePath}/images/team/li-xianwen.jpg`
  },
  {
    name: "张亚琼",
    title: "高端财税事业部 高级顾问",
    credential: "注册会计师 / 注册税务师",
    focus: "财务组织管理体系、财务核算体系、流程信息化、财务分析、全面预算管理、财税咨询及规划"
  },
  {
    name: "赵娟",
    title: "高端财税事业部 高级顾问",
    credential: "注册会计师 / 税务师 / 资深财税咨询师",
    focus: "内控设计、审计、预算管理、成本管控、财税咨询",
    avatar: `${assetBasePath}/images/team/zhaojuan.png`
  },
  {
    name: "王慧现",
    title: "高端财税事业部 高级顾问",
    credential: "注册会计师 / 中级会计师",
    focus: "财务组织管理体系、财务核算体系、流程信息化、财务分析、全面预算管理、财税咨询及规划",
    avatar: `${assetBasePath}/images/team/wang-huixian.png`
  },
  {
    name: "朱丽君",
    title: "高端财税事业部 高级顾问",
    credential: "注册会计师 / 高新评审专家 / 大型审计项目经理",
    focus: "内部控制审计、财税业一体化融合、财税合规",
    avatar: `${assetBasePath}/images/team/zhu-lijun.png`
  },
  {
    name: "苏瑞利",
    title: "高端财税事业部 高级顾问",
    credential: "注册会计师 / 高新评审专家 / 大型审计项目经理",
    focus: "内部控制审计、财税业一体化融合、财税合规",
    avatar: `${assetBasePath}/images/team/su-ruili.png`
  },
  {
    name: "赵会婷",
    title: "高端财税事业部 高级顾问",
    credential: "注册会计师",
    focus: "高新技术企业审计、中小企业财税问题诊断与处理",
    avatar: `${assetBasePath}/images/team/zhao-huiting.png`
  },
  {
    name: "赵艳婷",
    title: "高端财税事业部 高级顾问",
    credential: "注册会计师",
    focus: "财税体系建设、数据洞察、战略驱动、企业全生命周期陪伴",
    avatar: `${assetBasePath}/images/team/zhao-yanting.png`
  },
  {
    name: "王锋",
    title: "高端财税事业部 高级顾问",
    credential: "资深财税咨询师 / 培训师 / 股权设计师 / 大学兼职讲师",
    focus: "税务规划、商业模式、股权及战略设计、财税课程体系开发",
    avatar: `${assetBasePath}/images/team/wang-feng.png`
  },
  {
    name: "王玉霞",
    title: "高端财税事业部 高级顾问",
    credential: "注册税务师 / 中级会计师",
    focus: "财务体系建设、税务合规计划、股权架构设计、企业风险管控",
    avatar: `${assetBasePath}/images/team/wang-yuxia.jpg`
  },
  {
    name: "赵晴",
    title: "高端财税事业部 高级顾问",
    credential: "注册税务师 / 中级会计师",
    focus: "财务体系建设、税务合规计划、股权架构设计、企业风险管控"
  },
  {
    name: "李静雯",
    title: "高端财税事业部 高级顾问",
    credential: "注册税务师 / 中级会计师",
    focus: "企业工商全流程服务、税务历史问题处理、税务规划、民营企业财务系统建设",
    avatar: `${assetBasePath}/images/team/li-jingwen.png`
  },
  {
    name: "刘亚杰",
    title: "高端财税事业部 高级顾问",
    credential: "注册税务师 / 中级会计师",
    focus: "财务体系建设、税务合规计划、企业风险管控、审计风险诊断"
  },
  {
    name: "石泽坤",
    title: "高端财税事业部 高级顾问",
    credential: "注册税务师 / 中级会计师",
    focus: "财务体系建设、税务合规计划、企业风险管控、审计风险诊断"
  }
];

const teamValues = [
  {
    icon: ShieldCheck,
    title: "双师协同",
    description: "注册会计师与注册税务师共同参与重点方案，兼顾财务真实性与税务安全边界。"
  },
  {
    icon: Award,
    title: "一线实战",
    description: "从大型集团财务管理到民营企业乱账治理，顾问经验来自真实经营现场。"
  },
  {
    icon: Users,
    title: "交叉审核",
    description: "重要事项不从单一视角定结论，通过交叉审核降低判断盲区。"
  },
  {
    icon: Handshake,
    title: "年度陪伴",
    description: "不是按次交付，而是在经营节奏里持续看见、判断、修正和沉淀。"
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0f1513] text-white">
      <HomeHeader />

      <main>
        <TeamOrbit members={coreMembers} />

        <section className="team-advisor-matrix">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
            <div>
              <p className="team-section-eyebrow">Expert Matrix</p>
              <h2>高级顾问矩阵</h2>
            </div>

            <AdvisorMatrix members={advisorMembers} />
          </div>
        </section>

        <section className="team-value-section">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
            <div>
              <p className="team-section-eyebrow">Industry Coverage</p>
              <h2 className="mt-5 text-3xl font-semibold text-white md:text-4xl">按行业配置专属顾问组</h2>
              <p className="team-section-lead mt-5">
                核心顾问之外，我们按行业组建顾问组，覆盖制造、建筑、商贸、科技、餐饮等河南主流产业，确保方案贴合行业真实经营逻辑。
              </p>
            </div>
            <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {extendedExperts.map((group) => (
                <div
                  key={group}
                  className="flex items-center gap-3 rounded-card border border-white/10 bg-white/[0.04] px-6 py-5"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#d9c7a5]" />
                  <p className="text-sm font-medium text-white">{group}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="team-value-section">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {teamValues.map((value) => (
                <div key={value.title} className="team-value-card">
                  <value.icon className="h-7 w-7 text-[#e9d9bc]" />
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="team-proof-section">
          <div className="mx-auto grid max-w-7xl gap-px bg-brand-card/10 px-6 md:grid-cols-4 md:px-0">
            {trustMetrics.map((metric) => (
              <div key={metric.label} className="bg-[#0f1513] px-6 py-7 md:px-8">
                <p className="text-3xl font-semibold tracking-tight text-[#e9d9bc]">{metric.value}</p>
                <div className="mt-2 flex items-baseline gap-2">
                  <p className="text-sm text-white/58">{metric.label}</p>
                  {metric.detail ? <p className="text-base font-semibold text-white">{metric.detail}</p> : null}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="team-final-cta">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
            <p className="team-section-eyebrow mx-auto">Start With Diagnosis</p>
            <h2 className="team-final-cta-title" aria-label="先做一次判断，再决定是否合作">
              <span className="cta-row cta-row-1" aria-hidden="true">
                <span>先</span><span>做</span><span>一</span><span>次</span><span>判</span><span>断</span>
              </span>
              <span className="cta-row cta-row-2" aria-hidden="true">
                <span>再</span><span>决</span><span>定</span><span>是</span><span>否</span><span>合</span><span>作</span>
              </span>
            </h2>
            <p>
              不急着给方案，先把企业所处阶段、真实问题和需要优先处理的事项讲清楚。
            </p>
            <Link
              href="/contact"
              className="mt-9 inline-flex h-12 items-center gap-2 rounded-full bg-[#d9c7a5] px-7 text-sm font-bold text-[#111816] transition hover:bg-[#eadabd]"
            >
              申请企业财税风险诊断
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
