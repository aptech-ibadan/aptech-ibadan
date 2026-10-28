"use client";

import { usePathname, useRouter } from "next/navigation";
import { ArrowLeft } from "lucide-react";

// Client-only bits of the 404 page: the path that was requested and a back button.
export const RequestedPath = () => {
  const pathname = usePathname();
  if (!pathname || pathname === "/") return null;
  return (
    <p className="mx-auto mt-4 w-fit max-w-full truncate rounded-full border border-white/10 bg-white/5 px-4 py-1.5 font-mono text-xs text-gray-300 sm:text-sm">
      {pathname}
    </p>
  );
};

export const BackButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      onClick={() => (window.history.length > 1 ? router.back() : router.push("/"))}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/25 px-6 py-3 font-semibold text-white transition hover:bg-white/10 active:bg-white/15"
    >
      <ArrowLeft size={18} /> Go back
    </button>
  );
};
