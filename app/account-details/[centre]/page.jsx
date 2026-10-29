import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import AccountDetailsClient from "@/components/account/AccountDetailsClient";
import QrPanel from "@/components/account/QrPanel";
import { accountCentres, getCentre } from "@/data/accountDetails";
import { BASE_URL } from "@/lib/seo";

// Only the known centres exist; anything else falls through to the 404 page
export const dynamicParams = false;

export const generateStaticParams = () => accountCentres.map((c) => ({ centre: c.id }));

export const generateMetadata = ({ params }) => {
  const centre = getCentre(params.centre);
  if (!centre) return {};
  return {
    title: `${centre.label} Account Details`,
    description: `Payment account details for the Aptech Ibadan ${centre.label} centre.`,
    alternates: { canonical: `/account-details/${centre.id}` },
    // Utility page reached by QR code or link, so keep it out of search results
    robots: { index: false, follow: false },
  };
};

const CentreAccountPage = ({ params }) => {
  const centre = getCentre(params.centre);
  if (!centre) notFound();

  const pageUrl = `${BASE_URL}/account-details/${centre.id}`;
  const others = accountCentres.filter((c) => c.id !== centre.id);

  return (
    <main className="min-h-screen bg-[#040d2e] text-white">
      <section className="mx-auto max-w-5xl px-4 pb-28 pt-10 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFC107]">
          {centre.label} centre · Payments
        </p>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">{centre.label} account details</h1>
        <p className="mt-3 max-w-2xl text-gray-200">
          Copy the details below to make your payment. After paying, send your proof of
          payment to your centre’s advisor.
        </p>

        <div className="mt-6 grid gap-8 sm:mt-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-[#071347] p-4 sm:p-8">
            <AccountDetailsClient centre={centre} />
          </div>
          <QrPanel url={pageUrl} title={`Scan for the ${centre.label} page`} />
        </div>

        <p className="mt-10 text-sm text-gray-300">Paying at another centre?</p>
        <div className="mt-3 flex flex-wrap gap-3">
          {others.map((c) => (
            <Link
              key={c.id}
              href={`/account-details/${c.id}`}
              className="inline-flex min-h-12 items-center gap-2 rounded-full border border-white/25 px-5 py-2 font-semibold transition hover:bg-white/10"
            >
              {c.label} <ArrowRight size={16} />
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default CentreAccountPage;
