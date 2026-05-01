import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Window Tinting in Baton Rouge, LA | All-Out Window Tint",
  description:
    "Residential window tinting in Baton Rouge, LA. Reduce heat, cut energy costs & add privacy. Serving Central, Denham Springs & East Baton Rouge Parish. Call (225) 251-9184.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "All-Out Window Tint — Baton Rouge",
  description: "Professional residential window tinting in Baton Rouge, LA.",
  telephone: "+12252519184",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7987 Pecue Lane, Suite 7G",
    addressLocality: "Baton Rouge",
    addressRegion: "LA",
    postalCode: "70809",
    addressCountry: "US",
  },
  url: "https://all-outwindowtint.com/services/residential-tinting/baton-rouge",
  areaServed: ["Baton Rouge", "Central", "Zachary", "Denham Springs", "Walker", "East Baton Rouge Parish"],
};

export default function ResidentialTintingBatonRougePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 font-body text-xs text-[#555] mb-6 flex-wrap">
            <Link href="/services" className="hover:text-[#a60303] transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/residential-tinting" className="hover:text-[#a60303] transition-colors">Residential Tinting</Link>
            <span>/</span>
            <span className="text-white">Baton Rouge</span>
          </nav>
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">Baton Rouge, Louisiana</p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            RESIDENTIAL WINDOW TINTING
            <br />IN BATON ROUGE, LA
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            Professional residential window film for Baton Rouge homeowners.
            Reduce solar heat, lower energy bills, block UV, and add privacy —
            professionally installed by our Pecue Lane team.
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
              BATON ROUGE HOMES
              <br /><span className="text-[#a60303]">BUILT FOR THE HEAT.</span>
            </h2>
            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                If you own a home in Baton Rouge, you know what afternoon sun
                coming through west-facing windows feels like in July. Your AC
                is working overtime, your furniture is fading, and your energy
                bills reflect every bit of it.
              </p>
              <p>
                Residential window tinting from our Baton Rouge location
                addresses all of that in a single install. Our films block up
                to 80% of solar heat, protect your floors and furniture from
                UV damage, and can give you daytime privacy without the need
                for blinds or curtains.
              </p>
              <p>
                We serve homeowners throughout East Baton Rouge Parish —
                including Central, Zachary, Baker, Denham Springs, and Walker.
                We schedule around your availability and complete most homes
                in a single visit.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-[#141414] border border-[#242424] p-8 mb-8">
              <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-4">Baton Rouge Location</p>
              <div className="space-y-3">
                <a href="https://maps.google.com/?q=7987+Pecue+Lane,+Baton+Rouge,+LA+70809" target="_blank" rel="noopener noreferrer" className="font-body text-white text-sm hover:text-[#a60303] transition-colors block">7987 Pecue Lane, Suite 7G, Baton Rouge, LA 70809</a>
                <a href="tel:2252519184" className="font-body text-white text-sm hover:text-[#a60303] transition-colors block">(225) 251-9184</a>
                <p className="font-body text-[#888888] text-sm">Mon – Fri: 9AM – 5PM · Sat–Sun: By Appt</p>
              </div>
            </div>
            <ul className="space-y-3">
              {["New & existing Baton Rouge homes", "Solar heat rejection up to 80%", "99% UV protection", "Privacy film — see out, not in", "Glare reduction for TVs & screens", "Energy savings on cooling bills", "Clean, professional installation"].map((f) => (
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
            <p className="font-display text-white text-lg font-bold">Residential Tinting — Gonzales</p>
            <p className="font-body text-[#888888] text-sm mt-1">43469 Cannon Road — Gonzales, LA 70737</p>
          </div>
          <Link href="/services/residential-tinting/gonzales" className="font-display tracking-widest uppercase border border-[#2a2a2a] hover:border-[#a60303] text-white hover:text-[#a60303] px-6 py-3 text-sm transition-colors duration-200 shrink-0">Gonzales Location →</Link>
        </div>
      </section>

      <section className="bg-[#a60303] py-16 px-6 text-center">
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">COOL YOUR BATON ROUGE HOME</h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">Free estimates. We schedule around you. Most homes done in one visit.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:2252519184" className="font-display tracking-widest uppercase bg-white text-[#a60303] hover:bg-[#f0f0f0] px-8 py-4 text-sm transition-colors duration-200">(225) 251-9184</a>
          <Link href="/contact" className="font-display tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[#a60303] px-8 py-4 text-sm transition-colors duration-200">Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
