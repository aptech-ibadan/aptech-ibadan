import QRCode from "qrcode";

// Server component: renders the QR for a page as inline SVG. Desktop only, since phone
// visitors have already scanned it to get here.
const QrPanel = async ({ url, title }) => {
  const svg = await QRCode.toString(url, {
    type: "svg",
    margin: 1,
    errorCorrectionLevel: "M",
    color: { dark: "#040d2e", light: "#ffffff" },
  });

  return (
    <aside className="hidden self-start rounded-2xl border border-white/10 bg-white/5 p-6 text-center lg:block">
      <p className="font-semibold">{title}</p>
      <div
        className="mx-auto mt-4 w-48 overflow-hidden rounded-xl bg-white p-2 [&>svg]:h-full [&>svg]:w-full"
        role="img"
        aria-label={`QR code linking to ${url}`}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      <p className="mt-3 break-all text-xs text-gray-300">{url}</p>
    </aside>
  );
};

export default QrPanel;
