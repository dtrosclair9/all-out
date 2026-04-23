import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ceramic Coating in Gonzales & Baton Rouge, LA | All-Out Window Tint",
  description:
    "Authorized System X ceramic coating installer in Gonzales and Baton Rouge, LA. Automotive, marine, and aviation protection. Lifetime warranty available. Free quotes at both locations. Call (225) 381-1000.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is ceramic coating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ceramic coating is a liquid polymer that bonds chemically to your vehicle's paint, glass, or gelcoat. Once cured, it forms a hard, hydrophobic layer that repels water and contaminants, resists UV damage, and makes surfaces dramatically easier to clean. It is not a wax or sealant — it bonds permanently and lasts years, not weeks.",
      },
    },
    {
      "@type": "Question",
      name: "What is System X ceramic coating?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "System X is a professional-grade ceramic coating brand widely regarded as one of the most trusted in the industry. We use System X's automotive, marine, and aviation product lines — each formulated specifically for the demands of those surfaces and environments.",
      },
    },
    {
      "@type": "Question",
      name: "How long does ceramic coating last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "System X automotive ceramic coating carries a lifetime warranty. Marine coating carries a 5-year warranty. Aviation coating carries a 10-year warranty. Longevity depends on preparation quality and maintenance — we prep every surface thoroughly before application.",
      },
    },
    {
      "@type": "Question",
      name: "Can I combine ceramic coating with window tint or PPF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — and it's a great combination. Ceramic coating on the paint, PPF on high-impact areas, and tint on the glass gives you complete protection coverage. We can package all three or apply them independently depending on your goals.",
      },
    },
    {
      "@type": "Question",
      name: "Do you coat boats and aircraft?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We apply System X Marine Protection to boats and watercraft and System X Aviation Protection to aircraft. Each product is engineered for the UV exposure, moisture, and environmental demands of those environments — it's not a car product applied to a boat.",
      },
    },
  ],
};

export default function CeramicCoatingPage() {
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
            <span className="text-white">Ceramic Coating</span>
          </nav>
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
            Authorized System X Installer
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            CERAMIC COATING IN
            <br />GONZALES & BATON ROUGE, LA
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            Professional System X ceramic coating for cars, trucks, boats, and
            aircraft. A permanent protective bond that repels water, resists UV,
            and keeps your investment looking new — applied at both locations.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/contact"
              className="font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] text-white px-8 py-4 text-sm transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:2253811000"
              className="font-display tracking-widest uppercase border border-white/30 hover:border-white text-white px-8 py-4 text-sm transition-colors duration-200"
            >
              (225) 381-1000
            </a>
          </div>
        </div>
      </section>

      {/* System X hero graphic */}
      <section className="bg-[#0a0a0a] pb-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative w-full overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {/* Left: Lamborghini graphic */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src="/images/system-x-logo.jpg"
                  alt="System X Ceramic Protection — red Lamborghini"
                  fill
                  className="object-cover object-center"
                />
              </div>
              {/* Right: text only */}
              <div className="relative bg-[#1a1a1a] flex items-center justify-center p-8 md:p-12">
                <div>
                  <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-xs mb-4">Authorized Installer</p>
                  <p className="font-display text-white text-xl md:text-2xl font-bold leading-tight">
                    WE USE SYSTEM X.<br />BECAUSE THE BEST PRODUCTS<br />GET THE BEST RESULTS.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
              NOT A WAX.
              <br /><span className="text-[#a60303]">A PERMANENT BOND.</span>
            </h2>
            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                Wax sits on top of your paint and washes away. Ceramic coating
                bonds chemically to the surface at a molecular level. Once it
                cures, you have a hard, hydrophobic layer that water beads off
                of, contaminants can&apos;t grip, and UV rays can&apos;t penetrate. It
                doesn&apos;t wear off in a few weeks — it lasts for years.
              </p>
              <p>
                We chose System X because it&apos;s one of the most trusted
                professional-grade ceramic coating brands in the industry.
                System X engineers a dedicated product for automotive, marine,
                and aviation surfaces — each formulated for the specific demands
                of that environment. We&apos;re applying the right product to the
                right surface every time.
              </p>
              <p>
                Prep work is everything. Before we apply a single drop of
                ceramic, we decontaminate, polish if needed, and make sure the
                surface is in the right condition to accept the coating. That&apos;s
                what separates a coating that lasts years from one that fails in
                months.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-[#141414] border border-[#242424] p-6">
              <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-3">What Ceramic Coating Does</p>
              <ul className="space-y-3">
                {[
                  "Bonds permanently to paint, glass, gelcoat, or aircraft surfaces",
                  "Hydrophobic — water and contaminants bead and roll off",
                  "Blocks UV rays that fade paint, gelcoat, and clear coat",
                  "Dramatically easier to clean and maintain",
                  "Adds depth and gloss to the finish",
                  "Resists chemical stains, bird droppings, tree sap",
                  "Protects against minor scratches and swirl marks",
                ].map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 bg-[#a60303] rounded-full shrink-0 mt-1.5" />
                    <span className="font-body text-[#888888] text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* System X product lines */}
      <section className="bg-[#141414] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          {/* System X logo banner */}
          <div className="flex justify-center mb-12">
            <Image
              src="/images/system-x-banner.jpg"
              alt="System X Ceramic Protection"
              width={1200}
              height={630}
              className="w-full max-w-2xl h-auto"
            />
          </div>

          <div className="text-center mb-14">
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">THREE LINES. ONE STANDARD.</h2>
            <p className="font-body text-[#888888] text-base mt-4 max-w-xl mx-auto">
              System X engineers a dedicated product for each environment — automotive, marine, and aviation. We carry and apply all three.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#242424]">
            {[
              {
                line: "Automotive",
                product: "System X Automotive Protection",
                warranty: "Lifetime Warranty",
                desc: "The flagship coating for cars, trucks, SUVs, and exotics. Bonds to painted surfaces, glass, trim, and wheels. A permanent shield against Louisiana heat, road contamination, and UV exposure.",
                features: [
                  "Paint, glass, trim & wheels",
                  "Hydrophobic self-cleaning effect",
                  "UV and oxidation protection",
                  "Deep gloss enhancement",
                  "Lifetime warranty",
                ],
                highlight: true,
              },
              {
                line: "Marine",
                product: "System X Marine Protection",
                warranty: "5-Year Warranty",
                desc: "Formulated for the high-UV, high-salt, high-moisture demands of watercraft. Protects gelcoat, fiberglass, and painted surfaces on pontoons, center consoles, fishing boats, and yachts.",
                features: [
                  "Gelcoat & fiberglass surfaces",
                  "Salt and moisture resistance",
                  "UV protection on open water",
                  "Reduces oxidation and staining",
                  "5-year warranty",
                ],
                highlight: false,
              },
              {
                line: "Aviation",
                product: "System X Aviation Protection",
                warranty: "10-Year Warranty",
                desc: "Professional-grade protection for aircraft surfaces. Engineered to handle extreme UV exposure, altitude temperature swings, and the rigorous cleaning protocols aviation demands.",
                features: [
                  "Aircraft paint & surfaces",
                  "Extreme UV and altitude resistance",
                  "Easy maintenance between services",
                  "Compatible with aviation cleaning standards",
                  "10-year warranty",
                ],
                highlight: false,
              },
            ].map((item) => (
              <div key={item.line} className={`bg-[#141414] p-8 relative ${item.highlight ? "border-t-2 border-t-[#a60303]" : ""}`}>
                {item.highlight && (
                  <span className="absolute -top-3 left-8 bg-[#a60303] font-display text-white text-xs tracking-widest uppercase px-3 py-1">
                    Most Popular
                  </span>
                )}
                <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-2">{item.line}</p>
                <h3 className="font-display text-white text-xl font-bold mb-1 leading-tight">{item.product}</h3>
                <p className="font-display text-white/40 text-xs tracking-widest uppercase mb-4">{item.warranty}</p>
                <p className="font-body text-[#888888] text-sm leading-relaxed mb-6">{item.desc}</p>
                <ul className="space-y-2">
                  {item.features.map((f) => (
                    <li key={f} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-[#a60303] rounded-full shrink-0" />
                      <span className="font-body text-[#888888] text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authorized installer callout */}
      <section className="bg-[#0a0a0a] py-16 px-6 border-y border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="shrink-0">
            <Image
              src="/images/system-x-banner.jpg"
              alt="System X Ceramic Protection"
              width={400}
              height={210}
              className="w-64 h-auto"
            />
          </div>
          <div>
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-xs mb-3">Why It Matters</p>
            <h2 className="font-display text-white text-2xl md:text-3xl font-bold mb-4 leading-tight">
              AUTHORIZED SYSTEM X INSTALLER
            </h2>
            <p className="font-body text-[#888888] text-sm leading-relaxed max-w-2xl">
              System X is a professional-only product — it&apos;s not available off the shelf.
              As an authorized installer, All-Out Window Tint applies System X using the
              manufacturer&apos;s protocols and prep standards so the coating performs exactly
              as designed. That means you get the full warranty backing and the results
              System X is known for — not a DIY knockoff at a premium price.
            </p>
          </div>
        </div>
      </section>

      {/* Pairing section */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">Complete Protection</p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
              PAIR IT WITH
              <br /><span className="text-[#a60303]">TINT & PPF.</span>
            </h2>
            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                Ceramic coating is the finishing layer. For maximum protection,
                combine it with Paint Protection Film on your high-impact zones
                and window tint on your glass. PPF physically absorbs road
                debris and rock chips. Tint blocks heat and UV through the
                glass. Ceramic locks in the paint.
              </p>
              <p>
                We do all three in-house at both locations, so you can bundle
                the work, cut down on shop visits, and know everything was
                installed by the same team.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/services/paint-protection-film" className="font-display tracking-widest uppercase border border-[#2a2a2a] hover:border-[#a60303] text-white hover:text-[#a60303] px-5 py-3 text-xs transition-colors duration-200">Paint Protection Film →</Link>
              <Link href="/services/automotive-tinting" className="font-display tracking-widest uppercase border border-[#2a2a2a] hover:border-[#a60303] text-white hover:text-[#a60303] px-5 py-3 text-xs transition-colors duration-200">Automotive Tinting →</Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-px bg-[#242424]">
            {[
              { label: "Ceramic Coating", desc: "Bonds to paint, repels everything", icon: "◈" },
              { label: "Paint Protection Film", desc: "Physical barrier against rock chips", icon: "◉" },
              { label: "Window Tint", desc: "Blocks heat and UV through glass", icon: "◫" },
              { label: "All Three Combined", desc: "Complete protection, one shop", icon: "◎" },
            ].map((item) => (
              <div key={item.label} className="bg-[#141414] p-6">
                <p className="font-display text-[#a60303] text-xl mb-3">{item.icon}</p>
                <p className="font-display text-white text-sm font-bold mb-1">{item.label}</p>
                <p className="font-body text-[#888888] text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two locations */}
      <section className="bg-[#141414] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">Two Locations</p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">
              CERAMIC COATING NEAR YOU
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#242424]">
            {[
              {
                city: "Gonzales",
                tag: "Original Location",
                address: "43469 Cannon Road, Gonzales, LA 70737",
                phone: "(225) 381-1000",
                areas: "Serving Prairieville, Sorrento, Geismar & Ascension Parish",
              },
              {
                city: "Baton Rouge",
                tag: "Now Open",
                address: "7987 Pecue Lane, Suite 7G, Baton Rouge, LA 70809",
                phone: "(225) 381-1000",
                areas: "Serving Central, Denham Springs, Walker & East Baton Rouge Parish",
              },
            ].map((loc) => (
              <div key={loc.city} className="bg-[#141414] p-10">
                <span className="font-display text-[#a60303] tracking-[0.25em] uppercase text-xs mb-4 inline-block">{loc.tag}</span>
                <h3 className="font-display text-white text-3xl font-bold mb-3">{loc.city}</h3>
                <p className="font-body text-white text-sm mb-1">{loc.address}</p>
                <a href="tel:2253811000" className="font-body text-white text-sm hover:text-[#a60303] transition-colors block mb-2">{loc.phone}</a>
                <p className="font-body text-[#888888] text-xs mb-6">{loc.areas}</p>
                <Link
                  href="/contact"
                  className="font-display tracking-widest uppercase border border-[#a60303] text-[#a60303] hover:bg-[#a60303] hover:text-white px-6 py-3 text-xs transition-colors duration-200 inline-block"
                >
                  Get a Quote in {loc.city} →
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
                q: "What is ceramic coating?",
                a: "Ceramic coating is a liquid polymer that bonds chemically to your vehicle's paint, glass, or gelcoat. Once cured, it creates a hard, hydrophobic layer that repels water and contaminants, resists UV damage, and makes surfaces dramatically easier to clean. It's not a wax or sealant — it bonds permanently and lasts years, not weeks.",
              },
              {
                q: "What is System X?",
                a: "System X is a professional-grade ceramic coating brand widely trusted by detailers, dealers, and fleet operators nationwide. As an authorized installer, we use System X's automotive, marine, and aviation product lines — each formulated specifically for the demands of those surfaces and environments.",
              },
              {
                q: "How long does ceramic coating last?",
                a: "System X Automotive carries a lifetime warranty. Marine carries a 5-year warranty. Aviation carries a 10-year warranty. Longevity depends on proper prep and maintenance — we prep every surface thoroughly before application to maximize coating performance.",
              },
              {
                q: "Can I combine ceramic coating with tint or PPF?",
                a: "Yes — and it's one of the best things you can do for your vehicle. Ceramic on the paint, PPF on high-impact zones, and tint on the glass gives you complete protection in one package. We do all three in-house at both locations.",
              },
              {
                q: "Do you coat boats and aircraft?",
                a: "Yes. We apply System X Marine Protection to boats and watercraft and System X Aviation Protection to aircraft. Each product is engineered for the specific UV, moisture, and environmental demands of those environments.",
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
          PROTECT YOUR INVESTMENT
        </h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">
          System X ceramic coating at both our Gonzales and Baton Rouge locations.
          Free quotes — call or fill out the form.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:2253811000"
            className="font-display tracking-widest uppercase bg-white text-[#a60303] hover:bg-[#f0f0f0] px-8 py-4 text-sm transition-colors duration-200"
          >
            (225) 381-1000
          </a>
          <Link
            href="/contact"
            className="font-display tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[#a60303] px-8 py-4 text-sm transition-colors duration-200"
          >
            Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
