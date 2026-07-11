import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { brand } from "@/lib/data";

export function Hero() {
  return (
    <section className="border-b border-brand-line bg-brand-paper">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-[1.1fr_0.9fr] md:py-24 lg:px-8">
        <div className="flex flex-col justify-center">
          <p className="mb-5 text-sm font-semibold text-brand-gold">{brand.name} · {brand.positioning}</p>
          <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-brand-ink md:text-6xl">
            企业财税问题，往往不是不会做，而是没人帮您看清楚
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-muted">
            龙头会服 · 企业经营财税顾问
            <br />
            服务经营规模正在扩大的成长型企业
          </p>
          <p className="mt-5 inline-flex w-fit rounded-md border border-brand-line bg-brand-soft px-4 py-2 text-sm text-brand-muted">
            更适合已具备稳定经营规模的企业
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/contact">
                申请企业财税风险诊断（限量开放）
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/services">查看服务体系</Link>
            </Button>
          </div>
        </div>
        <div className="self-stretch border border-brand-line bg-brand-soft p-6 shadow-consult">
          <div className="grid h-full gap-4">
            {[
              ["交流对象", "成长型民营企业 / 集团企业"],
              ["核心问题", "风险、利润、现金流、体系"],
              ["交付方式", "问题清单 + 方案路径 + 顾问沟通"],
              ["筛选标准", "稳定经营规模 / 有改善意愿"]
            ].map(([label, value]) => (
              <div key={label} className="border border-brand-line bg-white p-5 rounded-card">
                <p className="text-sm text-brand-muted">{label}</p>
                <p className="mt-2 text-xl font-semibold text-brand-ink">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
