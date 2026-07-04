import { InsightCard } from "@/components/InsightCard";
import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";
import { insights } from "@/lib/data";

export default function InsightsPage() {
  return (
    <Layout>
      <section className="bg-brand-soft py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="财税风险洞察系统"
            title="不是博客，而是企业常见财税风险的识别入口"
            description="围绕税务风险、经营风险与行业案例，帮助企业先看见问题，再决定是否需要诊断。"
          />
        </div>
      </section>
      <section className="bg-white py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 md:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {insights.map((insight) => (
            <InsightCard key={insight.title} insight={insight} />
          ))}
        </div>
      </section>
    </Layout>
  );
}

