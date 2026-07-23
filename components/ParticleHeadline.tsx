"use client";

import { useEffect, useRef } from "react";

type ParticleLine = { text: string; indent?: number };

/**
 * 粒子汇聚文字（通用版）：
 * - 标题模式：传 `lines`（显式多行 + 可选 indent 缩进），字号自适应容器宽度
 * - 段落模式：传 `text`（单行字符串，自动按容器宽度换行），用 `fontSize` 指定字号
 * 两个阶段：① 粒子从四周散点缓动汇聚到文字像素轮廓 ② 聚拢后"凝实"为清晰实心宋体字
 * - 尊重 prefers-reduced-motion（直接静态显示实体字）
 * - 等 document.fonts.ready 后再布局，避免回退字体
 * - 进入视口才采样像素 + 启动一次（IntersectionObserver），不持续占用 CPU
 * - 浅底默认深墨绿，深底传 color 亮金/白
 */
export function ParticleHeadline({
  lines,
  text,
  color = "#1c2b22",
  className = "",
  maxFontSize = 60,
  minFontSize = 20,
  fontSize,
  lineHeight = 1.25,
  align = "center",
  fontWeight = 700,
}: {
  lines?: ParticleLine[];
  text?: string;
  color?: string;
  className?: string;
  maxFontSize?: number;
  minFontSize?: number;
  fontSize?: number;
  lineHeight?: number;
  align?: "center" | "left";
  fontWeight?: number;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    if (!container || !canvas) return;
    if (!lines && !text) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const fontOf = (s: number) =>
      `${fontWeight} ${s}px "Noto Serif SC", "Songti SC", "STSong", serif`;
    const isParagraph = text !== undefined;
    const baseFont = fontSize ?? (isParagraph ? 18 : maxFontSize);

    let curCw = 0;
    let curFont = baseFont;
    let curLH = lineHeight;
    let curLines: ParticleLine[] = lines ?? [];
    let curMinIndent = 0;

    let raf = 0;
    let particles: { x: number; y: number; tx: number; ty: number; delay: number }[] = [];
    let started = false;
    let done = false;
    let startTime = 0;
    let settleStart = 0;
    const SETTLE_MS = 420;

    function wrap(t: string, maxW: number): string[] {
      const out: string[] = [];
      let line = "";
      for (const ch of t) {
        if (ch === "\n") {
          out.push(line);
          line = "";
          continue;
        }
        const test = line + ch;
        if (line && ctx!.measureText(test).width > maxW) {
          out.push(line);
          line = ch;
        } else {
          line = test;
        }
      }
      if (line) out.push(line);
      return out.length ? out : [""];
    }

    // 仅计算字号 / 行数 / 高度，不采样（字体就绪时尽早定高，避免布局跳动）
    function layout() {
      const cw = container!.clientWidth;
      if (!cw) return;
      curCw = cw;
      let font = baseFont;
      let list: ParticleLine[];
      if (isParagraph) {
        const wrapped = wrap(text!, cw * 0.96);
        list = wrapped.map((t) => ({ text: t, indent: 0 }));
      } else {
        const m = document.createElement("canvas").getContext("2d")!;
        m.font = fontOf(maxFontSize);
        let widest = 0;
        let minIndent = 0;
        for (const l of lines!) {
          const w = m.measureText(l.text).width;
          const indentW = (l.indent ?? 0) * maxFontSize * 0.95;
          widest = Math.max(widest, w + indentW);
          minIndent = Math.min(minIndent, l.indent ?? 0);
        }
        // 负缩进时，文字会向左延伸，需把左延伸量纳入总宽度
        if (minIndent < 0) {
          widest = widest - minIndent * maxFontSize * 0.95;
        }
        if (widest > 0) {
          const fit = (cw * 0.88) / widest;
          font = Math.max(minFontSize, Math.min(maxFontSize, maxFontSize * fit));
        }
        list = lines!.map((l) => ({ text: l.text, indent: l.indent ?? 0 }));
      }
      curFont = font;
      curLH = lineHeight;
      curLines = list;
      const lh = font * lineHeight;
      const totalH = lh * list.length + font * 0.2;
      canvas!.style.width = `${cw}px`;
      canvas!.style.height = `${totalH}px`;
      // 记录最小缩进（可能为负），用于绘制时右偏移防止左裁切
      curMinIndent = Math.min(0, ...list.map((l) => l.indent ?? 0));
    }

    // 采样像素 → 生成粒子目标点
    function sample() {
      const cw = curCw;
      const font = curFont;
      const lh = font * curLH;
      const totalH = lh * curLines.length + font * 0.2;
      const off = document.createElement("canvas");
      off.width = cw;
      off.height = totalH;
      const octx = off.getContext("2d")!;
      octx.clearRect(0, 0, cw, totalH);
      octx.fillStyle = "#000";
      octx.textBaseline = "alphabetic";
      octx.textAlign = "left";
      octx.font = fontOf(font);
      curLines.forEach((l, i) => {
        const w = octx.measureText(l.text).width;
        const indent = (l.indent ?? 0) * font;
        const leftPad = curMinIndent * font; // 负缩进时右偏移，防止左裁切
        const x = (align === "center" ? (cw - w) / 2 + indent : indent) - leftPad;
        const y = i * lh + font;
        octx.fillText(l.text, x, y);
      });
      const data = octx.getImageData(0, 0, cw, totalH).data;
      const step = isParagraph
        ? Math.max(5, Math.round(font / 2.6))
        : Math.max(4, Math.round(font / 22));
      const targets: { x: number; y: number }[] = [];
      for (let y = 0; y < totalH; y += step) {
        for (let x = 0; x < cw; x += step) {
          if (data[(y * cw + x) * 4 + 3] > 128) targets.push({ x, y });
        }
      }
      particles = targets.map((t) => ({
        x: Math.random() * cw * 1.4 - cw * 0.2,
        y: Math.random() * totalH * 1.8 - totalH * 0.4,
        tx: t.x,
        ty: t.y,
        delay: Math.random() * 650,
      }));
      canvas!.width = Math.floor(cw * dpr);
      canvas!.height = Math.floor(totalH * dpr);
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function drawText(alpha: number) {
      if (!curCw) return;
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      ctx!.globalAlpha = alpha;
      ctx!.fillStyle = color;
      ctx!.textBaseline = "alphabetic";
      ctx!.textAlign = "left";
      ctx!.font = fontOf(curFont);
      const lh = curFont * curLH;
      curLines.forEach((l, i) => {
        const w = ctx!.measureText(l.text).width;
        const indent = (l.indent ?? 0) * curFont;
        const leftPad = curMinIndent * curFont; // 负缩进时右偏移，防止左裁切
        const x = (align === "center" ? (curCw - w) / 2 + indent : indent) - leftPad;
        const y = i * lh + curFont;
        ctx!.fillText(l.text, x, y);
      });
      ctx!.globalAlpha = 1;
    }

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
        settleStart = performance.now();
        raf = requestAnimationFrame(settle);
        return;
      }
      raf = requestAnimationFrame(draw);
    }

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

    function activate() {
      if (done) return;
      layout();
      sample();
      if (reduceMotion) {
        drawText(1);
        done = true;
        return;
      }
      start();
    }

    let resizeTimer = 0;
    function onResize() {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        const wasDone = done;
        started = false;
        done = false;
        layout();
        sample();
        if (reduceMotion || wasDone) {
          drawText(1);
          done = true;
        } else {
          start();
        }
      }, 220) as unknown as number;
    }

    let fontsReady = false;
    const pending: (() => void)[] = [];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const run = () => activate();
            if (fontsReady) run();
            else pending.push(run);
            io.disconnect();
          }
        });
      },
      { threshold: 0.15 }
    );

    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(() => {
        fontsReady = true;
        layout();
        pending.forEach((f) => f());
        pending.length = 0;
      });
    } else {
      fontsReady = true;
      layout();
    }
    io.observe(container!);

    window.addEventListener("resize", onResize);
    return () => {
      window.cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      io.disconnect();
    };
  }, [JSON.stringify(lines), text, color, fontSize, maxFontSize, minFontSize, lineHeight, align, fontWeight]);

  const label = text ?? (lines ?? []).map((l) => l.text).join(" ");

  return (
    <div
      ref={containerRef}
      className={className}
      role={text !== undefined ? undefined : "heading"}
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
