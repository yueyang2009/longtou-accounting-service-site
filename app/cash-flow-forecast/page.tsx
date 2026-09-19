import type { Metadata } from "next";

import { HomeHeader } from "@/components/HomeHeader";

export const metadata: Metadata = {
  title: "资金管理驾驶舱（示例）",
  description:
    "龙头会服资金滚动预测示例：以银行可用资金为起点，把经营、投资、融资计划按日期滚动推演，并按情景系数与最低安全资金线形成预警。",
  alternates: { canonical: "/cash-flow-forecast" },
};

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export default function CashFlowForecastPage() {
  return (
    <div className="min-h-screen bg-[#0c1310]">
      <HomeHeader />
      <main>
        <h1 className="sr-only">资金管理驾驶舱示例</h1>
        <iframe
          src={`${base}/demos/cash-flow-forecast.html`}
          title="资金管理驾驶舱示例"
          className="demo-frame block w-full border-0"
        />
      </main>
    </div>
  );
}
