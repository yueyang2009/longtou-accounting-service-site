import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "年度顾问｜为什么企业需要年度财税顾问",
  description:
    "把财税问题前置到经营过程中：年度顾问如何用持续的诊断、校准与陪跑，替代一次性的报告与临时救火。",
  alternates: { canonical: "/why-annual-advisor" },
};

export default function WhyAnnualAdvisorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
