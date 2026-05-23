"use client";

import { useEffect, useRef } from "react";

type Star = {
  x: number;
  y: number;
  r: number;
  baseAlpha: number;
  phase: number;
  speed: number;
  drift: number;
  tint: string;
};

const TINTS = [
  "rgba(248, 244, 232,",
  "rgba(248, 244, 232,",
  "rgba(248, 244, 232,",
  "rgba(232, 197, 71,",
  "rgba(212, 175, 55,",
  "rgba(178, 34, 34,",
];

export function StarField({ density = 150 }: { density?: number }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let stars: Star[] = [];
    let w = 0;
    let h = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      stars = Array.from({ length: density }, () => makeStar(w, h));
    };

    const makeStar = (W: number, H: number): Star => ({
      x: Math.random() * W,
      y: Math.random() * H,
      r: Math.random() * 1.3 + 0.3,
      baseAlpha: Math.random() * 0.6 + 0.3,
      phase: Math.random() * Math.PI * 2,
      speed: Math.random() * 0.015 + 0.005,
      drift: (Math.random() - 0.5) * 0.05,
      tint: TINTS[Math.floor(Math.random() * TINTS.length)],
    });

    let t = 0;
    const draw = () => {
      t += 1;
      ctx.clearRect(0, 0, w, h);

      // Soft nebula glow blobs (cheap radial gradients)
      const blob = (cx: number, cy: number, R: number, color: string) => {
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, R);
        g.addColorStop(0, color);
        g.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = g;
        ctx.fillRect(cx - R, cy - R, R * 2, R * 2);
      };
      const pulse = 0.5 + 0.5 * Math.sin(t * 0.005);
      blob(w * 0.2, h * 0.3, Math.max(w, h) * 0.35, `rgba(45, 27, 78, ${0.18 + pulse * 0.08})`);
      blob(w * 0.85, h * 0.7, Math.max(w, h) * 0.3, `rgba(139, 0, 0, ${0.08 + pulse * 0.05})`);
      blob(w * 0.5, h * 0.1, Math.max(w, h) * 0.25, `rgba(212, 175, 55, ${0.04 + pulse * 0.03})`);

      for (const s of stars) {
        s.phase += s.speed;
        s.y += s.drift;
        if (s.y > h) s.y = 0;
        if (s.y < 0) s.y = h;
        const alpha = s.baseAlpha * (0.5 + 0.5 * Math.sin(s.phase));
        ctx.fillStyle = `${s.tint} ${alpha})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
        // sparkle for bigger stars
        if (s.r > 1.1) {
          ctx.strokeStyle = `${s.tint} ${alpha * 0.5})`;
          ctx.lineWidth = 0.4;
          ctx.beginPath();
          ctx.moveTo(s.x - s.r * 2.5, s.y);
          ctx.lineTo(s.x + s.r * 2.5, s.y);
          ctx.moveTo(s.x, s.y - s.r * 2.5);
          ctx.lineTo(s.x, s.y + s.r * 2.5);
          ctx.stroke();
        }
      }
      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [density]);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 h-full w-full"
    />
  );
}
