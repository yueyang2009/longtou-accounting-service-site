"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BrandLogo } from "@/components/BrandLogo";
import { MobileNav } from "@/components/MobileNav";
import { brand, trustMetrics } from "@/lib/data";

/* ── 聚光交互：点击某卡片时高亮它、淡化其他 ── */
function useSpotlight() {
  const [active, setActive] = useState<number | null>(null);
  const toggle = (i: number) => setActive((cur) => (cur === i ? null : i));
  const state = (i: number) =>
    active === null ? "" : active === i ? "is-active" : "is-dimmed";
  return { toggle, state };
}

function Eyebrow({ children }: { children: ReactNode }) {
  return <span className="annual-eyebrow">{children}</span>;
}

function SectionTitle({
  eyebrow,
  title,
  desc,
}: {
  eyebrow: string;
  title: ReactNode;
  desc?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
        {title}
      </h2>
      {desc ? (
        <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-brand-body">
          {desc}
        </p>
      ) : null}
    </div>
  );
}

function CardHint() {
  return (
    <span className="annual-accent annual-hint mt-5 inline-flex items-center gap-1.5 text-xs font-medium text-brand-gold/70">
      点击聚焦
      <ArrowRight className="h-3.5 w-3.5" />
    </span>
  );
}

/* ② 企业为什么需要财税顾问 */
function WhyGroup() {
  const spot = useSpotlight();
  const items = [
    ["管控财税风险", "降低税务稽查罚款损失"],
    ["合法合规筹划", "充分享受各项税收优惠"],
    ["处理高难度财税事项", "税会差异、税务稽查等复杂事项从容应对"],
    ["规范账务与申报", "减少涉税失误，守住合规底线"],
  ];
  return (
    <div className="mt-14 grid gap-5 md:grid-cols-2">
      {items.map(([title, desc], i) => (
        <div
          key={title}
          onClick={() => spot.toggle(i)}
          className={`group interactive-card p-7 annual-fade-up ${spot.state(i)}`}
          style={{ animationDelay: `${i * 90}ms` }}
        >
          <div className="flex items-start gap-4">
            <span className="annual-badge">{i + 1}</span>
            <div>
              <p className="annual-card-title text-xl font-semibold text-white">{title}</p>
              <p className="mt-3 text-sm leading-7 text-brand-body">{desc}</p>
              <CardHint />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ③ 核心服务价值 */
function ValueGroup() {
  const spot = useSpotlight();
  const items = [
    ["全年度财税体检诊断", "全面复盘往期账务税务，清晰列明现存风险并给出落地解决方案"],
    ["风险前置预警", "实时排查潜在财税隐患，提早沟通处置，避免风险积压爆发"],
    ["全天候日常答疑支持", "7×8 小时微信、电话、线上会议，随时解答日常财税疑问"],
    ["一年两次财税健康核查", "每半年开展一次账务、税务专项巡检，及时纠偏"],
    ["每年 4 次上门深度交流", "与老板、财务总监面对面，把脉经营与财税关键决策"],
  ];
  return (
    <div className="mt-14 space-y-4">
      {items.map(([title, desc], i) => (
        <div
          key={title}
          onClick={() => spot.toggle(i)}
          className={`group interactive-card flex items-start gap-5 p-7 annual-fade-up ${spot.state(i)}`}
          style={{ animationDelay: `${i * 80}ms` }}
        >
          <span className="annual-badge">{String(i + 1).padStart(2, "0")}</span>
          <div>
            <p className="annual-card-title text-lg font-semibold text-white">{title}</p>
            <p className="mt-2 text-sm leading-7 text-brand-body">{desc}</p>
            <CardHint />
          </div>
        </div>
      ))}
    </div>
  );
}

/* ④ 合作流程 */
function ProcessGroup() {
  const spot = useSpotlight();
  const steps = [
    { step: "STEP 1", title: "预约一对一沟通", desc: "梳理企业现状与需求，明确顾问切入点" },
    { step: "STEP 2", title: "确认服务方案", desc: "签订服务合同并完成付款，正式建立合作" },
    { step: "STEP 3", title: "开展企业财税经营全面尽调", desc: "经营模式、财务结构、税务风险与组织评估" },
    { step: "STEP 4", title: "量身定制年度顾问服务规划", desc: "结合企业实际，确定全年服务节奏与重点" },
    { step: "STEP 5", title: "正式开启全年专属陪伴服务", desc: "月度分析、季度沟通、风险预警持续在线" },
  ];
  return (
    <div className="mt-14 grid gap-4 md:grid-cols-5">
      {steps.map((s, i) => (
        <div
          key={s.step}
          onClick={() => spot.toggle(i)}
          className={`group interactive-card p-6 annual-fade-up ${spot.state(i)}`}
          style={{ animationDelay: `${i * 90}ms` }}
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">{s.step}</p>
          <p className="annual-card-title mt-3 text-lg font-semibold leading-snug text-white">{s.title}</p>
          <p className="mt-3 text-sm leading-7 text-brand-body">{s.desc}</p>
          <CardHint />
        </div>
      ))}
    </div>
  );
}

/* ⑤ 服务团队数据 —— 照搬首页连体大面板风格，墨绿金主题 + 点击聚光 */
function TeamMetrics() {
  const spot = useSpotlight();
  return (
    <div className="mt-16">
      <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.28em] text-brand-gold/80">
        服务数据
      </p>
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-card border border-brand-gold/20 bg-brand-gold/10 md:grid-cols-4">
        {trustMetrics.map((m, i) => (
          <div
            key={m.label}
            onClick={() => spot.toggle(i)}
            className={`group annual-metric-cell annual-fade-up ${spot.state(i)}`}
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <p
              className={[
                "annual-card-title font-semibold tracking-tight text-gradient-gold",
                m.value.length > 4 ? "text-3xl md:text-4xl whitespace-nowrap" : "text-4xl md:text-5xl"
              ].join(" ")}
            >
              {m.value}
            </p>
            <div className="mt-4 flex items-baseline justify-center gap-2">
              <p className="text-sm text-brand-body">{m.label}</p>
              {m.detail && <p className="text-lg font-semibold text-white">{m.detail}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ⑥⑦ 动态复盘 + 可视化看板 */
function FeaturePanels() {
  const spot = useSpotlight();
  const items = [
    {
      eyebrow: "动态财税方案复盘",
      title: "让财税方案跟着经营一起走",
      desc: "结合企业经营变化，动态调整定制财税筹划方案，持续适配业务发展。",
    },
    {
      eyebrow: "可视化经营数据看板",
      title: "把专业报表变成老板看得懂的数据",
      desc: "简化专业财务报表，输出老板易懂的经营数据，直观掌握企业盈亏、税负状况。",
    },
  ];
  return (
    <div className="mt-14 grid gap-5 md:grid-cols-2">
      {items.map((it, i) => (
        <div
          key={it.title}
          onClick={() => spot.toggle(i)}
          className={`group interactive-card p-8 annual-fade-up ${spot.state(i)}`}
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <p className="annual-eyebrow !px-4 !py-2 !text-[0.68rem]">{it.eyebrow}</p>
          <h3 className="annual-card-title mt-6 text-2xl font-semibold text-white">{it.title}</h3>
          <p className="mt-4 text-sm leading-8 text-brand-body">{it.desc}</p>
          <CardHint />
        </div>
      ))}
    </div>
  );
}

export default function WhyAnnualAdvisorPage() {
  return (
    <div className="annual-page min-h-screen">
      {/* 全局墨绿+淡金光晕 */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="annual-glow left-[-10rem] top-[-8rem] h-[26rem] w-[26rem] bg-[radial-gradient(circle,rgba(217,199,165,0.16),transparent_70%)]" />
        <div className="annual-glow right-[-8rem] top-1/3 h-[30rem] w-[30rem] bg-[radial-gradient(circle,rgba(40,90,68,0.5),transparent_70%)]" />
        <div className="annual-glow bottom-[-10rem] left-1/4 h-[28rem] w-[28rem] bg-[radial-gradient(circle,rgba(34,78,58,0.45),transparent_70%)]" />
      </div>

      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111816]/85 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="inline-flex items-center rounded-full bg-white px-2 py-1">
            <BrandLogo className="h-9 w-auto max-w-[150px]" />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            <Link href="/" className="text-sm text-white/60 transition hover:text-brand-gold">首页</Link>
            <Link href="/why-annual-advisor" className="text-sm font-medium text-brand-gold">年度顾问</Link>
            <Link href="/services" className="text-sm text-white/60 transition hover:text-brand-gold">服务体系</Link>
            <Link href="/about" className="text-sm text-white/60 transition hover:text-brand-gold">关于</Link>
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
            className="hidden lg:inline-flex rounded-full bg-[#d9c7a5] px-5 py-2 text-sm font-semibold text-[#111816] transition hover:bg-[#eadabd]"
          >
            申请企业财税风险诊断（限量开放）
          </Link>
        </div>
      </header>

      <main className="relative z-10">
        {/* ═══════════ ① 服务定位（Hero） ═══════════ */}
        <section className="ppt-hero relative overflow-hidden border-b border-white/10">
          <div className="annual-grid-bg" />
          <div className="ppt-veil" />
          <div className="ppt-content relative mx-auto max-w-4xl px-6 py-28 text-center md:py-36">
            <Eyebrow>龙头会服 · 企业年度财税顾问计划</Eyebrow>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.2] tracking-tight text-white md:text-6xl">
              <span className="block">企业年度财税顾问</span>
              <span className="mt-2 block whitespace-normal md:whitespace-nowrap">
                <span className="text-gradient-gold">基于完整经营周期</span>的长期专业支持
              </span>
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-brand-body">
              不是代账，也不是一次性的咨询，而是签约后进入企业经营尽调与全年顾问服务周期，帮您建立持续经营判断能力。
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/contact"
                className="premium-button inline-flex h-12 items-center gap-2 bg-[#d9c7a5] px-7 text-sm font-semibold text-[#111816] transition hover:bg-[#eadabd]"
              >
                申请企业财税风险诊断
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-white/14 bg-white/5 px-7 text-sm font-medium text-white/80 transition hover:border-[#d9c7a5]/40 hover:text-white"
              >
                查看服务体系
              </Link>
            </div>
          </div>
        </section>

        {/* ═══════════ ② 企业为什么需要财税顾问 ═══════════ */}
        <section className="annual-band border-b border-white/10">
          <div className="mx-auto max-w-5xl px-6 py-24 md:py-28">
            <SectionTitle
              eyebrow="企业为什么需要财税顾问"
              title="企业为什么需要财税顾问？"
              desc="把财税问题放回经营现场，每一项价值都对应老板真正在意的经营结果。"
            />
            <WhyGroup />
          </div>
        </section>

        {/* ═══════════ ③ 核心服务价值 ═══════════ */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-4xl px-6 py-24 md:py-28">
            <SectionTitle eyebrow="核心服务价值" title="年度顾问为您创造什么价值？" />
            <ValueGroup />
          </div>
        </section>

        {/* ═══════════ ④ 合作流程 ═══════════ */}
        <section className="annual-band border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
            <SectionTitle
              eyebrow="合作流程"
              title="年度顾问的合作流程是怎样的？"
              desc="五步进入全年专属陪伴，每一个环节都可点击聚焦重点。"
            />
            <ProcessGroup />
          </div>
        </section>

        {/* ═══════════ ⑤ 服务团队实力 ═══════════ */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
            <SectionTitle eyebrow="服务团队" title="谁在提供服务？" />
            <div className="mx-auto mt-14 max-w-3xl space-y-5 text-center text-base leading-8 text-brand-body">
              <p>资深注册会计师、税务师、高级会计师领头，配备 18 人专业注会团队。</p>
              <p>深耕河南全省市场，熟悉本地征管口径、最新财税政策，精准化解实操风险。</p>
            </div>
            <TeamMetrics />
          </div>
        </section>

        {/* ═══════════ ⑥⑦ 动态复盘 + 可视化看板 ═══════════ */}
        <section className="annual-band border-b border-white/10">
          <div className="mx-auto max-w-5xl px-6 py-24 md:py-28">
            <FeaturePanels />
          </div>
        </section>

        {/* ═══════════ ⑧ 底部总结 + CTA ═══════════ */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
            <Eyebrow>龙头会服</Eyebrow>
            <h2 className="mt-7 text-3xl font-semibold leading-tight tracking-tight text-white md:whitespace-nowrap md:text-4xl">
              核心不是解决<span className="text-gradient-gold">单一问题</span><br />
              而是在长期合作中建立清晰稳定的经营判断体系
            </h2>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="premium-button inline-flex h-12 items-center gap-2 rounded-full bg-[#d9c7a5] px-7 text-sm font-semibold text-[#111816] transition hover:bg-[#eadabd]"
              >
                申请企业财税风险诊断（限量开放）
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-sm text-brand-body">每月仅服务有限企业，需初步评估是否适配年度顾问体系。</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 bg-[#0a0f0d] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <p className="text-sm text-white/60">{brand.name} · {brand.positioning}</p>
          <p className="text-sm text-white/60">电话 {brand.phone}</p>
        </div>
      </footer>
    </div>
  );
}
