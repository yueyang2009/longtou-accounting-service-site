import Image from "next/image";

import { Layout } from "@/components/Layout";
import { LeadForm } from "@/components/LeadForm";
import { SectionHeader } from "@/components/SectionHeader";
import { brand, cooperationSteps, faqs } from "@/lib/data";

export default function ContactPage() {
  return (
    <Layout>
      <section className="bg-brand-soft py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="经营交流"
              title="申请企业财税风险诊断（限时开放）"
              description="先了解企业阶段、经营困扰和财税管理现状，再判断是否需要年度顾问陪伴。"
            />
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <div className="border border-brand-line bg-white p-5">
                <p className="text-sm text-brand-muted">联系电话</p>
                <p className="mt-2 text-xl font-semibold">{brand.phone}</p>
              </div>
              <div className="border border-brand-line bg-white p-5">
                <p className="text-sm text-brand-muted">邮箱</p>
                <p className="mt-2 text-sm font-semibold">1833379550@qq.com</p>
              </div>
              <div className="border border-brand-line bg-white p-5">
                <p className="text-sm text-brand-muted">微信</p>
                <div className="mt-3 w-36 border border-brand-line bg-white p-2">
                  <Image
                    src={brand.wechatQr}
                    alt="微信二维码"
                    width={888}
                    height={1195}
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-brand-ink">{brand.wechat}</p>
              </div>
              <div className="border border-brand-line bg-white p-5">
                <p className="text-sm text-brand-muted">飞书</p>
                <div className="mt-3 w-36 border border-brand-line bg-white p-2">
                  <Image
                    src={brand.feishuQr}
                    alt="飞书二维码"
                    width={888}
                    height={1195}
                    className="h-auto w-full"
                  />
                </div>
                <p className="mt-3 text-sm font-medium text-brand-ink">李岳阳 · 飞书个人版</p>
              </div>
            </div>
          </div>
          <LeadForm />
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader title="我们如何开始合作？" />
          <div className="mt-10 grid gap-5 md:grid-cols-4">
            {cooperationSteps.map((step, index) => (
              <div key={step.title} className="border border-brand-line p-6">
                <p className="text-sm font-semibold text-brand-gold">0{index + 1}</p>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brand-soft py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader title="FAQ" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {faqs.map((faq) => (
              <div key={faq.question} className="border border-brand-line bg-white p-6">
                <h3 className="font-semibold">{faq.question}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
