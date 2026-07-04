import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="bg-brand-ink py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 md:grid-cols-[1fr_auto] md:items-center lg:px-8">
        <div>
          <p className="text-sm font-semibold text-white/60">免费诊断</p>
          <h2 className="mt-3 max-w-3xl text-3xl font-semibold leading-tight md:text-4xl">
            如果你不确定企业财税是否安全，可以先做一次免费诊断
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-7 text-white/70">
            注册会计师团队将提供初步风险判断
          </p>
          <p className="mt-5 text-sm text-white/60">每周仅处理10家企业诊断申请</p>
        </div>
        <Button asChild size="lg" className="bg-white text-brand-ink hover:bg-white/90">
          <Link href="/contact">
            预约免费财税诊断
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}

