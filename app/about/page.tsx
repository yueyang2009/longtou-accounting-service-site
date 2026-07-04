import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { differentiators } from "@/lib/data";

export default function AboutPage() {
  return (
    <Layout>
      <section className="bg-brand-soft py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="关于龙头会服"
            title="我们服务的不是一张账表，而是企业经营决策系统"
            description="龙头会服面向具备稳定经营规模的中小企业，提供财税规范、经营分析、架构设计与财务体系建设服务。"
          />
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-3 lg:px-8">
          {differentiators.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="border border-brand-line p-6">
                <Icon className="h-7 w-7 text-brand-gold" />
                <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </Layout>
  );
}

