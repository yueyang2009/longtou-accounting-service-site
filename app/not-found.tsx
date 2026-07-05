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
            你访问的页面暂时不可用，可以返回首页或预约一次经营交流。
          </p>
          <div className="mt-8 flex gap-3">
            <Button asChild>
              <Link href="/">返回首页</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/contact">预约交流</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
