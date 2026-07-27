import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, ChartNoAxesCombined, CircleDollarSign, Network, ShieldAlert } from "lucide-react";

import { Footer } from "@/components/Footer";
import { HomeHeader } from "@/components/HomeHeader";

export const metadata: Metadata = {
  title: "数智化看板｜经营决策展示中心",
  description: "汇集股权设计、风险热力图、盈亏平衡点、经营看板与预算管理等数智化经营决策展示。",
  alternates: { canonical: "/digital-dashboard" },
};

const showcases = [
  { title: "股权设计", desc: "穿透控制关系、治理边界与资本规划，让复杂架构一眼可见。", href: "/equity-structure", Icon: Network, no: "01" },
  { title: "风险热力图", desc: "将财税风险按影响程度与发生可能性可视化，明确处置优先级。", href: "/risk-heatmap", Icon: ShieldAlert, no: "02" },
  { title: "盈亏平衡点", desc: "通过量本利模型定位保本线、安全边际和目标利润路径。", href: "/break-even", Icon: ChartNoAxesCombined, no: "03" },
  { title: "经营看板示例", desc: "围绕项目、回款、成本与利润，建立管理层共同使用的经营语言。", href: "/dashboard-demo.html", Icon: BarChart3, no: "04" },
  { title: "预算管理", desc: "把年度目标、月度预算、执行差异与现金安排纳入同一套管理节奏。", href: "/budget-management", Icon: CircleDollarSign, no: "05" },
];

export default function DigitalDashboardPage() {
  return (
    <div className="min-h-screen bg-[#0b120f] text-white">
      <HomeHeader />
      <main>
        <section data-header-theme="dark" className="border-b border-white/10 bg-[radial-gradient(circle_at_76%_18%,rgba(217,199,165,.18),transparent_28%),linear-gradient(135deg,#0b120f,#132219_58%,#0c1712)]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
            <p className="text-sm font-semibold tracking-[.2em] text-[#d9c7a5]">数智化看板</p>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight md:text-6xl">让经营问题<br />以看得见的方式出现</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/65 md:text-lg">这里不是通用软件功能的罗列，而是将股权、风险、利润、项目和预算转化为管理层可共同讨论的决策界面。</p>
          </div>
        </section>

        <section className="bg-[#f6f2e9] text-[#172019]">
          <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
            <div className="grid border border-[#27352c]/18 md:grid-cols-2 lg:grid-cols-3">
              {showcases.map(({ title, desc, href, Icon, no }) => (
                <Link key={href} href={href} className="group min-h-64 border-b border-r border-[#27352c]/18 p-8 transition hover:bg-[#172019] hover:text-white md:nth-[2n]:border-r-0 lg:nth-[2n]:border-r lg:nth-[3n]:border-r-0 last:border-b-0">
                  <div className="flex items-start justify-between"><span className="text-sm font-semibold text-[#89744d] group-hover:text-[#d9c7a5]">{no}</span><Icon className="h-6 w-6 text-[#355843] group-hover:text-[#d9c7a5]" /></div>
                  <h2 className="mt-14 text-2xl font-bold">{title}</h2>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-[#536158] group-hover:text-white/65">{desc}</p>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[#355843] group-hover:text-[#d9c7a5]">进入展示 <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
