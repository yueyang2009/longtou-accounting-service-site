import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BrandLogo } from "@/components/BrandLogo";
import { MobileNav } from "@/components/MobileNav";
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
    <div className="min-h-screen bg-brand-paper">
      <header className="sticky top-0 z-50 border-b border-brand-line bg-[#111816]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="inline-flex items-center rounded-full bg-white px-2 py-1">
            <BrandLogo className="h-9 w-auto max-w-[150px]" />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            <Link href="/" className="text-sm text-brand-muted hover:text-brand-ink">首页</Link>
            <Link href="/services" className="text-sm font-medium text-brand-ink">服务体系</Link>
            <Link href="/about" className="text-sm text-brand-muted hover:text-brand-ink">关于</Link>
            <Link href="/annual-advisory" className="text-sm text-brand-muted hover:text-brand-ink">年度顾问</Link>
          </nav>
          <MobileNav
            links={[
              { href: "/", label: "首页" },
              { href: "/services", label: "服务体系" },
              { href: "/about", label: "关于" },
              { href: "/annual-advisory", label: "年度顾问" },
            ]}
          />
          <Link href="/contact" className="hidden lg:inline-flex rounded-full bg-brand-emerald px-5 py-2 text-sm font-medium text-white transition hover:bg-brand-emerald-hover">
            申请企业财税风险诊断（限量开放）
          </Link>
        </div>
      </header>

      <main>

        {/* ════════════════════════════════════════
            ① 页面定位
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
            <Label text="龙头会服 · 能力体系" />
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-5xl">
              我们不是提供单一服务，<br />
              而是基于企业经营系统提供持续判断与支持能力。
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-muted">
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
            <Heading>企业财税问题，本质上不是财务问题，而是经营系统问题。</Heading>
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
              以下既为能力的具体应用场景，也是独立的产品。详情可咨询
            </p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {[
                ["审计支持", "内部审计、年度审计与专项审计，围绕企业经营真实性进行判断"],
                ["财务乱账重建", "对历史账务混乱企业进行结构性梳理与体系重建"],
                ["税务稽查应对", "针对稽查、协查及预警事项提供风险分析与应对支持"],
                ["股权架构设计", "控制权设计、股权分配、业务拆分及税务影响测算"],
                ["高端合规账体系", "构建同时满足合规要求与经营分析的财务体系"],
              ].map(([title, desc]) => (
                <div key={title} className="border border-brand-line bg-brand-card p-6 rounded-card">
                  <p className="text-base font-semibold text-brand-ink">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-brand-muted">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ⑤ 重点业务说明
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="业务说明" />
            <Heading>重点业务说明</Heading>
            <div className="mt-10 space-y-6">
              {[
                {
                  title: "审计支持",
                  desc: "围绕企业经营真实性进行审计分析，包括内部审计、年度审计与专项审计，重点识别流程漏洞与经营风险。"
                },
                {
                  title: "财务乱账重建",
                  desc: "对历史账务混乱企业进行结构性梳理与财务体系重建。"
                },
                {
                  title: "税务稽查应对",
                  desc: "针对税务稽查、协查及预警事项提供风险分析与应对支持。"
                },
                {
                  title: "股权架构设计",
                  desc: "包括控制权设计、股权分配、业务拆分及税务影响测算。"
                },
                {
                  title: "高端合规账体系",
                  desc: "构建能够同时满足合规要求与经营分析的财务体系。"
                }
              ].map((item) => (
                <div key={item.title} className="border-b border-brand-line pb-6 last:border-0">
                  <p className="text-base font-semibold text-brand-ink">{item.title}</p>
                  <p className="mt-2 text-sm leading-7 text-brand-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ⑥ 交付结果模块
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
              如果你的企业正面临上述问题，可以先做一次企业财税风险诊断。
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

      </main>

      <footer className="bg-brand-emerald text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <p className="text-sm text-white/60">{brand.name} · {brand.positioning}</p>
          <p className="text-sm text-white/60">电话 {brand.phone}</p>
        </div>
      </footer>
    </div>
  );
}
