import { trustMetrics } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

export function TrustMetrics() {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader
          title="我们是企业财税顾问团队，而不是代账公司"
          description="服务覆盖集团企业与成长型民营企业"
        />
        <div className="mt-10 grid gap-px overflow-hidden border border-brand-line bg-brand-line md:grid-cols-4">
          {trustMetrics.map((metric) => (
            <div key={metric.label} className="bg-white p-7">
              <p className="text-3xl font-semibold text-brand-ink">{metric.value}</p>
              <p className="mt-3 text-sm text-brand-muted">{metric.label}</p>
              {metric.detail ? <p className="mt-2 text-xl font-semibold text-brand-gold">{metric.detail}</p> : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

