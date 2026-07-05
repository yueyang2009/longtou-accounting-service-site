import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { brand, clientStories } from "@/lib/data";

function Label({ text }: { text: string }) {
  return <p className="mb-5 text-xs font-semibold uppercase tracking-[0.12em] text-brand-muted">{text}</p>;
}

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-white">
      <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link href="/" className="text-lg font-semibold tracking-tight text-brand-ink">{brand.name}</Link>
          <Link href="/contact" className="rounded-md bg-brand-ink px-5 py-2 text-sm font-medium text-white">申请企业经营尽调（限量开放）</Link>
        </div>
      </header>
      <main>
        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
            <Label text="客户案例" />
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-brand-ink md:text-5xl">不写客户名称，只讲真实问题。</h1>
            <p className="mt-6 text-base leading-8 text-brand-muted">以下案例均已脱敏处理，核心数据经过调整，但问题类型和解决路径保持原貌。</p>
          </div>
        </section>

        <section className="border-b border-brand-line bg-brand-soft">
          <div className="mx-auto max-w-3xl px-6 py-24 md:py-28">
            <div className="space-y-10">
              {clientStories.map((story) => (
                <article key={story.industry} className="border border-brand-line bg-white p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-brand-muted">{story.industry}</p>
                  <h2 className="mt-4 text-2xl font-semibold leading-snug text-brand-ink">{story.problem}</h2>
                  <div className="mt-6 space-y-4 text-sm leading-7 text-brand-muted">
                    <p><span className="font-semibold text-brand-ink">经过：</span>{story.process}</p>
                    <p><span className="font-semibold text-brand-ink">结果：</span>{story.result}</p>
                  </div>
                  <p className="mt-6 border-l-4 border-brand-ink bg-brand-soft px-5 py-4 text-sm font-medium text-brand-ink">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-brand-line">
          <div className="mx-auto max-w-3xl px-6 py-24 text-center md:py-28">
            <Label text="申请" />
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-brand-ink md:text-4xl">你的企业可能也有类似的问题。</h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-7 text-brand-muted">一次企业经营尽调，帮你把问题看清楚。</p>
            <div className="mt-10">
              <Link href="/contact" className="inline-flex h-12 items-center gap-2 rounded-md bg-brand-ink px-7 text-sm font-medium text-white">
                申请企业经营尽调（限量开放）<ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-brand-ink text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
          <p className="text-sm text-white/60">{brand.name} · {brand.positioning}</p>
          <p className="text-sm text-white/60">电话 {brand.phone}</p>
        </div>
      </footer>
    </div>
  );
}
