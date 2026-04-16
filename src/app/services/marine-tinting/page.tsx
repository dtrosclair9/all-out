import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marine Tinting & Boat Wraps | All-Out Window Tint",
  description:
    "Marine window tinting and custom boat wraps in Gonzales and Baton Rouge, LA. Pontoons, center consoles, fishing boats, yachts. Marine-grade film. Call (225) 381-1000.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of boats do you tint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We tint pontoons, center consoles, offshore fishing boats, bay boats, ski boats, cruisers, and yacht enclosures. If it has glass, we can tint it.",
      },
    },
    {
      "@type": "Question",
      name: "What is a marine interior wrap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A marine interior wrap applies vinyl film to interior surfaces like dashboards, consoles, and cabin walls — giving your boat a completely custom look without a paint job. We use marine-grade materials designed to handle moisture, UV exposure, and the rigors of open water.",
      },
    },
    {
      "@type": "Question",
      name: "Is marine window film different from automotive film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Marine environments involve greater UV exposure, moisture, and salt air. We use marine-grade films designed specifically to handle these conditions and maintain performance and adhesion over the long term.",
      },
    },
  ],
};

export default function MarineTintingPage() {
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
            <span className="text-white">Marine Tinting & Wraps</span>
          </nav>
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
            Marine Tinting & Wraps
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            MARINE TINTING & WRAPS IN
            <br />GONZALES & BATON ROUGE, LA
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            Built for the water. Marine-grade window tinting and custom interior
            wraps for pontoons, center consoles, fishing boats, and yachts.
            Protection that handles sun, salt, and open water.
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

      {/* Images */}
      <section className="bg-[#0a0a0a] pb-4 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-1">
          {[
            { src: "/images/marine-boat-interior-cabin.jpg", alt: "Boat interior wrap" },
            { src: "/images/marine-chaparral-boat.jpg", alt: "Chaparral boat tinting" },
            { src: "/images/marine-center-console-helm.jpg", alt: "Center console helm wrap" },
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
              YOUR BOAT WORKS HARD.
              <br /><span className="text-[#a60303]">PROTECT IT.</span>
            </h2>
            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                Boats face some of the most demanding conditions of any vehicle —
                direct sun all day, UV exposure with no shade, salt air, and
                constant heat building inside an enclosed space. Standard film
                isn&apos;t designed to handle that. Marine-grade film is.
              </p>
              <p>
                Our marine tinting keeps the interior of your cabin, enclosure,
                and helm area significantly cooler, protects upholstery and
                electronics from UV damage, and reduces glare on the water. For
                windshields and side glass, we use films built to maintain
                adhesion in wet, high-UV marine environments.
              </p>
              <p>
                We also specialize in custom interior wraps — applying premium
                vinyl to consoles, dashboards, walls, and cabin surfaces to
                give your boat a completely custom look without a full
                renovation. Marble, carbon fiber, solid color, custom patterns
                — if you can imagine it, we can install it.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-display text-white text-xl font-bold mb-6 tracking-wide">MARINE SERVICES</h3>
            <ul className="space-y-3">
              {[
                "Pontoon & center console tinting",
                "Offshore & bay fishing boats",
                "Ski boats & cruisers",
                "Yacht window & enclosure film",
                "Custom interior vinyl wraps",
                "Console & dashboard wraps",
                "Cabin wall & surface wraps",
                "Marine-grade film technology",
                "UV protection for upholstery & electronics",
                "Anti-glare film for helm areas",
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
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">MARINE TINTING NEAR YOU</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#242424]">
            {[
              {
                city: "Gonzales",
                tag: "Original Location",
                address: "43469 Cannon Road, Gonzales, LA 70737",
                href: "/services/marine-tinting/gonzales",
              },
              {
                city: "Baton Rouge",
                tag: "Now Open",
                address: "7987 Pecue Lane, Suite 7G, Baton Rouge, LA 70809",
                href: "/services/marine-tinting/baton-rouge",
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
                  Marine Tinting in {loc.city} →
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
                q: "What types of boats do you tint?",
                a: "We tint pontoons, center consoles, offshore fishing boats, bay boats, ski boats, cruisers, and yacht enclosures. If it has glass, we can tint it.",
              },
              {
                q: "What is a marine interior wrap?",
                a: "A marine interior wrap applies vinyl film to interior surfaces — dashboards, consoles, cabin walls — giving your boat a completely custom look without a paint job. We use marine-grade materials built for moisture, UV, and open water.",
              },
              {
                q: "Is marine window film different from automotive film?",
                a: "Yes. Marine environments involve greater UV exposure, moisture, and sometimes salt air. We use marine-grade films designed specifically to handle these conditions and maintain adhesion long-term.",
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
          READY TO UPGRADE YOUR BOAT?
        </h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">
          Marine tinting and custom wraps at both locations. Get a free estimate today.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:2253811000" className="font-display tracking-widest uppercase bg-white text-[#a60303] hover:bg-[#f0f0f0] px-8 py-4 text-sm transition-colors duration-200">
            (225) 381-1000
          </a>
          <Link href="/contact" className="font-display tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[#a60303] px-8 py-4 text-sm transition-colors duration-200">
            Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
