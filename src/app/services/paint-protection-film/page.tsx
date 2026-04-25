import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paint Protection Film (PPF) | All-Out Window Tint",
  description:
    "PPF installation in Gonzales and Baton Rouge, LA. Self-healing paint protection film guards against rock chips, scratches, and road debris. Full and partial coverage. Call (225) 251-9184.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is paint protection film (PPF)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PPF is a clear, urethane-based film applied to your vehicle's painted surfaces. It absorbs impacts from rock chips, road debris, and minor scratches before they can damage your paint. High-quality PPF is also self-healing — minor scratches disappear with heat.",
      },
    },
    {
      "@type": "Question",
      name: "Can PPF be applied to just part of my vehicle?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We install PPF on full vehicles, partial front ends (hood, fenders, bumper, mirrors), rocker panels, door edges, and any other high-impact areas. Partial coverage is a great way to protect the most vulnerable areas without covering the entire vehicle.",
      },
    },
    {
      "@type": "Question",
      name: "How long does paint protection film last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quality PPF typically lasts 5–10 years depending on the product and how the vehicle is maintained. It's UV-resistant and won't yellow over time with a quality film.",
      },
    },
    {
      "@type": "Question",
      name: "Can PPF be combined with window tinting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely, and we recommend it. PPF protects your paint, window tinting protects your interior and reduces heat — together they're the most comprehensive protection package you can put on a vehicle.",
      },
    },
  ],
};

export default function PPFPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 font-body text-xs text-[#555] mb-6">
            <Link href="/services" className="hover:text-[#a60303] transition-colors">Services</Link>
            <span>/</span>
            <span className="text-white">Paint Protection Film</span>
          </nav>
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
            Paint Protection Film
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            PPF INSTALLATION IN
            <br />GONZALES & BATON ROUGE, LA
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            Invisible armor for your paint. Self-healing PPF absorbs rock chips,
            road debris, and minor scratches before they reach your finish —
            keeping your vehicle looking factory fresh for years.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/contact"
              className="font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] text-white px-8 py-4 text-sm transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:2252519184"
              className="font-display tracking-widest uppercase border border-white/30 hover:border-white text-white px-8 py-4 text-sm transition-colors duration-200"
            >
              (225) 251-9184
            </a>
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="bg-[#0a0a0a] pb-4 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-1">
          {[
            { src: "/images/process-ppf-hood.jpg", alt: "PPF application on hood" },
            { src: "/images/process-ppf-install.jpg", alt: "PPF installation" },
            { src: "/images/auto-corvette-z06-dramatic.jpg", alt: "Corvette Z06 with PPF" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Details */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
              THE GOLD STANDARD IN
              <br /><span className="text-[#a60303]">PAINT PRESERVATION.</span>
            </h2>
            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                Paint Protection Film is the most effective way to preserve
                your vehicle&apos;s finish. Louisiana highways, gravel roads, and
                construction zones send rocks and debris flying at your paint
                every day. Without protection, that means chips, scratches, and
                a deteriorating finish that hurts resale value.
              </p>
              <p>
                Our PPF is applied with precision-cut patterns tailored to
                your exact vehicle. It&apos;s optically clear — once installed, you
                won&apos;t see it. High-end PPF is also self-healing: minor surface
                scratches disappear on their own with heat from the sun or warm
                water. Your paint stays protected without any visible compromise.
              </p>
              <p>
                We install PPF on everything from daily drivers to high-end
                exotics, and we offer both full-vehicle coverage and targeted
                partial installs on the areas that take the most impact.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-display text-white text-xl font-bold mb-6 tracking-wide">COVERAGE OPTIONS</h3>
            <div className="space-y-4 mb-8">
              {[
                {
                  title: "Full Vehicle",
                  desc: "Complete PPF coverage from front bumper to rear. Maximum protection for high-value vehicles.",
                },
                {
                  title: "Partial Front End",
                  desc: "Hood, fenders, front bumper, and mirrors. Covers the most rock-chip-prone surfaces at a fraction of full-vehicle cost.",
                },
                {
                  title: "Rocker Panels",
                  desc: "Protects the lower sides of your vehicle from road debris, gravel, and parking lot hazards.",
                },
                {
                  title: "Door Edges & Cups",
                  desc: "Targeted protection on door edges and cup handles — the spots most prone to chipping and scratching.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-1 bg-[#a60303] shrink-0 rounded-full" />
                  <div>
                    <h4 className="font-display text-white text-sm tracking-wide mb-1">{item.title}</h4>
                    <p className="font-body text-[#888888] text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Two locations */}
      <section className="bg-[#141414] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">Two Locations</p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">PPF INSTALLATION NEAR YOU</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#242424]">
            {[
              {
                city: "Gonzales",
                tag: "Original Location",
                address: "43469 Cannon Road, Gonzales, LA 70737",
                href: "/services/paint-protection-film/gonzales",
              },
              {
                city: "Baton Rouge",
                tag: "Now Open",
                address: "7987 Pecue Lane, Suite 7G, Baton Rouge, LA 70809",
                href: "/services/paint-protection-film/baton-rouge",
              },
            ].map((loc) => (
              <div key={loc.city} className="bg-[#141414] p-10">
                <span className="font-display text-[#a60303] tracking-[0.25em] uppercase text-xs mb-4 inline-block">{loc.tag}</span>
                <h3 className="font-display text-white text-3xl font-bold mb-3">{loc.city}</h3>
                <p className="font-body text-white text-sm mb-6">{loc.address}</p>
                <Link
                  href={loc.href}
                  className="font-display tracking-widest uppercase border border-[#a60303] text-[#a60303] hover:bg-[#a60303] hover:text-white px-6 py-3 text-xs transition-colors duration-200 inline-block"
                >
                  PPF in {loc.city} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">FAQ</p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">COMMON QUESTIONS</h2>
          </div>
          <div className="space-y-0 divide-y divide-[#242424]">
            {[
              {
                q: "What is paint protection film?",
                a: "PPF is a clear urethane film applied to your vehicle's painted surfaces. It absorbs impacts from rock chips, road debris, and minor scratches before they reach your paint. High-quality PPF is also self-healing.",
              },
              {
                q: "Can PPF be applied to just part of my vehicle?",
                a: "Yes. We install PPF on full vehicles, partial front ends, rocker panels, door edges, and any high-impact area. Partial coverage is a great way to protect the most vulnerable areas without covering the whole vehicle.",
              },
              {
                q: "How long does PPF last?",
                a: "Quality PPF typically lasts 5–10 years depending on the product and maintenance. It's UV-resistant and won't yellow over time.",
              },
              {
                q: "Can PPF be combined with window tinting?",
                a: "Absolutely. PPF protects your paint, window tinting protects your interior and reduces heat — together they're the most comprehensive protection package you can put on a vehicle.",
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

      {/* CTA */}
      <section className="bg-[#a60303] py-16 px-6 text-center">
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">
          PROTECT YOUR PAINT TODAY
        </h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">
          Free estimates at both Gonzales and Baton Rouge. Call or fill out the form.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:2252519184" className="font-display tracking-widest uppercase bg-white text-[#a60303] hover:bg-[#f0f0f0] px-8 py-4 text-sm transition-colors duration-200">
            (225) 251-9184
          </a>
          <Link href="/contact" className="font-display tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[#a60303] px-8 py-4 text-sm transition-colors duration-200">
            Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
