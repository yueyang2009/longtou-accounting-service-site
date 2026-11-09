import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Layout } from "@/components/Layout";
import { clientStories, testimonials, brand } from "@/lib/data";

export const metadata: Metadata = {
  title: "案例与客户反馈｜财税与经营问题解决实践",
  description:
    "龙头会服真实服务场景（客户信息已脱敏）：乱账梳理、两账合一、税务稽查应对、股权架构设计、财务体系重建、成本与利润口径校准等。",
  openGraph: {
    title: "案例与客户反馈｜财税与经营问题解决实践",
    description: "龙头会服真实服务场景（客户信息已脱敏）：乱账梳理、两账合一、税务稽查应对、股权架构设计、财务体系重建、成本与利润口径…",
    url: "/cases",
    images: [{ url: "https://longtou.audit-report-check.com/images/og-image.jpg", width: 1200, height: 630, alt: "龙头会服·高端财税服务团队" }],
  },
  alternates: { canonical: "/cases" },
};

const categories = Array.from(new Set(clientStories.map((c) => c.category)));

export default function CasesPage() {
  return (
    <Layout>
      {/* Hero */}
      <section data-header-theme="dark" className="section-surface border-b border-white/10 bg-[radial-gradient(circle_at_18%_12%,rgba(217,199,165,.18),transparent_30%),linear-gradient(135deg,#0b120f,#132219_58%,#0c1712)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-sm font-semibold tracking-[.2em] text-brand-gold">案例与反馈</p>
          <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">
            问题是怎么被看清，
            <br />
            又是怎么被解决的
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            以下案例均来自真实服务场景，客户名称与可识别信息已脱敏处理。我们不承诺结果，只呈现处理问题的思路与方式。
          </p>
        </div>
      </section>

      {/* 客户反馈 */}
      <section className="border-b border-brand-line bg-brand-soft">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">客户反馈</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
            合作企业怎么说
          </h2>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((t) => (
              <figure key={t.industry + t.scale} className="border border-brand-line bg-brand-card p-8 rounded-card">
                <blockquote className="text-base leading-8 text-brand-body">“{t.quote}”</blockquote>
                <figcaption className="mt-6 flex items-center gap-3 text-sm">
                  <span className="border border-brand-line bg-brand-soft px-3 py-1 font-semibold text-brand-ink">{t.industry}</span>
                  <span className="text-brand-muted">{t.scale}</span>
                  <span className="text-xs text-brand-muted/80">（客户反馈，信息已脱敏）</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* 案例 */}
      <section>
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">服务案例</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
            按问题类型查看案例
          </h2>
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((c) => (
              <span key={c} className="border border-brand-line bg-brand-soft px-3 py-1.5 text-sm text-brand-muted">
                {c}
              </span>
            ))}
          </div>

          <div className="mt-12 space-y-8">
            {clientStories.map((story) => (
              <article key={story.type} className="border border-brand-line bg-brand-card p-8 rounded-card">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="border border-brand-ink/20 bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-ink">
                    {story.type}
                  </span>
                </div>
                <h3 className="mt-5 text-lg font-bold leading-snug text-brand-gold md:text-xl">{story.background}</h3>
                {/* 正文可读性（2026-11-09 客户反馈看不清）：原来三栏各 14px 灰字，
                    窄屏挤成一栏后行长变长、字更碎，灰上加灰看不清。
                    改为：正文 15px 提到近白色 0.88 不透明；「问题/处理/结果」标签加竖条底标，
                    让眼睛能分段；结果块用金色描边加深底，成为视觉落点。 */}
                <div className="mt-7 grid gap-7 md:grid-cols-3 md:gap-8">
                  <div>
                    <p className="flex items-center gap-2 text-sm font-bold tracking-wide text-brand-gold">
                      <span aria-hidden className="inline-block h-3.5 w-1 rounded-full bg-brand-gold/70" />
                      问题
                    </p>
                    <p className="mt-2.5 text-[15px] leading-8 text-brand-ink/90">{story.problem}</p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-sm font-bold tracking-wide text-brand-gold">
                      <span aria-hidden className="inline-block h-3.5 w-1 rounded-full bg-brand-gold/70" />
                      处理
                    </p>
                    <p className="mt-2.5 text-[15px] leading-8 text-brand-ink/90">{story.process}</p>
                  </div>
                  <div>
                    <p className="flex items-center gap-2 text-sm font-bold tracking-wide text-brand-gold">
                      <span aria-hidden className="inline-block h-3.5 w-1 rounded-full bg-brand-gold/70" />
                      结果
                    </p>
                    <p className="mt-2.5 rounded-r-md border-l-4 border-brand-gold bg-brand-gold/[0.08] px-5 py-4 text-[15px] font-semibold leading-8 text-brand-gold">
                      {story.result}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-brand-line bg-brand-soft">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
            每个企业的问题都不一样
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-brand-muted">
            案例只说明处理思路，不能替代对你企业的具体判断。建议先做一次企业财税风险诊断。
          </p>
          <div className="mt-9 flex flex-col items-center gap-4">
            <Link
              href="/contact"
              className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-emerald px-7 text-sm font-medium text-white transition hover:bg-brand-emerald-hover"
            >
              申请企业财税风险诊断（限量开放）
              <ArrowRight className="h-4 w-4" />
            </Link>
            <p className="text-sm text-brand-muted">电话：{brand.phone} ｜ 微信同号</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
