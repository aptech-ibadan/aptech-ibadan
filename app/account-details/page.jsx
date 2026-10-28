import QRCode from "qrcode";
import AccountDetailsClient from "@/components/account/AccountDetailsClient";
import { accountTabs } from "@/data/accountDetails";
import { BASE_URL } from "@/lib/seo";

export const metadata = {
  title: "Account Details",
  description: "Payment account details for the Agodi, Bodija and Ring Road centres.",
  alternates: { canonical: "/account-details" },
  // Utility page reached by QR code or link, so keep it out of search results
  robots: { index: false, follow: false },
};

const AccountDetailsPage = async () => {
  const pageUrl = `${BASE_URL}/account-details`;
  const qrSvg = await QRCode.toString(pageUrl, {
    type: "svg",
    margin: 1,
    errorCorrectionLevel: "M",
    color: { dark: "#040d2e", light: "#ffffff" },
  });

  return (
    <main className="min-h-screen bg-[#040d2e] text-white">
      <section className="mx-auto max-w-5xl px-4 pb-28 pt-10 sm:px-6 sm:py-16">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFC107]">Payments</p>
        <h1 className="mt-3 text-3xl font-extrabold sm:text-5xl">Account details</h1>
        <p className="mt-3 max-w-2xl text-gray-200">
          Pick your centre and copy the details below. After paying, send your proof of
          payment to your centre’s advisor.
        </p>

        <div className="mt-6 grid gap-8 sm:mt-10 lg:grid-cols-[1.5fr_1fr]">
          <div className="rounded-2xl border border-white/10 bg-[#071347] p-4 sm:p-8">
            <AccountDetailsClient tabs={accountTabs} />
          </div>

          <aside className="hidden self-start rounded-2xl border border-white/10 bg-white/5 p-6 text-center lg:block">
            <p className="font-semibold">Scan to open this page</p>
            <div
              className="mx-auto mt-4 w-48 overflow-hidden rounded-xl bg-white p-2 [&>svg]:h-full [&>svg]:w-full"
              role="img"
              aria-label={`QR code linking to ${pageUrl}`}
              dangerouslySetInnerHTML={{ __html: qrSvg }}
            />
            <p className="mt-3 break-all text-xs text-gray-300">{pageUrl}</p>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default AccountDetailsPage;
