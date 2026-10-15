import type { Metadata } from "next";

import { HomeHeader } from "@/components/HomeHeader";

export const metadata: Metadata = {
  title: "总经理经营决策驾驶舱（示例）",
  description:
    "龙头会服总经理经营决策驾驶舱示例：以三大报表勾稽为基础，把核心指标、风险预警、预算预测与行动闭环放在同一个经营决策界面。",
  alternates: { canonical: "/executive-dashboard" },
};

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function ExecutiveDashboardPage() {
  return (
    <div className="min-h-screen bg-[#0c1310]">
      <HomeHeader />
      <main>
        <h1 className="sr-only">总经理经营决策驾驶舱示例</h1>
        <iframe
          src={`${base}/demos/executive-dashboard.html`}
          title="总经理经营决策驾驶舱示例"
          className="demo-frame block w-full border-0"
        />
      </main>
    </div>
  );
}
