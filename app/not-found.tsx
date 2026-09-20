import Link from "next/link";

import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Layout>
      <section className="bg-brand-soft py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-sm font-semibold text-brand-gold">404</p>
          <h1 className="mt-4 text-4xl font-semibold text-brand-ink">页面不存在</h1>
          <p className="mt-4 max-w-xl text-base leading-7 text-brand-muted">
            您访问的页面暂时不可用，可以返回首页了解我们的服务。
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/">返回首页</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/contact">申请企业财税风险诊断（限量开放）</Link>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-brand-muted">
            <Link href="/services" className="underline underline-offset-2 hover:text-brand-ink">服务体系</Link>
            <Link href="/cases" className="underline underline-offset-2 hover:text-brand-ink">案例与反馈</Link>
            <Link href="/faq" className="underline underline-offset-2 hover:text-brand-ink">财税问答</Link>
            <Link href="/blog" className="underline underline-offset-2 hover:text-brand-ink">文章</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
