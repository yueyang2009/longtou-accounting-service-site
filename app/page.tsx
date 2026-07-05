import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { brand, homePainCards, longtouMethod, annualPlan, trustMetrics, experts, clientStories } from "@/lib/data";

function SectionTitle({ label, title }: { label?: string; title: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {label && <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-brand-muted">{label}</p>}
      <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">{title}</h2>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight text-brand-ink">
            {brand.name}
          </Link>
          <nav className="hidden items-center gap-8 md:flex">
            <Link href="#pain" className="text-sm text-brand-muted hover:text-brand-ink">痛点</Link>
            <Link href="#method" className="text-sm text-brand-muted hover:text-brand-ink">方法</Link>
            <Link href="#service" className="text-sm text-brand-muted hover:text-brand-ink">服务</Link>
            <Link href="#team" className="text-sm text-brand-muted hover:text-brand-ink">团队</Link>
            <Link href="#cases" className="text-sm text-brand-muted hover:text-brand-ink">案例</Link>
          </nav>
          <Link
            href="/contact"
            className="rounded-md bg-brand-ink px-5 py-2 text-sm font-medium text-white transition hover:bg-black"
          >
            预约诊断
          </Link>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="border-b border-brand-line">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr] md:py-32 lg:px-8">
            <div>
              <p className="mb-6 text-sm font-medium text-brand-muted">{brand.name} · {brand.positioning}</p>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-6xl">
                {brand.slogan}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-brand-muted">
                服务年营收 2000万—2亿的成长型企业。不代替账，不做一次性咨询——做老板身边能长期出力的财税参谋。
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center gap-2 rounded-md bg-brand-ink px-7 text-sm font-medium text-white transition hover:bg-black"
                >
                  预约免费财税诊断
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/annual-advisory"
                  className="inline-flex h-12 items-center gap-2 rounded-md border border-brand-line px-7 text-sm font-medium text-brand-ink transition hover:bg-brand-soft"
                >
                  了解年度顾问计划
                </Link>
              </div>
              <div className="mt-12 flex flex-wrap gap-6 text-sm text-brand-muted">
                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-ink" />CPA / CTA 双师团队</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-ink" />1000+企业服务经验</span>
                <span className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-brand-ink" />河南本地 · 上门服务</span>
              </div>
            </div>
            <div className="hidden items-center justify-center md:flex">
              <div className="grain w-72 rounded-md border border-brand-line bg-brand-soft shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
                <img
                  src="/images/headshot.png"
                  alt="李岳阳"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── 痛点 ── */}
        <section id="pain" className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
            <SectionTitle label="老板痛点" title="老板真正焦虑的，从来不是做账。" />
            <div className="mt-12 grid gap-4 md:grid-cols-4">
              {homePainCards.map((item, i) => (
                <div key={item} className="border border-brand-line bg-white p-7">
                  <p className="mb-4 text-xs font-semibold text-brand-muted">0{i + 1}</p>
                  <p className="text-xl font-semibold leading-snug text-brand-ink">{item}</p>
                </div>
              ))}
            </div>
            <p className="mx-auto mt-8 max-w-2xl border-l-4 border-brand-ink bg-white px-6 py-5 text-base font-medium text-brand-ink">
              这些问题，本质不是财务问题，而是经营问题。龙头会服把财税问题放回经营现场来解决。
            </p>
          </div>
        </section>

        {/* ── 方法论 ── */}
        <section id="method" className="border-b border-brand-line">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
            <SectionTitle label="龙头方法" title="先看清，再理顺；先建立，再陪跑。" />
            <div className="mt-12 grid gap-px overflow-hidden border border-brand-line bg-brand-line md:grid-cols-4">
              {longtouMethod.map((item) => (
                <div key={item.title} className="bg-white p-8">
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
        <section id="service" className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
            <SectionTitle label="核心服务" title={annualPlan.title} />
            <p className="mx-auto mt-6 max-w-2xl text-center text-base leading-7 text-brand-muted">
              {annualPlan.summary}
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <div className="border border-brand-line bg-white p-8">
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
              <div className="border border-brand-line bg-white p-8">
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
                <div key={step.step} className="border border-brand-line bg-white p-6">
                  <p className="text-xs font-semibold text-brand-muted">{step.step}</p>
                  <p className="mt-3 text-xl font-semibold text-brand-ink">{step.title}</p>
                  <p className="mt-3 text-sm leading-6 text-brand-muted">{step.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-brand-ink px-7 text-sm font-medium text-white transition hover:bg-black"
              >
                预约免费诊断
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 团队 ── */}
        <section id="team" className="border-b border-brand-line">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
            <SectionTitle label="团队实力" title="先看人，再谈合作。" />
            <div className="mt-10 grid gap-px overflow-hidden border border-brand-line bg-brand-line md:grid-cols-4">
              {trustMetrics.map((m) => (
                <div key={m.label} className="bg-white p-7">
                  <p className="text-3xl font-semibold tracking-tight text-brand-ink">{m.value}</p>
                  <p className="mt-2 text-sm text-brand-muted">{m.label}</p>
                  {m.detail && <p className="mt-1 text-lg font-semibold text-brand-ink">{m.detail}</p>}
                </div>
              ))}
            </div>
            <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {experts.map((expert) => (
                <div key={expert.name} className="border border-brand-line p-7">
                  <p className="text-lg font-semibold text-brand-ink">{expert.name}</p>
                  <p className="mt-1 text-sm font-medium text-brand-muted">{expert.title}</p>
                  <p className="mt-4 text-sm leading-6 text-brand-muted">{expert.focus}</p>
                  <p className="mt-4 text-xs font-semibold text-brand-ink">{expert.credential}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 案例 ── */}
        <section id="cases" className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
            <SectionTitle label="客户案例" title="不写客户名称，只讲真实问题。" />
            <div className="mt-12 grid gap-6 md:grid-cols-2">
              {clientStories.map((story) => (
                <article key={story.industry} className="border border-brand-line bg-white p-8">
                  <p className="text-xs font-semibold text-brand-muted">{story.industry}</p>
                  <h3 className="mt-4 text-xl font-semibold leading-snug text-brand-ink">{story.problem}</h3>
                  <div className="mt-6 space-y-4 text-sm leading-7 text-brand-muted">
                    <p>{story.process}</p>
                    <p>{story.result}</p>
                  </div>
                  <p className="mt-6 border-l-4 border-brand-ink bg-brand-soft px-5 py-4 text-sm font-medium text-brand-ink">
                    "{story.quote}"
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 联系 ── */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
            <SectionTitle
              label="行动"
              title="如果企业正在成长，现在就是最好的时间。"
            />
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-brand-muted">
              先做一次免费财税诊断，不急着买服务，先把企业问题看清楚。
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-brand-ink px-7 text-sm font-medium text-white transition hover:bg-black"
              >
                预约免费财税诊断
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
      <footer className="bg-brand-ink text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <p className="text-sm text-white/60">{brand.name} · {brand.positioning}</p>
          <p className="text-sm text-white/60">电话 {brand.phone}</p>
        </div>
      </footer>
    </div>
  );
}
