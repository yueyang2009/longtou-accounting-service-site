import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BrandLogo } from "@/components/BrandLogo";
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
    <div className="min-h-screen bg-white">
      {/* ── Header ── */}
      <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="inline-flex items-center">
            <BrandLogo className="h-9 w-auto max-w-[150px]" />
          </Link>
          <nav className="hidden items-center gap-6 md:flex">
            <Link href="/" className="text-sm text-brand-muted hover:text-brand-ink">首页</Link>
            <Link href="/why-annual-advisor" className="text-sm font-medium text-brand-ink">年度顾问</Link>
            <Link href="/services" className="text-sm text-brand-muted hover:text-brand-ink">服务体系</Link>
            <Link href="/about" className="text-sm text-brand-muted hover:text-brand-ink">关于</Link>
          </nav>
          <Link
            href="/contact"
            className="rounded-md bg-brand-ink px-5 py-2 text-sm font-medium text-white transition hover:bg-black"
          >
            申请企业经营尽调（限量开放）
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
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-5xl">
              企业年度财税顾问，是基于企业完整经营周期的长期专业支持机制。
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-muted">
              它不是代账服务，也不是先服务后成交的咨询模式，而是在正式签约并建立合作关系后，进入企业经营尽调与全年顾问服务周期。重点不是处理单点问题，而是建立持续经营判断能力。
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ② 适用企业
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="适用企业" />
            <Heading>哪些企业适合年度财税顾问？</Heading>
            <Body>
              <p>年营收约2000万至2亿元的成长型企业。</p>
              <p>已具备稳定经营基础，但财务体系尚未系统化。</p>
              <p>处于扩张阶段或组织结构逐渐复杂的企业。</p>
              <p>覆盖行业：制造业、建筑业、商贸流通、服务型企业。</p>
            </Body>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ③ 产品定义
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="服务界定" />
            <Heading>什么是企业年度财税顾问？</Heading>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="border border-brand-line bg-brand-soft p-7">
                <p className="mb-4 text-sm font-semibold text-brand-muted">它不是</p>
                <ul className="space-y-3 text-sm leading-6 text-brand-muted">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-muted" />
                    代账服务
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-muted" />
                    先服务后成交的咨询模式
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-muted" />
                    单次问题处理
                  </li>
                </ul>
              </div>
              <div className="border border-brand-line bg-brand-ink p-7 text-white">
                <p className="mb-4 text-sm font-semibold text-white/60">而是</p>
                <p className="text-lg font-semibold leading-8">
                  在正式签约并建立合作关系后，进入企业经营尽调与全年顾问服务周期，帮助企业建立持续经营判断能力。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ④ 核心服务内容
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="核心服务内容" />
            <Heading>签约后，年度顾问包含哪些工作？</Heading>
            <div className="mt-10 space-y-4">
              {[
                ["企业经营尽调（签约后启动）", "企业经营模式梳理、财务结构分析、税务风险识别、管理与组织结构评估"],
                ["经营数据分析（月度）", "利润结构分析、现金流分析、核心指标监测、异常波动识别"],
                ["经营分析沟通（季度）", "经营复盘、利润与成本变化分析、风险识别、下一阶段重点调整"],
                ["财税风险管理（持续）", "税务合规风险识别、发票/合同/资金结构问题排查、政策变化影响判断"],
                ["年度经营复盘", "全年经营结构总结、风险与问题梳理、已解决与未解决事项、下一年度经营建议"],
              ].map(([title, desc]) => (
                <div key={title} className="border border-brand-line bg-white p-6">
                  <p className="text-lg font-semibold text-brand-ink">{title}</p>
                  <p className="mt-2 text-sm leading-7 text-brand-muted">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ⑤ 合作流程
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="合作流程" />
            <Heading>年度顾问的合作流程是怎样的？</Heading>
            <div className="mt-10 space-y-6">
              {[
                {
                  step: "STEP 1",
                  title: "企业财税风险诊断（签约前免费评估）",
                  desc: "用于判断企业是否适合年度顾问合作，不构成正式服务内容"
                },
                {
                  step: "STEP 2",
                  title: "确认合作并签约付款",
                  desc: "全款年度制，根据企业规模与复杂度定制报价"
                },
                {
                  step: "STEP 3",
                  title: "企业经营尽调（正式服务启动）",
                  desc: "经营模式梳理、财务分析、风险识别、组织评估"
                },
                {
                  step: "STEP 4",
                  title: "年度顾问服务执行",
                  items: ["月度经营数据分析", "季度经营沟通", "财税风险管理", "年度经营复盘"]
                },
                {
                  step: "STEP 5",
                  title: "年度复盘与续约建议",
                  desc: "全年工作回顾，评估是否续约"
                }
              ].map((phase) => (
                <div key={phase.step} className="border border-brand-line p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">{phase.step}</p>
                  <p className="mt-3 text-xl font-semibold text-brand-ink">{phase.title}</p>
                  {phase.items && (
                    <ul className="mt-5 space-y-2">
                      {phase.items.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-brand-muted">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-brand-ink" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                  {phase.desc && (
                    <p className="mt-4 text-sm leading-7 text-brand-muted">{phase.desc}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ⑥ 合作前免费体验
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="签约前免费评估" />
            <Heading>合作前，可以先做一次免费诊断。</Heading>
            <Body>
              <p>企业财税风险诊断（签约前），用于判断企业是否适合年度顾问合作。</p>
              <p>内容包括：初步财务结构判断、主要税务风险识别、经营模式基础分析、是否适合年度顾问合作建议。</p>
              <p>该诊断不构成正式服务，仅作为合作前评估机制。</p>
            </Body>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ⑦ 服务方式
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="服务方式" />
            <Heading>年度顾问如何提供服务？</Heading>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>签约后正式进入服务周期。</p>
              <p>双专业支持——注册会计师与税务师共同参与。</p>
              <p>直接对接企业决策层，不经中间层传递。</p>
              <p>线上与线下结合支持，季度沟通以驻场为主。</p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ⑧ 服务边界
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="服务边界" />
            <Heading>年度顾问不做什么？</Heading>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>不承担代账机构日常记账工作。</p>
              <p>不提供单次咨询替代长期合作。</p>
              <p>不对经营结果做任何承诺。</p>
              <p>不服务不符合条件企业。</p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ⑨ 团队介绍
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="团队" />
            <Heading>谁在提供服务？</Heading>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>由注册会计师、注册税务师及高级财务专业人员组成。</p>
              <p>长期服务制造业、建筑业及成长型企业。</p>
            </div>
            <div className="mt-8 grid gap-px overflow-hidden border border-brand-line bg-brand-line md:grid-cols-4">
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

        {/* ════════════════════════════════════════
            ⑩ 收费说明
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="收费" />
            <Heading>如何收费？</Heading>
            <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">
              <p>年度服务采用全款制收费模式，根据企业规模与复杂度定制报价。</p>
              <p>签约前企业财税风险诊断不收费。</p>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ⑪ 底部总结
            ════════════════════════════════════════ */}
        <section className="bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
            <Label text="龙头会服" />
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
              企业年度财税顾问的核心，不是解决单一问题，<br />
              而是在长期合作中帮助企业建立稳定、清晰的经营判断体系。
            </h2>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-brand-ink px-7 text-sm font-medium text-white transition hover:bg-black"
              >
                申请企业经营尽调（限量开放）
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-sm text-brand-muted">每月仅服务有限企业，需初步评估是否适配年度顾问体系。</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-brand-ink text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <p className="text-sm text-white/60">{brand.name} · {brand.positioning}</p>
          <p className="text-sm text-white/60">电话 {brand.phone}</p>
        </div>
      </footer>
    </div>
  );
}
