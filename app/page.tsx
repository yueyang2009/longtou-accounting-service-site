import Link from "next/link";
import { ArrowRight, CheckCircle2, Minus } from "lucide-react";

import { BrandLogo } from "@/components/BrandLogo";
import { MobileNav } from "@/components/MobileNav";
import {
  annualPlan,
  annualTimeline,
  brand,
  clientStories,
  cooperationSteps,
  experts,
  homePainCards,
  longtouMethod,
  principles,
  trustMetrics
} from "@/lib/data";

function SectionTitle({
  label,
  title,
  description
}: {
  label?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {label && <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-muted">{label}</p>}
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-5xl">{title}</h2>
      {description ? <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-muted">{description}</p> : null}
    </div>
  );
}

function DashboardPreview() {
  const operatingMetrics = [
    { label: "利润质量", value: "持续观察", width: "78%", delay: "0ms" },
    { label: "现金节奏", value: "阶段复盘", width: "66%", delay: "180ms" },
    { label: "风险事项", value: "前置处理", width: "54%", delay: "360ms" }
  ];
  const riskItems = ["合同", "票据", "回款", "成本", "税负", "流程", "预算", "内控", "股权", "项目", "库存", "薪酬"];

  return (
    <div className="dashboard-stage executive-cockpit relative">
      <div className="cockpit-orbit cockpit-orbit-one" />
      <div className="cockpit-orbit cockpit-orbit-two" />
      <div className="dashboard-shell cockpit-shell relative overflow-hidden border border-white/15 bg-[#121415] p-4 shadow-[0_34px_110px_rgba(17,17,17,0.24)]">
        <div className="dashboard-surface cockpit-surface border border-white/10 bg-[#17191a]/92 p-5 text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">Operating cockpit</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight">经营决策中枢</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <span className="dashboard-dot h-2 w-2 rounded-full bg-[#d9c7a5]" />
              <span className="text-xs font-medium text-white/62">Live review</span>
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="cockpit-primary-card dashboard-panel border border-white/10 bg-white/[0.045] p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-white/62">经营健康度</p>
                  <p className="mt-3 text-4xl font-semibold tracking-tight">稳定</p>
                  <p className="mt-3 text-xs leading-5 text-white/46">利润、现金流、风险事项纳入同一套复盘节奏。</p>
                </div>
                <div className="cockpit-ring" />
              </div>
              <div className="mt-7 space-y-5">
                {operatingMetrics.map((metric) => (
                  <div key={metric.label}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-white/56">{metric.label}</span>
                      <span className="font-medium text-white">{metric.value}</span>
                    </div>
                    <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="dashboard-bar h-full rounded-full bg-[#d9c7a5]"
                        style={{ "--bar-width": metric.width, animationDelay: metric.delay } as React.CSSProperties}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-3">
                {[
                  ["顾问方式", "年度陪伴"],
                  ["处理逻辑", "风险前置"],
                  ["复盘节奏", "阶段校准"]
                ].map(([label, value], index) => (
                  <div key={label} className="cockpit-mini-card dashboard-card border border-white/10 bg-white/[0.055] p-4" style={{ animationDelay: `${index * 120}ms` }}>
                    <p className="text-xs whitespace-nowrap text-white/46">{label}</p>
                    <p className="mt-3 text-lg font-semibold tracking-tight whitespace-nowrap text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-[1fr_0.82fr]">
                <div className="cockpit-risk-card dashboard-panel border border-white/10 bg-white/[0.045] p-5">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-white">风险雷达</p>
                    <p className="text-xs text-white/42">前置识别</p>
                  </div>
                  <div className="mt-5 grid grid-cols-4 gap-2">
                    {riskItems.map((item, index) => (
                      <span
                        key={item}
                        className={[
                          "dashboard-risk-cell cockpit-risk-cell flex h-9 items-center justify-center border text-[11px]",
                          index % 5 === 0
                            ? "border-[#d9c7a5]/45 bg-[#d9c7a5]/18 text-[#f2e7d2]"
                            : index % 3 === 0
                              ? "border-white/12 bg-white/9 text-white/62"
                              : "border-white/10 bg-white/[0.045] text-white/46"
                        ].join(" ")}
                        style={{ animationDelay: `${index * 85}ms` }}
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="dashboard-review-card cockpit-review-card border border-[#d9c7a5]/22 bg-[#d9c7a5]/12 p-5 text-white">
                  <p className="text-xs uppercase tracking-[0.24em] text-[#e9d9bc]/60">Next action</p>
                  <p className="mt-3 text-2xl font-semibold leading-tight">季度经营复盘</p>
                  <p className="mt-4 text-xs leading-5 text-white/52">把账、税、利润、现金流放回经营会议里。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 border border-white/10 bg-black/12 p-4 sm:grid-cols-4">
            {["看清", "理顺", "建立", "陪跑"].map((item, index) => (
              <div key={item} className="dashboard-step flex items-center gap-2 text-xs font-medium text-white/55" style={{ animationDelay: `${index * 160}ms` }}>
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/8 text-[#e9d9bc]">
                  {index + 1}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-paper">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="inline-flex items-center">
            <BrandLogo className="h-9 w-auto max-w-[150px]" />
          </Link>
          <nav className="hidden items-center gap-8 lg:flex">
            <Link href="#pain" className="text-sm text-brand-muted hover:text-brand-ink">痛点</Link>
            <Link href="#annual" className="text-sm text-brand-muted hover:text-brand-ink">年度顾问</Link>
            <Link href="#method" className="text-sm text-brand-muted hover:text-brand-ink">方法</Link>
            <Link href="#principles" className="text-sm text-brand-muted hover:text-brand-ink">坚持</Link>
            <Link href="#team" className="text-sm text-brand-muted hover:text-brand-ink">团队</Link>
            <Link href="#cases" className="text-sm text-brand-muted hover:text-brand-ink">案例</Link>
            <span className="text-brand-line">|</span>
            <Link href="/about" className="text-sm text-brand-muted hover:text-brand-ink">关于</Link>
            <Link href="/blog" className="text-sm text-brand-muted hover:text-brand-ink">文章</Link>
          </nav>
          <MobileNav
            links={[
              { href: "#pain", label: "痛点" },
              { href: "#annual", label: "年度顾问" },
              { href: "#method", label: "方法" },
              { href: "#principles", label: "坚持" },
              { href: "#team", label: "团队" },
              { href: "#cases", label: "案例" },
              { href: "/about", label: "关于" },
              { href: "/blog", label: "文章" },
            ]}
          />
          <Link
            href="/contact"
            className="hidden lg:inline-flex premium-button bg-brand-emerald px-5 py-2 text-sm font-medium text-white transition hover:bg-brand-emerald-hover"
          >
            申请企业财税风险诊断（限量开放）
          </Link>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="hero-cinematic grain relative overflow-hidden border-b border-brand-line bg-brand-paper">
          <div className="absolute -left-24 top-12 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(244,238,229,0.55)_45%,rgba(244,238,229,0)_72%)] blur-3xl" />
          <div className="absolute right-0 top-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.9)_0%,rgba(232,226,218,0.44)_48%,rgba(232,226,218,0)_74%)] blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(255,250,242,0.72)_0%,rgba(255,250,242,0)_70%)] blur-3xl" />
          <div className="hero-grid absolute inset-0" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 py-28 md:py-36 lg:grid-cols-[0.88fr_1.12fr] lg:items-center">
            <div>
              <p className="mb-7 text-sm font-medium text-brand-muted">年度经营顾问</p>
              <h1 className="max-w-3xl text-3xl font-semibold leading-[1.2] tracking-tight text-brand-ink md:text-5xl">
                让企业经营更规范，让老板决策更从容。
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-muted">
                以财税为切入点，将利润、现金流、风险与组织协同置于同一经营节奏中分析。核心不是处理单点问题，而是建立持续经营判断能力。
              </p>
              <div className="mt-11 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/why-annual-advisor"
                  className="premium-button inline-flex h-12 items-center gap-2 bg-brand-emerald px-7 text-sm font-medium text-white transition hover:bg-brand-emerald-hover"
                >
                  了解年度顾问计划
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center gap-2 rounded-md border border-brand-line px-7 text-sm font-medium text-brand-muted transition hover:bg-brand-soft hover-lift"
                >
                  查看服务体系
                </Link>
              </div>
              <div className="mt-14 grid gap-5 text-sm text-brand-muted sm:grid-cols-3">
                {["注册会计师团队", "年度顾问机制", "本地经营判断"].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <Minus className="h-4 w-4 text-brand-ink" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <DashboardPreview />
          </div>
        </section>

        {/* ── 痛点 ── */}
        <section id="pain" className="section-reveal border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
            <SectionTitle label="老板痛点" title="老板真正焦虑的，从来不是做账。" />
            <div className="mt-12 grid gap-4 md:grid-cols-4">
              {homePainCards.map((item, i) => (
                <div key={item} className="interactive-card border border-brand-line bg-white p-7 rounded-card">
                  <p className="mb-4 text-xs font-semibold text-brand-muted">0{i + 1}</p>
                  <p className="text-xl font-semibold leading-snug text-brand-ink">{item}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-2xl border-l-4 border-brand-ink bg-white px-6 py-5 text-base font-medium text-brand-ink">
              这些问题，不是财务问题，而是经营问题。龙头会服把财税问题放回经营现场来解决。
            </p>
          </div>
        </section>

        {/* ── 年度时间轴 ── */}
        <section id="annual" className="section-reveal border-b border-brand-line">
          <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
            <SectionTitle
              label="年度顾问"
              title="我们陪伴企业走完一年，而不是解决一个问题。"
              description="真正的规范不是一次交流完成的，而是在经营节奏里持续看见、判断、修正和沉淀。"
            />
            <div className="mt-16">
              <div className="hidden h-px bg-brand-line md:block" />
              <div className="grid gap-5 md:-mt-3 md:grid-cols-5">
                {annualTimeline.map((item) => (
                  <div key={item.title} className="bg-white md:pt-0">
                    <div className="mb-7 hidden h-6 w-6 rounded-full border border-brand-ink bg-white md:block" />
                    <div className="timeline-card border border-brand-line p-7 rounded-card">
                      <h3 className="text-xl font-semibold leading-snug text-brand-ink">{item.title}</h3>
                      <ul className="mt-6 space-y-3">
                        {item.items.map((li) => (
                          <li key={li} className="text-sm leading-6 text-brand-muted">{li}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 方法论 ── */}
        <section id="method" className="section-reveal cinematic-band border-b border-brand-line">
          <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
            <SectionTitle label="龙头方法" title="先看清，再理顺；先建立，再陪跑。" />
            <div className="mt-12 grid gap-px overflow-hidden border border-brand-line/70 bg-brand-line md:grid-cols-4">
              {longtouMethod.map((item) => (
                <div key={item.title} className="interactive-card bg-white p-8 rounded-card">
                  <p className="mb-3 text-xs font-semibold text-brand-muted">{item.step}</p>
                  <h3 className="text-3xl font-semibold tracking-tight text-brand-ink">{item.title}</h3>
                  <ul className="mt-8 space-y-3">
                    {item.items.map((li) => (
                      <li key={li} className="flex items-start gap-3 text-sm leading-6 text-brand-muted">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-ink" />
                        {li}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 服务：年度顾问 ── */}
        <section className="section-reveal border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
            <SectionTitle label="核心服务" title={annualPlan.title} />
            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-brand-muted">
              {annualPlan.summary}
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="interactive-card border border-brand-line bg-white p-8 rounded-card">
                <h3 className="text-lg font-semibold text-brand-ink">适合这样的企业</h3>
                <ul className="mt-6 space-y-4">
                  {annualPlan.suitable.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-brand-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-ink" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="interactive-card border border-brand-line bg-white p-8 rounded-card">
                <h3 className="text-lg font-semibold text-brand-ink">年度顾问包含</h3>
                <ul className="mt-6 space-y-4">
                  {annualPlan.whatYouGet.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-brand-muted">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-ink" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 grid gap-4 md:grid-cols-3">
              {annualPlan.process.map((step) => (
                <div key={step.step} className="interactive-card border border-brand-line bg-white p-6 rounded-card">
                  <p className="text-xs font-semibold text-brand-muted">{step.step}</p>
                  <p className="mt-3 text-xl font-semibold text-brand-ink">{step.title}</p>
                  <p className="mt-3 text-sm leading-6 text-brand-muted">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-sm text-brand-muted">
                <Link href="/contact" className="underline underline-offset-2 hover:text-brand-ink">申请企业财税风险诊断（限量开放）</Link>
                ｜ 每月仅服务有限企业
              </p>
              <p className="mt-3 text-sm text-brand-muted">
                先了解 → <Link href="/why-annual-advisor" className="underline underline-offset-2 hover:text-brand-ink">为什么企业需要年度财税顾问</Link>
              </p>
            </div>
          </div>
        </section>

        {/* ── 开始合作 ── */}
        <section className="section-reveal border-b border-brand-line">
          <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
            <SectionTitle
              label="How We Start"
              title="我们如何开始合作？"
              description="先理解企业，再定义计划。合作开始之前，我们更关心问题是否被看清楚。"
            />
            <div className="mt-16">
              <div className="hidden h-px bg-brand-line md:block" />
              <div className="grid gap-5 md:-mt-3 md:grid-cols-5">
                {cooperationSteps.map((step, index) => (
                  <div key={step.title} className="bg-white">
                    <div className="mb-7 hidden h-6 w-6 rounded-full border border-brand-ink bg-white md:block" />
                    <div className="timeline-card border border-brand-line p-8">
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">
                        Step {index + 1}
                      </p>
                      <h3 className="mt-5 text-lg font-semibold tracking-tight text-brand-ink">{step.title}</h3>
                      <p className="mt-5 text-sm leading-7 text-brand-muted">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 我们坚持什么 ── */}
        <section id="principles" className="section-reveal dark-slab border-b border-brand-line">
          <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">Principles</p>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                  我们坚持什么
                </h2>
              </div>
              <div className="grid gap-px overflow-hidden border border-white/12 bg-white/12 md:grid-cols-2">
                {principles.map((item) => (
                  <div key={item.title} className="dark-card p-8 md:p-10">
                    <h3 className="text-2xl font-semibold tracking-tight text-white">{item.title}</h3>
                    <p className="mt-5 text-sm leading-7 text-white/62">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 团队 ── */}
        <section id="team" className="section-reveal border-b border-brand-line">
          <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
            <SectionTitle label="团队实力" title="先看人，再谈合作。" />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {experts.map((expert) => (
                <div key={expert.name} className="interactive-card border border-brand-line p-7">
                  <p className="text-lg font-semibold text-brand-ink">{expert.name}</p>
                  <p className="mt-1 text-sm font-medium text-brand-muted">{expert.title}</p>
                  <p className="mt-4 text-sm leading-6 text-brand-muted">{expert.focus}</p>
                  <p className="mt-4 text-xs font-semibold text-brand-ink">{expert.credential}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 grid gap-px overflow-hidden border border-brand-line bg-brand-line md:grid-cols-4">
              {trustMetrics.map((m) => (
                <div key={m.label} className="metric-card bg-white p-6 rounded-card">
                  <p className="text-2xl font-semibold tracking-tight text-brand-ink">{m.value}</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <p className="text-sm text-brand-muted">{m.label}</p>
                    {m.detail && <p className="text-base font-semibold text-brand-ink">{m.detail}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 精选案例 ── */}
        <section id="cases" className="section-reveal border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
            <SectionTitle
              label="精选案例"
              title="来自真实企业的财税与经营问题解决实践"
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {clientStories.map((story) => (
                <article key={story.type} className="interactive-card border border-brand-line bg-white p-8 rounded-card">
                  <p className="inline-block border border-brand-ink/20 bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-ink">
                    {story.type}
                  </p>
                  <h3 className="mt-5 text-lg font-semibold leading-snug text-brand-ink">{story.background}</h3>
                  <div className="mt-5 space-y-3">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">问题</p>
                      <p className="mt-1.5 text-sm leading-6 text-brand-muted">{story.problem}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">处理</p>
                      <p className="mt-1.5 text-sm leading-6 text-brand-muted">{story.process}</p>
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">结果</p>
                      <p className="mt-1.5 border-l-4 border-brand-ink bg-brand-soft px-5 py-3 text-sm font-medium leading-6 text-brand-ink">
                        {story.result}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 判断与行动 ── */}
        <section className="section-reveal border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
            <SectionTitle
              label="行动"
              title="如果你正在考虑，我们建议先做一次判断。"
            />
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-brand-muted">
              年度顾问更适合年营收2000万以上、已有稳定经营规模、且老板愿意参与经营管理的企业。
            </p>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-brand-body">
              如果企业还处于初创阶段，或者只需要基础代账服务，年度顾问可能不是当前最优选择。
            </p>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-brand-muted">
              不急着给方案，先把企业所处阶段、真实问题和需要优先处理的事项讲清楚。
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="premium-button inline-flex h-12 items-center gap-2 rounded-full bg-brand-emerald px-7 text-sm font-medium text-white transition hover:bg-brand-emerald-hover"
              >
                申请企业财税风险诊断（限量开放）
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-sm text-brand-muted">
                电话：{brand.phone} ｜ 微信同号
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-brand-emerald text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <p className="text-sm text-white/60">{brand.name} · {brand.positioning}</p>
          <p className="text-sm text-white/60">电话 {brand.phone}</p>
        </div>
      </footer>
    </div>
  );
}
