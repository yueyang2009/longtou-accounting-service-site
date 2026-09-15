import { brand } from "@/lib/data";
import { HomeHeader } from "@/components/HomeHeader";
import { Footer } from "@/components/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-brand-paper text-brand-body">
      <HomeHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
