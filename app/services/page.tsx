import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HomeHeader } from "@/components/HomeHeader";
import { Footer } from "@/components/Footer";
import { HomeSectionMotion } from "@/components/HomeSectionMotion";
import { ServiceScenarioCards } from "@/components/ServiceScenarioCards";
import { SectionReveal } from "@/components/SectionReveal";
import { brand } from "@/lib/data";

function Label({ text }: { text: string }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">{text}</p>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">{children}</h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">{children}</div>;
}

function QuoteLine({ children }: { children: string }) {
  return (
    <p className="border-l-4 border-brand-ink bg-brand-soft px-6 py-5 text-lg font-medium leading-7 text-brand-ink">{children}</p>
  );
}

export default function ServicesPage() {
  return (
    <div className="glass-section-page min-h-screen bg-brand-paper">
      <HomeHeader />
      <HomeSectionMotion rootSelector=".glass-section-page main" sectionSelector=".services-reveal > section" />

      <main>
        <SectionReveal>

        {/* ════════════════════════════════════════
            ① 页面定位
            ════════════════════════════════════════ */}
        {/* ════════════════════════════════════════
            ① 页面定位（Hero 渐变，与年度顾问页首个模块一致）
            ════════════════════════════════════════ */}
        <section className="ppt-hero annual-band relative overflow-hidden border-b border-white/10">
          <div className="annual-grid-bg" />
          <div className="ppt-veil" />
          <div className="ppt-content relative mx-auto max-w-4xl px-6 py-28 text-center md:py-36">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#8a857a]">龙头会服 · 能力体系</p>
            <h1 className="text-4xl font-semibold leading-[1.2] tracking-tight text-white md:text-6xl">
              我们不是提供单一服务 <br />
              而是基于企业经营系统提供
              <span className="text-gradient-gold">持续判断与支持能力</span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-brand-body">
              本页面用于说明龙头会服的能力结构与问题解决方式。
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ② 问题定义模块
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="问题定义" />
            <h2 className="svc-problem-title text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
              <span className="svc-problem-line">
                <span>企</span><span>业</span><span>财</span><span>税</span><span>问</span><span>题</span>
                <span className="svc-ch-space" />
                <span>本</span><span>质</span><span>上</span><span>不</span><span>是</span>
                <span>财</span><span>务</span><span>问</span><span>题</span>
              </span>
              <span className="svc-problem-line svc-problem-line2">
                <span>而</span><span>是</span>
                <span>经</span><span>营</span><span>系</span><span>统</span><span>问</span><span>题</span>
              </span>
            </h2>
            <Body>
              <p>财务数据无法反映真实经营情况——账面利润与现金状况之间存在系统性差异，但很难定位差异来源。</p>
              <p>税务风险在经营过程中逐步累积——不是企业故意违规，而是在发票管理、资金路径和成本归集中的偏差日积月累。</p>
              <p>财务体系无法支撑决策——代账口径的数据只能满足申报要求，无法回答“哪个产品赚钱”“现金还能撑多久”这类经营问题。</p>
              <p>股权结构与业务发展不匹配——企业在成长，但股权架构停留在创业初期，影响融资、激励和长期稳定性。</p>
              <p>内部管理与财务体系脱节——业务流程与财务核算各自独立运行，形成两套数据，无法交叉验证。</p>
              <QuoteLine>
                企业问题不是单点问题，而是系统性问题。
              </QuoteLine>
            </Body>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ③ 能力体系模块（核心）
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="核心能力" />
            <Heading>我们的核心能力</Heading>
            <div className="mt-10 space-y-5">
              {[
                {
                  title: "经营真实性识别能力",
                  desc: "从业务实际发生出发，对经营数据进行结构性判断。"
                },
                {
                  title: "财务结构重建能力",
                  desc: "对企业财务体系进行系统性梳理与重建，使其具备分析基础。"
                },
                {
                  title: "税务风险判断能力",
                  desc: "基于经营数据分析，在风险形成前进行识别与判断。"
                },
                {
                  title: "企业结构设计能力",
                  desc: "包括股权结构、控制权结构与业务结构设计。"
                },
                {
                  title: "持续经营支持能力",
                  desc: "建立能够持续运转的财务与经营分析机制。"
                }
              ].map((cap) => (
                <div key={cap.title} className="border border-brand-line bg-brand-soft p-7 rounded-card">
                  <p className="text-lg font-semibold text-brand-ink">{cap.title}</p>
                  <p className="mt-3 text-sm leading-7 text-brand-muted">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ④ 服务模块（降维表达）
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="应用场景" />
            <Heading>基于上述能力，我们可以提供以下支持</Heading>
            <p className="mt-6 text-sm leading-7 text-brand-muted">
              以下既为能力的具体应用场景，也是独立的产品。点击卡片可翻转查看业务简介，详情可咨询
            </p>
            <ServiceScenarioCards />
          </div>
        </section>

        {/* ════════════════════════════════════════
            ⑤ 交付结果模块
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="交付结果" />
            <Heading>我们的目标不是提供服务，而是实现以下结果</Heading>
            <div className="mt-10 space-y-4">
              {[
                "企业经营结构清晰化",
                "财务数据真实反映经营情况",
                "税务风险可识别、可控制",
                "股权结构与业务逻辑一致",
                "财务体系具备持续运行能力",
              ].map((item) => (
                <div key={item} className="border border-brand-line bg-brand-card p-6 rounded-card">
                  <p className="text-base leading-7 text-brand-muted">{item}</p>
                </div>
              ))}
            </div>
            <div className="mt-8">
              <QuoteLine>
                让企业的经营问题变得可理解、可控制、可持续。
              </QuoteLine>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
            <Label text="下一步" />
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
              <span className="inline-block text-left">
                <span className="block">如果您的企业正面临上述问题</span>
                <span className="block pl-[6em]">可以先做一次企业财税风险诊断</span>
              </span>
            </h2>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link href="/contact" className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-emerald px-7 text-sm font-medium text-white transition hover:bg-brand-emerald-hover">
                申请企业财税风险诊断（限量开放）
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-sm text-brand-muted">每月仅服务有限企业，需初步评估是否适配年度顾问体系。</p>
            </div>
          </div>
        </section>
        </SectionReveal>

      </main>

      <Footer />
    </div>
  );
}
