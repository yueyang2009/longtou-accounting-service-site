import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-brand-ink py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold text-white/60">经营交流</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            如果企业正在成长，可以先做一次经营交流
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
            先把企业阶段、经营困扰和需要优先处理的事项讲清楚。
          </p>
        </div>
        <Button asChild size="lg" className="bg-white text-brand-ink hover:bg-white/90">
          <Link href="/contact">
            预约经营交流
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
