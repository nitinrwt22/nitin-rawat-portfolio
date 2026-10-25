import React, { useEffect, useRef, useState } from 'react';
import { useAudio } from '../../hooks/useAudio';

interface CombustionProps {
  isActive: boolean;
  onComplete: () => void;
}

interface AshParticle {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  life: number;
  maxLife: number;
  alpha: number;
  color: string;
}

export const Combustion: React.FC<CombustionProps> = ({ isActive, onComplete }) => {
  const { startLoop, fadeLoopOut } = useAudio();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);
  
  // Track mouse coordinates for wind repulsion vectors
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });

  // 1. Play looping crackle audio on ignition
  useEffect(() => {
    if (isActive) {
      startLoop('ember_crackle_loop', 0.6);
      return () => {
        fadeLoopOut('ember_crackle_loop', 1.0);
      };
    }
  }, [isActive, startLoop, fadeLoopOut]);

  // 2. Combustion animation loop
  useEffect(() => {
    if (!isActive) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions matching client size
    const resizeCanvas = () => {
      const rect = canvas.parentElement?.getBoundingClientRect();
      canvas.width = rect?.width || window.innerWidth;
      canvas.height = rect?.height || window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let animationId: number;
    let currentProgress = 0;
    const particles: AshParticle[] = [];
    let particleIdCounter = 0;

    const burnDuration = 2800; // 2.8 seconds combustion sequence
    const startTime = performance.now();

    // Mouse movement listener
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isActive: true
      };
    };
    window.addEventListener('mousemove', handleMouseMove);

    const updateFrame = (now: number) => {
      const elapsed = now - startTime;
      currentProgress = Math.min(elapsed / burnDuration, 1.3); // overshoot past 1.0 to clear page
      setProgress(currentProgress);

      if (currentProgress >= 1.25) {
        onComplete();
        return;
      }

      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Define diagonal flame line coordinates
      // Sweeps from bottom-left to top-right
      // Line equation: connects (startX, startY) to (endX, endY)
      const sweepDistance = w + h;
      const currentSweep = currentProgress * sweepDistance;

      // Draw active glowing flame front
      ctx.shadowBlur = 0;
      
      const segments = 40;
      const points: { x: number; y: number }[] = [];

      for (let i = 0; i <= segments; i++) {
        const ratio = i / segments;
        // Diagonal line path
        const lx = ratio * w;
        // The Y coordinate sweeps down based on progress
        const ly = h - (currentSweep - lx);

        // Add organic waving/wobble using time loops
        const wobble = Math.sin(ratio * Math.PI * 4 + now * 0.005) * 8;
        const py = Math.max(-20, Math.min(h + 20, ly + wobble));
        points.push({ x: lx, y: py });
      }

      // 1. Draw glowing burn edge line
      if (currentProgress < 1.1) {
        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);
        for (let i = 1; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }
        
        // Red glow base
        ctx.strokeStyle = '#FF4500';
        ctx.lineWidth = 14;
        ctx.stroke();

        // Orange middle
        ctx.strokeStyle = '#FF8C00';
        ctx.lineWidth = 6;
        ctx.stroke();

        // Yellow core
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // 2. Spawn ash particles along active flame front segments
      if (currentProgress < 1.05) {
        const spawnCount = Math.min(4, Math.floor(w / 150));
        for (let s = 0; s < spawnCount; s++) {
          const pt = points[Math.floor(Math.random() * points.length)];
          // Only spawn if line is active inside viewport
          if (pt.y > -10 && pt.y < h + 10) {
            const maxLife = 60 + Math.random() * 60;
            particles.push({
              id: particleIdCounter++,
              x: pt.x,
              y: pt.y,
              vx: (Math.random() * 2 - 1) * 0.5,
              vy: -1.5 - Math.random() * 2,
              size: 2 + Math.random() * 3,
              life: maxLife,
              maxLife,
              alpha: 1.0,
              color: Math.random() < 0.3 ? '#FFD700' : Math.random() < 0.6 ? '#FF8C00' : '#444444'
            });
          }
        }
      }

      // 3. Update & render ash particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life--;

        if (p.life <= 0) {
          particles.splice(i, 1);
          continue;
        }

        // Apply dynamic wind forces based on cursor proximity
        if (mouseRef.current.isActive) {
          const dx = p.x - mouseRef.current.x;
          const dy = p.y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            const force = (120 - dist) / 120;
            p.vx += (dx / dist) * force * 0.8;
            p.vy += (dy / dist) * force * 0.4;
          }
        }

        // Add soft horizontal sway (Brownian wave)
        p.x += p.vx + Math.sin(p.y * 0.05 + now * 0.002) * 0.2;
        p.y += p.vy;
        p.alpha = p.life / p.maxLife;

        // Render ember
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      animationId = requestAnimationFrame(updateFrame);
    };

    animationId = requestAnimationFrame(updateFrame);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isActive, onComplete]);

  // Sweep progress drives the clipping boundary in the style tag below

  return (
    <div ref={containerRef} className="combustion-container">
      {/* Absolute canvas drawing glowing lines and ash embers */}
      <canvas ref={canvasRef} className="combustion-canvas" />
      
      {/* Apply inline clip-path to clip out the underlying newspaper node */}
      <style>
        {`
          .newspaper-sheet {
            clip-path: polygon(
              100% 0, 
              100% 100%, 
              ${Math.max(-20, 120 - progress * 240)}% 100%, 
              100% ${Math.max(-20, 120 - progress * 240)}%
            ) !important;
          }
        `}
      </style>
    </div>
  );
};

export default Combustion;
