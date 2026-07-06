import Link from "next/link";
import { ArrowRight, Minus } from "lucide-react";

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

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="inline-flex items-center">
            <BrandLogo className="h-9 w-auto max-w-[150px]" />
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm text-brand-muted hover:text-brand-ink">首页</Link>
            <Link href="/about" className="text-sm font-medium text-brand-ink">关于</Link>
            <Link href="/annual-advisory" className="text-sm text-brand-muted hover:text-brand-ink">年度顾问</Link>
            <Link href="/why-annual-advisor" className="text-sm text-brand-muted hover:text-brand-ink">为什么需要</Link>
            <Link href="/services" className="text-sm text-brand-muted hover:text-brand-ink">服务体系</Link>
          </nav>
          <Link
            href="/contact"
            className="rounded-md bg-brand-ink px-5 py-2 text-sm font-medium text-white transition hover:bg-black"
          >
            申请企业财税风险诊断（限量开放）
          </Link>
        </div>
      </header>

      <main>

        {/* ── 为什么存在 ── */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
            <Label text="起源" />
            <Heading>为什么存在龙头会服？</Heading>
            <Body>
              <p>
                河南有大量年营收在2000万到2亿之间的民营企业。业务基础扎实，老板能干，团队能打。但几乎所有的企业都面临同一个问题：财务体系跟不上业务发展。
              </p>
              <p>
                代账公司解决了申报问题，但解决不了经营问题。专职会计完成了日常核算，但提供不了决策支持。
              </p>
              <p>
                龙头会服的成立，就是为了填补这个空白——不是替代代账，不是替代会计，而是在它们之上，提供一个能把财务数据翻译成经营决策的顾问层。
              </p>
              <QuoteLine>
                龙头会服存在的唯一理由：让成长型民营企业在经营决策时，手里有真实的数据。
              </QuoteLine>
            </Body>
          </div>
        </section>

        {/* ── 我们相信什么 ── */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="信念" />
            <Heading>我们相信什么？</Heading>
            <Body>
              <p>
                我们相信，企业的财务问题本质上是经营问题。利润不清晰不是会计的问题，是经营口径没有建立。税务风险不是申报的问题，是业务过程缺乏管控。决策靠感觉不是老板的问题，是数据没有被翻译成经营语言。
              </p>
              <p>
                我们相信，规范不是一次性工程，而是在经营过程中逐步建立的习惯。年度顾问的价值不在于一次性的“诊断报告”，而在于全年持续的关注和校准。
              </p>
              <p>
                我们相信，好的财税顾问不应该让老板觉得“又多了个事”，而是让老板觉得“终于有人帮我看住这一块了”。
              </p>
            </Body>
          </div>
        </section>

        {/* ── 我们不做什么 ── */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="边界" />
            <Heading>我们不做什么？</Heading>
            <div className="mt-10 space-y-5">
              {[
                '不做代账。代账是基础操作，我们有合作的代账机构，但龙头会服本身不提供代账服务。',
                '不做一次性咨询。按次收费的咨询解决不了长期积累的问题。我们只按年度合作。',
                '不做保证结果的承诺。财税顾问的价值在于判断和建议，不在于"保证不查""保证少交"。',
                '不服务所有企业。不是每一个企业都需要年度顾问，我们会明确告知不适合的企业。',
              ].map((item) => (
                <div key={item} className="flex items-start gap-4 border-b border-brand-line pb-5 last:border-0">
                  <Minus className="mt-1.5 h-4 w-4 shrink-0 text-brand-ink" />
                  <p className="text-base leading-7 text-brand-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 我们是谁 ── */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="团队" />
            <Heading>我们是谁？</Heading>
            <Body>
              <p>
                龙头会服，总部位于郑州。团队由注册会计师、注册税务师、律师、高级会计师组成。
              </p>
              <p>
                团队由注册会计师、注册税务师及高级财务专业人员组成。累计服务超过10000家河南本土企业。
              </p>
              <p>
                不是理论派。每一个顾问都有一线实战背景，每一个方案都经过双师审核。
              </p>
            </Body>
          </div>
        </section>

        {/* ── 最终信任声明 ── */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
            <Label text="信任" />
            <Heading>
              我们不承诺做不到的事。
              <br />
              但我们承诺，合作期间尽心尽力。
            </Heading>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-brand-ink px-7 text-sm font-medium text-white transition hover:bg-black"
              >
                申请企业财税风险诊断（限量开放）
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-sm text-brand-muted">
                每月仅服务有限企业，需初步评估适配性
              </p>
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
