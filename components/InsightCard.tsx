import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { Insight } from "@/lib/data";

export function InsightCard({ insight }: { insight: Insight }) {
  return (
    <article className="border border-brand-line bg-white p-6 shadow-sm">
      <span className="rounded-md bg-brand-soft px-3 py-1 text-xs font-semibold text-brand-gold">{insight.tag}</span>
      <h3 className="mt-5 text-xl font-semibold leading-snug">{insight.title}</h3>
      <p className="mt-3 text-sm leading-6 text-brand-muted">{insight.risk}</p>
      <Link href={insight.href} className="mt-6 inline-flex items-center text-sm font-semibold text-brand-ink">
        阅读入口
        <ArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </article>
  );
}

