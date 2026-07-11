"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { HomeHeader } from "@/components/HomeHeader";
import { FlipCard } from "@/components/FlipCard";
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
      点击翻转
      <ArrowRight className="h-3.5 w-3.5" />
    </span>
  );
}

/* ② 企业为什么需要财税顾问 */
function WhyGroup() {
  const items: { title: string; desc: string; back: string }[] = [
    { title: "管控财税风险", desc: "降低税务稽查罚款损失", back: "稽查一次，罚款可能吞掉全年利润；事前管控，远胜事后补救。" },
    { title: "合法合规筹划", desc: "充分享受各项税收优惠", back: "政策红利不主动用，就等于替企业白白多缴税。" },
    { title: "处理高难度财税事项", desc: "税会差异、税务稽查等复杂事项从容应对", back: "专业的事交给专业的人，老板不必亲自啃政策条文。" },
    { title: "规范账务与申报", desc: "减少涉税失误，守住合规底线", back: "账务规范，是融资、投标、股权转让时最硬的底气。" },
  ];
  return (
    <div className="mt-14 grid gap-5 md:grid-cols-2">
      {items.map((it, i) => (
        <FlipCard
          key={it.title}
          className="annual-fade-up"
          style={{ animationDelay: `${i * 90}ms` }}
          front={
            <div className="flex items-start gap-4">
              <span className="annual-badge">{i + 1}</span>
              <div>
                <p className="annual-card-title text-xl font-semibold text-white">{it.title}</p>
                <p className="mt-3 text-sm leading-7 text-brand-body">{it.desc}</p>
                <CardHint />
              </div>
            </div>
          }
          back={
            <div className="flip-back-inner">
              <span className="flip-back-label">深度要点</span>
              <p className="flip-back-text">{it.back}</p>
              <span className="flip-back-hint">点击返回 ›</span>
            </div>
          }
        />
      ))}
    </div>
  );
}

/* ③ 核心服务价值 */
function ValueGroup() {
  const items: { title: string; desc: string; back: string }[] = [
    { title: "全年度财税体检诊断", desc: "全面复盘往期账务税务，清晰列明现存风险并给出落地解决方案", back: "先看清家底，才知道钱该往哪省、风险藏在哪。" },
    { title: "风险前置预警", desc: "实时排查潜在财税隐患，提早沟通处置，避免风险积压爆发", back: "把雷排在发生之前，而不是爆了再救火。" },
    { title: "全天候日常答疑支持", desc: "7×8 小时微信、电话、线上会议，随时解答日常财税疑问", back: "日常一个小判断，往往避免一笔大损失。" },
    { title: "一年两次财税健康核查", desc: "每半年开展一次账务、税务专项巡检，及时纠偏", back: "半年一次体检，经营节奏不跑偏。" },
    { title: "每年 4 次上门深度交流", desc: "与老板、财务总监面对面，把脉经营与财税关键决策", back: "面对面把脉，顾问才真正懂你的生意。" },
  ];
  return (
    <div className="mt-14 space-y-4">
      {items.map((it, i) => (
        <FlipCard
          key={it.title}
          className="annual-fade-up"
          style={{ animationDelay: `${i * 80}ms` }}
          front={
            <div className="flex items-start gap-5">
              <span className="annual-badge">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="annual-card-title text-lg font-semibold text-white">{it.title}</p>
                <p className="mt-2 text-sm leading-7 text-brand-body">{it.desc}</p>
                <CardHint />
              </div>
            </div>
          }
          back={
            <div className="flip-back-inner">
              <span className="flip-back-label">深度要点</span>
              <p className="flip-back-text">{it.back}</p>
              <span className="flip-back-hint">点击返回 ›</span>
            </div>
          }
        />
      ))}
    </div>
  );
}

/* ④ 合作流程 */
function ProcessGroup() {
  const steps: { step: string; title: string; desc: string; back: string }[] = [
    { step: "STEP 1", title: "预约一对一沟通", desc: "梳理企业现状与需求，明确顾问切入点", back: "先聊清楚，再谈合作，不急着签单。" },
    { step: "STEP 2", title: "确认服务方案", desc: "签订服务合同并完成付款，正式建立合作", back: "方案白纸黑字，服务边界一目了然。" },
    { step: "STEP 3", title: "开展企业财税经营全面尽调", desc: "经营模式、财务结构、税务风险与组织评估", back: "不走过场，把真实经营摸透。" },
    { step: "STEP 4", title: "量身定制年度顾问服务规划", desc: "结合企业实际，确定全年服务节奏与重点", back: "不是通用模板，是按你企业长的。" },
    { step: "STEP 5", title: "正式开启全年专属陪伴服务", desc: "月度分析、季度沟通、风险预警持续在线", back: "签完约，才是服务的开始。" },
  ];
  return (
    <div className="mt-14 grid gap-4 md:grid-cols-5">
      {steps.map((s, i) => (
        <FlipCard
          key={s.step}
          className="annual-fade-up"
          style={{ animationDelay: `${i * 90}ms` }}
          front={
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-brand-gold">{s.step}</p>
              <p className="annual-card-title mt-3 text-lg font-semibold leading-snug text-white">{s.title}</p>
              <p className="mt-3 text-sm leading-7 text-brand-body">{s.desc}</p>
              <CardHint />
            </div>
          }
          back={
            <div className="flip-back-inner">
              <span className="flip-back-label">深度要点</span>
              <p className="flip-back-text">{s.back}</p>
              <span className="flip-back-hint">点击返回 ›</span>
            </div>
          }
        />
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
  const items: { eyebrow: string; title: string; desc: string; back: string }[] = [
    {
      eyebrow: "动态财税方案复盘",
      title: "让财税方案跟着经营一起走",
      desc: "结合企业经营变化，动态调整定制财税筹划方案，持续适配业务发展。",
      back: "经营在变，方案也要跟着变，别让旧筹划拖了新业务的后腿。",
    },
    {
      eyebrow: "可视化经营数据看板",
      title: "把专业报表变成老板看得懂的数据",
      desc: "简化专业财务报表，输出老板易懂的经营数据，直观掌握企业盈亏、税负状况。",
      back: "老板要的是结论，不是一张看不懂的报表。",
    },
  ];
  return (
    <div className="mt-14 grid gap-5 md:grid-cols-2">
      {items.map((it, i) => (
        <FlipCard
          key={it.title}
          className="annual-fade-up"
          style={{ animationDelay: `${i * 100}ms` }}
          front={
            <div>
              <p className="annual-eyebrow !px-4 !py-2 !text-[0.68rem]">{it.eyebrow}</p>
              <h3 className="annual-card-title mt-6 text-2xl font-semibold text-white">{it.title}</h3>
              <p className="mt-4 text-sm leading-8 text-brand-body">{it.desc}</p>
              <CardHint />
            </div>
          }
          back={
            <div className="flip-back-inner">
              <span className="flip-back-label">深度要点</span>
              <p className="flip-back-text">{it.back}</p>
              <span className="flip-back-hint">点击返回 ›</span>
            </div>
          }
        />
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
      <HomeHeader />

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
              desc="五步进入全年专属陪伴，每一个环节都可点击翻看重点。"
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
