"use client";

import { useEffect, useState } from "react";

/**
 * 网站配色切换（2026-11-09，2026-11-09 晚增加第三套，2026-11-09 晚改默认为暖白）
 *
 * 三套主题：
 *   warm  —— 暖白纸感，暖调。米白底 + 墨绿字 + 暗金强调，更接近纸张的顾问感。
 *            2026-11-09 晚起是**新访客默认**看到的一套（老板定的：客户主要来读内容）。
 *   dark  —— 原墨绿配色。色值一个都没改，就是改版前那套，作为备选保留。
 *   slate —— 商务浅灰，冷调。白底深字，偏工具感。
 *
 * 注意：默认值改的是「没有存过选择的新访客」，老访客存过就还是他自己选的那套。
 * 这一点很重要——不能把已经在用浅灰的人强行拉回暖白。
 *
 * slate 与 warm 都是「白底深字」，长文都好读，区别在气质：一个偏工具、一个偏顾问。
 *
 * 为什么做成右下角浮层而不是塞进页头：
 * 页头对桌面端和移动端是两套渲染逻辑（桌面 <nav> + 移动 <MobileNav>），
 * 塞进去要改两处、还容易顶掉现有布局。独立浮层只挂一次，
 * 不管哪个页面、什么屏宽都在，且完全不碰导航代码。
 */

type ThemeKey = "dark" | "slate" | "warm";

const STORAGE_KEY = "lt_theme";

/** 新访客（浏览器里没存过选择）默认看到哪一套。改这里就是改全站默认。 */
const DEFAULT_THEME: ThemeKey = "warm";

const THEMES: { key: ThemeKey; label: string; note: string; swatch: string[] }[] = [
  { key: "warm", label: "暖白（纸感）", note: "默认，米白底色偏顾问感", swatch: ["#faf8f4", "#14251d"] },
  { key: "dark", label: "墨绿（原版）", note: "深色调，第一印象有分量", swatch: ["#0f1513", "#d9c7a5"] },
  { key: "slate", label: "浅灰（商务）", note: "白底深蓝，偏工具感", swatch: ["#f4f6f8", "#1a2b3c"] },
];

function applyTheme(t: ThemeKey) {
  const html = document.documentElement;
  if (t === "dark") html.removeAttribute("data-theme");
  else html.setAttribute("data-theme", t);
}

export function ThemeSwitcher() {
  const [theme, setTheme] = useState<ThemeKey>(DEFAULT_THEME);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let saved: ThemeKey = DEFAULT_THEME;
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      if (v === "slate" || v === "warm" || v === "dark") saved = v;
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

  const isDark = theme === "dark";

  return (
    <div className="fixed bottom-24 right-4 z-[60] md:bottom-28 md:right-6">
      <div className="relative">
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="切换网站配色"
          title="切换网站配色"
          className="flex h-11 w-11 items-center justify-center rounded-full border shadow-lg transition-colors"
          style={{
            borderColor: isDark ? "rgba(217,199,165,.45)" : "rgba(20,37,29,.18)",
            background: isDark ? "rgba(17,24,22,.92)" : "rgba(255,255,255,.96)",
            color: isDark ? "#d9c7a5" : "#14251d",
          }}
        >
          {/* 两小块示意「有多套配色」 */}
          <span className="flex items-center gap-[3px]">
            <span
              className="block h-3.5 w-2 rounded-[2px]"
              style={{ background: isDark ? "#d9c7a5" : "#14251d" }}
            />
            <span
              className="block h-3.5 w-2 rounded-[2px] border"
              style={{
                background: isDark ? "#0f1513" : "#faf8f4",
                borderColor: isDark ? "rgba(217,199,165,.5)" : "rgba(20,37,29,.25)",
              }}
            />
          </span>
        </button>

        {open && (
          <div
            className="absolute bottom-14 right-0 w-52 overflow-hidden rounded-xl border p-1.5 shadow-xl"
            style={{
              borderColor: isDark ? "rgba(217,199,165,.30)" : "rgba(20,37,29,.14)",
              background: isDark ? "rgba(17,24,22,.98)" : "rgba(255,255,255,.99)",
            }}
            role="menu"
          >
            <p
              className="px-2.5 py-1.5 text-[11px] font-semibold tracking-wide"
              style={{ color: isDark ? "rgba(217,199,165,.75)" : "rgba(20,37,29,.55)" }}
            >
              选择配色
            </p>
            {THEMES.map(({ key, label, note, swatch }) => {
              const active = theme === key;
              return (
                <button
                  key={key}
                  type="button"
                  role="menuitemradio"
                  aria-checked={active}
                  onClick={() => choose(key)}
                  className="flex w-full items-start gap-2 rounded-lg px-2.5 py-2 text-left transition-colors"
                  style={{
                    background: active
                      ? isDark ? "rgba(217,199,165,.16)" : "rgba(20,37,29,.07)"
                      : "transparent",
                  }}
                >
                  {/* 色卡：一眼看出这套长什么样 */}
                  <span
                    className="mt-0.5 flex h-5 w-5 flex-none flex-col overflow-hidden rounded-[5px] border"
                    style={{ borderColor: isDark ? "rgba(217,199,165,.35)" : "rgba(20,37,29,.18)" }}
                    aria-hidden
                  >
                    <span className="block flex-1" style={{ background: swatch[0] }} />
                    <span className="block flex-1" style={{ background: swatch[1] }} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span
                      className="flex items-center gap-1.5 text-[13px] font-semibold leading-tight"
                      style={{ color: isDark ? "#e8e2d8" : "#14251d" }}
                    >
                      {label}
                      {active && (
                        <svg viewBox="0 0 12 12" className="h-3 w-3 flex-none" aria-hidden>
                          <path
                            d="M2 6.2 4.6 8.8 10 3.4"
                            fill="none"
                            stroke={isDark ? "#d9c7a5" : "#1f6f5c"}
                            strokeWidth="2.2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                    <span
                      className="mt-0.5 block text-[11px] leading-snug"
                      style={{ color: isDark ? "rgba(184,178,166,.75)" : "rgba(46,63,54,.65)" }}
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
