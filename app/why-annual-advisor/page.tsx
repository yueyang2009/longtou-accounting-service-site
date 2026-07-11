import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BrandLogo } from "@/components/BrandLogo";
import { MobileNav } from "@/components/MobileNav";
import { brand, trustMetrics } from "@/lib/data";

function Label({ text }: { text: string }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">
      {text}
    </p>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
      {children}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">{children}</div>;
}

export default function WhyAnnualAdvisorPage() {
  return (
    <div className="min-h-screen bg-brand-paper">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-brand-line bg-[#111816]/90 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="inline-flex items-center rounded-full bg-white px-2 py-1">
            <BrandLogo className="h-9 w-auto max-w-[150px]" />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            <Link href="/" className="text-sm text-brand-muted hover:text-brand-ink">首页</Link>
            <Link href="/why-annual-advisor" className="text-sm font-medium text-brand-ink">年度顾问</Link>
            <Link href="/services" className="text-sm text-brand-muted hover:text-brand-ink">服务体系</Link>
            <Link href="/about" className="text-sm text-brand-muted hover:text-brand-ink">关于</Link>
          </nav>
          <MobileNav
            links={[
              { href: "/", label: "首页" },
              { href: "/why-annual-advisor", label: "年度顾问" },
              { href: "/services", label: "服务体系" },
              { href: "/about", label: "关于" },
            ]}
          />
          <Link
            href="/contact"
            className="hidden lg:inline-flex rounded-full bg-brand-emerald px-5 py-2 text-sm font-medium text-white transition hover:bg-brand-emerald-hover"
          >
            申请企业财税风险诊断（限量开放）
          </Link>
        </div>
      </header>

      <main>

        {/* ════════════════════════════════════════
            ① 服务定位
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-36">
            <Label text="龙头会服 · 企业年度财税顾问计划" />
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-6xl">
              企业年度财税顾问，是基于企业完整经营周期的长期专业支持机制。
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-muted">
              不是代账，也不是一次性的咨询，而是签约后进入企业经营尽调与全年顾问服务周期，帮你建立持续经营判断能力。
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ② 企业为什么需要财税顾问
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="企业为什么需要财税顾问" />
            <Heading>企业为什么需要财税顾问？</Heading>
            <div className="mt-10 grid gap-4 md:grid-cols-2">
              {[
                ["管控财税风险", "降低税务稽查罚款损失"],
                ["合法合规筹划", "充分享受各项税收优惠"],
                ["处理高难度财税事项", "税会差异、税务稽查等复杂事项从容应对"],
                ["规范账务与申报", "减少涉税失误，守住合规底线"],
              ].map(([title, desc]) => (
                <div key={title} className="border border-brand-line bg-brand-card p-6 rounded-card">
                  <p className="text-lg font-semibold text-brand-ink">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-brand-muted">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ③ 核心服务价值
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="核心服务价值" />
            <Heading>年度顾问为你创造什么价值？</Heading>
            <div className="mt-10 space-y-4">
              {[
                ["全年度财税体检诊断", "全面复盘往期账务税务，清晰列明现存风险并给出落地解决方案"],
                ["风险前置预警", "实时排查潜在财税隐患，提早沟通处置，避免风险积压爆发"],
                ["全天候日常答疑支持", "7×8 小时微信、电话、线上会议，随时解答日常财税疑问"],
                ["一年两次财税健康核查", "每半年开展一次账务、税务专项巡检，及时纠偏"],
                ["每年 4 次上门深度交流", "与老板、财务总监面对面，把脉经营与财税关键决策"],
              ].map(([title, desc]) => (
                <div key={title} className="border border-brand-line bg-brand-card p-6 rounded-card">
                  <p className="text-lg font-semibold text-brand-ink">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-brand-muted">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ④ 合作流程
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="合作流程" />
            <Heading>年度顾问的合作流程是怎样的？</Heading>
            <div className="mt-10 space-y-6">
              {[
                { step: "STEP 1", title: "预约一对一沟通", desc: "梳理企业现状与需求，明确顾问切入点" },
                { step: "STEP 2", title: "确认服务方案", desc: "签订服务合同并完成付款，正式建立合作" },
                { step: "STEP 3", title: "开展企业财税经营全面尽调", desc: "经营模式、财务结构、税务风险与组织评估" },
                { step: "STEP 4", title: "量身定制年度顾问服务规划", desc: "结合企业实际，确定全年服务节奏与重点" },
                { step: "STEP 5", title: "正式开启全年专属陪伴服务", desc: "月度分析、季度沟通、风险预警持续在线" },
              ].map((phase) => (
                <div key={phase.step} className="border border-brand-line p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">{phase.step}</p>
                  <p className="mt-3 text-xl font-semibold text-brand-ink">{phase.title}</p>
                  <p className="mt-4 text-sm leading-7 text-brand-muted">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ⑤ 服务团队实力
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="服务团队" />
            <Heading>谁在提供服务？</Heading>
            <Body>
              <p>资深注册会计师、税务师、高级会计师领头，配备 18 人专业注会团队。</p>
              <p>深耕河南全省市场，熟悉本地征管口径、最新财税政策，精准化解实操风险。</p>
            </Body>
            <div className="mt-8 grid gap-px overflow-hidden border border-brand-line bg-brand-line md:grid-cols-4">
              {trustMetrics.map((m) => (
                <div key={m.label} className="bg-brand-card p-6">
                  <p className="text-2xl font-semibold tracking-tight text-brand-ink">{m.value}</p>
                  <div className="mt-1 flex items-baseline gap-2">
                    <p className="text-sm text-brand-muted">{m.label}</p>
                    {m.detail && <p className="text-base font-semibold text-brand-ink">{m.detail}</p>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ⑥ 动态财税方案复盘
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="动态财税方案复盘" />
            <Heading>让财税方案跟着经营一起走</Heading>
            <Body>
              <p>结合企业经营变化，动态调整定制财税筹划方案，持续适配业务发展。</p>
            </Body>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ⑦ 可视化经营数据看板
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="可视化经营数据看板" />
            <Heading>把专业报表变成老板看得懂的数据</Heading>
            <Body>
              <p>简化专业财务报表，输出老板易懂的经营数据，直观掌握企业盈亏、税负状况。</p>
            </Body>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ⑧ 底部总结
            ════════════════════════════════════════ */}
        <section className="bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
            <Label text="龙头会服" />
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
              企业年度财税顾问的核心，不是解决<br />
              单一问题，而是在长期合作中帮助企业<br />
              建立稳定、清晰的经营判断体系。
            </h2>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-emerald px-7 text-sm font-medium text-white transition hover:bg-brand-emerald-hover"
              >
                申请企业财税风险诊断（限量开放）
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-sm text-brand-muted">每月仅服务有限企业，需初步评估是否适配年度顾问体系。</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-brand-emerald text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <p className="text-sm text-white/60">{brand.name} · {brand.positioning}</p>
          <p className="text-sm text-white/60">电话 {brand.phone}</p>
        </div>
      </footer>
    </div>
  );
}
