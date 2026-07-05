import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { BrandLogo } from "@/components/BrandLogo";
import { brand } from "@/lib/data";

function Label({ text }: { text: string }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">
      {text}
    </p>
  );
}

function Heading({ children }: { children: string }) {
  return (
    <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
      {children}
    </h2>
  );
}

function Body({ children }: { children: React.ReactNode }) {
  return <div className="mt-8 space-y-5 text-base leading-8 text-brand-muted">{children}</div>;
}

function QuoteLine({ children }: { children: string }) {
  return (
    <p className="border-l-4 border-brand-ink bg-brand-soft px-6 py-5 text-lg font-medium leading-7 text-brand-ink">
      {children}
    </p>
  );
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
            ① Hero
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-36">
            <Label text="龙头会服 · 企业年度财税顾问计划" />
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-5xl">
              不是所有企业，都需要财税顾问。
              <br />
              但你的企业，可能正处在需要的时候。
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-muted">
              为成长型民营企业提供全年经营财税支持。
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-brand-ink px-7 text-sm font-medium text-white transition hover:bg-black"
              >
                申请企业经营尽调（限量开放）
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <p className="mt-4 text-sm text-brand-muted">
              每月仅服务有限企业
            </p>
            <p className="mt-1 text-sm text-brand-muted">
              需初步评估是否适配年度顾问体系
            </p>
            <p className="mt-1 text-sm text-brand-muted">
              不适合所有企业
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ② 痛点升级区
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="一个普遍困境" />
            <Heading>为什么很多企业越做越累？</Heading>
            <Body>
              <p>
                企业规模在增长，从几百万做到几千万，从几千万做到上亿。订单多了，人多了，事情多了。
              </p>
              <p>
                但财务体系没有同步升级。
              </p>
              <p>
                代账公司按时报税，但提供不了经营层面的数据。内部会计埋头做账，但拿出来的报表老板看不懂。利润到底是多少、税有没有隐患、现金流能撑多久——没有人能回答。
              </p>
              <p>
                老板开始凭经验做决策。哪个产品赚钱，靠感觉。要不要接这个订单，拍脑袋。税务有没有风险，等税局通知。
              </p>
              <p>
                企业做大了，老板的安全感却没有增加。
              </p>
              <QuoteLine>
                问题的本质，不是财务问题，而是经营系统问题。
              </QuoteLine>
            </Body>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ③ 产品定义
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="重新定义" />
            <Heading>什么是企业年度财税顾问？</Heading>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="border border-brand-line bg-brand-soft p-7">
                <p className="mb-4 text-sm font-semibold text-brand-muted">龙头会服不是</p>
                <ul className="space-y-3 text-sm leading-6 text-brand-muted">
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-muted" />
                    代账服务
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-muted" />
                    一次性咨询
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-muted" />
                    单点税务优化
                  </li>
                </ul>
              </div>
              <div className="border border-brand-line bg-brand-ink p-7 text-white">
                <p className="mb-4 text-sm font-semibold text-white/60">而是</p>
                <p className="text-lg font-semibold leading-8">
                  在完整经营周期内，持续提供财税与经营支持的顾问服务。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ④ 核心交付
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="确定性交付" />
            <Heading>一年下来，你会得到什么？</Heading>
            <div className="mt-10 space-y-4">
              {[
                ["企业经营尽调报告", "对企业经营模式、股权结构、财务状况、管理流程的系统梳理与诊断"],
                ["年度财税风险清单", "覆盖全年各税种的风险识别与分级，不等税局找上门"],
                ["季度经营分析", "每季度一次经营数据分析，跟踪利润、成本、现金流变化趋势"],
                ["税务风险提醒机制", "政策变动、申报节点、异常指标实时提醒，不遗漏"],
                ["年度经营复盘", "全年财务数据回顾，判断经营策略是否有效"],
                ["下一年度经营建议", "基于数据的来年规划，不是猜测，是分析"],
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
            ⑤ 服务流程
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="服务流程" />
            <Heading>我们如何陪伴企业一年？</Heading>
            <div className="mt-10 space-y-6">
              {[
                {
                  step: "STEP 1",
                  title: "企业经营尽调（2～3天）",
                  items: ["经营模式", "股权结构", "财务状况", "管理流程"]
                },
                {
                  step: "STEP 2",
                  title: "年度顾问计划制定",
                  desc: "共同确定：经营重点、财税重点、风险点"
                },
                {
                  step: "STEP 3",
                  title: "持续陪跑（全年）",
                  items: ["月度／季度沟通", "微信／电话／会议支持", "重大事项即时介入"]
                },
                {
                  step: "STEP 4",
                  title: "年度复盘",
                  items: ["全年经营总结", "财税问题复盘", "下一年规划建议"]
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
            ⑥ 如果不做
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="一个现实问题" />
            <Heading>如果不做年度财税顾问，企业会发生什么？</Heading>
            <Body>
              <p>财务数据长期碎片化，老板看不清真实经营状况。</p>
              <p>税务风险在经营过程中持续累积，但无法提前识别。</p>
              <p>财务部门只能记录过去，无法支持未来决策。</p>
              <p>企业规模越大，内部管理复杂度越高，但缺乏系统支撑。</p>
              <QuoteLine>
                问题不是突然出现的，而是在缺乏系统支持的情况下逐步累积的。
              </QuoteLine>
            </Body>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ⑦ 客户筛选模块（新增）
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="筛选标准" />
            <Heading>我们如何判断是否适合服务？</Heading>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="border border-brand-line bg-white p-7">
                <p className="mb-5 text-sm font-semibold text-brand-ink">适合</p>
                <ul className="space-y-4">
                  {["企业正在成长", "有稳定营收基础", "希望建立规范体系", "老板愿意参与经营管理"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-brand-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-ink" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-brand-line bg-brand-soft p-7">
                <p className="mb-5 text-sm font-semibold text-brand-muted">不适合</p>
                <ul className="space-y-4">
                  {["只想做低价代账", "只做一次性问题处理", "不关注长期经营"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-brand-muted">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand-muted" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ⑧ 合作流程说明模块（新增）
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="合作流程" />
            <Heading>申请企业经营尽调后会发生什么？</Heading>
            <div className="mt-10 space-y-5">
              {[
                { step: "STEP 1", title: "提交申请" },
                { step: "STEP 2", title: "初步沟通" },
                { step: "STEP 3", title: "企业经营尽调（2～3天）" },
                { step: "STEP 4", title: "输出适配性建议" },
                { step: "STEP 5", title: "决定是否年度合作" },
              ].map((phase) => (
                <div key={phase.step} className="flex items-center gap-6 border border-brand-line bg-white px-7 py-5">
                  <p className="w-20 shrink-0 text-xs font-semibold uppercase tracking-widest text-brand-muted">
                    {phase.step}
                  </p>
                  <p className="text-base font-semibold text-brand-ink">{phase.title}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ⑨ FAQ
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="常见问题" />
            <Heading>你可能关心的问题</Heading>
            <div className="mt-10 space-y-6">
              {[
                {
                  q: "年度财税顾问是否适合所有企业？",
                  a: "不是。年度顾问更适合年营收2000万以上、已有稳定经营规模的成长型企业。如果企业还处于初创阶段，可能暂时不需要。首次经营尽调后，我们会给出是否适合的判断。"
                },
                {
                  q: "是否需要长期合作？",
                  a: "年度顾问按完整经营年度签约，一个年度结束后双方共同评估是否续约。不强制绑定。"
                },
                {
                  q: "如何收费？",
                  a: "根据企业规模、行业、问题复杂度定制报价。首次经营尽调不收取费用。"
                },
                {
                  q: "是否必须每月见面？",
                  a: "不必。日常沟通以微信和电话为主，季度经营分析可安排线上或线下会议，重大事项临时介入。"
                },
                {
                  q: "是否提供具体的税务处理？",
                  a: "提供税务风险识别、政策适用判断和合规路径建议。具体的申报操作仍由企业现有财务或代账执行，顾问负责审核和把关。"
                },
                {
                  q: "如何开始？",
                  a: "提交企业经营尽调申请，我们安排2～3天的现场尽调，之后出具体顾问方案，双方确认后签约。"
                }
              ].map((faq) => (
                <div key={faq.q} className="border-b border-brand-line pb-6 last:border-0">
                  <p className="text-base font-semibold text-brand-ink">{faq.q}</p>
                  <p className="mt-3 text-sm leading-7 text-brand-muted">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ⑧ 对比模块（新增）
            ════════════════════════════════════════ */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="对比" />
            <Heading>年度财税顾问 vs 传统代账服务</Heading>
            <div className="mt-10 overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="border-b border-brand-line">
                    <th className="px-4 py-4 text-left font-semibold text-brand-ink">维度</th>
                    <th className="px-4 py-4 text-left font-semibold text-brand-muted">传统代账</th>
                    <th className="px-4 py-4 text-left font-semibold text-brand-ink">年度财税顾问</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["核心目标", "记账报税", "支撑经营决策"],
                    ["服务方式", "月度执行", "全年陪伴"],
                    ["角色", "执行者", "顾问"],
                    ["风险控制", "被动处理", "主动识别"],
                    ["决策支持", "弱", "强"],
                  ].map(([row, left, right]) => (
                    <tr key={row} className="border-b border-brand-line">
                      <td className="px-4 py-4 font-medium text-brand-ink">{row}</td>
                      <td className="px-4 py-4 text-brand-muted">{left}</td>
                      <td className="px-4 py-4 font-medium text-brand-ink">{right}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm leading-7 text-brand-muted">
              两者解决的是完全不同层级的问题。
            </p>
          </div>
        </section>

        {/* ════════════════════════════════════════
            ⑨ CTA
            ════════════════════════════════════════ */}
        <section className="bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
            <Label text="下一步" />
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
              如果你的企业正在成长，
              <br />
              现在是建立规范体系的最佳时间。
            </h2>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-brand-ink px-7 text-sm font-medium text-white transition hover:bg-black"
              >
                申请企业经营尽调（限量开放）
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-sm text-brand-muted">
                每月仅服务有限企业
              </p>
              <p className="text-sm text-brand-muted">
                需初步评估是否适配年度顾问体系
              </p>
              <p className="text-sm text-brand-muted">
                不适合所有企业
              </p>
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
