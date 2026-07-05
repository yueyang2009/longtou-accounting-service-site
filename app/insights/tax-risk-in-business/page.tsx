import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/data";

function Label({ text }: { text: string }) {
  return <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">{text}</p>;
}

export default function TaxRiskPage() {
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
            <Label text="税务风险" />
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-5xl">经营过程中的税务风险，是如何累积的？</h1>
            <p className="mt-6 text-base leading-8 text-brand-muted">大多数风险不是故意产生的，而是长期忽视的结果。</p>
          </div>
        </section>
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="问题描述" />
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">税务风险不是突然出现的。</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>很少有企业是因为"故意偷税"被查的。绝大多数税务问题，是在日常经营中一点点积累出来的。</p>
              <p>今天一笔私户收款没有入账，下个月一张发票的品目开错了，年底一批存货的盘点差异没有处理——每件事单独看都不大。但一年下来，两年下来，这些问题累积在一起，就构成了稽查时的关键证据链。</p>
              <p>私户收款是最常见的风险来源。金税四期上线后，税务机关可以通过银行流水、第三方支付、物流单据、上下游证言等多源数据交叉验证。2026年5月税务部门集中曝光的8起私户收款偷税案件，涉及煤炭、电商、化工、建材、加油站等多个行业，累计处理处罚金额超过数亿元。</p>
              <p>发票管理是另一个高频风险区。品目开错、税率用错、发票流与资金流不一致，在税收大数据比对下一目了然。</p>
            </div>
          </div>
        </section>
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="原因分析" />
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">为什么企业自己发现不了？</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>因为代账公司的工作范围是"按时申报"，不是"风险识别"。他们不会也没有义务去排查企业是否存在风险隐患。</p>
              <p>内部会计忙于日常核算，很难有时间去系统性地审视整个税务链条——从业务发生、合同签订、发票开具到申报纳税，每个环节都有可能在无意中产生风险。</p>
              <p>而且很多风险是有滞后性的。今天的行为，可能要等到一年后甚至三年后的稽查才会被发现。到那个时候，滞纳金已经累积了相当可观的金额。</p>
            </div>
          </div>
        </section>
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="解决方式" />
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">年度财税顾问如何解决？</h2>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>每年进行一次全面的税务风险排查，覆盖收入确认、成本归集、发票管理、资金往来、关联交易等核心环节，输出年度财税风险清单。</p>
              <p>建立税务风险提醒机制。政策变动、申报节点、异常指标，实时提醒，不遗漏。</p>
              <p>对已经存在的问题，制定分期整改方案，在合规的前提下选择最优路径逐步修复。</p>
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
