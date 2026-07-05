import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brand } from "@/lib/data";

function Label({ text }: { text: string }) {
  return <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">{text}</p>;
}
function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">{children}</h2>;
}

export default function ConstructionPage() {
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
            <Label text="建筑业" />
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-5xl">建筑企业的财税管理，项目越多越容易出问题。</h1>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>建筑工程企业的财税管理难度，跟项目数量成正比。</p>
              <p>每个项目都是一个独立的利润单元，但财务核算往往是"一锅烩"——收入按开票确认，成本按发票入账，项目之间的利润混在一起分不清。项目多了之后，哪个项目赚了、哪个亏了，靠财务数据根本看不出来。</p>
              <p>分包发票的管理是另一个高频风险区。包工头无法提供合规发票、合同主体与开票主体不一致、资金流与发票流偏离——这些在税务稽查中很容易被认定为虚开发票的风险信号。</p>
              <p>挂靠业务的处理更是敏感。被挂靠方只收管理费却承担税务连带责任，挂靠方实际施工但发票和资金走被挂靠方账户，形成复杂的票据和资金链条。</p>
            </div>
          </div>
        </section>
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="财税风险" />
            <Heading>建筑企业常见的财税风险</Heading>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>项目制核算粗放，无法按项目独立核算利润和成本。</p>
              <p>分包发票管理混乱，合同、发票、资金三流不一致。</p>
              <p>挂靠业务的税务责任边界不清，被挂靠方承担连带风险。</p>
              <p>工程进度款确认不及时，收入与成本发生期间错位。</p>
              <p>异地施工的预缴税款管理不规范，容易形成重复缴税或漏缴。</p>
              <p>材料采购的增值税进项抵扣与项目实际用料脱节。</p>
            </div>
          </div>
        </section>
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="解决方案" />
            <Heading>年度财税顾问如何帮助建筑企业？</Heading>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>建立项目制财务核算体系，每个项目独立归集收入、成本、费用，按月输出项目利润表。</p>
              <p>建立分包商准入和发票审核机制，确保合同、发票、资金三流一致。</p>
              <p>梳理挂靠业务的交易结构和票据链，明确各方法律责任边界。</p>
              <p>设计工程进度款确认和成本暂估规则，使收入和成本的确认期间匹配。</p>
              <p>全年跟踪税负率，预缴税款管理，避免重复缴税或逾期风险。</p>
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
