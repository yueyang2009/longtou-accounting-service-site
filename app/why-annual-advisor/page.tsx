import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { brand, annualPlan } from "@/lib/data";

const siteBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

function SectionLabel({ children }: { children: string }) {
  return (
    <p className="mb-5 text-xs font-semibold uppercase tracking-widest text-brand-muted">
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
          <Link href="/" className="text-lg font-semibold tracking-tight text-brand-ink">
            {brand.name}
          </Link>
          <Link
            href="/contact"
            className="rounded-md bg-brand-ink px-5 py-2 text-sm font-medium text-white transition hover:bg-black"
          >
            预约经营交流
          </Link>
        </div>
      </header>

      <main>

        {/* ── 1. 为什么很多企业越发展越累？ ── */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
            <SectionLabel>一个普遍现象</SectionLabel>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-5xl">
              为什么很多企业越发展越累？
            </h1>
            <div className="mt-10 space-y-6 text-base leading-8 text-brand-muted">
              <p>
                企业从几百万做到几千万营收，几乎是每个老板都经历过的事情。辛苦，但踏实。订单来了就接，人员不够就招，现金流紧了就催——老板一个人撑起全局。
              </p>
              <p>
                但到了某个阶段，事情开始不一样了。
              </p>
              <p>
                收入在涨，利润在跌。账上是盈利的，但现金总是紧巴巴。税务上到底有没有风险，没人说得清。代账公司按时报税，但从来不会告诉你哪里有问题。内部会计很忙，但拿出来的报表老板看不懂，也问不出所以然。
              </p>
              <p>
                企业变大了，老板却越来越没有安全感。
              </p>
              <p className="border-l-4 border-brand-ink bg-brand-soft px-6 py-5 text-lg font-medium text-brand-ink">
                这不是管理能力的问题。而是企业从"一个人能管过来"，走到了"需要一套体系来支撑"的阶段。
              </p>
            </div>
          </div>
        </section>

        {/* ── 2. 老板真正缺的不是会计 ── */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <SectionLabel>一个常见的误解</SectionLabel>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
              老板真正缺的不是会计。
            </h2>
            <div className="mt-10 space-y-6 text-base leading-8 text-brand-muted">
              <p>
                很多老板的第一反应是："再招个好会计就行了。"
              </p>
              <p>
                但问题不在会计身上。
              </p>
              <p>
                代账公司的工作是按时申报、应付检查。他们不会也没有义务帮你看经营。你请的专职会计，日常工作是被发票、凭证、报销填满的，能保证月报不出错已经很不容易。
              </p>
              <p>
                这两者之间的空白地带——利润到底从哪里来、风险到底在哪里、下一步该怎么走——恰恰是老板最需要被回答的问题，却没有人能回答。
              </p>
              <p className="border-l-4 border-brand-ink bg-white px-6 py-5 text-lg font-medium text-brand-ink">
                企业需要的不是另一个做账的人，而是一个能把财务信息翻译成经营决策的人。
              </p>
              <p>
                这个人不需要替你管每天的单据和报销，他需要帮你看到那些你一个人看不到的东西：利润结构是否健康、税收有没有历史隐患、现金流在什么情况下会断、管理体系有没有漏洞。
              </p>
            </div>
          </div>
        </section>

        {/* ── 3. 年度财税顾问解决什么问题？ ── */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <SectionLabel>三个核心价值</SectionLabel>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
              年度财税顾问解决什么问题？
            </h2>
            <div className="mt-14 space-y-14">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">01</p>
                <h3 className="mt-4 text-2xl font-semibold text-brand-ink">利润看得清</h3>
                <p className="mt-4 text-base leading-8 text-brand-muted">
                  账面利润和真实利润往往是两回事。代账按开票确认收入，按发票入账成本，但业务实际发生的节奏跟发票并不一致。年度顾问帮你建立经营口径的利润表，让老板每月看到自己企业真实的盈利状况，而不是代账交上来的那张"税务局版本"。
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">02</p>
                <h3 className="mt-4 text-2xl font-semibold text-brand-ink">风险防得住</h3>
                <p className="mt-4 text-base leading-8 text-brand-muted">
                  大多数企业的税务风险不是故意产生的，而是长期累积出来的——收入确认方式、成本归集口径、关联交易定价、发票管理习惯，每项单独看问题不大，但放在一起就是隐患。年度顾问的职责不是等出事再处理，而是在问题形成之前识别出来，提前干预。
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">03</p>
                <h3 className="mt-4 text-2xl font-semibold text-brand-ink">决策有依据</h3>
                <p className="mt-4 text-base leading-8 text-brand-muted">
                  企业做到一定规模后，老板的每个决策都涉及财务判断——要不要投新设备、要不要接大订单、要不要扩张团队、要不要调整价格。没有经营口径的数据支撑，这些决策只能凭感觉。年度顾问不是替老板做决策，而是确保他做决策时手里有真实的数据。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── 4. 哪些企业适合？ ── */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <SectionLabel>适合画像</SectionLabel>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
              哪些企业适合？
            </h2>
            <div className="mt-10 space-y-6 text-base leading-8 text-brand-muted">
              <p>
                不是所有企业都需要年度财税顾问。但如果你符合以下特征，可能已经到了需要外部参谋的阶段：
              </p>
              <ul className="space-y-4 text-base leading-7 text-brand-muted">
                {annualPlan.suitable.map((item) => (
                  <li key={item} className="flex items-start gap-4">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-ink" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-8">
                简单来说：如果企业目前有会计或代账，但老板对财务数据仍然"心里没底"，这就是最直接的信号。
              </p>
            </div>
          </div>
        </section>

        {/* ── 5. 龙头会服如何陪伴一年？ ── */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <SectionLabel>服务方式</SectionLabel>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
              龙头会服如何陪伴一年？
            </h2>
            <div className="mt-10 space-y-6 text-base leading-8 text-brand-muted">
              <p>
                不是按次咨询，不是代账服务。而是全年陪伴，帮企业建立起"能自己运转"的财税管理体系。
              </p>
            </div>
            <div className="mt-10 space-y-8">
              {annualPlan.whatYouGet.map((item) => {
                const parts = item.split("——");
                return (
                  <div key={item} className="border-b border-brand-line pb-6 last:border-0">
                    <p className="text-lg font-semibold text-brand-ink">{parts[0]}</p>
                    {parts[1] && <p className="mt-2 text-sm leading-7 text-brand-muted">{parts[1]}</p>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 6. 预约经营交流 ── */}
        <section className="bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
            <SectionLabel>下一步</SectionLabel>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">
              约一次经营交流，不一定要买服务。
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-brand-muted">
              先聊聊企业目前的状况，我们帮你判断是否需要年度顾问，以及从哪里入手最有效。
            </p>
            <div className="mt-10 flex flex-col items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-md bg-brand-ink px-7 text-sm font-medium text-white transition hover:bg-black"
              >
                预约经营交流
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-sm text-brand-muted">
                电话：{brand.phone} ｜ 微信同号
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* ── Footer ── */}
      <footer className="bg-brand-ink text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <p className="text-sm text-white/60">{brand.name} · {brand.positioning}</p>
          <p className="text-sm text-white/60">电话 {brand.phone}</p>
        </div>
      </footer>
    </div>
  );
}
