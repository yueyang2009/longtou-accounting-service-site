"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const fragmentSeeds = Array.from({ length: 96 }, (_, index) => {
  const col = index % 12;
  const row = Math.floor(index / 12);
  const targetX = -33 + col * 6;
  const targetY = -19 + row * 5.4;
  const angle = (index * 137.5 * Math.PI) / 180;
  const distance = 120 + ((index * 37) % 170);

  return {
    id: index,
    left: `${50 + Math.cos(angle) * (26 + (index % 5) * 4)}%`,
    top: `${50 + Math.sin(angle) * (22 + (index % 7) * 3)}%`,
    tx: `${targetX}px`,
    ty: `${targetY}px`,
    sx: `${Math.cos(angle) * distance}px`,
    sy: `${Math.sin(angle) * distance}px`,
    delay: `${(index % 24) * 42}ms`,
    size: `${1.5 + (index % 4) * 0.45}px`,
  };
});

export function BrandLaunchHero() {
  const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [leaving, setLeaving] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (!leaving) return;
    const timer = window.setTimeout(() => setDismissed(true), 700);
    return () => window.clearTimeout(timer);
  }, [leaving]);

  if (dismissed) return null;

  return (
    <section
      data-header-theme="dark"
      className={`brand-launch brand-launch-overlay ${leaving ? "is-leaving" : ""}`}
      aria-label="龙头会服品牌开场"
    >
      <div className="brand-launch-depth" aria-hidden="true" />
      <div className="brand-launch-noise" aria-hidden="true" />
      <div className="brand-launch-fragments" aria-hidden="true">
        {fragmentSeeds.map((fragment) => (
          <i
            key={fragment.id}
            style={{
              "--fragment-left": fragment.left,
              "--fragment-top": fragment.top,
              "--fragment-tx": fragment.tx,
              "--fragment-ty": fragment.ty,
              "--fragment-sx": fragment.sx,
              "--fragment-sy": fragment.sy,
              "--fragment-delay": fragment.delay,
              "--fragment-size": fragment.size,
            } as CSSProperties}
          />
        ))}
      </div>

      <div className="brand-launch-copy">
        <p className="brand-launch-kicker">LONGTOU · CORPORATE TAX ADVISORY</p>
        <div className="brand-launch-logo" aria-label="龙头集团">
          <Image
            src={`${assetBase}/images/longtou-group-logo.png`}
            alt="龙头集团"
            fill
            priority
            sizes="(max-width: 768px) 70vw, 360px"
          />
        </div>
        <p className="brand-launch-en">LONGTOU SERVICE</p>
        <p className="brand-launch-subtitle">把复杂、混乱和不确定，梳理为清晰、稳定、可执行的经营判断</p>
      </div>

      <button type="button" className="brand-launch-enter" onClick={() => setLeaving(true)}>
        进入龙头会服官网 <span>→</span>
      </button>
    </section>
  );
}
