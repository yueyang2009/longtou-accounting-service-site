import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BrandLogo } from "@/components/BrandLogo";
import { brand } from "@/lib/data";

function Label({ text }: { text: string }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">
      {text}
    </p>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
      {children}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">{children}</div>;
}

function QuoteLine({ children }: { children: string }) {
  return (
    <p className="border-l-4 border-brand-ink bg-brand-soft px-6 py-5 text-lg font-medium leading-7 text-brand-ink">
      {children}
    </p>
  );
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="inline-flex items-center">
            <BrandLogo className="h-9 w-auto max-w-[150px]" />
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm text-brand-muted hover:text-brand-ink">首页</Link>
            <Link href="/services" className="text-sm font-medium text-brand-ink">服务体系</Link>
            <Link href="/about" className="text-sm text-brand-muted hover:text-brand-ink">关于</Link>
            <Link href="/why-annual-advisor" className="text-sm text-brand-muted hover:text-brand-ink">年度顾问</Link>
          </nav>
          <Link
            href="/contact"
            className="rounded-md bg-brand-ink px-5 py-2 text-sm font-medium text-white transition hover:bg-black"
          >
            申请企业财税风险诊断（限时开放）
          </Link>
        </div>
      </header>

      <main>

        {/* ════════════════════════════════════════
            ① 我们解决什么问题
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
            <Label text="核心判断" />
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-5xl">
              企业财税问题，本质是经营系统问题。
            </h1>
            <Body>
              <p>财务数据无法支持经营决策——账面利润与真实利润之间存在差距，但没有人能说清差距在哪里。</p>
              <p>账务与经营不一致——代账按发票入账，业务按实际发生运转，两套数据长期平行，老板看到的报表和企业真实状况是两张皮。</p>
              <p>税务风险逐步累积——不是企业故意违规，而是在经营过程中，发票管理、资金路径、成本归集的偏差日积月累，形成隐患。</p>
              <p>股权结构与经营不匹配——企业在发展，但股权架构停留在创业初期，影响融资、激励和长期经营稳定性。</p>
              <QuoteLine>
                这些问题的共同根源，不是财务人员的能力问题，而是企业缺少一套能够将财务与经营拉通的系统。
              </QuoteLine>
            </Body>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ② 能力体系（核心）
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="能力体系" />
            <Heading>服务背后的五层专业能力</Heading>
            <div className="mt-10 space-y-5">
              {[
                {
                  title: "经营真实性识别能力",
                  desc: "穿透代账数据和账面报表，还原企业真实的经营状况和利润水平。"
                },
                {
                  title: "财务结构重建能力",
                  desc: "从业务实际发生出发，重建收入确认、成本归集和资金管理的核算体系。"
                },
                {
                  title: "税务风险判断能力",
                  desc: "识别历史积累的税务隐患，判断风险等级，制定合规整改路径。"
                },
                {
                  title: "企业结构设计能力",
                  desc: "从股权架构、交易结构到组织流程，设计更稳定的经营框架。"
                },
                {
                  title: "持续经营支持能力",
                  desc: "不是一次性交付，而是在完整经营年度内持续陪伴，确保体系能运转、能维护、能迭代。"
                }
              ].map((cap) => (
                <div key={cap.title} className="border border-brand-line bg-white p-7">
                  <p className="text-lg font-semibold text-brand-ink">{cap.title}</p>
                  <p className="mt-3 text-sm leading-7 text-brand-muted">{cap.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ③ 服务模块
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="服务范围" />
            <Heading>基于上述能力，我们提供以下服务</Heading>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                ["审计业务", "财务审计、专项审计、内部审计，确保财务信息的真实性和合规性"],
                ["乱账梳理", "历史账目清理、账实差异还原、期初数据重建"],
                ["稽查应对", "税务稽查全程协助、风险事项梳理、合规路径建议"],
                ["股权设计", "股权架构设计、控制权安排、股权激励方案、持股平台搭建"],
                ["高端合规账", "在经营真实性的基础上，建立合规、可持续的账务体系"],
              ].map(([title, desc]) => (
                <div key={title} className="border border-brand-line bg-brand-soft p-6">
                  <p className="text-base font-semibold text-brand-ink">{title}</p>
                  <p className="mt-2 text-sm leading-6 text-brand-muted">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ④ 交付结果模块
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="交付结果" />
            <Heading>最终能够实现什么？</Heading>
            <div className="mt-10 space-y-4">
              {[
                "企业经营结构清晰——利润来源、成本构成、资金流向一目了然",
                "财务与经营一致——账面数据能够真实反映业务实际",
                "税务风险可控——历史隐患逐步化解，新增风险能够提前识别",
                "股权结构合理——支撑企业当前经营和未来发展",
                "财务体系可持续运行——不需要依赖个别人，制度能够自我运转",
              ].map((item) => (
                <div key={item} className="border border-brand-line bg-white p-6">
                  <p className="text-base leading-7 text-brand-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
            <Label text="下一步" />
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
              如果你的企业正面临上述问题，可以先做一次经营尽调。
            </h2>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-brand-ink px-7 text-sm font-medium text-white transition hover:bg-black"
              >
                申请企业财税风险诊断（限时开放）
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-sm text-brand-muted">签约前诊断不收费 · 根据企业情况判断是否适配</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-brand-ink text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <p className="text-sm text-white/60">{brand.name} · {brand.positioning}</p>
          <p className="text-sm text-white/60">电话 {brand.phone}</p>
        </div>
      </footer>
    </div>
  );
}
