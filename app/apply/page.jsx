"use client";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Loader2, MapPin, ArrowRight, Flame } from "lucide-react";
import { COURSE } from "@/const";

const GOOGLE_SCRIPT_URL = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

const CENTRES = ["Agodi", "Ring Road", "Bodija"];

const STEPS = [
  { title: "Apply", text: "Tell us who you are and the course you want." },
  { title: "Talk to an advisor", text: "We call you to confirm your course, schedule and payment plan." },
  { title: "Start learning", text: "Secure your place and begin at your chosen centre." },
];

const emptyForm = { name: "", email: "", phone: "", centre: "", notes: "" };

const inputClass =
  "w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-white placeholder:text-white/40 outline-none transition focus:border-[#FFC107] focus:ring-2 focus:ring-[#FFC107]/30";

const validate = (form, course) => {
  const errors = {};
  if (form.name.trim().length < 2) errors.name = "Enter your full name.";
  if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) errors.email = "Enter a valid email address.";
  if (form.phone.replace(/\D/g, "").length < 10) errors.phone = "Enter a valid phone number.";
  if (!form.centre) errors.centre = "Choose a centre.";
  if (!course) errors.course = "Choose a course.";
  return errors;
};

const Field = ({ id, label, error, children }) => (
  <div>
    <label htmlFor={id} className="mb-1.5 block text-sm font-semibold text-white">
      {label}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} role="alert" className="mt-1 text-sm text-red-300">
        {error}
      </p>
    )}
  </div>
);

const Apply = () => {
  const [form, setForm] = useState(emptyForm);
  const [course, setCourse] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | sending | sent | failed
  const [honeypot, setHoneypot] = useState("");

  const update = (field) => (e) => {
    setForm((f) => ({ ...f, [field]: e.target.value }));
    if (errors[field]) setErrors((er) => ({ ...er, [field]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (honeypot) return; // bots fill hidden fields

    const found = validate(form, course);
    setErrors(found);
    if (Object.keys(found).length) return;

    if (!GOOGLE_SCRIPT_URL) {
      setStatus("failed");
      return;
    }

    setStatus("sending");
    try {
      // The same Google Apps Script used by the contact form. The extra context is
      // folded into `message` so it lands in the existing sheet columns.
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          course,
          centre: form.centre,
          message: `[APPLICATION] Course: ${course} | Centre: ${form.centre}${
            form.notes.trim() ? ` | Notes: ${form.notes.trim()}` : ""
          }`,
        }),
      });
      setStatus("sent");
      setForm(emptyForm);
      setCourse("");
    } catch (err) {
      console.error(err);
      setStatus("failed");
    }
  };

  const sending = status === "sending";

  return (
    <main className="min-h-screen bg-[#040d2e] text-white">
      {/* Intro */}
      <section className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute -top-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-[#FFC107]/10 blur-3xl" />
        <div className="relative mx-auto max-w-5xl px-6 pb-10 pt-16 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#FFC107]">
            Admissions
          </p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight sm:text-5xl">
            Start your application at Aptech Ibadan
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-gray-200">
            Tell us the course you want and the centre closest to you. An
            advisor will reach out to guide you through the next steps.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-6 pb-20 lg:grid-cols-[1fr_1.4fr]">
        {/* Side panel */}
        <aside className="space-y-6">
          <ol className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6">
            {STEPS.map((s, i) => (
              <li key={s.title} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#FFC107] text-sm font-bold text-black">
                  {i + 1}
                </span>
                <div>
                  <p className="font-semibold">{s.title}</p>
                  <p className="text-sm text-gray-300">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <Link
            href="/locked-in-ember"
            className="group flex items-center justify-between gap-4 rounded-2xl border border-orange-300/30 bg-gradient-to-br from-orange-500/20 to-red-500/10 p-6 transition hover:border-orange-300/60"
          >
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-200">
                <Flame size={14} /> Locked-In Ember · ends Oct 29
              </p>
              <p className="mt-1 font-semibold">
                Apply now to be in line for the campaign discount and rewards.
              </p>
            </div>
            <ArrowRight className="shrink-0 transition group-hover:translate-x-1" size={20} />
          </Link>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <p className="flex items-center gap-2 font-semibold">
              <MapPin size={16} className="text-[#FFC107]" /> Our centres
            </p>
            <p className="mt-1 text-sm text-gray-300">{CENTRES.join(" · ")}</p>
          </div>
        </aside>

        {/* Form */}
        <div className="rounded-2xl border border-white/10 bg-[#071347] p-6 sm:p-8">
          {status === "sent" ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="py-10 text-center"
              role="status"
            >
              <CheckCircle2 className="mx-auto text-green-400" size={56} />
              <h2 className="mt-4 text-2xl font-bold">Application received</h2>
              <p className="mx-auto mt-2 max-w-sm text-gray-200">
                Thank you. An advisor will contact you shortly to confirm your
                course and next steps.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-full border border-white/30 px-6 py-2.5 font-semibold transition hover:bg-white/10"
              >
                Submit another application
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              <h2 className="text-xl font-bold">Your details</h2>

              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Full name" error={errors.name}>
                  <input
                    id="name"
                    name="name"
                    autoComplete="name"
                    value={form.name}
                    onChange={update("name")}
                    placeholder="e.g. Ayo Adeyemi"
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? "name-error" : undefined}
                    className={inputClass}
                  />
                </Field>
                <Field id="phone" label="Phone / WhatsApp" error={errors.phone}>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="e.g. 0803 000 0000"
                    aria-invalid={!!errors.phone}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                    className={inputClass}
                  />
                </Field>
              </div>

              <Field id="email" label="Email address" error={errors.email}>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={form.email}
                  onChange={update("email")}
                  placeholder="you@example.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={inputClass}
                />
              </Field>

              <fieldset>
                <legend className="mb-1.5 block text-sm font-semibold">Preferred centre</legend>
                <div className="flex flex-wrap gap-3">
                  {CENTRES.map((c) => (
                    <label
                      key={c}
                      className={`cursor-pointer rounded-full border px-5 py-2 text-sm font-semibold transition ${
                        form.centre === c
                          ? "border-[#FFC107] bg-[#FFC107] text-black"
                          : "border-white/20 bg-white/5 text-white hover:border-white/50"
                      }`}
                    >
                      <input
                        type="radio"
                        name="centre"
                        value={c}
                        checked={form.centre === c}
                        onChange={update("centre")}
                        className="sr-only"
                      />
                      {c}
                    </label>
                  ))}
                </div>
                {errors.centre && (
                  <p role="alert" className="mt-1 text-sm text-red-300">{errors.centre}</p>
                )}
              </fieldset>

              <fieldset>
                <legend className="mb-1.5 block text-sm font-semibold">Course of interest</legend>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {COURSE.map((c) => (
                    <label
                      key={c}
                      className={`cursor-pointer rounded-lg border px-4 py-3 text-sm font-semibold transition ${
                        course === c
                          ? "border-[#FFC107] bg-[#FFC107]/15 text-[#FFC107]"
                          : "border-white/15 bg-white/5 text-white hover:border-white/40"
                      }`}
                    >
                      <input
                        type="radio"
                        name="course"
                        value={c}
                        checked={course === c}
                        onChange={() => {
                          setCourse(c);
                          if (errors.course) setErrors((er) => ({ ...er, course: undefined }));
                        }}
                        className="sr-only"
                      />
                      {c}
                    </label>
                  ))}
                </div>
                {errors.course && (
                  <p role="alert" className="mt-1 text-sm text-red-300">{errors.course}</p>
                )}
              </fieldset>

              <Field id="notes" label="Anything we should know? (optional)">
                <textarea
                  id="notes"
                  name="notes"
                  rows={3}
                  value={form.notes}
                  onChange={update("notes")}
                  placeholder="Preferred class schedule, questions about fees, etc."
                  className={inputClass}
                />
              </Field>

              {/* Honeypot: hidden from people, filled by bots */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="absolute -left-[9999px] h-0 w-0 opacity-0"
              />

              {status === "failed" && (
                <p role="alert" className="rounded-lg border border-red-400/40 bg-red-500/10 p-3 text-sm text-red-200">
                  We couldn’t send your application. Please try again, or{" "}
                  <Link href="/contact" className="underline">contact a centre</Link> directly.
                </p>
              )}

              <button
                type="submit"
                disabled={sending}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-[#FFC107] px-6 py-3.5 font-bold text-black transition hover:bg-yellow-300 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {sending ? (
                  <>
                    <Loader2 size={18} className="animate-spin" /> Sending…
                  </>
                ) : (
                  "Submit application"
                )}
              </button>
              <p className="text-center text-xs text-gray-400">
                We only use your details to contact you about your application.
              </p>
            </form>
          )}
        </div>
      </section>
    </main>
  );
};

export default Apply;
