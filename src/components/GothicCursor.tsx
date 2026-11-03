import React, { useEffect, useState } from 'react';

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  vx: number;
  vy: number;
}

export const GothicCursor: React.FC = () => {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // Ne pas activer sur terminaux tactiles sans pointeur fin
    if (!window.matchMedia('(pointer: fine)').matches) return;

    let idCounter = 0;
    const colors = ['#f59e0b', '#c084fc', '#ea580c', '#e879f9', '#fde047'];

    const onPointerMove = (e: PointerEvent) => {
      // N ajouter une etincelle qu une fois sur deux pour la legerete
      if (Math.random() > 0.45) return;

      const p: Particle = {
        id: ++idCounter,
        x: e.clientX,
        y: e.clientY,
        size: 2.5 + Math.random() * 3.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 1.2,
        vy: -0.5 - Math.random() * 1.2,
      };

      setParticles((prev) => [...prev.slice(-18), p]);
    };

    const onPointerDown = (e: PointerEvent) => {
      // Burst de 6 etincelles au clic
      const burst: Particle[] = Array.from({ length: 6 }, () => ({
        id: ++idCounter,
        x: e.clientX,
        y: e.clientY,
        size: 3 + Math.random() * 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 4,
        vy: (Math.random() - 0.5) * 4,
      }));

      setParticles((prev) => [...prev.slice(-16), ...burst]);
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerdown', onPointerDown, { passive: true });

    // Nettoyage cyclique des etincelles
    const interval = setInterval(() => {
      setParticles((prev) => {
        if (prev.length === 0) return prev;
        return prev
          .map((p) => ({
            ...p,
            x: p.x + p.vx,
            y: p.y + p.vy,
            size: p.size * 0.88,
          }))
          .filter((p) => p.size > 0.8);
      });
    }, 40);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden" aria-hidden="true">
      {particles.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full blur-[0.5px] transition-opacity duration-300"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: p.color,
            boxShadow: `0 0 6px ${p.color}`,
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};
