import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { HomeHeader } from "@/components/HomeHeader";
import { ComprehensiveBudgetDashboard } from "./ComprehensiveBudgetDashboard";

export const metadata: Metadata = {
  title: "预算管理｜年度经营预算展示",
  description: "以目标、预算、执行和复盘构成闭环的企业经营预算管理展示。",
  alternates: { canonical: "/budget-management" },
};

export default function BudgetManagementPage() {
  return (
    <div className="min-h-screen bg-brand-paper">
      <HomeHeader />
      <main>
        <section data-header-theme="dark" className="border-b border-white/10 bg-[#101713] text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-[1.1fr_.9fr] md:py-24">
            <div>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl">全面预算<br />让每一步经营有据可依</h1>
              <p className="mt-6 max-w-xl leading-8 text-white/65">收入、成本、利润与现金流，不再是月底才看到的结果，而是可以实时讨论、提前推演的经营选择。</p>
            </div>
            <div className="grid grid-cols-2 gap-px self-end border border-white/10 bg-white/10">
              {[['年度目标','100%'],['预算执行','82%'],['现金覆盖','4.6月'],['重点预警','3项']].map(([label, value]) => <div key={label} className="bg-[#17231c] p-6"><p className="text-xs text-white/50">{label}</p><p className="mt-3 text-2xl font-semibold text-[#e9d9bc]">{value}</p></div>)}
            </div>
          </div>
        </section>
        <ComprehensiveBudgetDashboard />
      </main>
      <Footer />
    </div>
  );
}
