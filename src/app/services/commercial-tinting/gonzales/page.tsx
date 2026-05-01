import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Commercial Window Tinting in Gonzales, LA | All-Out Window Tint",
  description:
    "Commercial window tinting for storefronts, offices & fleet vehicles in Gonzales, LA. Serving Ascension Parish businesses since 2020. Free estimates. Call (225) 251-9184.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "All-Out Window Tint — Gonzales",
  description: "Professional commercial window tinting in Gonzales, LA.",
  telephone: "+12252519184",
  address: {
    "@type": "PostalAddress",
    streetAddress: "43469 Cannon Road",
    addressLocality: "Gonzales",
    addressRegion: "LA",
    postalCode: "70737",
    addressCountry: "US",
  },
  url: "https://all-outwindowtint.com/services/commercial-tinting/gonzales",
};

export default function CommercialTintingGonzalesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 font-body text-xs text-[#555] mb-6 flex-wrap">
            <Link href="/services" className="hover:text-[#a60303] transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/commercial-tinting" className="hover:text-[#a60303] transition-colors">Commercial Tinting</Link>
            <span>/</span>
            <span className="text-white">Gonzales</span>
          </nav>
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">Gonzales, Louisiana</p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            COMMERCIAL WINDOW TINTING
            <br />IN GONZALES, LA
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            Serving Gonzales and Ascension Parish businesses since 2020.
            Storefronts, office buildings, and commercial fleet vehicles — we
            help local businesses cut energy costs, reduce glare, and protect
            their people and merchandise.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] text-white px-8 py-4 text-sm transition-colors duration-200">Get a Business Quote</Link>
            <a href="tel:2252519184" className="font-display tracking-widest uppercase border border-white/30 hover:border-white text-white px-8 py-4 text-sm transition-colors duration-200">(225) 251-9184</a>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
              GONZALES BUSINESSES
              <br /><span className="text-[#a60303]">TRUST ALL-OUT.</span>
            </h2>
            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                We&apos;ve worked with Gonzales-area businesses since we opened —
                retail storefronts along LA-30, office buildings, commercial
                service fleets, and government accounts throughout Ascension
                Parish. Commercial window film is one of the smartest
                investments a local business can make in Louisiana&apos;s climate.
              </p>
              <p>
                Solar heat gain through untreated commercial glass drives up
                your utility bills and creates uncomfortable hot spots near
                windows that affect employees and customers alike. Our commercial
                film significantly reduces that heat load — and in most cases
                pays for itself in energy savings within a few years.
              </p>
              <p>
                We work around your business hours and can schedule larger
                projects in phases to minimize disruption. Fleet accounts
                welcome — we offer volume pricing for consistent installs
                across your entire fleet.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-[#141414] border border-[#242424] p-8 mb-8">
              <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-4">Gonzales Location</p>
              <div className="space-y-3">
                <a href="https://maps.google.com/?q=43469+Cannon+Road,+Gonzales,+LA+70737" target="_blank" rel="noopener noreferrer" className="font-body text-white text-sm hover:text-[#a60303] transition-colors block">43469 Cannon Road, Gonzales, LA 70737</a>
                <a href="tel:2252519184" className="font-body text-white text-sm hover:text-[#a60303] transition-colors block">(225) 251-9184</a>
                <p className="font-body text-[#888888] text-sm">Mon – Fri: 9AM – 5PM · After-Hours Available</p>
              </div>
            </div>
            <ul className="space-y-3">
              {["Storefront & retail window film", "Office buildings & suites", "Fleet & commercial vehicle tinting", "Government & law enforcement accounts", "Safety & security film", "Energy reduction solar film", "Bulk fleet pricing available"].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#a60303] rounded-full shrink-0 mt-1.5" />
                  <span className="font-body text-[#888888] text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#141414] py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-white tracking-widest uppercase text-xs mb-5">Serving Gonzales-Area Businesses</p>
          <div className="flex flex-wrap gap-2">
            {["Gonzales", "Prairieville", "Geismar", "Sorrento", "Donaldsonville", "St. Amant", "Ascension Parish"].map((area) => (
              <span key={area} className="font-body text-[#888888] text-xs border border-[#242424] px-3 py-1">{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-14 px-6 border-t border-[#242424]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-1">Also Available</p>
            <p className="font-display text-white text-lg font-bold">Commercial Tinting — Baton Rouge</p>
            <p className="font-body text-[#888888] text-sm mt-1">7987 Pecue Lane, Suite 7G — Baton Rouge, LA 70809</p>
          </div>
          <Link href="/services/commercial-tinting/baton-rouge" className="font-display tracking-widest uppercase border border-[#2a2a2a] hover:border-[#a60303] text-white hover:text-[#a60303] px-6 py-3 text-sm transition-colors duration-200 shrink-0">Baton Rouge Location →</Link>
        </div>
      </section>

      <section className="bg-[#a60303] py-16 px-6 text-center">
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">LET&apos;S TALK ABOUT YOUR BUSINESS</h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">Free commercial estimates. Fleet pricing available. We work around your schedule.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:2252519184" className="font-display tracking-widest uppercase bg-white text-[#a60303] hover:bg-[#f0f0f0] px-8 py-4 text-sm transition-colors duration-200">(225) 251-9184</a>
          <Link href="/contact" className="font-display tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[#a60303] px-8 py-4 text-sm transition-colors duration-200">Free Business Quote</Link>
        </div>
      </section>
    </>
  );
}
