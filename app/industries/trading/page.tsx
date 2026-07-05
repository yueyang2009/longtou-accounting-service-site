import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/data";

function Label({ text }: { text: string }) {
  return <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">{text}</p>;
}
function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">{children}</h2>;
}

export default function TradingPage() {
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
            <Label text="商贸" />
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-5xl">商贸企业的财税管理，进销存是核心，私户是红线。</h1>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>商贸企业的业务模式相对简单，但财税风险并不低。</p>
              <p>进销存管理是商贸企业的命脉。采购、库存、销售三个环节的数据必须闭环，任何一个环节脱节，都会导致毛利率失真、库存账实不符、增值税税负异常。</p>
              <p>私户收款是商贸行业最高频的风险。客户多为个人或不要求开发票的下游，货款直接进老板或财务的个人账户。这种行为在税收大数据面前几乎无所遁形——银行流水、第三方支付、物流单据、下游证言，多个维度交叉验证，私户收款很容易被识别为隐匿收入。</p>
              <p>毛利率异常是另一个触发稽查的信号。商贸行业的毛利率通常较低且相对稳定，如果申报的毛利率远低于行业平均水平，或者忽高忽低，很容易被系统标记。</p>
            </div>
          </div>
        </section>
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="财税风险" />
            <Heading>商贸企业常见的财税风险</Heading>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>私户收取经营款项，不入账不申报，构成隐匿收入。</p>
              <p>进销存数据不闭环，库存账实不符，毛利率失真。</p>
              <p>供应商无法提供合规发票，成本无法税前扣除。</p>
              <p>对下游不开票收入未做规范处理，形成申报差异。</p>
              <p>运费、仓储费等辅助成本归集混乱，影响利润核算。</p>
            </div>
          </div>
        </section>
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="解决方案" />
            <Heading>年度财税顾问如何帮助商贸企业？</Heading>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>建立进销存与财务数据的闭环机制，确保采购、库存、销售数据可追溯、可核对。</p>
              <p>梳理私户收款现状，制定合规过渡方案，逐步纳入账面管理。</p>
              <p>建立客户分类开票管理制度，区分开票与不开票收入的申报口径。</p>
              <p>全年跟踪毛利率、税负率与行业指标的匹配度，异常波动及时预警。</p>
              <p>供应商发票管理——对无票采购建立规范的入账和纳税调整流程。</p>
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
