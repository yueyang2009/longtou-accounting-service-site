import { brand } from "@/lib/data";
import { HomeHeader } from "@/components/HomeHeader";

export function Layout({ children }: { children: React.ReactNode }) {
  const base = process.env.NODE_ENV === "production" ? "/longtou-accounting-service-site" : "";
  return (
    <div className="min-h-screen bg-brand-paper text-brand-body">
      <HomeHeader />
      <main>{children}</main>
      <footer className="border-t border-brand-line bg-brand-emerald text-white">
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
