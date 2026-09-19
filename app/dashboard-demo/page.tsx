import type { Metadata } from "next";

import { HomeHeader } from "@/components/HomeHeader";

export const metadata: Metadata = {
  title: "项目制企业经营看板（示例）",
  description:
    "龙头会服项目制企业经营看板示例：合同、成本、回款、税负与资金风险一体化呈现，帮助管理层用同一套数据做经营复盘。",
  alternates: { canonical: "/dashboard-demo" },
};

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function DashboardDemoPage() {
  return (
    <div className="min-h-screen bg-[#0c1310]">
      <HomeHeader />
      <main>
        <h1 className="sr-only">项目制企业经营看板示例</h1>
        <iframe
          src={`${base}/demos/dashboard-demo.html?embed=1`}
          title="项目制企业经营看板示例"
          className="demo-frame block w-full border-0"
        />
      </main>
    </div>
  );
}
