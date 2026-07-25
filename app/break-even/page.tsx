import type { Metadata } from "next";

import { Footer } from "@/components/Footer";
import { HomeHeader } from "@/components/HomeHeader";
import { BreakEvenStudio } from "@/components/BreakEvenStudio";

export const metadata: Metadata = {
  title: "盈亏平衡点决策模型",
  description: "以量本利模型看清保本线、安全边际与目标利润路径，适用于制造、加工及重资产企业的经营决策。",
  alternates: { canonical: "/break-even" },
};

export default function BreakEvenPage() {
  return (
    <div className="min-h-screen bg-brand-paper">
      <HomeHeader />
      <BreakEvenStudio />
      <Footer />
    </div>
  );
}
