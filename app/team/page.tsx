import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { TeamCard } from "@/components/TeamCard";
import { experts, extendedExperts, trustMetrics } from "@/lib/data";

export default function TeamPage() {
  return (
    <Layout>
      <section className="bg-brand-soft py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="顾问团队"
            title="双师带队，以财务真实性和税务安全共同支撑经营决策"
            description="核心团队覆盖注册会计师、注册税务师、高级会计师与企业财务负责人经验。"
          />
          <div className="mt-10 grid gap-px overflow-hidden border border-brand-line bg-brand-line md:grid-cols-4">
            {trustMetrics.map((metric) => (
              <div key={metric.label} className="bg-white p-6">
                <p className="text-2xl font-semibold">{metric.value}</p>
                <p className="mt-2 text-sm text-brand-muted">{metric.label} {metric.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader title="核心专家" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {experts.map((expert) => (
              <TeamCard key={expert.name} expert={expert} />
            ))}
          </div>
          <details className="mt-10 border border-brand-line bg-brand-soft p-6">
            <summary className="cursor-pointer text-lg font-semibold">查看专家组配置</summary>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {extendedExperts.map((item) => (
                <p key={item} className="border border-brand-line bg-white px-4 py-3 text-sm text-brand-muted">
                  {item}
                </p>
              ))}
            </div>
          </details>
        </div>
      </section>
    </Layout>
  );
}

