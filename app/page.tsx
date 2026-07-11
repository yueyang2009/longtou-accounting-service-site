import Link from "next/link";
import { ArrowRight, CheckCircle2, Minus } from "lucide-react";
import type { ReactNode } from "react";

import { HomeHeader } from "@/components/HomeHeader";
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
  description,
  staggered = false,
  wide = false,
}: {
  label?: string;
  title: ReactNode;
  description?: string;
  staggered?: boolean;
  wide?: boolean;
}) {
  return (
    <div className={`mx-auto ${wide ? "max-w-5xl" : "max-w-3xl"} ${staggered ? "text-left" : "text-center"}`}>
      {label && <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-muted">{label}</p>}
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-5xl">{title}</h2>
      {description ? (
        <p className={`mt-6 max-w-2xl text-base leading-8 text-brand-muted ${staggered ? "" : "mx-auto"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

function DashboardPreview() {
  const base = process.env.NODE_ENV === "production" ? "/longtou-accounting-service-site" : "";
  const operatingMetrics = [
    { label: "利润质量", value: "已校准", width: "82%", delay: "0ms" },
    { label: "现金流节奏", value: "重点跟踪", width: "68%", delay: "180ms" },
    { label: "税务风险边界", value: "前置处理", width: "56%", delay: "360ms" }
  ];
  const riskItems = ["合同", "票据", "回款", "成本", "税负", "流程", "预算", "内控", "股权", "项目", "库存", "薪酬"];

  return (
    <a
      href={`${base}/dashboard-demo.html`}
      target="_self"
      rel="noopener noreferrer"
      aria-label="查看经营看板示例"
      className="dashboard-stage executive-cockpit private-cockpit relative block cursor-pointer outline-none transition-transform duration-300 hover:-translate-y-1"
    >
      <span className="cockpit-launch-hint">
        <ArrowRight className="h-4 w-4" />
        点击查看经营看板示例
      </span>
      <div className="cockpit-orbit cockpit-orbit-one" />
      <div className="cockpit-orbit cockpit-orbit-two" />
      <div className="private-cockpit-badge hidden lg:block">
        <span>CONFIDENTIAL REVIEW</span>
        <strong>Q3</strong>
      </div>
      <div className="dashboard-shell cockpit-shell private-cockpit-shell relative overflow-hidden border border-white/15 bg-[#121415] p-4 shadow-[0_34px_110px_rgba(17,17,17,0.24)]">
        <div className="dashboard-surface cockpit-surface border border-white/10 bg-[#17191a]/92 p-5 text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/42">Operating cockpit</p>
              <p className="mt-2 text-2xl font-semibold tracking-tight">经营决策中枢</p>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
              <span className="dashboard-dot h-2 w-2 rounded-full bg-[#d9c7a5]" />
              <span className="text-xs font-medium text-white/62">Partner desk</span>
            </div>
          </div>

          <div className="mt-5 grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="cockpit-primary-card dashboard-panel border border-white/10 bg-brand-card/[0.045] p-5">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-medium text-white/62">年度经营状态</p>
                  <p className="mt-3 text-4xl font-semibold tracking-tight">可控</p>
                  <p className="mt-3 text-xs leading-5 text-white/46">利润、现金流、税务边界进入同一套老板复盘桌面。</p>
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
                  ["顾问席位", "年度陪伴"],
                  ["处理逻辑", "风险前置"],
                  ["复盘节奏", "季度校准"]
                ].map(([label, value], index) => (
                  <div key={label} className="cockpit-mini-card dashboard-card border border-white/10 bg-brand-card/[0.055] p-4" style={{ animationDelay: `${index * 120}ms` }}>
                    <p className="text-xs whitespace-nowrap text-white/46">{label}</p>
                    <p className="mt-3 text-lg font-semibold tracking-tight whitespace-nowrap text-white">{value}</p>
                  </div>
                ))}
              </div>

              <div className="grid gap-4 lg:grid-cols-[1fr_0.82fr]">
                <div className="cockpit-risk-card dashboard-panel border border-white/10 bg-brand-card/[0.045] p-5">
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
                  <p className="mt-3 text-2xl font-semibold leading-tight">老板经营简报</p>
                  <p className="mt-4 text-xs leading-5 text-white/52">把账、税、利润、现金流放回经营会议桌。</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 grid gap-3 border border-white/10 bg-black/12 p-4">
            <div className="flex items-center justify-center gap-8" style={{ transform: "translateX(-2em)" }}>
              {[
                { label: "先看清", n: 1, d: "0ms" },
                { label: "再理顺", n: 2, d: "160ms" }
              ].map(({ label, n, d }) => (
                <div key={label} className="dashboard-step flex items-center gap-2 text-xs font-medium text-white/55" style={{ animationDelay: d }}>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/8 text-[#e9d9bc]">{n}</span>
                  {label}
                </div>
              ))}
            </div>
            <div className="flex items-center justify-center gap-8" style={{ transform: "translateX(2em)" }}>
              {[
                { label: "先建立", n: 3, d: "320ms" },
                { label: "再陪跑", n: 4, d: "480ms" }
              ].map(({ label, n, d }) => (
                <div key={label} className="dashboard-step flex items-center gap-2 text-xs font-medium text-white/55" style={{ animationDelay: d }}>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/8 text-[#e9d9bc]">{n}</span>
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-paper private-advisory-site">
      {/* ── Header ── */}
      <HomeHeader />

      <main>
        {/* ── Hero ── */}
        <section data-header-theme="dark" className="private-hero hero-cinematic grain relative overflow-hidden border-b border-white/10 bg-[#111816] text-white">
          <div className="absolute -left-24 top-12 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(217,199,165,0.22)_0%,rgba(26,57,43,0.20)_42%,rgba(17,24,22,0)_72%)] blur-3xl" />
          <div className="absolute right-0 top-0 h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(58,90,71,0.34)_0%,rgba(17,24,22,0.40)_48%,rgba(17,24,22,0)_74%)] blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(217,199,165,0.18)_0%,rgba(17,24,22,0)_70%)] blur-3xl" />
          <div className="hero-grid absolute inset-0" />
          <div className="private-marble absolute inset-0" />
          <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 py-24 md:py-32 lg:grid-cols-[0.82fr_1.18fr] lg:items-center">
            <div>
              <p className="mb-7 w-fit border border-[#d9c7a5]/30 bg-[#d9c7a5]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#e9d9bc]">
                企业财税与经营参谋团队
              </p>
              <h1 className="max-w-3xl text-3xl font-semibold leading-[1.2] tracking-tight text-white md:text-5xl">
                让企业经营更规范
                <span className="mt-2 block pl-8 md:pl-[3em]">让老板决策更从容</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-white/66">
                以财税为切入点，将利润、现金流、风险与组织协同置于同一经营节奏中分析。核心不是处理单点问题，而是建立持续经营判断能力。
              </p>
              <div className="mt-11 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/why-annual-advisor"
                  className="premium-button inline-flex h-12 items-center gap-2 bg-[#d9c7a5] px-7 text-sm font-semibold text-[#111816] transition hover:bg-[#eadabd]"
                >
                  了解年度顾问计划
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center gap-2 rounded-full border border-white/14 bg-white/5 px-7 text-sm font-medium text-white/72 transition hover:border-[#d9c7a5]/42 hover:text-white hover-lift"
                >
                  查看服务体系
                </Link>
              </div>
              <div className="mt-14 grid gap-3 text-sm text-white/58 sm:grid-cols-3">
                {["注册会计师团队", "年度顾问机制", "本地经营判断"].map((item) => (
                  <span key={item} className="flex items-center gap-2 border-t border-white/10 pt-4">
                    <Minus className="h-4 w-4 text-[#d9c7a5]" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <DashboardPreview />
          </div>
        </section>

        {/* ── 痛点 ── */}
        <section id="pain" className="section-reveal private-ivory-section border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
            <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
              <div className="lg:sticky lg:top-28">
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-muted">老板痛点</p>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-5xl">
                  老板真正焦虑的
                  <br />
                  <span className="pl-[3em]">从来不是做账</span>
                </h2>
                <p className="mt-6 max-w-md text-base leading-8 text-brand-muted">
                  财税问题真正刺痛老板的，是它背后那张看不清的经营地图：利润真假、现金节奏、历史风险和组织边界。
                </p>
              </div>
              <div className="grid gap-px overflow-hidden border border-brand-line bg-brand-line">
              {homePainCards.map((item, i) => (
                <div key={item} className="private-memo-row bg-brand-card p-7 md:p-9">
                  <p className="mb-4 text-xs font-semibold tracking-[0.18em] text-brand-muted">0{i + 1}</p>
                  <p className="text-2xl font-semibold leading-snug text-brand-ink">{item}</p>
                </div>
              ))}
              </div>
            </div>
            <p className="ml-auto mt-10 max-w-3xl border-l-4 border-[#d9c7a5] bg-brand-card px-7 py-6 text-base font-medium leading-8 text-brand-ink shadow-consult">
              这些问题，不是单纯财务问题，而是经营秩序问题。<br />
              龙头会服把财税问题放回经营现场，陪老板一起做判断。
            </p>
          </div>
        </section>

        {/* ── 年度时间轴 ── */}
        <section id="annual" className="section-reveal private-report-section border-b border-brand-line">
          <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
            <SectionTitle
              label="年度顾问"
              staggered
              title={
                <>
                  我们陪伴企业走完一年
                  <span className="mt-2 block pl-10 md:pl-[2em]">而不是解决一个问题</span>
                </>
              }
              description="真正的规范不是一次交流完成的，而是在经营节奏里持续看见、判断、修正和沉淀。"
            />
            <div className="mt-16">
              <div className="hidden h-px bg-brand-line md:block" />
              <div className="grid gap-5 md:-mt-3 md:grid-cols-5">
                {annualTimeline.map((item) => (
                  <div key={item.title} className="bg-brand-paper md:pt-0">
                    <div className="mb-7 hidden h-6 w-6 rounded-full border border-brand-ink bg-white md:block" />
                    <div className="timeline-card private-timeline-card border border-brand-line p-7 rounded-card">
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
        <section id="method" className="section-reveal private-method-band border-b border-brand-line">
          <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
            <SectionTitle
              label="龙头方法"
              title={
                <>
                  <span className="block w-fit mx-auto md:-translate-x-10">先看清 再理顺</span>
                  <span className="mt-2 block w-fit mx-auto md:translate-x-10">先建立 再陪跑</span>
                </>
              }
            />
            <div className="mt-12 grid gap-px overflow-hidden border border-brand-line/70 bg-brand-line md:grid-cols-4">
              {longtouMethod.map((item) => (
                <div key={item.title} className="private-method-card interactive-card bg-brand-card p-8 rounded-card">
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
        <section className="section-reveal private-annual-plan border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
            <SectionTitle label="核心服务" title={annualPlan.title} />
            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-brand-muted">
              {annualPlan.summary}
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="private-panel interactive-card border border-brand-line bg-brand-card p-8 rounded-card">
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
              <div className="private-panel interactive-card border border-brand-line bg-brand-card p-8 rounded-card">
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
                <div key={step.step} className="private-process-card interactive-card border border-brand-line bg-brand-card p-6 rounded-card">
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
                  <div key={step.title} className="bg-brand-card">
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
        <section id="principles" data-header-theme="dark" className="section-reveal dark-slab border-b border-brand-line">
          <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
            <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
              <div>
                <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-white/50">Principles</p>
                <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
                  我们坚持什么？
                </h2>
              </div>
              <div className="grid gap-px overflow-hidden border border-white/12 bg-brand-card/12 md:grid-cols-2">
                {principles.map((item) => (
                  <div key={item.title} className="dark-card interactive-card p-8 md:p-10">
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
            <SectionTitle label="团队实力" title="先看人 再谈合作" />
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {experts.map((expert) => (
                <Link
                  key={expert.name}
                  href={`/team#${expert.slug}`}
                  className="interactive-card border border-brand-line p-7 transition hover:border-brand-ink/40 hover:shadow-sm"
                >
                  <p className="text-lg font-semibold text-brand-ink">{expert.name}</p>
                  <p className="mt-1 text-sm font-medium text-brand-muted">{expert.title}</p>
                  <p className="mt-4 text-sm leading-6 text-brand-muted">{expert.focus}</p>
                  <p className="mt-4 text-xs font-semibold text-brand-ink">{expert.credential}</p>
                </Link>
              ))}
            </div>
            <div className="mt-14 border-t border-[#d9c7a5]/18 pt-10">
              <p className="mb-6 text-xs font-semibold uppercase tracking-[0.22em] text-[#d9c7a5]/80">服务数据</p>
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-white/10 bg-white/10 md:grid-cols-4">
                {trustMetrics.map((m) => (
                  <div key={m.label} className="team-metric bg-[#111816] px-6 py-7">
                    <p className="text-3xl font-semibold tracking-tight text-[#e9d9bc]">{m.value}</p>
                    <div className="mt-2 flex items-baseline gap-2">
                      <p className="text-sm text-white/58">{m.label}</p>
                      {m.detail && <p className="text-base font-semibold text-white">{m.detail}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── 精选案例 ── */}
        <section id="cases" className="section-reveal border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-7xl px-6 py-28 md:py-36">
            <SectionTitle
              label="精选案例"
              wide
              title={<span className="whitespace-nowrap">来自真实企业的财税与经营问题解决实践</span>}
            />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {clientStories.map((story) => (
                <article key={story.type} className="interactive-card border border-brand-line bg-brand-card p-8 rounded-card">
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
        <section data-header-theme="dark" className="section-reveal private-final-cta border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-28 text-center md:py-36">
            <SectionTitle
              label="行动"
              staggered
              title={
                <>
                  如果您正在考虑
                  <br />
                  <span className="pl-[3em]">我们建议先做一次判断</span>
                </>
              }
            />
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-brand-muted whitespace-normal md:whitespace-nowrap">
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
                className="premium-button inline-flex h-12 items-center gap-2 rounded-full bg-[#d9c7a5] px-7 text-sm font-semibold text-[#111816] transition hover:bg-[#eadabd]"
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
