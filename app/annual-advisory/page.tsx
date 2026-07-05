import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";

export default function AnnualAdvisoryPage() {
  return (
    <Layout>
      <section className="bg-brand-soft py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="年度顾问"
            title="年度顾问服务"
            description="页面骨架已创建，后续补充正式服务内容。"
          />
        </div>
      </section>
    </Layout>
  );
}
