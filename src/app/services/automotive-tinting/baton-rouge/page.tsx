import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automotive Window Tinting in Baton Rouge, LA | All-Out Window Tint",
  description:
    "Best automotive window tinting in Baton Rouge, LA. Ceramic, carbon & dyed film. Serving Central, Denham Springs & East Baton Rouge Parish. Call (225) 251-9184.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "AutomotiveBusiness"],
  name: "All-Out Window Tint — Baton Rouge",
  description: "Professional automotive window tinting in Baton Rouge, LA.",
  image: "https://alloutwindowtint.com/images/logo-primary.png",
  telephone: "+12252519184",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7987 Pecue Lane, Suite 7G",
    addressLocality: "Baton Rouge",
    addressRegion: "LA",
    postalCode: "70809",
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
  url: "https://alloutwindowtint.com/services/automotive-tinting/baton-rouge",
  priceRange: "$$",
  areaServed: ["Baton Rouge", "Central", "Zachary", "Baker", "Denham Springs", "Walker", "Port Allen", "East Baton Rouge Parish"],
};

export default function AutomotiveTintingBatonRougePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 font-body text-xs text-[#555] mb-6 flex-wrap">
            <Link href="/services" className="hover:text-[#a60303] transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/automotive-tinting" className="hover:text-[#a60303] transition-colors">Automotive Tinting</Link>
            <span>/</span>
            <span className="text-white">Baton Rouge</span>
          </nav>
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">Baton Rouge, Louisiana</p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            AUTOMOTIVE WINDOW TINTING
            <br />IN BATON ROUGE, LA
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            All-Out Window Tint is now serving Baton Rouge from our Pecue Lane
            location in south Baton Rouge. Professional car window tinting for
            every make and model — ceramic, carbon, and dyed film — precision
            installation on every vehicle.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] text-white px-8 py-4 text-sm transition-colors duration-200">Get a Free Quote</Link>
            <a href="tel:2252519184" className="font-display tracking-widest uppercase border border-white/30 hover:border-white text-white px-8 py-4 text-sm transition-colors duration-200">(225) 251-9184</a>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
              BATON ROUGE&apos;S NEWEST
              <br /><span className="text-[#a60303]">PROFESSIONAL TINT SHOP.</span>
            </h2>
            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                The reputation All-Out built in Gonzales over five years follows
                us to Baton Rouge. Same owners, same trained installers, same
                standard — now on Pecue Lane in south Baton Rouge, accessible
                from Perkins Road, Airline Highway, and I-10.
              </p>
              <p>
                We serve drivers throughout the capital area — Baton Rouge,
                Central, Zachary, Baker, Denham Springs, Walker, and Port Allen.
                Whether you&apos;re bringing in a daily driver or a weekend show car,
                you get the same precision installation and zero-bubble results
                that our Gonzales customers have trusted since 2020.
              </p>
              <p>
                Ceramic, carbon, and dyed film options across all legal tint
                shades. We&apos;ll match the right film to your vehicle, your budget,
                and your goals.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-[#141414] border border-[#242424] p-8 mb-8">
              <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-4">Baton Rouge Location</p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#a60303] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                  <a href="https://maps.google.com/?q=7987+Pecue+Lane,+Baton+Rouge,+LA+70809" target="_blank" rel="noopener noreferrer" className="font-body text-white text-sm hover:text-[#a60303] transition-colors">
                    7987 Pecue Lane, Suite 7G<br />Baton Rouge, LA 70809
                  </a>
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
            <ul className="space-y-3">
              {["All makes and models — cars, trucks, SUVs", "Ceramic, carbon & dyed film options", "Heat rejection up to 80% with ceramic", "99% UV protection", "Louisiana-legal tint levels", "Clean edges, zero bubbles — no shortcuts"].map((f) => (
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
          <p className="font-display text-white tracking-widest uppercase text-xs mb-5">Serving From Our Baton Rouge Shop</p>
          <div className="flex flex-wrap gap-2">
            {["Baton Rouge", "Central", "Zachary", "Baker", "Denham Springs", "Walker", "Port Allen", "East Baton Rouge Parish"].map((area) => (
              <span key={area} className="font-body text-[#888888] text-xs border border-[#242424] px-3 py-1">{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-14 px-6 border-t border-[#242424]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-1">Original Location</p>
            <p className="font-display text-white text-lg font-bold">Automotive Tinting — Gonzales</p>
            <p className="font-body text-[#888888] text-sm mt-1">43469 Cannon Road — Gonzales, LA 70737</p>
          </div>
          <Link href="/services/automotive-tinting/gonzales" className="font-display tracking-widest uppercase border border-[#2a2a2a] hover:border-[#a60303] text-white hover:text-[#a60303] px-6 py-3 text-sm transition-colors duration-200 shrink-0">Gonzales Location →</Link>
        </div>
      </section>

      <section className="bg-[#a60303] py-16 px-6 text-center">
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">TINT YOUR CAR IN BATON ROUGE</h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">Free estimates. Same-day quotes. Come see us on Pecue Lane.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:2252519184" className="font-display tracking-widest uppercase bg-white text-[#a60303] hover:bg-[#f0f0f0] px-8 py-4 text-sm transition-colors duration-200">(225) 251-9184</a>
          <Link href="/contact" className="font-display tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[#a60303] px-8 py-4 text-sm transition-colors duration-200">Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
