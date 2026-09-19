"use client";

import { useState } from "react";

import { servicePackages } from "@/lib/data";

export function ServiceScenarioCards() {
  const [flipped, setFlipped] = useState<number | null>(null);

  return (
    <div className="mt-8 grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {servicePackages.map((s, i) => {
        const isFlipped = flipped === i;
        return (
          <button
            key={s.title}
            type="button"
            onClick={() => setFlipped(isFlipped ? null : i)}
            aria-expanded={isFlipped}
            aria-label={`${s.title}：点击翻转查看业务简介`}
            className={`flip-card group w-full text-left ${s.key ? "is-key" : ""} ${
              isFlipped ? "is-flipped" : ""
            }`}
          >
            <div className="flip-card-inner">
              <div className="flip-card-face flip-card-front">
                <p className="text-base font-semibold text-brand-ink">{s.title}</p>
                <p className="mt-2 text-sm leading-6 text-brand-muted">{s.desc}</p>
              </div>
              <div className="flip-card-face flip-card-back">
                <p className="text-base font-semibold text-brand-gold">{s.title}</p>
                <p className="mt-2 text-[13px] leading-[1.55] text-brand-body">{s.intro}</p>
              </div>
            </div>
          </button>
        );
      })}
    </div>
  );
}
