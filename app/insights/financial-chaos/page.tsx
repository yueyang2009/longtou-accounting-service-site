import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/data";

function Label({ text }: { text: string }) {
  return <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">{text}</p>;
}

export default function FinancialChaosPage() {
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
            <Label text="财税管理" />
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-5xl">财务数据混乱，是企业管理最大的隐性成本。</h1>
            <p className="mt-6 text-base leading-8 text-brand-muted">数据不准，决策就不可能准。</p>
          </div>
        </section>
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="问题描述" />
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">财务数据混乱表现在哪些方面？</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>最常见的情况是：代账做的报表和企业的实际经营情况对不上。收入按开票确认，但实际发货和回款的节奏跟开票不一样。成本按发票入账，但发票的时点跟业务发生的时点可能差好几个月。</p>
              <p>库存数据是另一个重灾区。账面库存和实际库存的差异长期累积，但又没有人去盘点清理。这些差异挂在账上，既影响利润表的准确性，也掩盖了潜在的存货损失。</p>
              <p>往来款长期挂账也是普遍问题。其他应收款——老板借出去的钱、员工借支未报销、关联公司往来，很多已经收不回来了但仍然挂在账上，虚增了资产。其他应付款——向股东的借款，很多是口头约定，没有合同没有利息，税务上存在被认定为视同分红或关联交易调整的风险。</p>
              <p>成本核算粗放更不用说。制造企业的材料、人工、制造费用混合在一起，无法按产品线分析利润。商贸企业的采购成本、运费、仓储费归集混乱，毛利率失真。</p>
            </div>
          </div>
        </section>
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="原因分析" />
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">为什么财务数据会变得混乱？</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>大部分混乱不是管理失误，而是缺乏系统支撑。代账公司只处理发票和申报，不负责数据之间的勾稽关系。内部会计日常工作饱和，没有人去追溯差异、清理旧账。</p>
              <p>企业从几百万做到几千万的过程中，财务体系没有跟着升级。当初的记账方式"差不多能用"，但做到几千万之后，这些"差不多"就成了决策盲区。</p>
            </div>
          </div>
        </section>
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="解决方式" />
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">年度财税顾问如何解决？</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>先做一次全面的企业经营尽调，摸清财务数据的真实状况——账实差异有多大、往来款中有多少是隐患、成本归集口径是否合理。</p>
              <p>然后制定分阶段的清理计划。不是一次性推倒重来，而是在不影响正常经营的前提下，逐步把账理清楚。</p>
              <p>最后建立维持数据质量的日常机制——月度核对、季度分析、年度复盘，让财务数据真正成为经营决策的依据。</p>
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
