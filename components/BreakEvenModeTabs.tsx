"use client";

import { useState } from "react";

import { BreakEvenStudio } from "@/components/BreakEvenStudio";
import { MultiProductStudio } from "@/components/MultiProductStudio";

export function BreakEvenModeTabs() {
  const [mode, setMode] = useState<"single" | "multi">("single");

  return (
    <>
      <div className="sticky top-[72px] z-40 border-b border-brand-line bg-[#101713]/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center gap-2 px-6 py-3">
          <span className="mr-2 hidden text-xs font-semibold tracking-[.15em] text-brand-muted md:inline">模型类型</span>
          <button onClick={() => setMode("single")} className={`be-mode-tab ${mode === "single" ? "be-mode-tab-active" : ""}`} aria-pressed={mode === "single"}>单一产品</button>
          <button onClick={() => setMode("multi")} className={`be-mode-tab ${mode === "multi" ? "be-mode-tab-active" : ""}`} aria-pressed={mode === "multi"}>多产品</button>
          <span className="ml-auto hidden text-xs text-brand-muted sm:inline">{mode === "single" ? "量本利与价格成本敏感性" : "产品结构、瓶颈产能与订单机会成本"}</span>
        </div>
      </div>
      {mode === "single" ? <BreakEvenStudio /> : <MultiProductStudio />}
    </>
  );
}
