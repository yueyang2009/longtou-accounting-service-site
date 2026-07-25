import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { HomeHeader } from "@/components/HomeHeader";
import { EquityExperience } from "./EquityExperience";

export const metadata: Metadata = { title: "股权设计｜企业结构数字驾驶舱", description: "龙头会服·高端财税团队的股权架构设计展示页面。" };

export default function EquityStructurePage() {
  return <div className="min-h-screen bg-brand-paper"><HomeHeader /><EquityExperience /><Footer /></div>;
}
