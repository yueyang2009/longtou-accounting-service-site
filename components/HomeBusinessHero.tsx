import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import type { ReactNode } from "react";

import { brand } from "@/lib/data";

/**
 * 首页首屏。
 * 2026-10-28 改造：撤掉开屏动画层；标题由 canvas 改为真实文字（微信弱机与百度都读得到）；
 * 补上「做什么 / 服务谁 / 在哪儿」和可直接拨打的电话；去掉卡片外框，把内容顶进首屏。
 */
export function HomeBusinessHero({ dashboard }: { dashboard: ReactNode }) {
  return (
    <section
      data-header-theme="dark"
      className="private-hero hero-cinematic hero-fullbleed grain relative overflow-hidden border-b border-white/10 bg-[#111816] text-white"
    >
      <div className="absolute -left-24 top-12 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(217,199,165,0.22)_0%,rgba(26,57,43,0.20)_42%,rgba(17,24,22,0)_72%)] blur-3xl" />
      <div className="hero-grid absolute inset-0" />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-5 py-10 md:gap-12 md:px-6 md:py-20 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="max-w-3xl">
          <p className="mb-5 w-fit border border-[#d9c7a5]/30 bg-[#d9c7a5]/10 px-3.5 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-[#e9d9bc] sm:text-xs">
            河南郑州 · 高端财税顾问
          </p>

          <h1 className="font-display text-[1.7rem] font-bold leading-[1.28] tracking-tight text-[#e7d9bd] sm:text-4xl sm:leading-[1.22] md:text-[2.5rem]">
            把账、税、利润、现金流，
            <br className="hidden sm:block" />
            讲成老板能听懂的话
          </h1>

          <p className="mt-4 max-w-2xl text-[15px] font-medium leading-7 text-white/78 sm:text-base sm:leading-8 md:text-lg">
            服务河南年营收 2000 万以上的民营企业。注册会计师、注册税务师带队，
            先花十分钟听你说，再判断现在该从哪里入手。
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={`tel:${brand.phone}`}
              className="premium-button inline-flex h-12 items-center justify-center gap-2 bg-[#d9c7a5] px-6 text-sm font-semibold text-[#111816] transition hover:bg-[#eadabd]"
            >
              <Phone className="h-4 w-4" /> 打电话 {brand.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 text-sm font-medium text-white/85 transition hover:border-[#d9c7a5]/50 hover:text-white"
            >
              加微信聊十分钟
            </Link>
          </div>

          <p className="mt-4 text-[13px] leading-6 text-white/55 sm:text-sm sm:leading-7">
            微信与电话同号 ｜ 郑州国际路 60 号国家知识产权大厦 11 层 ｜{" "}
            <Link
              href="/why-annual-advisor"
              className="underline decoration-white/30 underline-offset-4 transition hover:text-[#d9c7a5]"
            >
              先看年度顾问具体做什么
              <ArrowRight className="ml-1 inline h-3.5 w-3.5" />
            </Link>
          </p>
        </div>

        <div className="min-w-0 lg:translate-x-[1em]">{dashboard}</div>
      </div>
    </section>
  );
}
