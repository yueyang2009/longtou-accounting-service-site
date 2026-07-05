import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/data";

function Label({ text }: { text: string }) {
  return <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">{text}</p>;
}
function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">{children}</h2>;
}

export default function ManufacturingPage() {
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
            <Label text="制造业" />
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-5xl">制造企业的财税管理，为什么比其他行业更难？</h1>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>制造企业的财税复杂度，在所有行业里排在前列。</p>
              <p>成本核算涉及材料、人工、制造费用多个维度，任何一个环节的归集口径不对，毛利率就失真。产品线多了之后，哪个产品赚钱、哪个亏本，老板很难从账面上看清。</p>
              <p>研发费用加计扣除是制造业最常见的优惠，也是最容易出问题的区域。人员身份与项目不匹配、研发领料与生产领料混在一起、委托研发占比过高——这些在税局稽查时都是高频触发点。</p>
              <p>存货管理是另一个老大难。账实不符、呆滞库存积压、暂估入库长期挂账，这些问题不仅影响利润表，还在积累税务风险。</p>
            </div>
          </div>
        </section>
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="财税风险" />
            <Heading>制造企业常见的财税风险</Heading>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>成本核算口径不统一，毛利率失真，影响经营决策。</p>
              <p>研发费用加计扣除资料不完整，稽查时难以自证。</p>
              <p>存货账实不符，盘点差异长期挂账，部分已无实物的存货仍在账面。</p>
              <p>废料、边角料销售收入不入账，形成账外资金。</p>
              <p>设备采购的增值税进项抵扣与实物使用场景不匹配。</p>
            </div>
          </div>
        </section>
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="解决方案" />
            <Heading>年度财税顾问如何帮助制造企业？</Heading>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>建立按产品线的成本核算口径，每月输出毛利率分析，让老板看清楚每个产品的真实盈利情况。</p>
              <p>梳理研发费用归集流程，确保人员、材料、项目一一对应，备齐加计扣除的备查资料。</p>
              <p>建立存货管理制度，定期盘点，清理呆滞库存和暂估差异。</p>
              <p>全年持续跟踪税负率和行业指标的匹配度，异常波动及时预警。</p>
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
