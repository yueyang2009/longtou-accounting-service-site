import Link from "next/link";
import { ArrowRight, Users, ShieldCheck, Award, Handshake } from "lucide-react";

import { BrandLogo } from "@/components/BrandLogo";
import { MobileNav } from "@/components/MobileNav";
import { TeamCard } from "@/components/TeamCard";
import { brand, experts, extendedExperts, trustMetrics } from "@/lib/data";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/about", label: "关于" },
  { href: "/team", label: "团队" },
  { href: "/annual-advisory", label: "年度顾问" },
  { href: "/services", label: "服务体系" },
];

const teamValues = [
  {
    icon: ShieldCheck,
    title: "双师协同",
    description: "注册会计师与注册税务师共同参与每一份方案，兼顾财务真实性与税务安全边界。"
  },
  {
    icon: Award,
    title: "一线实战",
    description: "每一个顾问都有一线执业背景，从上市公司审计到民营企业乱账，处理过真实问题。"
  },
  {
    icon: Users,
    title: "双师审核",
    description: "重要方案经双师交叉审核，不从单一视角定结论，降低判断盲区。"
  },
  {
    icon: Handshake,
    title: "长期陪伴",
    description: "不按次交付，按年度陪伴。在经营节奏里持续看见、判断、修正和沉淀。"
  }
];

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-[#0f1513] text-white">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0f1513]/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="inline-flex items-center">
            <span className="inline-flex items-center rounded-full bg-white px-3 py-1.5">
              <BrandLogo className="h-8 w-auto max-w-[150px]" />
            </span>
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={
                  item.href === "/team"
                    ? "text-sm font-medium text-white"
                    : "text-sm text-white/64 transition hover:text-white"
                }
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <MobileNav links={navLinks} triggerTone="light" />
          <Link
            href="/contact"
            className="hidden rounded-full bg-[#d9c7a5] px-5 py-2 text-sm font-medium text-[#111816] transition hover:bg-[#eadabd] lg:inline-flex"
          >
            申请企业财税风险诊断（限量开放）
          </Link>
        </div>
      </header>

      <main>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden border-b border-white/10">
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(circle at 78% 14%, rgba(217,199,165,0.14), transparent 38%), radial-gradient(circle at 14% 86%, rgba(36,53,42,0.55), transparent 42%)"
            }}
          />
          <div className="relative mx-auto max-w-3xl px-6 py-24 text-center md:py-32">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-[#e9d9bc]">团队</p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-white md:text-5xl">
              双师带队，专注中小企业<br className="hidden md:block" />财税规范与经营体系建设
            </h1>
            <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/60">
              龙头会服团队由注册会计师、注册税务师、律师与高级会计师组成，总部位于郑州。累计服务超过 10000 家河南本土企业。不是理论派，每一个顾问都有一线实战背景，每一个方案都经过双师审核。
            </p>
          </div>
        </section>

        {/* ── 信任指标 ── */}
        <section className="border-b border-white/10 bg-[#111816]">
          <div className="mx-auto max-w-7xl px-6 py-16">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {trustMetrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <p className="text-3xl font-semibold text-[#e9d9bc] md:text-4xl">{metric.value}</p>
                  <p className="mt-2 text-sm text-white/60">{metric.label}</p>
                  {metric.detail ? (
                    <p className="mt-1 text-xs text-white/45">{metric.detail}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 核心顾问 ── */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#e9d9bc]">核心顾问</p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                先看人，再谈合作
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
                每一位顾问都有一线执业背景，处理过真实的复杂问题。重要方案经双师交叉审核，不从单一视角定结论。
              </p>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {experts.map((expert) => (
                <TeamCard key={expert.name} expert={expert} />
              ))}
            </div>
          </div>
        </section>

        {/* ── 行业顾问组 ── */}
        <section className="border-b border-white/10 bg-[#111816]">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#e9d9bc]">行业顾问组</p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                按行业配置专属顾问组
              </h2>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
                核心顾问之外，我们按行业组建顾问组，覆盖制造业、建筑、商贸、科技、餐饮等河南主流产业，确保方案贴合行业真实经营逻辑。
              </p>
            </div>
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {extendedExperts.map((group) => (
                <div
                  key={group}
                  className="flex items-center gap-3 rounded-card border border-white/10 bg-white/[0.04] px-6 py-5"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-[#d9c7a5]" />
                  <p className="text-sm font-medium text-white/80">{group}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 团队理念 ── */}
        <section className="border-b border-white/10">
          <div className="mx-auto max-w-7xl px-6 py-24 md:py-28">
            <div className="mx-auto max-w-3xl text-center">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#e9d9bc]">团队理念</p>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
                我们坚持什么
              </h2>
            </div>
            <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {teamValues.map((value) => (
                <div key={value.title} className="rounded-card border border-white/10 bg-white/[0.04] p-6">
                  <value.icon className="h-8 w-8 text-[#e9d9bc]" />
                  <h3 className="mt-5 text-lg font-semibold text-white">{value.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-white/60">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="border-b border-white/10 bg-[#111816]">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#e9d9bc]">行动</p>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-white md:text-4xl">
              先做一次判断，再决定是否合作
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
              不急着给方案，先把企业所处阶段、真实问题和需要优先处理的事项讲清楚。
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-[#d9c7a5] px-7 text-sm font-medium text-[#111816] transition hover:bg-[#eadabd]"
              >
                申请企业财税风险诊断（限量开放）
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-sm text-white/60">每月仅服务有限企业，需初步评估适配性</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#0f1513] text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <p className="text-sm text-white/60">{brand.name} · {brand.positioning}</p>
          <p className="text-sm text-white/60">电话 {brand.phone}</p>
        </div>
      </footer>
    </div>
  );
}
