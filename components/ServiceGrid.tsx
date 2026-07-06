import { capabilitySystems, services } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

type ServiceGridProps = {
  mode?: "systems" | "services";
};

export function ServiceGrid({ mode = "systems" }: ServiceGridProps) {
  const items =
    mode === "systems"
      ? capabilitySystems.map((item) => ({
          title: item.title,
          description: item.description,
          icon: item.icon,
          details: null as string[] | null,
          output: null as string | null
        }))
      : services.map((item) => ({
          title: item.title,
          description: item.summary,
          icon: item.icon,
          details: item.items,
          output: item.output
        }));

  return (
    <section className="bg-brand-paper py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          eyebrow={mode === "systems" ? "核心能力" : "产品化服务体系"}
          title={mode === "systems" ? "我们交付的是系统，不是零散服务" : "以企业问题为入口的四套产品系统"}
          description={
            mode === "systems"
              ? "从风险、利润、架构和体系四个层面，把企业财税问题纳入可识别、可改进、可追踪的系统。"
              : "每套系统都对应明确场景、交付内容和结果文件。"
          }
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="border border-brand-line bg-white p-7 shadow-sm">
                <Icon className="h-7 w-7 text-brand-gold" />
                <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-brand-muted">{item.description}</p>
                {item.details ? (
                  <div className="mt-6 border-t border-brand-line pt-5">
                    <div className="flex flex-wrap gap-2">
                      {item.details.map((detail) => (
                        <span key={detail} className="rounded-md bg-brand-soft px-3 py-1 text-sm text-brand-muted">
                          {detail}
                        </span>
                      ))}
                    </div>
                    <p className="mt-4 text-sm font-semibold text-brand-ink">输出：{item.output}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
