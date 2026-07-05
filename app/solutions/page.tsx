import { Layout } from "@/components/Layout";
import { SectionHeader } from "@/components/SectionHeader";

export default function SolutionsPage() {
  return (
    <Layout>
      <section className="bg-brand-soft py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionHeader
            eyebrow="解决方案"
            title="解决方案"
            description="页面骨架已创建，后续补充正式方案内容。"
          />
        </div>
      </section>
    </Layout>
  );
}
