import { CTASection } from "@/components/CTASection";
import { Layout } from "@/components/Layout";
import { ServiceGrid } from "@/components/ServiceGrid";

export default function ServicesPage() {
  return (
    <Layout>
      <section className="bg-brand-soft py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-semibold text-brand-gold">服务体系</p>
          <h1 className="mt-3 max-w-4xl text-4xl font-semibold leading-tight md:text-5xl">
            从风险扫描到体系建设，为企业提供可落地的财税产品系统
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-brand-muted">
            每套服务都围绕具体经营问题设计，交付明确报告与执行路径。
          </p>
        </div>
      </section>
      <ServiceGrid mode="services" />
      <CTASection />
    </Layout>
  );
}

