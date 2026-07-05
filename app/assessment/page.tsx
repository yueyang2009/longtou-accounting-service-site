import Link from "next/link";
import { brand } from "@/lib/data";
import { BrandLogo } from "@/components/BrandLogo";
import { AssessmentForm } from "@/components/AssessmentForm";

function Label({ text }: { text: string }) {
  return <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">{text}</p>;
}
function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">{children}</h2>;
}

export default function AssessmentPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="inline-flex items-center">
            <BrandLogo className="h-9 w-auto max-w-[150px]" />
          </Link>
          <Link href="/contact" className="rounded-md bg-brand-ink px-5 py-2 text-sm font-medium text-white">提交申请</Link>
        </div>
      </header>
      <main>
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
            <Label text="龙头会服" />
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-5xl">
              企业经营尽调
              <br />
              <span className="text-brand-muted">（免费初步评估）</span>
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-brand-muted">
              不是销售拜访，而是对企业经营模式、财务状况和管理体系的系统性梳理。
            </p>
          </div>
        </section>

        {/* ── 多步筛选表单 ── */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <AssessmentForm />
          </div>
        </section>

        {/* ── 流程 ── */}
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="尽调流程" />
            <Heading>提交申请后会发生什么？</Heading>
            <div className="mt-10 space-y-5">
              {[
                { step: "STEP 1", title: "提交申请", desc: "填写企业基本信息、行业和主要诉求" },
                { step: "STEP 2", title: "初步沟通", desc: "顾问电话沟通，了解企业阶段和核心关注点" },
                { step: "STEP 3", title: "企业经营尽调（2～3天）", desc: "现场了解经营模式、股权结构、财务状况、管理流程" },
                { step: "STEP 4", title: "输出适配性建议", desc: "根据尽调结果，判断是否适合年度顾问体系" },
                { step: "STEP 5", title: "决定是否年度合作", desc: "双方确认合作方向，签订年度顾问合同" },
              ].map((phase) => (
                <div key={phase.step} className="border border-brand-line bg-white p-7">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">{phase.step}</p>
                  <p className="mt-2 text-xl font-semibold text-brand-ink">{phase.title}</p>
                  <p className="mt-3 text-sm leading-7 text-brand-muted">{phase.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── 适合/不适合 ── */}
        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <Label text="适配标准" />
            <Heading>判断是否适合申请尽调</Heading>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div className="border border-brand-line bg-white p-7">
                <p className="mb-5 text-sm font-semibold text-brand-ink">适合申请</p>
                <ul className="space-y-4">
                  {["企业年营收2000万以上", "已有稳定经营规模", "希望建立规范体系", "老板愿意参与经营管理"].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-brand-muted">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-ink" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border border-brand-line bg-brand-soft p-7">
                <p className="mb-5 text-sm font-semibold text-brand-muted">暂不适合</p>
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
