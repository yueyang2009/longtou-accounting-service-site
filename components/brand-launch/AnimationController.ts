"use client";

import { useEffect, useRef } from "react";

export type BrandPhase = "water" | "gather" | "reveal" | "brand";

export function phaseFromProgress(progress: number): BrandPhase {
  if (progress < 0.3) return "water";
  if (progress < 0.72) return "gather";
  if (progress < 0.88) return "reveal";
  return "brand";
}

/** Normalises the first viewport of scrolling into the four launch chapters. */
export function useBrandLaunchProgress(enabled: boolean) {
  const progress = useRef(0);
  const target = useRef(0);

  useEffect(() => {
    if (!enabled) return;
    const startedAt = performance.now();
    let frame = 0;
    const updateTarget = () => {
      const scrollRange = Math.max(window.innerHeight * 1.35, 1);
      const scrollProgress = Math.min(Math.max(window.scrollY / scrollRange, 0), 1);
      target.current = Math.max(target.current, scrollProgress);
    };
    const autoplay = (now: number) => {
      const introProgress = Math.min((now - startedAt) / 8200, 1);
      target.current = Math.max(target.current, introProgress);
      frame = requestAnimationFrame(autoplay);
    };
    updateTarget();
    frame = requestAnimationFrame(autoplay);
    window.addEventListener("scroll", updateTarget, { passive: true });
    return () => { window.removeEventListener("scroll", updateTarget); cancelAnimationFrame(frame); };
  }, [enabled]);

  return { progress, target };
}
