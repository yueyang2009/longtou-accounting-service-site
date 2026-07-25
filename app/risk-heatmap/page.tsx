import type { Metadata } from "next";
import { Footer } from "@/components/Footer";
import { HomeHeader } from "@/components/HomeHeader";
import { RiskHeatmapExperience } from "./RiskHeatmapExperience";
import "./risk-heatmap.css";
import "./risk-brand.css";

export const metadata: Metadata = { title: "企业财税风险智能雷达", description: "龙头会服·高端财税团队模拟企业财税风险扫描与风险矩阵展示。" };

export default function RiskHeatmapPage() { return <div className="risk-shell"><HomeHeader /><RiskHeatmapExperience /><Footer /></div>; }
