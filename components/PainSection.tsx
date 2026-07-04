import { AlertCircle } from "lucide-react";

import { painPoints } from "@/lib/data";
import { SectionHeader } from "@/components/SectionHeader";

export function PainSection() {
  return (
    <section className="bg-brand-soft py-20">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeader title="如果你有以下情况，说明企业财税系统需要升级" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {painPoints.map((item) => (
            <div key={item.title} className="border border-brand-line bg-white p-6">
              <AlertCircle className="h-6 w-6 text-brand-gold" />
              <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-brand-muted">{item.description}</p>
            </div>
          ))}
        </div>
        <p className="mt-8 border-l-4 border-brand-gold bg-white px-5 py-4 text-lg font-semibold">
          问题本质不是财务错误，而是缺乏经营财税系统
        </p>
      </div>
    </section>
  );
}

