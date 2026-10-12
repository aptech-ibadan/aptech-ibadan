import Link from "next/link";
import { Wallet, GraduationCap, Rocket, Flame } from "lucide-react";
import EmberBackground from "@/components/ember/EmberBackground";
import EmberLockMark from "@/components/ember/EmberLockMark";
import EmberCountdown from "@/components/ember/EmberCountdown";
import EmberFaq from "@/components/ember/EmberFaq";
import {
  campaign,
  maxDiscount,
  perks,
  tiers,
  steps,
  centres,
  timeline,
  faqs,
} from "@/data/lockedInEmber";

export const metadata = {
  title: "Locked-In Ember",
  description:
    "Lock in your next chapter before the year ends. Save up to 30%, get a free bonus course and win from ₦5M+ in prizes at Aptech Ibadan.",
  alternates: { canonical: "/locked-in-ember" },
  openGraph: {
    title: "Locked-In Ember | Aptech Ibadan",
    description:
      "The more you lock in, the more you unlock. Oct 9–29 at Aptech Ibadan.",
    url: "/locked-in-ember",
  },
};

const perkIcons = {
  wallet: Wallet,
  graduation: GraduationCap,
  rocket: Rocket,
  flame: Flame,
};

const eyebrow = "text-sm font-semibold uppercase tracking-[0.3em] text-orange-300";
const gradientText =
  "bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 bg-clip-text text-transparent";

const Section = ({ id, kicker, title, children }) => (
  <section id={id} className="relative mx-auto max-w-6xl px-6 py-20">
    {kicker && <p className={eyebrow}>{kicker}</p>}
    <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">{title}</h2>
    <div className="mt-10">{children}</div>
  </section>
);

const CtaButtons = () => (
  <div className="flex flex-wrap gap-4">
    <Link
      href="/apply"
      className="rounded-full bg-gradient-to-r from-orange-400 to-red-500 px-8 py-3 font-bold text-white shadow-lg shadow-orange-500/30 transition hover:scale-105"
    >
      Lock in my place
    </Link>
    <Link
      href="/contact"
      className="rounded-full border border-white/30 px-8 py-3 font-semibold transition hover:bg-white/10"
    >
      Talk to an advisor
    </Link>
  </div>
);

const LockedInEmberPage = () => (
  <main className="bg-[#040d2e] text-white">
    {/* Hero + offer share one ember backdrop that fades out partway down the offer section */}
    <div className="relative isolate">
      <EmberBackground
        count={110}
        className="!bottom-auto h-[calc(92vh+520px)]"
        glowBottom="150px"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, #000 0%, #000 70%, transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, #000 0%, #000 70%, transparent 100%)",
        }}
      />
      <section className="relative z-10 mx-auto flex min-h-[92vh] max-w-3xl flex-col items-center justify-center px-6 py-24 text-center">
        <EmberLockMark size={150} />
        <p className={`mt-6 ${eyebrow}`}>Oct 9 – 29 · {campaign.slots} slots</p>
        <h1 className="mt-3 text-5xl font-extrabold leading-tight sm:text-7xl">
          LOCKED-IN <span className={gradientText}>EMBER</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-blue-100/90">
          Christmas came early. Don’t wait until the year is over to start
          your next chapter. The more you lock in, the more you unlock.
        </p>
        <div className="mt-8">
          <EmberCountdown end={campaign.end} />
        </div>
        <div className="mt-8">
          <CtaButtons />
        </div>
      </section>

      <div
        aria-hidden="true"
        className="relative z-10 mx-auto h-px max-w-4xl bg-gradient-to-r from-transparent via-orange-300/40 to-transparent"
      />

      <Section id="offer" kicker="The offer" title="Lock in now, save more">
        <div className="relative overflow-hidden rounded-2xl border border-orange-300/20 bg-white/5 px-6 py-10 text-center backdrop-blur-sm">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-48 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/20 blur-3xl" />
          <p className="relative text-sm font-semibold uppercase tracking-[0.3em] text-orange-200">
            Save up to
          </p>
          <p className={`relative text-8xl font-extrabold leading-none sm:text-9xl ${gradientText}`}>
            {maxDiscount}%
          </p>
          <p className="relative mt-1 text-2xl font-bold uppercase tracking-[0.4em]">
            off
          </p>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((p) => (
            <div key={p.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
              {(() => {
                const Icon = perkIcons[p.icon];
                return (
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500/15 text-orange-300">
                    <Icon size={22} />
                  </span>
                );
              })()}
              <h3 className="mt-3 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-blue-100/80">{p.text}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>

    {/* Tiers */}
    <Section kicker="Pick your tier" title="Three Ember tiers, ₦5M+ in prizes & rewards">
      <div className="grid gap-6 lg:grid-cols-3">
        {tiers.map((t) => (
          <article key={t.id} className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className={`bg-gradient-to-r ${t.accent} p-6 text-[#040d2e]`}>
              <h3 className="text-2xl font-extrabold uppercase">{t.name}</h3>
              <p className="font-semibold">{t.tagline}</p>
              <p className="mt-1 text-sm">Programme duration: {t.duration}</p>
            </div>
            <div className="flex-1 p-6">
              <h4 className="text-xs font-bold uppercase tracking-widest text-orange-300">Courses</h4>
              <ul className="mt-2 space-y-1 text-sm text-blue-100/90">
                {t.courses.map((c) => (
                  <li key={c}>• {c}</li>
                ))}
              </ul>
              <h4 className="mt-6 text-xs font-bold uppercase tracking-widest text-orange-300">Rewards</h4>
              <ul className="mt-2 space-y-1 text-sm">
                {t.rewards.map((r) => (
                  <li key={r}>{r}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </Section>

    {/* How rewards work */}
    <Section kicker="How it works" title="How reward eligibility works">
      <ol className="grid gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <li key={s.title} className="relative rounded-2xl border border-white/10 bg-white/5 p-6">
            <span className={`text-5xl font-extrabold ${gradientText}`}>{i + 1}</span>
            <h3 className="mt-2 text-lg font-bold">{s.title}</h3>
            <p className="mt-2 text-sm text-blue-100/80">{s.text}</p>
          </li>
        ))}
      </ol>
      <p className="mt-6 rounded-xl border border-orange-400/30 bg-orange-500/10 p-4 text-sm text-orange-100">
        Students do not select their rewards. Rewards are assigned according to
        the approved campaign structure.
      </p>
    </Section>

    {/* Centres */}
    <Section kicker="Limited" title="Reward slots at every centre">
      <div className="grid gap-6 md:grid-cols-3">
        {centres.map((c) => (
          <div key={c.name} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="text-xl font-bold">{c.name}</h3>
            <p className={`text-4xl font-extrabold ${gradientText}`}>7 reward slots</p>
            <ul className="mt-3 space-y-1 text-sm text-blue-100/80">
              {c.slots.map((s) => (
                <li key={s}>• {s}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-blue-100/60">
        Rewards are limited. Ask your centre to confirm availability before you commit.
      </p>
    </Section>

    {/* Timeline */}
    <Section kicker="After October" title="Missed it? We’re still here">
      <div className="grid gap-6 md:grid-cols-3">
        {timeline.map((t) => (
          <div key={t.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="text-sm font-bold text-orange-300">{t.when}</p>
            <h3 className="mt-1 text-xl font-bold">{t.title}</h3>
            <p className="mt-2 text-sm text-blue-100/80">{t.text}</p>
          </div>
        ))}
      </div>
    </Section>

    {/* FAQ */}
    <Section kicker="Questions" title="Frequently asked questions">
      <EmberFaq items={faqs} />
    </Section>

    {/* Final CTA */}
    <section className="relative isolate overflow-hidden">
      <EmberBackground count={40} />
      <div className="relative z-10 mx-auto max-w-3xl px-6 py-24 text-center">
        <h2 className="text-4xl font-extrabold sm:text-5xl">
          Lock in now. <span className={gradientText}>Unlock more.</span>
        </h2>
        <p className="mt-4 text-blue-100/90">
          Don’t wait until the year is over to start your next chapter.
        </p>
        <div className="mt-8 flex justify-center">
          <CtaButtons />
        </div>
        <p className="mt-10 text-xs text-blue-100/50">
          Terms and conditions apply. Rewards are limited, assigned and subject
          to programme, qualifying payment and availability. Paid internship is
          subject to placement and provider requirements.
        </p>
      </div>
    </section>
  </main>
);

export default LockedInEmberPage;
