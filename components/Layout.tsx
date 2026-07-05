import Link from "next/link";

import { brand, navItems } from "@/lib/data";
import { BrandLogo } from "@/components/BrandLogo";
import { Button } from "@/components/ui/button";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white text-brand-ink">
      <header className="sticky top-0 z-50 border-b border-brand-line bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <Link href="/" className="inline-flex items-center">
            <BrandLogo className="h-9 w-auto max-w-[150px]" />
          </Link>
          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-brand-muted hover:text-brand-ink">
                {item.label}
              </Link>
            ))}
          </nav>
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <Link href="/contact">申请企业经营尽调（限量开放）</Link>
          </Button>
        </div>
      </header>
      <main>{children}</main>
      <footer className="border-t border-brand-line bg-brand-ink text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-[1.2fr_1fr_1fr] lg:px-8">
          <div>
            <p className="text-lg font-semibold">{brand.name}</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-white/70">{brand.slogan}</p>
          </div>
          <div>
            <p className="text-sm font-semibold">服务对象</p>
            <p className="mt-3 text-sm leading-6 text-white/70">经营规模正在扩大、希望建立长期管理秩序的成长型企业。</p>
          </div>
          <div>
            <p className="text-sm font-semibold">交流入口</p>
            <p className="mt-3 text-sm leading-6 text-white/70">电话：{brand.phone}</p>
            <p className="text-sm leading-6 text-white/70">适合先进行一次经营交流</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
