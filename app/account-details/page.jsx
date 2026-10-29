import Link from "next/link";
import { ArrowRight, Landmark } from "lucide-react";
import { accountCentres } from "@/data/accountDetails";

export const metadata = {
  title: "Account Details",
  description: "Choose your centre to see its payment account details.",
  alternates: { canonical: "/account-details" },
  // Utility page reached by QR code or link, so keep it out of search results
  robots: { index: false, follow: false },
};

const AccountDetailsIndex = () => (
  <main className="min-h-screen bg-[#040d2e] text-white">
    <section className="mx-auto max-w-3xl px-4 pb-28 pt-10 sm:px-6 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFC107]">Payments</p>
      <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">Choose your centre</h1>
      <p className="mt-3 text-gray-200">
        Each centre has its own account details. Pick yours to continue.
      </p>

      <ul className="mt-8 space-y-3">
        {accountCentres.map((c) => (
          <li key={c.id}>
            <Link
              href={`/account-details/${c.id}`}
              className="group flex min-h-20 items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#FFC107]/50 hover:bg-white/10 active:bg-white/15"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFC107]/15 text-[#FFC107]">
                <Landmark size={24} />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-xl font-bold">{c.label}</span>
                <span className="block text-sm text-gray-300">{c.bank}</span>
              </span>
              <ArrowRight
                size={20}
                className="shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#FFC107]"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  </main>
);

export default AccountDetailsIndex;
