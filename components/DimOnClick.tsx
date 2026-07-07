"use client";

import { useEffect } from "react";

/**
 * 全局「点选变暗」交互：
 * 点击任意 .interactive-card（小模块卡片）即切换 is-dimmed 状态，
 * 再次点击恢复。挂载于根布局，覆盖全站所有 .interactive-card 模块。
 */
export function DimOnClick() {
  useEffect(() => {
    const handler = (event: MouseEvent) => {
      const card = (event.target as HTMLElement | null)?.closest<HTMLElement>(".interactive-card");
      if (card) {
        card.classList.toggle("is-dimmed");
      }
    };
    document.addEventListener("click", handler);
    return () => document.removeEventListener("click", handler);
  }, []);

  return null;
}
