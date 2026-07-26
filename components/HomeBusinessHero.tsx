import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { ReactNode } from "react";

import { ParticleHeadline } from "@/components/ParticleHeadline";

/** The regular homepage hero revealed after the optional brand intro is dismissed. */
export function HomeBusinessHero({ dashboard }: { dashboard: ReactNode }) {
  return (
    <section data-header-theme="dark" className="private-hero hero-cinematic grain relative overflow-hidden border-b border-white/10 bg-[#111816] text-white">
      <div className="absolute -left-24 top-12 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(217,199,165,0.22)_0%,rgba(26,57,43,0.20)_42%,rgba(17,24,22,0)_72%)] blur-3xl" />
      <div className="hero-grid absolute inset-0" />
      <div className="relative z-10 mx-auto grid min-h-[70svh] max-w-7xl items-center gap-12 px-6 py-24 md:py-32 lg:grid-cols-[0.82fr_1.18fr]">
        <div className="max-w-3xl">
          <p className="mb-7 w-fit border border-[#d9c7a5]/30 bg-[#d9c7a5]/10 px-4 py-2 text-xs font-semibold tracking-[0.22em] text-[#e9d9bc]">企业财税与经营参谋团队</p>
          <ParticleHeadline
            lines={[
              { text: "让企业经营更规范" },
              { text: "让老板决策更从容" },
            ]}
            color="#d9c7a5"
            maxFontSize={52}
            minFontSize={30}
            lineHeight={1.18}
            fontWeight={800}
            align="left"
            className="hero-particle-title max-w-[42rem]"
          />
          <p className="mt-8 max-w-2xl text-lg font-medium leading-9 text-white/80">以财税为切入点，将利润、现金流、风险与组织协同置于同一经营节奏中分析，建立持续经营判断能力。</p>
          <div className="mt-11 flex flex-col gap-4 sm:flex-row">
            <Link href="/why-annual-advisor" className="premium-button inline-flex h-12 items-center gap-2 bg-[#d9c7a5] px-7 text-sm font-semibold text-[#111816] transition hover:bg-[#eadabd]">了解年度顾问计划 <ArrowRight className="h-4 w-4" /></Link>
            <Link href="/services" className="inline-flex h-12 items-center gap-2 rounded-full border border-white/14 bg-white/5 px-7 text-sm font-medium text-white/72 transition hover:border-[#d9c7a5]/42 hover:text-white">查看服务体系</Link>
          </div>
        </div>
        <div className="min-w-0 lg:translate-x-[1em]">{dashboard}</div>
      </div>
    </section>
  );
}
