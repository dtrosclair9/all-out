import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automotive Window Tinting in Gonzales, LA | All-Out Window Tint",
  description:
    "Best automotive window tinting in Gonzales, LA. Ceramic, carbon & dyed film. Serving Prairieville, Sorrento & Ascension Parish since 2020. Call (225) 251-9184.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutomotiveBusiness"],
  name: "All-Out Window Tint — Gonzales",
  description: "Professional automotive window tinting in Gonzales, LA. Serving Ascension Parish since 2020.",
  image: "https://all-outwindowtint.com/images/logo-primary.png",
  telephone: "+12252519184",
  address: {
    "@type": "PostalAddress",
    streetAddress: "43469 Cannon Road",
    addressLocality: "Gonzales",
    addressRegion: "LA",
    postalCode: "70737",
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  url: "https://all-outwindowtint.com/services/automotive-tinting/gonzales",
  priceRange: "$$",
  areaServed: ["Gonzales", "Prairieville", "Sorrento", "Geismar", "Donaldsonville", "St. Amant", "Ascension Parish"],
};

export default function AutomotiveTintingGonzalesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 font-body text-xs text-[#555] mb-6 flex-wrap">
            <Link href="/services" className="hover:text-[#a60303] transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/automotive-tinting" className="hover:text-[#a60303] transition-colors">Automotive Tinting</Link>
            <span>/</span>
            <span className="text-white">Gonzales</span>
          </nav>
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">Gonzales, Louisiana</p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AUTOMOTIVE WINDOW TINTING
            <br />IN GONZALES, LA
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            Professional car window tinting in Gonzales, LA. Our Cannon Road
            shop has been serving Ascension Parish drivers since 2020. Ceramic,
            carbon, and dyed film options — precision installation on every
            vehicle, every time.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] text-white px-8 py-4 text-sm transition-colors duration-200">
              Get a Free Quote
            </Link>
            <a href="tel:2252519184" className="font-display tracking-widest uppercase border border-white/30 hover:border-white text-white px-8 py-4 text-sm transition-colors duration-200">
              (225) 251-9184
            </a>
          </div>
        </div>
      </section>

      {/* Local content */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
              GONZALES&apos; GO-TO
              <br /><span className="text-[#a60303]">WINDOW TINT SHOP.</span>
            </h2>
            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                All-Out Window Tint opened on Cannon Road in Gonzales in May
                2020, and we&apos;ve been the area&apos;s trusted tint shop ever since.
                Over the years we&apos;ve tinted thousands of vehicles for drivers
                throughout Ascension Parish — from everyday commuters to
                show trucks, high-end exotics, and commercial fleets.
              </p>
              <p>
                If you&apos;re in Gonzales, Prairieville, Sorrento, Geismar, St.
                Amant, Donaldsonville, or anywhere in between, our Cannon Road
                shop is your closest option for a professional tint job from
                people who actually know this area. We know the roads here, we
                know the heat here, and we
                know what film performs best in this climate.
              </p>
              <p>
                Every vehicle we tint gets a thorough glass cleaning, precision
                computer-cut film patterns, and a hand installation that leaves
                no bubbles and clean edges all the way around. We don&apos;t rush
                jobs and we don&apos;t cut corners.
              </p>
            </div>
          </div>

          <div>
            {/* Location card */}
            <div className="bg-[#141414] border border-[#242424] p-8 mb-8">
              <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-4">Gonzales Location</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#a60303] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                  <div>
                    <a href="https://maps.google.com/?q=43469+Cannon+Road,+Gonzales,+LA+70737" target="_blank" rel="noopener noreferrer" className="font-body text-white text-sm hover:text-[#a60303] transition-colors">
                      43469 Cannon Road<br />Gonzales, LA 70737
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#a60303] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.59 1 1 0 01-.25 1.01l-2.2 2.2z" />
                  </svg>
                  <a href="tel:2252519184" className="font-body text-white text-sm hover:text-[#a60303] transition-colors">(225) 251-9184</a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#a60303] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                  </svg>
                  <span className="font-body text-white text-sm">Mon – Fri: 9AM – 5PM · Sat–Sun: By Appt</span>
                </div>
              </div>
            </div>

            {/* Features */}
            <ul className="space-y-3">
              {[
                "All makes and models — cars, trucks, SUVs",
                "Ceramic, carbon & dyed film options",
                "Heat rejection up to 80% with ceramic",
                "99% UV protection",
                "Louisiana-legal tint levels",
                "Clean edges, zero bubbles — we don't leave until it's right",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#a60303] rounded-full shrink-0 mt-1.5" />
                  <span className="font-body text-[#888888] text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Areas served */}
      <section className="bg-[#141414] py-14 px-6">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-white tracking-widest uppercase text-xs mb-5">Serving From Our Gonzales Shop</p>
          <div className="flex flex-wrap gap-2">
            {["Gonzales", "Prairieville", "Sorrento", "Geismar", "Donaldsonville", "St. Amant", "Dutchtown", "Ascension Parish"].map((area) => (
              <span key={area} className="font-body text-[#888888] text-xs border border-[#242424] px-3 py-1">{area}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Cross links */}
      <section className="bg-[#0a0a0a] py-14 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-[#242424] pt-14">
          <div>
            <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-1">Also Available</p>
            <p className="font-display text-white text-lg font-bold">Automotive Tinting — Baton Rouge</p>
            <p className="font-body text-[#888888] text-sm mt-1">7987 Pecue Lane, Suite 7G — Baton Rouge, LA 70809</p>
          </div>
          <Link href="/services/automotive-tinting/baton-rouge" className="font-display tracking-widest uppercase border border-[#2a2a2a] hover:border-[#a60303] text-white hover:text-[#a60303] px-6 py-3 text-sm transition-colors duration-200 shrink-0">
            Baton Rouge Location →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#a60303] py-16 px-6 text-center">
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">TINT YOUR CAR IN GONZALES</h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">
          Free estimates. Same-day quotes. Come see us on Cannon Road.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:2252519184" className="font-display tracking-widest uppercase bg-white text-[#a60303] hover:bg-[#f0f0f0] px-8 py-4 text-sm transition-colors duration-200">(225) 251-9184</a>
          <Link href="/contact" className="font-display tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[#a60303] px-8 py-4 text-sm transition-colors duration-200">Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
