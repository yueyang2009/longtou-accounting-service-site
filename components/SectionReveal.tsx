"use client";

import { useEffect, useRef } from "react";

/**
 * 包裹一组 <section>，滚动进入视口时触发「聚焦浮现」转场：
 * 从模糊/外移/缩小状态 → 清晰/归位，营造 PPT 翻页的渐变进场感。
 * 仅动画效果，无 JS 或 reduced-motion 时直接显示内容。
 */
export function SectionReveal({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    const sections = Array.from(root.querySelectorAll<HTMLElement>("section"));
    if (sections.length === 0) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      sections.forEach((s) => s.classList.add("is-revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-revealed");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -10% 0px" }
    );

    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className="services-reveal">
      {children}
    </div>
  );
}
