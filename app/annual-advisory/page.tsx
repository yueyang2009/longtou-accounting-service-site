import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BrandLogo } from "@/components/BrandLogo";
import { MobileNav } from "@/components/MobileNav";
import { brand, annualPlan, trustMetrics } from "@/lib/data";

function Label({ text }: { text: string }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">{text}</p>
  );
}

function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">{children}</h2>
  );
}

export default function AnnualAdvisoryPage() {
  return (
    <div className="min-h-screen bg-brand-paper">
      <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="inline-flex items-center">
            <BrandLogo className="h-9 w-auto max-w-[150px]" />
          </Link>
          <nav className="hidden items-center gap-6 lg:flex">
            <Link href="/" className="text-sm text-brand-muted hover:text-brand-ink">首页</Link>
            <Link href="/annual-advisory" className="text-sm font-medium text-brand-ink">年度顾问</Link>
            <Link href="/why-annual-advisor" className="text-sm text-brand-muted hover:text-brand-ink">为什么需要</Link>
            <Link href="/services" className="text-sm text-brand-muted hover:text-brand-ink">服务体系</Link>
            <Link href="/about" className="text-sm text-brand-muted hover:text-brand-ink">关于</Link>
          </nav>
          <MobileNav
            links={[
              { href: "/", label: "首页" },
              { href: "/annual-advisory", label: "年度顾问" },
              { href: "/why-annual-advisor", label: "为什么需要" },
              { href: "/services", label: "服务体系" },
              { href: "/about", label: "关于" },
            ]}
          />
          <Link href="/contact" className="hidden lg:inline-flex rounded-full bg-brand-emerald px-5 py-2 text-sm font-medium text-white transition hover:bg-brand-emerald-hover">
            申请企业财税风险诊断（限量开放）
          </Link>
        </div>
      </header>

      <main>
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
            <Label text="龙头会服" />
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-5xl">
              企业年度财税顾问计划
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-muted">{annualPlan.summary}</p>
          </div>
        </section>

        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="适合企业" />
            <Heading>哪些企业适合？</Heading>
            <div className="mt-8 space-y-4 text-base leading-8 text-brand-muted">
              {annualPlan.suitable.map((item) => (
                <p key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-emerald" />
                  <span>{item}</span>
                </p>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="年度服务包含" />
            <Heading>一年下来，企业会得到什么？</Heading>
            <div className="mt-10 space-y-4">
              {annualPlan.whatYouGet.map((item) => {
                const parts = item.split("——");
                return (
                  <div key={item} className="border border-brand-line bg-white p-6 rounded-card">
                    <p className="text-lg font-semibold text-brand-ink">{parts[0]}</p>
                    {parts[1] && <p className="mt-2 text-sm leading-7 text-brand-muted">{parts[1]}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="团队配置" />
            <Heading>谁在提供服务？</Heading>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>由注册会计师、注册税务师及高级财务专业人员组成，长期服务制造业、建筑业及成长型企业。</p>
            </div>
            <div className="mt-6 grid gap-px overflow-hidden border border-brand-line bg-brand-line md:grid-cols-4">
              {trustMetrics.map((m) => (
                <div key={m.label} className="bg-white p-6">
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

        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="合作流程" />
            <Heading>如何开始？</Heading>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              {["预约沟通", "签约付款", "企业经营尽调", "制定年度顾问计划", "开始年度陪伴"].map((step, i) => (
                <div key={step} className="flex items-center gap-4 border-b border-brand-line pb-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-emerald text-sm font-medium text-white">
                    {i + 1}
                  </span>
                  <span className="text-brand-ink">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
            <Label text="下一步" />
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
              如果你的企业正在成长，现在是建立规范体系的最佳时间。
            </h2>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link href="/contact" className="inline-flex h-12 items-center gap-2 rounded-full bg-brand-emerald px-7 text-sm font-medium text-white transition hover:bg-brand-emerald-hover">
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
