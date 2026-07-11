"use client";

import Link from "next/link";
import { useState, useEffect, useCallback } from "react";
import { X } from "lucide-react";

export interface MobileNavLink {
  href: string;
  label: string;
}

interface MobileNavProps {
  links: MobileNavLink[];
  triggerTone?: "dark" | "light";
}

export function MobileNav({ links, triggerTone = "dark" }: MobileNavProps) {
  const [open, setOpen] = useState(false);
  const base = process.env.NODE_ENV === "production" ? "/longtou-accounting-service-site" : "";

  const toggle = useCallback(() => setOpen((v) => !v), []);
  const close = useCallback(() => setOpen(false), []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, close]);

  return (
    <>
      {/* Hamburger button — visible below lg */}
      <button
        type="button"
        className="relative ml-3 inline-flex h-10 w-10 items-center justify-center rounded-md lg:hidden"
        onClick={toggle}
        aria-label={open ? "关闭菜单" : "打开菜单"}
        aria-expanded={open}
      >
        <span className="sr-only">{open ? "关闭菜单" : "打开菜单"}</span>
        {/* Three-line hamburger that becomes an X when open */}
        <span className="flex flex-col items-center justify-center gap-[5px]">
          <span
            className={`block h-[2px] w-5 rounded-full transition-all duration-200 ${
              open ? "translate-y-[7px] rotate-45" : ""
            } ${triggerTone === "light" ? "bg-white" : "bg-brand-ink"}`}
          />
          <span
            className={`block h-[2px] w-5 rounded-full transition-all duration-200 ${
              open ? "opacity-0" : ""
            } ${triggerTone === "light" ? "bg-white" : "bg-brand-ink"}`}
          />
          <span
            className={`block h-[2px] w-5 rounded-full transition-all duration-200 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            } ${triggerTone === "light" ? "bg-white" : "bg-brand-ink"}`}
          />
        </span>
      </button>

      {/* Overlay — dense dark backdrop to fully obscure background */}
      <div
        className={`fixed inset-0 z-40 bg-black/85 backdrop-blur-md transition-opacity duration-300 lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={close}
        aria-hidden="true"
      />

      {/* Slide-out panel from right — fully opaque, strong separation from background */}
      <div
        className={`fixed inset-y-0 right-0 z-50 flex w-72 flex-col border-l border-white/15 bg-[#111816] text-white shadow-[0_0_40px_rgba(0,0,0,0.6)] transition-transform duration-300 ease-in-out lg:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="导航菜单"
      >
        {/* Close button inside panel */}
        <div className="flex h-16 items-center justify-between px-5">
          <p className="text-sm font-semibold tracking-[0.18em] text-white">导航</p>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white/60 hover:text-white"
            onClick={close}
            aria-label="关闭菜单"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Navigation links */}
        <nav className="flex flex-col gap-1 px-5 pb-8">
          {links.map((link) =>
            link.href.endsWith(".html") ? (
              <a
                key={link.href}
                href={`${base}${link.href}`}
                onClick={close}
                className="rounded-md px-4 py-4 text-lg font-medium text-white transition hover:bg-white/10"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                className="rounded-md px-4 py-4 text-lg font-medium text-white transition hover:bg-white/10"
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        {/* CTA at bottom */}
        <div className="mt-auto border-t border-white/10 px-5 py-6">
          <Link
            href="/contact"
            onClick={close}
            className="flex w-full items-center justify-center rounded-full bg-white px-5 py-3 text-sm font-semibold text-[#1F1F1F] transition hover:bg-white/90"
          >
            申请企业财税风险诊断
          </Link>
        </div>
      </div>
    </>
  );
}
