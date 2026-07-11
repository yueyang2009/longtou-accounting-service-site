"use client";

import Link from "next/link";
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

        <nav className="hidden items-center gap-8 lg:flex">
          {siteNavLinks.map((item, index) => {
            const cls = [
              "text-[15px] font-semibold tracking-[-0.01em] transition-colors",
              index >= 6 ? "ml-1" : "",
              onDarkSurface ? "text-white/72 hover:text-white" : "text-white/72 hover:text-white"
            ].join(" ");
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
