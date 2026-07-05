import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/data";

function Label({ text }: { text: string }) {
  return <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">{text}</p>;
}

export default function WhyProfitNoCashPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight text-brand-ink">{brand.name}</Link>
          <Link href="/contact" className="rounded-md bg-brand-ink px-5 py-2 text-sm font-medium text-white">申请企业经营尽调（限量开放）</Link>
        </div>
      </header>
      <main>
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
            <Label text="经营风险" />
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-5xl">账面盈利，但现金在哪里？</h1>
            <p className="mt-6 text-base leading-8 text-brand-muted">一个很多老板都经历过的问题。</p>
          </div>
        </section>
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="问题描述" />
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">利润表是赚钱的，银行账户是空的。</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>这是制造企业和商贸企业老板最常遇到的情况：每个月的利润表看过去都是盈利的，但到了月底一看银行账户，钱不够发工资、不够付货款。</p>
              <p>问题出在哪里？</p>
              <p>原因往往不是单一的。可能是应收账款的回款周期太长，可能是存货积压占用了大量资金，可能是老板把公司的钱用于个人支出但挂在其他应收款上，也可能是折旧等非现金支出让利润看起来很好但实际现金流并不匹配。</p>
              <p>代账公司做的利润表是按权责发生制编制的，它反映的是"经营成果"，而不是"现金状况"。这两个概念之间的差异，就是很多老板困惑的来源。</p>
            </div>
          </div>
        </section>
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="原因分析" />
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">为什么会出现这种情况？</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>一是收入确认和现金回收之间存在时间差。货发出去了，发票开出去了，收入确认了，但客户还没付款。利润表上有了利润，但现金没到账。</p>
              <p>二是成本和费用的归集口径问题。代账按发票入账，而发票的时间跟业务发生的时间往往不一致。这个月的成本其实上个月就发生了，但发票这个月才到。</p>
              <p>三是老板个人与企业之间的资金往来。很多老板习惯用公司账户处理个人支出，挂在其他应收款上。账面上是"公司借给老板的钱"，利润表不受影响，但公司可动用的现金实实在在地减少了。</p>
            </div>
          </div>
        </section>
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="解决方式" />
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">年度财税顾问如何解决？</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>建立经营口径的利润表现金流分析。不是只看代账给的利润表，而是把收入确认、成本归集、应收应付、资金往来放在同一张表里看，让老板每个月都能看到：账面利润和可动用现金之间的差距到底在哪里。</p>
              <p>对应收账款进行账龄分析，判断哪些客户回款异常。对存货进行周转分析，识别呆滞库存。对老板个人往来进行清理，分类管理。</p>
              <p>把"利润"翻译成"现金"，是年度财税顾问最基础也最有价值的工作之一。</p>
            </div>
            <div className="mt-10">
              <Link href="/contact" className="inline-flex h-12 items-center gap-2 rounded-md bg-brand-ink px-7 text-sm font-medium text-white">
                申请企业经营尽调（限量开放）<ArrowRight className="h-4 w-4" />
              </Link>
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
