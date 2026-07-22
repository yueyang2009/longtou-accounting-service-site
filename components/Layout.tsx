import { brand } from "@/lib/data";
import { HomeHeader } from "@/components/HomeHeader";
import { Footer } from "@/components/Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  const base = process.env.NODE_ENV === "production" ? "/longtou-accounting-service-site" : "";
  return (
    <div className="min-h-screen bg-brand-paper text-brand-body">
      <HomeHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
