"use client";

import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";

import { BrandLogo } from "@/components/BrandLogo";
import { MobileNav } from "@/components/MobileNav";
import { siteNavLinks } from "@/lib/data";

export function HomeHeader() {
  const [onDarkSurface, setOnDarkSurface] = useState(true);
  const base = process.env.NODE_ENV === "production" ? "/longtou-accounting-service-site" : "";

  useEffect(() => {
    let frame = 0;

    const updateTheme = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(() => {
        const sampleY = Math.min(88, window.innerHeight - 1);
        const sampleX = Math.floor(window.innerWidth / 2);
        const themedElement = document
          .elementsFromPoint(sampleX, sampleY)
          .map((element) => element.closest<HTMLElement>("[data-header-theme]"))
          .find(Boolean);

        setOnDarkSurface(themedElement?.dataset.headerTheme === "dark");
      });
    };

    updateTheme();
    window.addEventListener("scroll", updateTheme, { passive: true });
    window.addEventListener("resize", updateTheme);

    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", updateTheme);
      window.removeEventListener("resize", updateTheme);
    };
  }, []);

  return (
    <header
      className={[
        "sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300",
        onDarkSurface
          ? "border-white/10 bg-[#111816]/88 text-white"
          : "border-white/10 bg-[#111816]/90 text-white"
      ].join(" ")}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <Link
          href="/"
          className={[
            "inline-flex items-center rounded-full px-3 py-1.5 transition",
            onDarkSurface ? "bg-white" : "bg-white"
          ].join(" ")}
        >
          <BrandLogo className="h-10 w-auto max-w-[166px]" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="主导航">
          {siteNavLinks.map((item, index) => {
            const cls = [
              "text-[15px] font-semibold tracking-[-0.01em] transition-colors",
              index >= 5 ? "ml-1" : "",
              onDarkSurface ? "text-white/72 hover:text-white" : "text-white/72 hover:text-white"
            ].join(" ");
            if (item.children) {
              return (
                <div key={item.href} className="group relative py-6">
                  <Link href={item.href} className={`${cls} inline-flex items-center gap-1`}>
                    {item.label}
                    <ChevronDown className="h-4 w-4 transition-transform group-hover:rotate-180 group-focus-within:rotate-180" />
                  </Link>
                  <div className="invisible absolute left-1/2 top-[68px] w-48 -translate-x-1/2 translate-y-2 border border-white/12 bg-[#111816] p-2 opacity-0 shadow-2xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                    {item.children.map((child) => child.href.endsWith(".html") ? (
                      <a key={child.href} href={`${base}${child.href}`} className="block px-3 py-2.5 text-sm font-medium text-white/72 transition hover:bg-white/8 hover:text-white">
                        {child.label}
                      </a>
                    ) : (
                      <Link key={child.href} href={child.href} className="block px-3 py-2.5 text-sm font-medium text-white/72 transition hover:bg-white/8 hover:text-white">
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }
            return item.href.endsWith(".html") ? (
              <a key={item.href} href={`${base}${item.href}`} className={cls}>
                {item.label}
              </a>
            ) : (
              <Link key={item.href} href={item.href} className={cls}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <MobileNav links={siteNavLinks} triggerTone={onDarkSurface ? "light" : "dark"} />

        <Link
          href="/contact"
          className={[
            "hidden rounded-full px-5 py-2.5 text-[15px] font-bold transition lg:inline-flex",
            onDarkSurface
              ? "bg-[#d9c7a5] text-[#111816] hover:bg-[#eadabd]"
              : "bg-[#d9c7a5] text-[#111816] hover:bg-[#eadabd]"
          ].join(" ")}
        >
          申请企业财税风险诊断
        </Link>
      </div>
    </header>
  );
}
