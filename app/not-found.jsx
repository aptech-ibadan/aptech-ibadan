import Link from "next/link";
import {
  Home,
  GraduationCap,
  FileText,
  Phone,
  Tag,
  Images,
  BedDouble,
  ArrowRight,
} from "lucide-react";
import { BackButton, RequestedPath } from "@/components/NotFoundActions";

export const metadata = {
  title: "Page not found",
  description: "The page you are looking for does not exist or has moved.",
  robots: { index: false, follow: false },
};

const quickLinks = [
  { href: "/program", label: "Programs", text: "Explore our IT courses", icon: GraduationCap },
  { href: "/apply", label: "Apply now", text: "Start your application", icon: FileText },
  { href: "/offers", label: "Offers", text: "Current discounts and campaigns", icon: Tag },
  { href: "/contact", label: "Contact", text: "Reach a centre near you", icon: Phone },
  { href: "/gallery", label: "Gallery", text: "Life at Aptech Ibadan", icon: Images },
  { href: "/accomodation", label: "Accommodation", text: "Stay close to your classes", icon: BedDouble },
];

export default function NotFound() {
  return (
    <main className="relative isolate overflow-hidden bg-[#040d2e] text-white">
      <div className="pointer-events-none absolute -top-32 left-1/2 h-96 w-[48rem] max-w-full -translate-x-1/2 rounded-full bg-[#FFC107]/10 blur-3xl" />

      <section className="relative mx-auto max-w-5xl px-4 pb-20 pt-14 text-center sm:px-6 sm:pb-28 sm:pt-24">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFC107]">
          Error 404
        </p>

        <p
          aria-hidden="true"
          className="mt-2 bg-gradient-to-b from-[#FFC107] to-[#b8860b]/40 bg-clip-text text-[7rem] font-extrabold leading-none tracking-tight text-transparent sm:text-[11rem]"
        >
          404
        </p>

        <h1 className="mt-2 text-2xl font-extrabold sm:text-4xl">
          We can’t find that page
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-gray-200">
          The link may be broken or the page may have moved. Head back to the
          homepage or pick one of the places below.
        </p>

        <RequestedPath />

        <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
          <Link
            href="/"
            className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FFC107] px-7 py-3 font-bold text-black transition hover:bg-yellow-300 active:bg-yellow-400"
          >
            <Home size={18} /> Back to homepage
          </Link>
          <BackButton />
        </div>

        <div className="mt-14 text-left">
          <h2 className="text-center text-sm font-semibold uppercase tracking-widest text-gray-300">
            Popular pages
          </h2>
          <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {quickLinks.map(({ href, label, text, icon: Icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="group flex min-h-16 items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:border-[#FFC107]/50 hover:bg-white/10"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#FFC107]/15 text-[#FFC107]">
                    <Icon size={22} />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block font-semibold">{label}</span>
                    <span className="block truncate text-sm text-gray-300">{text}</span>
                  </span>
                  <ArrowRight
                    size={18}
                    className="shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#FFC107]"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
}
