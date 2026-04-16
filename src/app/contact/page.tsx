"use client";

import { useState } from "react";
import Link from "next/link";

const referralOptions = [
  "Google Search",
  "Facebook",
  "Instagram",
  "Friend or Family",
  "Returning Customer",
  "Saw the Shop",
  "Other",
];

const serviceOptions = [
  "Ceramic Coating",
  "Paint Protection Film",
  "Vehicle Wraps & Vinyl",
  "Commercial Tinting",
  "Automotive Tinting",
  "Marine Tinting & Wraps",
  "Residential Tinting",
  "Other / Not Sure",
];

type FormState = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    location: "",
    name: "",
    phone: "",
    email: "",
    service: "",
    vehicle: "",
    referral: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setFormState("success");
        setForm({ location: "", name: "", phone: "", email: "", service: "", vehicle: "", referral: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  }

  return (
    <>
      {/* ── HERO ── */}
      <section className="bg-[#0a0a0a] pt-36 pb-16 px-6 border-b border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
            Get In Touch
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold leading-tight mb-4">
            REQUEST A FREE QUOTE
          </h1>
          <p className="font-body text-[#888888] text-base max-w-xl leading-relaxed">
            Fill out the form below and we&apos;ll get back to you fast — usually
            same day. Or give us a call if you prefer to talk directly.
            Serving Gonzales and Baton Rouge, LA.
          </p>
        </div>
      </section>

      {/* ── LOCATION CARDS ── */}
      <section className="bg-[#0a0a0a] py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-px bg-[#1e1e1e]">
          {/* Gonzales */}
          <div className="bg-[#0a0a0a] p-8">
            <span className="font-display text-[#a60303] tracking-[0.25em] uppercase text-xs mb-3 inline-block">
              Original Location
            </span>
            <h2 className="font-display text-white text-xl font-bold mb-4">Gonzales</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#a60303] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                <div>
                  <a
                    href="https://maps.google.com/?q=43469+Cannon+Road,+Gonzales,+LA+70737"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-white text-sm hover:text-[#a60303] transition-colors leading-relaxed"
                  >
                    43469 Cannon Road<br />Gonzales, LA 70737
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#a60303] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.59 1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>
                <a href="tel:2253811000" className="font-body text-white text-sm hover:text-[#a60303] transition-colors duration-200">
                  (225) 381-1000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#a60303] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
                <span className="font-body text-white text-sm">Mon – Fri: 9AM – 5PM · Sat–Sun: By Appt</span>
              </div>
            </div>
            <Link
              href="/locations/gonzales"
              className="mt-5 inline-block font-display tracking-widest uppercase border border-[#2a2a2a] hover:border-[#a60303] text-white hover:text-[#a60303] px-5 py-2.5 text-xs transition-colors duration-200"
            >
              Location Details
            </Link>
          </div>

          {/* Baton Rouge */}
          <div className="bg-[#0a0a0a] p-8">
            <span className="font-display text-[#a60303] tracking-[0.25em] uppercase text-xs mb-3 inline-block">
              Now Open
            </span>
            <h2 className="font-display text-white text-xl font-bold mb-4">Baton Rouge</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#a60303] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                <div>
                  <a
                    href="https://maps.google.com/?q=7987+Pecue+Lane,+Baton+Rouge,+LA+70809"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-white text-sm hover:text-[#a60303] transition-colors leading-relaxed"
                  >
                    7987 Pecue Lane, Suite 7G<br />Baton Rouge, LA 70809
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#a60303] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.59 1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>
                <a href="tel:2253811000" className="font-body text-white text-sm hover:text-[#a60303] transition-colors duration-200">
                  (225) 381-1000
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#a60303] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
                <span className="font-body text-white text-sm">Mon – Fri: 9AM – 5PM · Sat–Sun: By Appt</span>
              </div>
            </div>
            <Link
              href="/locations/baton-rouge"
              className="mt-5 inline-block font-display tracking-widest uppercase border border-[#2a2a2a] hover:border-[#a60303] text-white hover:text-[#a60303] px-5 py-2.5 text-xs transition-colors duration-200"
            >
              Location Details
            </Link>
          </div>
        </div>
      </section>

      {/* ── FORM + SIDEBAR ── */}
      <section className="bg-[#0a0a0a] pb-28 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16">

          {/* Form */}
          <div className="lg:col-span-2">
            {formState === "success" ? (
              <div className="border border-[#a60303] p-10 text-center">
                <svg className="w-12 h-12 text-[#a60303] mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h2 className="font-display text-white text-2xl font-bold mb-2">
                  WE&apos;VE GOT YOUR REQUEST
                </h2>
                <p className="font-body text-[#888888] text-sm leading-relaxed">
                  We&apos;ll reach out shortly — usually the same day. If it&apos;s urgent,
                  give us a call at{" "}
                  <a href="tel:2253811000" className="text-[#a60303] hover:underline">
                    (225) 381-1000
                  </a>.
                </p>
                <button
                  onClick={() => setFormState("idle")}
                  className="mt-8 font-display tracking-widest uppercase border border-[#a60303] text-[#a60303] hover:bg-[#a60303] hover:text-white px-6 py-3 text-sm transition-colors duration-200"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-display text-xs tracking-widest uppercase text-[#888888] mb-2">
                    Preferred Location <span className="text-[#a60303]">*</span>
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    {["Gonzales", "Baton Rouge"].map((loc) => (
                      <button
                        key={loc}
                        type="button"
                        onClick={() => setForm((prev) => ({ ...prev, location: loc }))}
                        className={`font-display tracking-widest uppercase text-sm px-4 py-3 border transition-colors duration-200 ${
                          form.location === loc
                            ? "bg-[#a60303] border-[#a60303] text-white"
                            : "bg-[#141414] border-[#2a2a2a] text-[#888888] hover:border-[#a60303] hover:text-white"
                        }`}
                      >
                        {loc}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-display text-xs tracking-widest uppercase text-[#888888] mb-2">
                      Full Name <span className="text-[#a60303]">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="John Smith"
                      className="w-full bg-[#141414] border border-[#2a2a2a] focus:border-[#a60303] text-white font-body text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-[#444]"
                    />
                  </div>
                  <div>
                    <label className="block font-display text-xs tracking-widest uppercase text-[#888888] mb-2">
                      Phone <span className="text-[#a60303]">*</span>
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="(225) 555-0100"
                      className="w-full bg-[#141414] border border-[#2a2a2a] focus:border-[#a60303] text-white font-body text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-[#444]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-display text-xs tracking-widest uppercase text-[#888888] mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-[#141414] border border-[#2a2a2a] focus:border-[#a60303] text-white font-body text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-[#444]"
                  />
                </div>

                <div>
                  <label className="block font-display text-xs tracking-widest uppercase text-[#888888] mb-2">
                    Service Needed <span className="text-[#a60303]">*</span>
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#141414] border border-[#2a2a2a] focus:border-[#a60303] text-white font-body text-sm px-4 py-3 outline-none transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Select a service…</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-display text-xs tracking-widest uppercase text-[#888888] mb-2">
                    Year, Make &amp; Model{" "}
                    <span className="text-[#555] normal-case font-body tracking-normal">(if applicable)</span>
                  </label>
                  <input
                    type="text"
                    name="vehicle"
                    value={form.vehicle}
                    onChange={handleChange}
                    placeholder="2022 Chevrolet Silverado 1500"
                    className="w-full bg-[#141414] border border-[#2a2a2a] focus:border-[#a60303] text-white font-body text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-[#444]"
                  />
                </div>

                <div>
                  <label className="block font-display text-xs tracking-widest uppercase text-[#888888] mb-2">
                    How Did You Find Us?{" "}
                    <span className="text-[#555] normal-case font-body tracking-normal">(optional)</span>
                  </label>
                  <select
                    name="referral"
                    value={form.referral}
                    onChange={handleChange}
                    className="w-full bg-[#141414] border border-[#2a2a2a] focus:border-[#a60303] text-white font-body text-sm px-4 py-3 outline-none transition-colors duration-200 appearance-none cursor-pointer"
                  >
                    <option value="">Select an option…</option>
                    {referralOptions.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block font-display text-xs tracking-widest uppercase text-[#888888] mb-2">
                    Additional Details
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us anything else that's helpful — window count, tint shade preference, timeline, etc."
                    className="w-full bg-[#141414] border border-[#2a2a2a] focus:border-[#a60303] text-white font-body text-sm px-4 py-3 outline-none transition-colors duration-200 placeholder:text-[#444] resize-none"
                  />
                </div>

                {formState === "error" && (
                  <p className="font-body text-sm text-red-400">
                    Something went wrong. Please try again or call us directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formState === "submitting"}
                  className="font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] disabled:opacity-50 disabled:cursor-not-allowed text-white px-10 py-4 text-sm transition-colors duration-200"
                >
                  {formState === "submitting" ? "Sending…" : "Send My Request"}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            <div className="border border-[#1e1e1e] p-6">
              <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-3">
                Prefer to Call?
              </p>
              <a
                href="tel:2253811000"
                className="font-display text-white text-2xl font-bold hover:text-[#a60303] transition-colors duration-200 block mb-2"
              >
                (225) 381-1000
              </a>
              <p className="font-body text-[#888888] text-sm leading-relaxed">
                Mon – Fri, 9AM – 5PM. We&apos;re happy to walk you through options
                and give you a ballpark over the phone.
              </p>
            </div>

            <div className="border border-[#1e1e1e] p-6">
              <p className="font-display text-white tracking-widest uppercase text-xs mb-5">
                What to Expect
              </p>
              <ul className="space-y-4">
                {[
                  { step: "01", text: "Submit your request or give us a call." },
                  { step: "02", text: "We'll review and reply with a quote — usually same day." },
                  { step: "03", text: "Schedule a drop-off time that works for you." },
                  { step: "04", text: "Pick up your vehicle looking sharp." },
                ].map((item) => (
                  <li key={item.step} className="flex gap-4">
                    <span className="font-display text-[#a60303] text-sm shrink-0 pt-0.5">{item.step}</span>
                    <p className="font-body text-[#888888] text-sm leading-relaxed">{item.text}</p>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[#1e1e1e] p-6">
              <p className="font-display text-white tracking-widest uppercase text-xs mb-4">
                Follow Our Work
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/alloutwindowtintllc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm text-[#888888] hover:text-[#a60303] transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                  </svg>
                  Facebook
                </a>
                <span className="text-[#2a2a2a]">|</span>
                <a
                  href="https://www.instagram.com/alloutwindowtint"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-body text-sm text-[#888888] hover:text-[#a60303] transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="17.5" cy="6.5" r="1.5"/>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
