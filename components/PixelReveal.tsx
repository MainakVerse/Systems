'use client';

import { useEffect, useRef, type ReactNode } from 'react';

const PIXEL_SIZE = 6;
const COLORS = ['#00aaff', '#0077cc', '#00b4ff', '#003355', '#1a2a3a', '#0f1a24', '#005588'];

function shuffle<T>(arr: T[]): void {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

export function PixelReveal({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animatedRef.current) {
          animatedRef.current = true;
          runAnimation();
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  function runAnimation() {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const content = contentRef.current;
    if (!container || !canvas || !content) return;

    const w = container.offsetWidth;
    const h = container.offsetHeight;
    canvas.width = w;
    canvas.height = h;

    const ctx = canvas.getContext('2d')!;
    const cols = Math.ceil(w / PIXEL_SIZE);
    const rows = Math.ceil(h / PIXEL_SIZE);

    const all: [number, number][] = [];
    for (let r = 0; r < rows; r++)
      for (let c = 0; c < cols; c++)
        all.push([c, r]);

    shuffle(all);

    const total = all.length;
    let filled = 0;

    // Phase 1: pixels accumulate to fill the area
    const fillInterval = setInterval(() => {
      const batch = Math.ceil(total / 45);
      for (let i = 0; i < batch && filled < total; i++, filled++) {
        const [c, r] = all[filled];
        ctx.fillStyle = COLORS[Math.floor(Math.random() * COLORS.length)];
        ctx.fillRect(c * PIXEL_SIZE, r * PIXEL_SIZE, PIXEL_SIZE - 1, PIXEL_SIZE - 1);
      }
      if (filled >= total) {
        clearInterval(fillInterval);
        // Brief hold, then reveal content while erasing pixels
        setTimeout(() => {
          content.style.opacity = '1';
          content.style.transition = 'opacity 0.5s ease';
          erasePhase(ctx, all, canvas);
        }, 120);
      }
    }, 16);
  }

  function erasePhase(
    ctx: CanvasRenderingContext2D,
    pixels: [number, number][],
    canvas: HTMLCanvasElement
  ) {
    const toErase = [...pixels];
    shuffle(toErase);
    const total = toErase.length;
    let count = 0;

    const interval = setInterval(() => {
      const batch = Math.ceil(total / 55);
      for (let i = 0; i < batch && count < total; i++, count++) {
        const [c, r] = toErase[count];
        ctx.clearRect(c * PIXEL_SIZE, r * PIXEL_SIZE, PIXEL_SIZE, PIXEL_SIZE);
      }
      if (count >= total) {
        clearInterval(interval);
        canvas.style.display = 'none';
      }
    }, 16);
  }

  return (
    <div ref={containerRef} style={{ position: 'relative' }}>
      <div ref={contentRef} style={{ opacity: 0 }}>
        {children}
      </div>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          zIndex: 10,
        }}
      />
    </div>
  );
}
