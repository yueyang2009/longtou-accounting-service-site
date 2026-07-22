"use client";

import { useEffect, useRef } from "react";

type ParticleLine = { text: string; indent?: number };

/**
 * 粒子汇聚文字：粒子从四周散点缓动汇聚到文字像素轮廓，
 * 聚拢完成后"凝实"为清晰实心的宋体文字（而非停留在离散颗粒态）。
 * - 静止态 = 实体宋体字，保留品牌权威感与清晰度
 * - 尊重 prefers-reduced-motion（直接静态显示实体字）
 * - 等待 document.fonts.ready 后再采样，避免回退字体
 * - 进入视口才启动一次（IntersectionObserver），不持续占用 CPU
 * - 浅底用深墨绿（清晰），深底传 color 亮金/白
 */
export function ParticleHeadline({
  lines,
  color = "#1c2b22",
  className = "",
  maxFontSize = 60,
  minFontSize = 20,
}: {
  lines: ParticleLine[];
  color?: string;
  className?: string;
  maxFontSize?: number;
  minFontSize?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const fontOf = (s: number) => `700 ${s}px "Noto Serif SC", "Songti SC", "STSong", serif`;

    // 当前布局参数（供实体文字绘制复用）
    let curCw = 0;
    let curFont = maxFontSize;
    let curLineH = maxFontSize * 1.18;

    let raf = 0;
    let particles: { x: number; y: number; tx: number; ty: number; delay: number }[] = [];
    let started = false;
    let done = false;
    let startTime = 0;
    let settleStart = 0;
    const SETTLE_MS = 420;

    function compute() {
      const cw = container!.clientWidth;
      if (!cw) return;
      curCw = cw;

      const measure = document.createElement("canvas").getContext("2d")!;
      let fontSize = maxFontSize;
      measure.font = fontOf(fontSize);
      let widest = 0;
      for (const l of lines) widest = Math.max(widest, measure.measureText(l.text).width);
      if (widest > 0) {
        const fit = (cw * 0.92) / widest;
        fontSize = Math.max(minFontSize, Math.min(maxFontSize, fontSize * fit));
      }
      curFont = fontSize;
      const lineHeight = fontSize * 1.18;
      curLineH = lineHeight;
      const totalH = lineHeight * lines.length + fontSize * 0.15;

      const off = document.createElement("canvas");
      off.width = cw;
      off.height = totalH;
      const octx = off.getContext("2d")!;
      octx.clearRect(0, 0, cw, totalH);
      octx.fillStyle = "#000";
      octx.textBaseline = "alphabetic";
      octx.font = fontOf(fontSize);
      lines.forEach((l, i) => {
        const w = octx.measureText(l.text).width;
        const x = (cw - w) / 2 + (l.indent ?? 0) * fontSize;
        const y = i * lineHeight + fontSize;
        octx.fillText(l.text, x, y);
      });

      const data = octx.getImageData(0, 0, cw, totalH).data;
      const step = Math.max(4, Math.round(fontSize / 22));
      const targets: { x: number; y: number }[] = [];
      for (let y = 0; y < totalH; y += step) {
        for (let x = 0; x < cw; x += step) {
          const alpha = data[(y * cw + x) * 4 + 3];
          if (alpha > 128) targets.push({ x, y });
        }
      }

      particles = targets.map((t) => ({
        x: Math.random() * cw * 1.4 - cw * 0.2,
        y: Math.random() * totalH * 1.8 - totalH * 0.4,
        tx: t.x,
        ty: t.y,
        delay: Math.random() * 650,
      }));

      canvas!.style.width = `${cw}px`;
      canvas!.style.height = `${totalH}px`;
      canvas!.width = Math.floor(cw * dpr);
      canvas!.height = Math.floor(totalH * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (reduceMotion) {
        drawText(1);
        done = true;
      }
    }

    // 绘制清晰实体宋体字（带淡入 alpha）
    function drawText(alpha: number) {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.globalAlpha = alpha;
      ctx!.fillStyle = color;
      ctx!.textBaseline = "alphabetic";
      ctx!.font = fontOf(curFont);
      lines.forEach((l, i) => {
        const w = ctx!.measureText(l.text).width;
        const x = (curCw - w) / 2 + (l.indent ?? 0) * curFont;
        const y = i * curLineH + curFont;
        ctx!.fillText(l.text, x, y);
      });
      ctx!.globalAlpha = 1;
    }

    // 阶段一：粒子聚拢
    function draw() {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.fillStyle = color;
      const elapsed = performance.now() - startTime;
      let moving = false;
      for (const p of particles) {
        if (elapsed < p.delay) {
          moving = true;
        } else {
          p.x += (p.tx - p.x) * 0.09;
          p.y += (p.ty - p.y) * 0.09;
        }
        if (Math.abs(p.tx - p.x) > 0.6 || Math.abs(p.ty - p.y) > 0.6) moving = true;
        ctx!.fillRect(p.x, p.y, 1.8, 1.8);
      }
      if (!moving) {
        // 聚拢完成 → 进入凝实阶段
        settleStart = performance.now();
        raf = requestAnimationFrame(settle);
        return;
      }
      raf = requestAnimationFrame(draw);
    }

    // 阶段二：粒子淡出 + 实体字淡入（凝实为清晰实心字）
    function settle() {
      const t = (performance.now() - settleStart) / SETTLE_MS;
      const a = Math.min(1, Math.max(0, t));
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      drawText(a);
      if (a < 1) {
        ctx!.globalAlpha = 1 - a;
        ctx!.fillStyle = color;
        for (const p of particles) ctx!.fillRect(p.x, p.y, 1.8, 1.8);
        ctx!.globalAlpha = 1;
      }
      if (a >= 1) {
        drawText(1);
        done = true;
        return;
      }
      raf = requestAnimationFrame(settle);
    }

    function start() {
      if (started || done) return;
      started = true;
      startTime = performance.now();
      raf = requestAnimationFrame(draw);
    }

    let resizeTimer = 0;
    function onResize() {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        started = false;
        done = false;
        compute();
        if (!reduceMotion) start();
      }, 220) as unknown as number;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            if (!reduceMotion) start();
            else drawText(1);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    const label = lines.map((l) => l.text).join(" ");
    // 估算占位高度，减少字体加载前的布局跳动
    canvas!.style.height = `${lines.length * maxFontSize * 1.18}px`;

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        compute();
        if (!reduceMotion) io.observe(container!);
        else io.disconnect();
      });
    } else {
      compute();
      if (!reduceMotion) io.observe(container!);
    }

    window.addEventListener("resize", onResize);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
  }, [JSON.stringify(lines), color, maxFontSize, minFontSize]);

  const label = lines.map((l) => l.text).join(" ");

  return (
    <div
      ref={containerRef}
      className={className}
      role="heading"
      aria-label={label}
      style={{ position: "relative" }}
    >
      <canvas ref={canvasRef} style={{ display: "block", maxWidth: "100%" }} />
      <span
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      >
        {label}
      </span>
    </div>
  );
}
