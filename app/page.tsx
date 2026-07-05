import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

import { Layout } from "@/components/Layout";
import { LeadForm } from "@/components/LeadForm";
import { TeamCard } from "@/components/TeamCard";
import { Button } from "@/components/ui/button";
import { brand, clientStories, experts, homePainCards, longtouMethod, trustMetrics } from "@/lib/data";

function SectionTitle({
  eyebrow,
  title,
  description
}: {
  eyebrow?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="max-w-3xl">
      {eyebrow ? <p className="mb-4 text-sm font-semibold text-brand-gold">{eyebrow}</p> : null}
      <h2 className="text-3xl font-semibold leading-tight text-brand-ink md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-7 text-brand-muted">{description}</p> : null}
    </div>
  );
}

export default function HomePage() {
  return (
    <Layout>
      <section className="relative overflow-hidden border-b border-brand-line bg-white">
        <div className="absolute inset-y-0 right-0 hidden w-[42%] bg-brand-ink lg:block" />
        <div className="mx-auto grid min-h-[720px] max-w-7xl gap-12 px-5 py-20 md:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
          <div className="relative z-10 flex flex-col justify-center">
            <p className="mb-6 text-sm font-semibold text-brand-gold">河南民营企业 · 免费财税诊断</p>
            <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-brand-ink md:text-6xl">
              企业经营越来越难，真正拉开差距的，不只是业务，而是经营管理。
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-9 text-brand-muted">
              龙头会服｜企业财税与经营参谋团队
              <br />
              帮助成长型民营企业建立规范、健康、可持续的经营体系。
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  预约免费财税诊断
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/services">了解服务体系</Link>
              </Button>
            </div>
            <div className="mt-10 grid max-w-2xl gap-px overflow-hidden border border-brand-line bg-brand-line sm:grid-cols-3">
              {["2000万～2亿元", "建筑 / 制造 / 商贸 / 服务", "已有会计或代账"].map((item) => (
                <div key={item} className="bg-white p-4 text-sm font-medium text-brand-muted">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 flex items-center">
            <div className="w-full border border-white/15 bg-brand-ink p-6 text-white shadow-consult">
              <div className="aspect-[4/5] border border-white/10 bg-[linear-gradient(135deg,#101820_0%,#222_42%,#f5f5f5_42%,#f5f5f5_44%,#151515_44%,#0b1f3a_100%)] p-6 grayscale">
                <div className="flex h-full flex-col justify-between border border-white/20 p-6">
                  <div>
                    <p className="text-sm text-white/60">经营诊断桌</p>
                    <p className="mt-3 text-3xl font-semibold leading-tight">账、税、钱、事</p>
                  </div>
                  <div className="grid gap-3">
                    {["利润真实吗", "风险在哪里", "管理怎么建"].map((item) => (
                      <div key={item} className="border border-white/20 bg-white/5 px-4 py-3 text-sm text-white/80">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <p className="mt-5 text-sm leading-6 text-white/65">
                首页只做一件事：让老板先预约一次诊断，把企业经营中的财税问题看清楚。
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-soft py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="老板痛点" title="老板真正焦虑的，从来不是做账。" />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {homePainCards.map((item, index) => (
              <div key={item} className="border border-brand-line bg-white p-6">
                <p className="text-sm font-semibold text-brand-gold">0{index + 1}</p>
                <h3 className="mt-5 text-xl font-semibold leading-snug text-brand-ink">{item}</h3>
              </div>
            ))}
          </div>
          <p className="mt-8 border-l-4 border-brand-gold bg-white px-6 py-5 text-xl font-semibold">
            这些问题，本质不是财务问题，而是经营问题。
          </p>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <SectionTitle eyebrow="品牌认知" title="为什么还有一家龙头会服？" />
          <div className="border-y border-brand-line py-8">
            <p className="text-2xl font-semibold leading-relaxed text-brand-ink">
              很多企业真正缺的不是会计。
            </p>
            <p className="mt-8 text-4xl font-semibold leading-tight text-brand-ink md:text-5xl">
              而是：
              <br />
              懂经营的财税参谋。
            </p>
            <p className="mt-8 max-w-2xl text-base leading-8 text-brand-muted">
              会计解决“记清楚”，参谋解决“看明白、理顺、建起来”。龙头会服把财税问题放回经营现场，帮助老板判断利润、风险、现金流和管理体系。
            </p>
          </div>
        </div>
      </section>

      <section className="bg-brand-ink py-20 text-white md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold text-white/55">龙头方法™</p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              先看清，再理顺；先建立，再陪跑。
            </h2>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden border border-white/15 bg-white/15 md:grid-cols-4">
            {longtouMethod.map((item) => (
              <div key={item.title} className="bg-brand-ink p-7">
                <p className="text-sm font-semibold text-brand-gold">{item.step}</p>
                <h3 className="mt-4 text-3xl font-semibold">{item.title}</h3>
                <div className="mt-8 space-y-3">
                  {item.items.map((methodItem) => (
                    <p key={methodItem} className="flex items-center gap-3 text-sm text-white/72">
                      <CheckCircle2 className="h-4 w-4 text-brand-gold" />
                      {methodItem}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="团队实力" title="先看团队配置，再谈解决方案。" />
          <div className="mt-10 grid gap-px overflow-hidden border border-brand-line bg-brand-line md:grid-cols-5">
            {trustMetrics.map((metric) => (
              <div key={metric.label} className="bg-white p-6">
                <p className="text-3xl font-semibold text-brand-ink">{metric.value}</p>
                <p className="mt-3 text-sm text-brand-muted">{metric.label}</p>
                {metric.detail ? <p className="mt-2 text-xl font-semibold text-brand-gold">{metric.detail}</p> : null}
              </div>
            ))}
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {experts.map((expert) => (
              <TeamCard key={expert.name} expert={expert} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-soft py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="客户案例" title="不写客户名称，只讲企业真实会遇到的经营问题。" />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {clientStories.map((story) => (
              <article key={story.industry} className="border border-brand-line bg-white p-7">
                <p className="text-sm font-semibold text-brand-gold">{story.industry}</p>
                <h3 className="mt-5 text-2xl font-semibold leading-tight text-brand-ink">{story.problem}</h3>
                <div className="mt-6 space-y-4 text-sm leading-7 text-brand-muted">
                  <p>{story.process}</p>
                  <p>{story.result}</p>
                </div>
                <p className="mt-7 border-l-4 border-brand-gold bg-brand-soft px-5 py-4 text-base font-semibold text-brand-ink">
                  “{story.quote}”
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionTitle
              eyebrow="行动"
              title="如果企业正在成长，现在就是规范经营最好的时间。"
              description="先做一次免费财税诊断，不急着买服务，先把企业问题看清楚。"
            />
            <div className="mt-8 flex flex-col gap-4">
              <Button asChild size="lg" className="w-fit">
                <Link href="/contact">
                  预约免费财税诊断
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <div className="grid max-w-xl gap-4 sm:grid-cols-2">
                <div className="border border-brand-line p-5">
                  <p className="text-sm text-brand-muted">电话</p>
                  <p className="mt-2 text-xl font-semibold">{brand.phone}</p>
                </div>
                <div className="border border-brand-line p-5">
                  <p className="text-sm text-brand-muted">微信二维码</p>
                  <div className="mt-3 flex h-24 w-24 items-center justify-center border border-dashed border-brand-line bg-brand-soft text-center text-xs text-brand-muted">
                    {brand.wechat}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
    </Layout>
  );
}
