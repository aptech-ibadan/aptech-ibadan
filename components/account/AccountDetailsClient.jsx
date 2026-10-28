"use client";

import { useEffect, useRef, useState } from "react";
import { Check, Copy, Landmark, Share2 } from "lucide-react";

const copyText = async (text) => {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for older browsers / non-secure contexts
    try {
      const area = document.createElement("textarea");
      area.value = text;
      area.setAttribute("readonly", "");
      area.style.position = "fixed";
      area.style.opacity = "0";
      document.body.appendChild(area);
      area.select();
      const ok = document.execCommand("copy");
      document.body.removeChild(area);
      return ok;
    } catch {
      return false;
    }
  }
};

const CopyButton = ({ text, label, variant = "ghost", full = false }) => {
  const [state, setState] = useState("idle"); // idle | copied | failed
  const timer = useRef(null);

  const handle = async () => {
    const ok = await copyText(text);
    if (ok) {
      try {
        navigator.vibrate?.(30);
      } catch {}
    }
    setState(ok ? "copied" : "failed");
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState("idle"), 2000);
  };

  const styles =
    variant === "primary"
      ? "bg-[#FFC107] text-black hover:bg-yellow-300 active:bg-yellow-400"
      : "border border-white/25 text-white hover:bg-white/10 active:bg-white/15";

  return (
    <button
      type="button"
      onClick={handle}
      className={`inline-flex min-h-12 shrink-0 whitespace-nowrap items-center justify-center gap-2 rounded-full px-5 py-2 text-base font-semibold transition ${full ? "w-full sm:w-auto" : ""} ${styles}`}
    >
      {state === "copied" ? <Check size={16} /> : <Copy size={16} />}
      <span aria-live="polite">
        {state === "copied" ? "Copied" : state === "failed" ? "Copy failed" : label}
      </span>
    </button>
  );
};

const Row = ({ label, value, copyLabel, big, primary }) => (
  <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:flex sm:items-center sm:justify-between sm:gap-4">
    <div className="min-w-0">
      <p className="text-xs font-semibold uppercase tracking-widest text-orange-200">{label}</p>
      <p
        className={`mt-1 select-all break-words font-bold text-white ${
          big ? "text-3xl tracking-[0.12em] tabular-nums sm:text-2xl" : "text-lg leading-snug"
        }`}
      >
        {value}
      </p>
    </div>
    <div className="mt-4 sm:mt-0">
      <CopyButton text={value} label={copyLabel} variant={primary ? "primary" : "ghost"} full />
    </div>
  </div>
);

const ShareButton = ({ title }) => {
  const [canShare, setCanShare] = useState(false);
  useEffect(() => {
    setCanShare(typeof navigator !== "undefined" && !!navigator.share);
  }, []);
  if (!canShare) return null;
  return (
    <button
      type="button"
      onClick={() => navigator.share({ title, url: window.location.href }).catch(() => {})}
      className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-white/25 px-5 py-2 text-base font-semibold text-white transition hover:bg-white/10 active:bg-white/15 sm:w-auto lg:hidden"
    >
      <Share2 size={16} /> Share this page
    </button>
  );
};

const AccountDetailsClient = ({ tabs }) => {
  const [active, setActive] = useState(tabs[0].id);
  const current = tabs.find((t) => t.id === active);

  const allDetails = `${current.bank}\nAccount name: ${current.accountName}\nAccount number: ${current.accountNumber}`;

  return (
    <div>
      <div role="tablist" aria-label="Centre" className="grid grid-cols-3 gap-2 rounded-full border border-white/10 bg-white/5 p-1.5">
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={active === t.id}
            aria-controls={`panel-${t.id}`}
            onClick={() => setActive(t.id)}
            className={`min-h-12 whitespace-nowrap rounded-full px-2 py-2.5 text-sm font-bold transition sm:px-3 sm:text-base ${
              active === t.id
                ? "bg-[#FFC107] text-black shadow"
                : "text-white hover:bg-white/10"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div
        role="tabpanel"
        id={`panel-${current.id}`}
        aria-labelledby={`tab-${current.id}`}
        className="mt-6 space-y-4 text-white"
      >
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFC107]/15 text-[#FFC107]">
            <Landmark size={22} />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-300">Bank</p>
            <p className="text-xl font-extrabold">{current.bank}</p>
          </div>
        </div>

        <Row label="Account number" value={current.accountNumber} copyLabel="Copy account number" big primary />
        <Row label="Account name" value={current.accountName} copyLabel="Copy name" />

        <div className="flex flex-col gap-3 sm:flex-row">
          <CopyButton text={allDetails} label="Copy all details" full />
          <ShareButton title="Aptech Ibadan account details" />
        </div>
      </div>
    </div>
  );
};

export default AccountDetailsClient;
