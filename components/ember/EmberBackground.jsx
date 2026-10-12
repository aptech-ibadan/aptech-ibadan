"use client";

import { useEffect, useRef } from "react";

// Rising-spark canvas. Pauses when off-screen and respects reduced motion.
const EmberBackground = ({
  count = 70,
  className = "",
  style,
  glowBottom = "-33%",
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const spawn = (initial) => ({
      x: Math.random() * w,
      y: initial ? Math.random() * h : h + 10,
      r: 0.6 + Math.random() * 2.2,
      vy: 0.25 + Math.random() * 0.9,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: 0.004 + Math.random() * 0.012,
      life: 0.4 + Math.random() * 0.6,
      hue: 18 + Math.random() * 28,
    });

    let sparks = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width;
      h = rect.height;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      sparks = Array.from({ length: count }, () => spawn(true));
    };

    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      ctx.globalCompositeOperation = "lighter";
      for (let i = 0; i < sparks.length; i++) {
        const s = sparks[i];
        s.y -= s.vy;
        s.sway += s.swaySpeed;
        s.x += Math.sin(s.sway) * 0.4;
        const fade = Math.max(0, Math.min(1, s.y / h)) * s.life;
        if (s.y < -10) {
          sparks[i] = spawn(false);
          continue;
        }
        const g = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 5);
        g.addColorStop(0, `hsla(${s.hue}, 100%, 65%, ${fade})`);
        g.addColorStop(0.4, `hsla(${s.hue}, 100%, 50%, ${fade * 0.35})`);
        g.addColorStop(1, `hsla(${s.hue}, 100%, 45%, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r * 5, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalCompositeOperation = "source-over";
    };

    const loop = () => {
      if (visible) draw();
      raf = requestAnimationFrame(loop);
    };

    resize();
    if (reduceMotion) {
      draw();
    } else {
      raf = requestAnimationFrame(loop);
    }

    const io = new IntersectionObserver(
      ([entry]) => (visible = entry.isIntersecting),
    );
    io.observe(canvas);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener("resize", resize);
    };
  }, [count]);

  return (
    <div
      aria-hidden="true"
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      style={style}
    >
      <div
        className="ember-glow absolute left-1/2 h-[70%] w-[120%] -translate-x-1/2 rounded-full"
        style={{ bottom: glowBottom }}
      />
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <style jsx>{`
        .ember-glow {
          background: radial-gradient(
            ellipse at center,
            rgba(255, 98, 20, 0.45) 0%,
            rgba(220, 40, 20, 0.18) 40%,
            transparent 70%
          );
          filter: blur(30px);
          animation: emberPulse 4.5s ease-in-out infinite;
        }
        @keyframes emberPulse {
          0%,
          100% {
            opacity: 0.7;
            transform: translateX(-50%) scale(1);
          }
          50% {
            opacity: 1;
            transform: translateX(-50%) scale(1.06);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .ember-glow {
            animation: none;
          }
        }
      `}</style>
    </div>
  );
};

export default EmberBackground;
