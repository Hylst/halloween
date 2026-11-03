import React, { useEffect, useRef } from 'react';

interface FogParticle {
  x: number;
  y: number;
  radius: number;
  vx: number;
  vy: number;
  alpha: number;
  color: string;
}

interface EmberParticle {
  x: number;
  y: number;
  size: number;
  vy: number;
  vx: number;
  alpha: number;
  color: string;
}

export const FogCanvas: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = 0;
    let height = 0;

    const isMobile = window.innerWidth <= 640;
    const fogCount = isMobile ? 18 : 36;
    const emberCount = isMobile ? 14 : 28;

    const fogColors = [
      'rgba(40, 18, 65, ',
      'rgba(18, 25, 48, ',
      'rgba(30, 10, 42, ',
    ];

    const emberColors = [
      '#f59e0b',
      '#ea580c',
      '#dc2626',
      '#fbbf24',
    ];

    let fogParticles: FogParticle[] = [];
    let emberParticles: EmberParticle[] = [];

    function resize() {
      if (!canvas) return;
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      // Re-init particles on resize
      fogParticles = Array.from({ length: fogCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: isMobile ? 120 + Math.random() * 140 : 200 + Math.random() * 260,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.15,
        alpha: 0.04 + Math.random() * 0.05,
        color: fogColors[Math.floor(Math.random() * fogColors.length)],
      }));

      emberParticles = Array.from({ length: emberCount }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        size: 1 + Math.random() * 2.2,
        vy: -0.3 - Math.random() * 0.7,
        vx: (Math.random() - 0.5) * 0.3,
        alpha: 0.3 + Math.random() * 0.6,
        color: emberColors[Math.floor(Math.random() * emberColors.length)],
      }));
    }

    resize();
    window.addEventListener('resize', resize);

    function loop() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw drifting fog orbs
      ctx.globalCompositeOperation = 'screen';
      for (const p of fogParticles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < -p.radius) p.x = width + p.radius;
        if (p.x > width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = height + p.radius;
        if (p.y > height + p.radius) p.y = -p.radius;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
        grad.addColorStop(0, p.color + p.alpha + ')');
        grad.addColorStop(0.6, p.color + (p.alpha * 0.5) + ')');
        grad.addColorStop(1, p.color + '0)');

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw rising embers
      ctx.globalCompositeOperation = 'lighter';
      for (const e of emberParticles) {
        e.y += e.vy;
        e.x += e.vx;

        if (e.y < -10) {
          e.y = height + 10;
          e.x = Math.random() * width;
        }
        if (e.x < -10) e.x = width + 10;
        if (e.x > width + 10) e.x = -10;

        ctx.globalAlpha = e.alpha * (0.8 + Math.sin(Date.now() * 0.005 + e.x) * 0.2);
        ctx.fillStyle = e.color;
        ctx.beginPath();
        ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.globalAlpha = 1.0;
      ctx.globalCompositeOperation = 'source-over';

      animId = requestAnimationFrame(loop);
    }

    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none -z-10 w-full h-full"
      style={{ opacity: 0.85 }}
      aria-hidden="true"
    />
  );
};
