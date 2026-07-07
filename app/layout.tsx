import type { Metadata } from "next";

import "./globals.css";
import { brand } from "@/lib/data";
import { DimOnClick } from "@/components/DimOnClick";

export const metadata: Metadata = {
  title: `${brand.name}｜${brand.slogan}`,
  description: "龙头会服，企业高端财税服务机构，专注中小企业财税规范与经营体系建设。"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <DimOnClick />
      </body>
    </html>
  );
}

