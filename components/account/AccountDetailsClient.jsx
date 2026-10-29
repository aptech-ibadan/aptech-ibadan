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

// Details for a single centre: copy buttons for the account number, name and everything at once.
const AccountDetailsClient = ({ centre }) => {
  const allDetails = `${centre.bank}\nAccount name: ${centre.accountName}\nAccount number: ${centre.accountNumber}`;

  return (
    <div className="space-y-4 text-white">
      <div className="flex items-center gap-3">
        <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#FFC107]/15 text-[#FFC107]">
          <Landmark size={22} />
        </span>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-300">Bank</p>
          <p className="text-xl font-extrabold">{centre.bank}</p>
        </div>
      </div>

      <Row label="Account number" value={centre.accountNumber} copyLabel="Copy account number" big primary />
      <Row label="Account name" value={centre.accountName} copyLabel="Copy name" />

      <div className="flex flex-col gap-3 sm:flex-row">
        <CopyButton text={allDetails} label="Copy all details" full />
        <ShareButton title={`Aptech Ibadan ${centre.label} account details`} />
      </div>
    </div>
  );
};

export default AccountDetailsClient;
