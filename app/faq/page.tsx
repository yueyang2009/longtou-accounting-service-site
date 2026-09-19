import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Layout } from "@/components/Layout";
import { brand, faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "财税问答｜年度顾问常见问题",
  description:
    "关于年度财税顾问的常见问题：适合哪些企业、和代账/专职会计的区别、如何收费、交付什么、如何应对税务检查等。",
  alternates: { canonical: "/faq" },
};

const groups = Array.from(new Set(faqs.map((f) => f.category)));

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export default function FaqPage() {
  return (
    <Layout>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <section data-header-theme="dark" className="section-surface border-b border-white/10 bg-[radial-gradient(circle_at_80%_14%,rgba(217,199,165,.18),transparent_30%),linear-gradient(135deg,#0b120f,#132219_58%,#0c1712)] text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
          <p className="text-sm font-semibold tracking-[.2em] text-[#d9c7a5]">财税问答</p>
          <h1 className="mt-6 max-w-3xl text-4xl font-bold leading-tight md:text-6xl">
            合作之前，
            <br />
            你可能想先搞清楚这些问题
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">
            以下问题来自真实客户的咨询。如果还有没覆盖到的，欢迎直接联系沟通。
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          {groups.map((group) => (
            <div key={group} className="mb-14 last:mb-0">
              <h2 className="text-xl font-semibold tracking-tight text-brand-ink md:text-2xl">{group}</h2>
              <div className="mt-6 space-y-3">
                {faqs
                  .filter((f) => f.category === group)
                  .map((f) => (
                    <details key={f.question} className="group border border-brand-line bg-brand-card rounded-card">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 text-base font-semibold text-brand-ink transition marker:content-none hover:text-brand-gold">
                        {f.question}
                        <span className="shrink-0 text-brand-muted transition group-open:rotate-45">＋</span>
                      </summary>
                      <p className="border-t border-brand-line px-6 py-5 text-sm leading-7 text-brand-muted">
                        {f.answer}
                      </p>
                    </details>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-t border-brand-line bg-brand-soft">
        <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
          <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
            还有问题，直接聊更快
          </h2>
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
