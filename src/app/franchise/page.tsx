"use client";

import { useState } from "react";
import Link from "next/link";

type FormState = "idle" | "submitting" | "success" | "error";

const occupationOptions = [
  "Auto Shop Owner",
  "Automotive Technician",
  "Entrepreneur / Business Owner",
  "Investor",
  "Other",
];

const capitalOptions = [
  "Under $50,000",
  "$50,000 – $100,000",
  "$100,000 – $200,000",
  "$200,000+",
  "Prefer not to say",
];

export default function FranchisePage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
    occupation: "",
    capital: "",
    ownsBusiness: "",
    autoExperience: "",
    message: "",
  });

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function setToggle(field: "ownsBusiness" | "autoExperience", value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  async function handleSubmit(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("submitting");
    try {
      const res = await fetch("/api/franchise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", phone: "", location: "", occupation: "", capital: "", ownsBusiness: "", autoExperience: "", message: "" });
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
      <section className="pt-32 pb-0 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start pb-20">

            {/* Left — copy */}
            <div className="pt-4">
              <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
                Franchise Opportunities
              </p>
              <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
                OWN AN
                <br />ALL-OUT FRANCHISE.
              </h1>
              <p className="font-body text-[#888888] text-lg max-w-xl leading-relaxed mb-8">
                A proven auto services business — window tinting, PPF, ceramic
                coating, and vehicle wraps — refined over five years and two
                Louisiana locations. We&apos;re looking for the right operators to
                carry it further.
              </p>
              <div className="space-y-4 mb-10">
                {[
                  "Proven model — 5+ years, 1,000+ jobs, two locations",
                  "Multiple high-margin revenue streams under one roof",
                  "Low overhead — minimal staff, no perishables, lean operation",
                  "Full training provided — we teach the craft",
                  "Recession-resistant — people always need their vehicles serviced",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#a60303] rounded-full shrink-0 mt-2" />
                    <p className="font-body text-[#888888] text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
              <a
                href="tel:2252519184"
                className="font-display tracking-widest uppercase border border-white/20 hover:border-white text-white px-8 py-4 text-sm transition-colors duration-200 inline-block"
              >
                Call Us Directly — (225) 251-9184
              </a>
            </div>

            {/* Right — inquiry form */}
            <div className="bg-[#141414] border border-[#242424] p-8">
              <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-1">Start Here</p>
              <h2 className="font-display text-white text-2xl font-bold mb-6">FRANCHISE INQUIRY</h2>

              {formState === "success" ? (
                <div className="py-12 text-center">
                  <div className="w-12 h-12 border-2 border-[#a60303] rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-[#a60303]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="font-display text-white text-lg font-bold mb-2">INQUIRY RECEIVED</p>
                  <p className="font-body text-[#888888] text-sm leading-relaxed">
                    Dax or Reed will be in touch shortly. If you&apos;d prefer to talk now, call{" "}
                    <a href="tel:2252519184" className="text-[#a60303]">(225) 251-9184</a>.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-display text-xs tracking-widest uppercase text-[#888888] mb-2">
                        Full Name <span className="text-[#a60303]">*</span>
                      </label>
                      <input
                        type="text" name="name" value={form.name} onChange={handleChange} required
                        placeholder="John Smith"
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] focus:border-[#a60303] text-white font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-[#444]"
                      />
                    </div>
                    <div>
                      <label className="block font-display text-xs tracking-widest uppercase text-[#888888] mb-2">
                        Phone <span className="text-[#a60303]">*</span>
                      </label>
                      <input
                        type="tel" name="phone" value={form.phone} onChange={handleChange} required
                        placeholder="(225) 555-0100"
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] focus:border-[#a60303] text-white font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-[#444]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-display text-xs tracking-widest uppercase text-[#888888] mb-2">
                      Email <span className="text-[#a60303]">*</span>
                    </label>
                    <input
                      type="email" name="email" value={form.email} onChange={handleChange} required
                      placeholder="john@example.com"
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] focus:border-[#a60303] text-white font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-[#444]"
                    />
                  </div>

                  <div>
                    <label className="block font-display text-xs tracking-widest uppercase text-[#888888] mb-2">
                      Target Market / City <span className="text-[#a60303]">*</span>
                    </label>
                    <input
                      type="text" name="location" value={form.location} onChange={handleChange} required
                      placeholder="e.g. Lafayette, LA"
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] focus:border-[#a60303] text-white font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-[#444]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-display text-xs tracking-widest uppercase text-[#888888] mb-2">
                        Current Occupation
                      </label>
                      <select
                        name="occupation" value={form.occupation} onChange={handleChange}
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] focus:border-[#a60303] text-white font-body text-sm px-4 py-3 outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select…</option>
                        {occupationOptions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block font-display text-xs tracking-widest uppercase text-[#888888] mb-2">
                        Liquid Capital Available
                      </label>
                      <select
                        name="capital" value={form.capital} onChange={handleChange}
                        className="w-full bg-[#0a0a0a] border border-[#2a2a2a] focus:border-[#a60303] text-white font-body text-sm px-4 py-3 outline-none transition-colors appearance-none cursor-pointer"
                      >
                        <option value="">Select…</option>
                        {capitalOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-display text-xs tracking-widest uppercase text-[#888888] mb-2">
                        Currently Own a Business?
                      </label>
                      <div className="flex gap-3">
                        {["yes", "no"].map((v) => (
                          <button
                            key={v} type="button"
                            onClick={() => setToggle("ownsBusiness", v)}
                            className={`flex-1 font-display tracking-widest uppercase text-xs py-3 border transition-colors duration-200 ${
                              form.ownsBusiness === v
                                ? "bg-[#a60303] border-[#a60303] text-white"
                                : "bg-[#0a0a0a] border-[#2a2a2a] text-[#888888] hover:border-[#a60303]"
                            }`}
                          >
                            {v.charAt(0).toUpperCase() + v.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block font-display text-xs tracking-widest uppercase text-[#888888] mb-2">
                        Auto / Trades Experience?
                      </label>
                      <div className="flex gap-3">
                        {["yes", "no"].map((v) => (
                          <button
                            key={v} type="button"
                            onClick={() => setToggle("autoExperience", v)}
                            className={`flex-1 font-display tracking-widest uppercase text-xs py-3 border transition-colors duration-200 ${
                              form.autoExperience === v
                                ? "bg-[#a60303] border-[#a60303] text-white"
                                : "bg-[#0a0a0a] border-[#2a2a2a] text-[#888888] hover:border-[#a60303]"
                            }`}
                          >
                            {v.charAt(0).toUpperCase() + v.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block font-display text-xs tracking-widest uppercase text-[#888888] mb-2">
                      Tell Us About Yourself
                    </label>
                    <textarea
                      name="message" value={form.message} onChange={handleChange} rows={4}
                      placeholder="Background, goals, why All-Out, questions — anything that helps us get to know you."
                      className="w-full bg-[#0a0a0a] border border-[#2a2a2a] focus:border-[#a60303] text-white font-body text-sm px-4 py-3 outline-none transition-colors placeholder:text-[#444] resize-none"
                    />
                  </div>

                  {formState === "error" && (
                    <p className="font-body text-sm text-red-400">Something went wrong. Please try again or call us directly.</p>
                  )}

                  <button
                    type="submit"
                    disabled={formState === "submitting"}
                    className="w-full font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] disabled:opacity-50 text-white py-4 text-sm transition-colors duration-200"
                  >
                    {formState === "submitting" ? "Sending…" : "Submit Inquiry"}
                  </button>

                  <p className="font-body text-[#555] text-xs text-center leading-relaxed">
                    This is a no-obligation inquiry. We&apos;ll reach out to learn more — no pressure.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY ALL-OUT ── */}
      <section className="bg-[#141414] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">The Opportunity</p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">
              WHY THIS BUSINESS MODEL WORKS
            </h2>
            <p className="font-body text-[#888888] text-base mt-4 max-w-2xl mx-auto leading-relaxed">
              Auto services aren&apos;t going anywhere. There are over 280 million registered vehicles
              in the US, and the demand for window tinting, paint protection, and vehicle
              customization grows every year. All-Out is positioned to take that market — and
              franchise partners will own a piece of it.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#242424]">
            {[
              {
                headline: "Low Overhead",
                body: "Auto services run lean. Your biggest costs are labor, supplies, and space — not equipment-heavy buildouts or large floor teams. That translates to stronger margins than most franchise categories.",
              },
              {
                headline: "Recession-Resistant",
                body: "People don't stop driving when the economy slows — and they don't stop wanting their vehicles protected. Window tinting and PPF are protective investments, not luxuries, which insulates the business through economic cycles.",
              },
              {
                headline: "Multiple Revenue Streams",
                body: "A single All-Out location generates revenue from automotive tinting, residential tinting, commercial tinting, PPF, ceramic coating, vehicle wraps, marine services, and fleet accounts — not just one category.",
              },
            ].map((item) => (
              <div key={item.headline} className="bg-[#141414] p-8">
                <div className="w-8 h-0.5 bg-[#a60303] mb-5" />
                <h3 className="font-display text-white text-xl font-bold mb-3">{item.headline}</h3>
                <p className="font-body text-[#888888] text-sm leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SUPPORT ── */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">What You Get</p>
              <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
                YOU&apos;RE NOT
                <br /><span className="text-[#a60303]">BUILDING FROM ZERO.</span>
              </h2>
              <p className="font-body text-[#888888] text-base leading-relaxed">
                Five years of refining this business — the processes, the vendor relationships,
                the marketing, the installation techniques — transfers directly to our franchise
                partners. You start with a foundation we spent years building.
              </p>
            </div>
            <div className="space-y-0 divide-y divide-[#242424]">
              {[
                {
                  title: "Hands-On Training",
                  desc: "Spend time at our Gonzales or Baton Rouge location learning installation techniques, customer processes, and shop operations from Dax and Reed directly.",
                },
                {
                  title: "Proven Vendor Relationships",
                  desc: "Access to our film suppliers and System X ceramic products. We've already done the vetting — you get the relationships without the legwork.",
                },
                {
                  title: "Marketing & Digital Support",
                  desc: "Brand assets, local SEO guidance, social media templates, and the credibility of the All-Out name in your market.",
                },
                {
                  title: "Operational SOPs",
                  desc: "Documented processes for every service we offer — how we quote, how we install, how we handle customers. Consistency across every location.",
                },
                {
                  title: "Direct Founder Access",
                  desc: "You're not calling a corporate helpline. Dax and Reed are accessible. When you have a question or a problem, you get the people who built this.",
                },
                {
                  title: "Territory Protection",
                  desc: "Defined exclusive markets with Louisiana-first expansion. We protect your territory — no internal competition from other franchise units.",
                },
              ].map((item) => (
                <div key={item.title} className="py-5">
                  <h3 className="font-display text-white text-sm font-bold tracking-wide mb-1">{item.title}</h3>
                  <p className="font-body text-[#888888] text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── IDEAL PARTNER ── */}
      <section className="bg-[#141414] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">Who We&apos;re Looking For</p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">THE IDEAL PARTNER</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[#242424]">
            {[
              {
                type: "Auto Shop Owners",
                desc: "Already running a shop? Adding All-Out services under your roof — or opening a dedicated location — is a natural expansion with built-in customer overlap.",
              },
              {
                type: "Skilled Trades",
                desc: "If you&apos;ve worked in automotive, detailing, body work, or a precision trade, you already understand the craft. We build on that foundation.",
              },
              {
                type: "Entrepreneurs",
                desc: "You want to own and operate a real business. You&apos;re not afraid to put in the work. The industry experience matters less than the drive to build something.",
              },
              {
                type: "Investors",
                desc: "Looking to place capital into an operating business in a growing market? We can discuss what a manager-operated model looks like under the All-Out framework.",
              },
            ].map((item) => (
              <div key={item.type} className="bg-[#141414] p-8">
                <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-3">{item.type}</p>
                <p className="font-body text-[#888888] text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">How It Works</p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">THE PATH TO OPENING</h2>
          </div>
          <div className="space-y-0 divide-y divide-[#242424]">
            {[
              { step: "01", title: "Submit Your Inquiry", desc: "Fill out the form above. No obligation — just a starting point for the conversation." },
              { step: "02", title: "Discovery Call with the Founders", desc: "Dax or Reed calls you directly. We learn about your background, goals, and market. You ask us anything." },
              { step: "03", title: "Franchise Disclosure Review", desc: "We share the formal franchise disclosure documents. You review with your attorney or advisor — no rush." },
              { step: "04", title: "Territory Agreement", desc: "We define and formalize your exclusive market. Louisiana-first, with regional expansion on the roadmap." },
              { step: "05", title: "Hands-On Training", desc: "Come to our shop. Learn every service from the people who built the process. Leave knowing how to run it." },
              { step: "06", title: "Open Your Doors", desc: "Launch with the All-Out brand, processes, and support behind you. We don't disappear after you sign." },
            ].map((item) => (
              <div key={item.step} className="py-6 flex gap-8 items-start">
                <span className="font-display text-[#a60303] text-2xl font-bold shrink-0 w-10">{item.step}</span>
                <div>
                  <h3 className="font-display text-white text-base font-bold mb-1 tracking-wide">{item.title}</h3>
                  <p className="font-body text-[#888888] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOUNDERS NOTE ── */}
      <section className="bg-[#141414] py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-6">From Dax & Reed</p>
          <blockquote className="font-display text-white text-2xl md:text-3xl font-bold leading-tight mb-8">
            &ldquo;WE OPENED ALL-OUT DURING COVID WITH NOTHING BUT A SKILL SET AND A WORK ETHIC. FIVE YEARS LATER, WE HAVE TWO LOCATIONS AND A MODEL THAT WORKS. WE WANT TO PUT THAT IN THE RIGHT HANDS.&rdquo;
          </blockquote>
          <p className="font-body text-[#888888] text-base leading-relaxed">
            We&apos;re not trying to build a corporate franchise empire. We&apos;re looking for operators
            who take pride in their work the same way we do. If that&apos;s you, we want to talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <a
              href="#inquiry"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] text-white px-8 py-4 text-sm transition-colors duration-200"
            >
              Submit an Inquiry
            </a>
            <a
              href="tel:2252519184"
              className="font-display tracking-widest uppercase border border-white/30 hover:border-white text-white px-8 py-4 text-sm transition-colors duration-200"
            >
              (225) 251-9184
            </a>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">FAQ</p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">COMMON QUESTIONS</h2>
          </div>
          <div className="space-y-0 divide-y divide-[#242424]">
            {[
              {
                q: "Do I need experience in window tinting or auto services?",
                a: "No prior tinting or automotive experience is required. We provide hands-on training at our location before you open. That said, existing auto shop owners or anyone with a skilled trades background will find a natural fit.",
              },
              {
                q: "What does it cost to open an All-Out franchise?",
                a: "We're in early-stage franchise development and work through costs with each candidate individually based on market and build-out requirements. We're not a national franchise with fixed fee schedules — we structure things to set partners up for success, not to maximize upfront fees.",
              },
              {
                q: "What markets are available?",
                a: "We're expanding Louisiana-first — cities like Lafayette, Lake Charles, Shreveport, Alexandria, and the Northshore are on our radar. Regional expansion beyond Louisiana follows once the Louisiana footprint is established.",
              },
              {
                q: "How long does the process take from inquiry to opening?",
                a: "It varies by candidate and market, but from initial inquiry to doors open typically takes several months. We move at a pace that sets you up properly, not as fast as possible.",
              },
              {
                q: "Is this a hands-on or absentee ownership model?",
                a: "All-Out is built around operator-owners who are present and invested in their shop. We can discuss what a managed model looks like for investor candidates, but our best franchise matches are people who want to run the business.",
              },
            ].map((item) => (
              <div key={item.q} className="py-6">
                <h3 className="font-display text-white text-base font-bold mb-3 tracking-wide">{item.q}</h3>
                <p className="font-body text-[#888888] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#a60303] py-16 px-6 text-center">
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">READY TO OWN YOUR MARKET?</h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">
          Submit an inquiry or call us directly. This is a conversation, not a pitch.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="font-display tracking-widest uppercase bg-white text-[#a60303] hover:bg-[#f0f0f0] px-8 py-4 text-sm transition-colors duration-200"
          >
            Submit Inquiry
          </a>
          <a
            href="tel:2252519184"
            className="font-display tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[#a60303] px-8 py-4 text-sm transition-colors duration-200"
          >
            (225) 251-9184
          </a>
          <Link
            href="/about"
            className="font-display tracking-widest uppercase border border-white/50 text-white/80 hover:border-white hover:text-white px-8 py-4 text-sm transition-colors duration-200"
          >
            Meet the Founders →
          </Link>
        </div>
      </section>
    </>
  );
}
