"use client";

import { useEffect, useState } from "react";

/**
 * 网站配色切换（2026-11-09 用户要求：保留原配色不变，可切换主题）
 *
 * 两套主题：
 *   dark  —— 原墨绿配色，默认。色值一个都没改，就是改版前那套。
 *   slate —— 商务浅灰，白底深字。大段文字在手机上更好读。
 *
 * 为什么不塞进页头导航里：
 * 页头对桌面端和移动端是两套渲染逻辑（桌面 <nav> + 移动 <MobileNav>），
 * 塞进去要改两处、还容易顶掉现有布局。做成独立浮层只挂一次，
 * 不管哪个页面、什么屏宽都在，且完全不碰导航代码。
 *
 * 位置：右下角偏上，避开手机底部的「联系顾问」悬浮按钮。
 */

type ThemeKey = "dark" | "slate";
const STORAGE_KEY = "lt_theme";

function applyTheme(t: ThemeKey) {
  const html = document.documentElement;
  if (t === "slate") html.setAttribute("data-theme", "slate");
  else html.removeAttribute("data-theme");
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeKey>("dark");
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let saved: ThemeKey = "dark";
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === "slate") saved = "slate";
    } catch {
      /* 隐私模式读不到就用默认 */
    }
    setTheme(saved);
    applyTheme(saved);
    setReady(true);
  }, []);

  const choose = (t: ThemeKey) => {
    setTheme(t);
    applyTheme(t);
    try {
      localStorage.setItem(STORAGE_KEY, t);
    } catch {
      /* 存不进也不影响本次切换 */
    }
    setOpen(false);
  };

  if (!ready) return null;

  const dark = theme === "dark";

  return (
    <div
      className="fixed bottom-24 right-4 z-[60] md:bottom-28 md:right-6"
      // 不跟随滚动，始终可点
    >
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="切换网站配色"
          title="切换网站配色"
          className="flex h-11 w-11 items-center justify-center rounded-full border shadow-lg transition-colors"
          style={{
            borderColor: dark ? "rgba(217,199,165,.45)" : "rgba(26,43,60,.18)",
            background: dark ? "rgba(17,24,22,.92)" : "rgba(255,255,255,.96)",
            color: dark ? "#d9c7a5" : "#1a2b3c",
          }}
        >
          {/* 两个小方块，直观表达「两套配色」 */}
          <span className="flex items-center gap-[3px]">
            <span
              className="block h-3.5 w-2 rounded-[2px]"
              style={{ background: dark ? "#d9c7a5" : "#1a2b3c" }}
            />
            <span
              className="block h-3.5 w-2 rounded-[2px] border"
              style={{
                background: dark ? "#0f1513" : "#f4f6f8",
                borderColor: dark ? "rgba(217,199,165,.5)" : "rgba(26,43,60,.25)",
              }}
            />
          </span>
        </button>

        {open && (
          <div
            className="absolute bottom-14 right-0 w-44 overflow-hidden rounded-xl border p-1.5 shadow-xl"
            style={{
              borderColor: dark ? "rgba(217,199,165,.30)" : "rgba(26,43,60,.14)",
              background: dark ? "rgba(17,24,22,.98)" : "rgba(255,255,255,.99)",
            }}
            role="menu"
          >
            <p
              className="px-2.5 py-1.5 text-[11px] font-semibold tracking-wide"
              style={{ color: dark ? "rgba(217,199,165,.75)" : "rgba(26,43,60,.55)" }}
            >
              选择配色
            </p>
            {([
              ["dark", "墨绿（原版）", "默认，深色调"],
              ["slate", "浅灰（商务）", "白底深字，长文更好读"],
            ] as [ThemeKey, string, string][]).map(([k, label, note]) => {
              const active = theme === k;
              return (
                <button
                  key={k}
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  onClick={() => choose(k)}
                  className="flex w-full items-start gap-2 rounded-lg px-2.5 py-2 text-left transition-colors"
                  style={{
                    background: active
                      ? dark ? "rgba(217,199,165,.16)" : "rgba(26,43,60,.07)"
                      : "transparent",
                  }}
                >
                  <span
                    className="mt-0.5 flex h-4 w-4 flex-none items-center justify-center rounded-full border"
                    style={{
                      borderColor: active ? (dark ? "#d9c7a5" : "#1a2b3c") : "rgba(128,128,128,.45)",
                      background: active ? (dark ? "#d9c7a5" : "#1a2b3c") : "transparent",
                    }}
                  >
                    {active && (
                      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5" aria-hidden>
                        <path d="M2 6.2 4.6 8.8 10 3.4" fill="none" stroke={dark ? "#111816" : "#fff"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </span>
                  <span className="min-w-0">
                    <span
                      className="block text-[13px] font-semibold leading-tight"
                      style={{ color: dark ? "#e8e2d8" : "#1a2b3c" }}
                    >
                      {label}
                    </span>
                    <span
                      className="mt-0.5 block text-[11px] leading-snug"
                      style={{ color: dark ? "rgba(184,178,166,.75)" : "rgba(51,71,91,.65)" }}
                    >
                      {note}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
