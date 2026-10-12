"use client";

import { useEffect, useState } from "react";

const pad = (n) => String(n).padStart(2, "0");

const EmberCountdown = ({ end }) => {
  const target = new Date(end).getTime();
  const [left, setLeft] = useState(null);

  useEffect(() => {
    const tick = () => setLeft(Math.max(0, target - Date.now()));
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);

  if (left === null) return <div className="h-[84px]" />;
  if (left === 0)
    return (
      <p className="text-lg font-semibold text-orange-200">
        The October window has closed. Talk to us about Xmas in Tech 2.0.
      </p>
    );

  const s = Math.floor(left / 1000);
  const units = [
    ["Days", Math.floor(s / 86400)],
    ["Hours", Math.floor((s % 86400) / 3600)],
    ["Mins", Math.floor((s % 3600) / 60)],
    ["Secs", s % 60],
  ];

  return (
    <div className="flex gap-3 text-white" role="timer" aria-label="Time left in campaign">
      {units.map(([label, value]) => (
        <div
          key={label}
          className="w-[72px] rounded-xl border border-orange-300/30 bg-white/5 py-3 text-center backdrop-blur"
        >
          <div className="text-3xl font-extrabold tabular-nums">{pad(value)}</div>
          <div className="text-[11px] uppercase tracking-widest text-orange-200">{label}</div>
        </div>
      ))}
    </div>
  );
};

export default EmberCountdown;
