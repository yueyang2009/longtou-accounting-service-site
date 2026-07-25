"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { BrandLaunchScene } from "./brand-launch/BrandLaunchScene";
import { phaseFromProgress, useBrandLaunchProgress } from "./brand-launch/AnimationController";

const ipParticleSeeds = Array.from({ length: 180 }, (_, index) => ({
  id: index,
  x: 8 + (index * 47) % 84,
  y: 5 + (index * 29) % 90,
  dx: ((index * 71) % 240) - 120,
  dy: ((index * 37) % 260) - 130,
  delay: (index % 36) * 0.028,
  size: 2 + (index % 4),
}));

export function BrandLaunchHero() {
  const { progress, target } = useBrandLaunchProgress(true);
  const assetBase = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
  const [phase, setPhase] = useState("water");
  const [leaving, setLeaving] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      setPhase(phaseFromProgress(target.current));
      frame = requestAnimationFrame(update);
    };
    frame = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frame);
  }, [target]);

  useEffect(() => {
    if (!leaving) return;
    const timer = window.setTimeout(() => setDismissed(true), 700);
    return () => window.clearTimeout(timer);
  }, [leaving]);

  if (dismissed) return null;

  return (
    <section data-header-theme="dark" className={`brand-launch brand-launch-overlay brand-phase-${phase} ${leaving ? "is-leaving" : ""}`} aria-label="龙头会服品牌开场">
      <BrandLaunchScene progress={progress} target={target} />
      <div className="brand-launch-vignette" />
      <div className="brand-launch-oriental" aria-hidden="true" />
      <div className="brand-launch-ip-particles" aria-hidden="true">
        {ipParticleSeeds.map((particle) => (
          <i
            key={particle.id}
            style={{
              "--particle-x": `${particle.x}%`, "--particle-y": `${particle.y}%`,
              "--particle-dx": `${particle.dx}px`, "--particle-dy": `${particle.dy}px`,
              "--particle-delay": `${particle.delay}s`, "--particle-size": `${particle.size}px`,
            } as React.CSSProperties}
          />
        ))}
      </div>
      <div className="brand-launch-copy">
        <p className="brand-launch-kicker">LONGTOU · CORPORATE SERVICE PLATFORM</p>
        <h1>龙头会服</h1>
        <p className="brand-launch-en">LONGTOU SERVICE</p>
        <div className="brand-launch-line" />
        <p className="brand-launch-subtitle">连接企业资源　陪伴企业成长</p>
      </div>
      <div className="brand-launch-ip" aria-label="龙头会服品牌IP龙灵">
        <Image src={`${assetBase}/images/longling-brand-ip.png`} alt="龙灵，龙头会服品牌IP" fill priority sizes="(max-width: 768px) 70vw, 460px" />
      </div>
      <button type="button" className="brand-launch-enter" onClick={() => setLeaving(true)}>
        进入龙头会服官网 <span>→</span>
      </button>
      <p className="brand-launch-scroll">SCROLL TO AWAKEN <span>↓</span></p>
    </section>
  );
}
