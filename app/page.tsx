import Link from "next/link";

import { CTASection } from "@/components/CTASection";
import { Hero } from "@/components/Hero";
import { Layout } from "@/components/Layout";
import { LeadForm } from "@/components/LeadForm";
import { PainSection } from "@/components/PainSection";
import { SectionHeader } from "@/components/SectionHeader";
import { ServiceGrid } from "@/components/ServiceGrid";
import { TrustMetrics } from "@/components/TrustMetrics";
import { Button } from "@/components/ui/button";
import { conversionPaths } from "@/lib/data";

export default function HomePage() {
  return (
    <Layout>
      <Hero />
      <PainSection />
      <TrustMetrics />
      <ServiceGrid />
      <section className="bg-brand-soft py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="转化入口"
            title="根据企业需求成熟度，选择不同诊断入口"
            description="降低第一次沟通门槛，同时让高意向客户能快速进入顾问沟通。"
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {conversionPaths.map((path) => (
              <div key={path.title} className="border border-brand-line bg-white p-7">
                <p className="text-sm font-semibold text-brand-gold">{path.label}</p>
                <h3 className="mt-3 text-2xl font-semibold">{path.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{path.description}</p>
                <Button asChild className="mt-6" variant={path.label.includes("高") ? "default" : "secondary"}>
                  <Link href="/contact">{path.cta}</Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 md:grid-cols-[0.9fr_1.1fr] lg:px-8">
          <div>
            <SectionHeader
              eyebrow="线索捕获"
              title="先判断企业财税系统是否需要升级"
              description="通过三步信息采集，初步识别企业规模、问题类型和服务优先级。"
            />
          </div>
          <LeadForm />
        </div>
      </section>
      <CTASection />
    </Layout>
  );
}

