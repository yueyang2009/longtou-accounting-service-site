"use client";

import Image from "next/image";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

const fragmentSeeds = Array.from({ length: 320 }, (_, index) => {
  const cols = 32;
  const rows = 10;
  const col = index % cols;
  const row = Math.floor(index / cols) % rows;
  const targetX = -104 + col * 6.7 + ((row % 2) * 2.2);
  const targetY = -31 + row * 6.9 + ((col % 3) - 1) * 0.9;
  const angle = (index * 137.508 * Math.PI) / 180;
  const distance = 135 + ((index * 41) % 240);
  const orbit = 24 + (index % 9) * 3.8;

  return {
    id: index,
    left: `${50 + Math.cos(angle) * orbit}%`,
    top: `${50 + Math.sin(angle) * (orbit * 0.72)}%`,
    tx: `${targetX}px`,
    ty: `${targetY}px`,
    sx: `${Math.cos(angle) * distance}px`,
    sy: `${Math.sin(angle) * distance * 0.78}px`,
    delay: `${(index % 64) * 16}ms`,
    size: `${1.05 + (index % 5) * 0.28}px`,
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
