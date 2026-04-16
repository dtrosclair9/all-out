import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Window Tinting | All-Out Window Tint",
  description:
    "Commercial window tinting for storefronts, offices, and fleet vehicles in Gonzales and Baton Rouge, LA. Cut energy costs, reduce glare, protect your business. Call (225) 381-1000.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can you handle large commercial buildings?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We handle everything from single storefronts to multi-story office buildings and multi-location fleet accounts. We'll work around your business hours to minimize disruption.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer fleet pricing for commercial vehicles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer volume pricing for fleet accounts — whether it's a 5-vehicle service company or a large government or law enforcement fleet. Contact us for a custom quote.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly will commercial window film pay for itself?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Louisiana's climate, commercial window film typically pays back in energy savings within a few years — often sooner for large glass-heavy buildings. You'll also see immediate benefits in employee comfort and reduced glare on screens.",
      },
    },
  ],
};

export default function CommercialTintingPage() {
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
            <span className="text-white">Commercial Tinting</span>
          </nav>
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
            Commercial Window Tinting
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            COMMERCIAL TINTING IN
            <br />GONZALES & BATON ROUGE, LA
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            Storefronts, offices, and fleet vehicles. Commercial window film
            reduces energy costs, cuts glare, protects employees and merchandise,
            and gives your business a sharp, professional appearance.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/contact"
              className="font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] text-white px-8 py-4 text-sm transition-colors duration-200"
            >
              Get a Business Quote
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

      {/* Images */}
      <section className="bg-[#0a0a0a] pb-4 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-1">
          {[
            { src: "/images/commercial-duplessis-builders.jpg", alt: "Commercial storefront tinting" },
            { src: "/images/commercial-storefront-brick.jpg", alt: "Brick storefront window film" },
            { src: "/images/commercial-state-police.jpg", alt: "Law enforcement fleet tinting" },
            { src: "/images/commercial-fleet-truck.jpg", alt: "Commercial fleet vehicle tinting" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Service details */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
              WINDOW FILM THAT
              <br /><span className="text-[#a60303]">WORKS FOR YOUR BUSINESS.</span>
            </h2>
            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                Commercial window tinting is one of the most cost-effective
                upgrades a business in Louisiana can make. With our climate,
                buildings with untreated glass are constantly fighting solar
                heat gain — and your HVAC system is paying for it. Quality
                commercial film significantly reduces that load.
              </p>
              <p>
                For storefronts and office buildings, we install film that
                controls heat and glare while maintaining the professional look
                of your glass. For fleet vehicles, we offer bulk pricing on
                consistent, compliant installs across your entire operation.
              </p>
              <p>
                We&apos;ve tinted storefronts, office complexes, government
                buildings, law enforcement fleets, and commercial service
                vehicles across Ascension and East Baton Rouge Parish. We know
                how to work around your schedule and minimize downtime.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-display text-white text-xl font-bold mb-6 tracking-wide">COMMERCIAL SERVICES</h3>
            <ul className="space-y-3 mb-8">
              {[
                "Storefront & retail window film",
                "Office buildings & corporate campuses",
                "Fleet & commercial vehicle tinting",
                "Government & law enforcement fleet accounts",
                "Safety & security film (shatter resistance)",
                "Graffiti protection film",
                "Solar control film for energy reduction",
                "Privacy & decorative film",
                "Bulk fleet pricing available",
                "After-hours installation available",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#a60303] rounded-full shrink-0 mt-1.5" />
                  <span className="font-body text-[#888888] text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Two locations */}
      <section className="bg-[#141414] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">Two Locations</p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">COMMERCIAL TINTING NEAR YOU</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#242424]">
            {[
              {
                city: "Gonzales",
                tag: "Original Location",
                address: "43469 Cannon Road, Gonzales, LA 70737",
                areas: "Serving Prairieville, Sorrento, Geismar & Ascension Parish",
                href: "/services/commercial-tinting/gonzales",
              },
              {
                city: "Baton Rouge",
                tag: "Now Open",
                address: "7987 Pecue Lane, Suite 7G, Baton Rouge, LA 70809",
                areas: "Serving Central, Denham Springs, Walker & East Baton Rouge Parish",
                href: "/services/commercial-tinting/baton-rouge",
              },
            ].map((loc) => (
              <div key={loc.city} className="bg-[#141414] p-10">
                <span className="font-display text-[#a60303] tracking-[0.25em] uppercase text-xs mb-4 inline-block">{loc.tag}</span>
                <h3 className="font-display text-white text-3xl font-bold mb-3">{loc.city}</h3>
                <p className="font-body text-white text-sm mb-2">{loc.address}</p>
                <p className="font-body text-[#888888] text-xs mb-6">{loc.areas}</p>
                <Link
                  href={loc.href}
                  className="font-display tracking-widest uppercase border border-[#a60303] text-[#a60303] hover:bg-[#a60303] hover:text-white px-6 py-3 text-xs transition-colors duration-200 inline-block"
                >
                  Commercial Tinting in {loc.city} →
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
                q: "Can you handle large commercial buildings?",
                a: "Yes. We handle everything from single storefronts to multi-story office buildings and multi-location fleet accounts. We work around your business hours to minimize disruption.",
              },
              {
                q: "Do you offer fleet pricing for commercial vehicles?",
                a: "Yes. We offer volume pricing for fleet accounts — whether it's a 5-vehicle service company or a large government fleet. Contact us for a custom quote.",
              },
              {
                q: "How quickly will commercial window film pay for itself?",
                a: "In Louisiana's climate, commercial window film typically pays back in energy savings within a few years — often sooner for large glass-heavy buildings. Immediate benefits include improved employee comfort and reduced glare on screens.",
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
          LET&apos;S TALK ABOUT YOUR BUSINESS
        </h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">
          Fleet accounts, storefronts, or a single office window — we handle it all. Get a free commercial estimate today.
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
            Free Business Quote
          </Link>
        </div>
      </section>
    </>
  );
}
