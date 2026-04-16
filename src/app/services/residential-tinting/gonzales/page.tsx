import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Window Tinting in Gonzales, LA | All-Out Window Tint",
  description:
    "Residential window tinting in Gonzales, LA. Keep your home cooler and cut energy costs. Serving Prairieville, Sorrento & Ascension Parish. Call (225) 381-1000.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "All-Out Window Tint — Gonzales",
  description: "Professional residential window tinting in Gonzales, LA. Serving Ascension Parish.",
  telephone: "+12253811000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "43469 Cannon Road",
    addressLocality: "Gonzales",
    addressRegion: "LA",
    postalCode: "70737",
    addressCountry: "US",
  },
  url: "https://alloutwindowtint.com/services/residential-tinting/gonzales",
  areaServed: ["Gonzales", "Prairieville", "Sorrento", "Geismar", "Ascension Parish"],
};

export default function ResidentialTintingGonzalesPage() {
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
            <span className="text-white">Gonzales</span>
          </nav>
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">Gonzales, Louisiana</p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            RESIDENTIAL WINDOW TINTING
            <br />IN GONZALES, LA
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            Keep your Gonzales home cooler this summer. Professional residential
            window film that reduces solar heat, blocks UV, adds privacy, and
            cuts energy costs — installed by our Cannon Road team.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link href="/contact" className="font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] text-white px-8 py-4 text-sm transition-colors duration-200">Get a Free Quote</Link>
            <a href="tel:2253811000" className="font-display tracking-widest uppercase border border-white/30 hover:border-white text-white px-8 py-4 text-sm transition-colors duration-200">(225) 381-1000</a>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
              GONZALES SUMMERS ARE NO JOKE.
              <br /><span className="text-[#a60303]">YOUR WINDOWS SHOULDN&apos;T MAKE IT WORSE.</span>
            </h2>
            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                Ascension Parish homeowners know what Louisiana heat feels like.
                If your home has single or double-pane windows with no film,
                your HVAC system is fighting a losing battle every afternoon —
                especially on south and west-facing rooms that take direct sun.
              </p>
              <p>
                Residential window tinting is one of the most cost-effective
                ways to address that. Our film blocks up to 80% of solar heat
                before it enters your home, blocks 99% of UV rays that fade
                your floors and furniture, and can add a layer of daytime
                privacy without blocking your view of the yard.
              </p>
              <p>
                We schedule residential jobs around your availability and
                complete most homes in a single visit. We&apos;re based here in
                Gonzales, so scheduling is easy and we know the area well.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-[#141414] border border-[#242424] p-8 mb-8">
              <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-4">Gonzales Location</p>
              <div className="space-y-3">
                <a href="https://maps.google.com/?q=43469+Cannon+Road,+Gonzales,+LA+70737" target="_blank" rel="noopener noreferrer" className="font-body text-white text-sm hover:text-[#a60303] transition-colors block">43469 Cannon Road, Gonzales, LA 70737</a>
                <a href="tel:2253811000" className="font-body text-white text-sm hover:text-[#a60303] transition-colors block">(225) 381-1000</a>
                <p className="font-body text-[#888888] text-sm">Mon – Fri: 9AM – 5PM · Sat–Sun: By Appt</p>
              </div>
            </div>
            <ul className="space-y-3">
              {["New & existing homes", "Solar heat rejection up to 80%", "99% UV protection", "Privacy film — see out, not in", "Glare reduction", "Energy savings on cooling bills", "Clean, precise installation"].map((f) => (
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
          <p className="font-display text-white tracking-widest uppercase text-xs mb-5">Serving From Our Gonzales Shop</p>
          <div className="flex flex-wrap gap-2">
            {["Gonzales", "Prairieville", "Sorrento", "Geismar", "Donaldsonville", "St. Amant", "Dutchtown", "Ascension Parish"].map((area) => (
              <span key={area} className="font-body text-[#888888] text-xs border border-[#242424] px-3 py-1">{area}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-14 px-6 border-t border-[#242424]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-1">Also Available</p>
            <p className="font-display text-white text-lg font-bold">Residential Tinting — Baton Rouge</p>
            <p className="font-body text-[#888888] text-sm mt-1">7987 Pecue Lane, Suite 7G — Baton Rouge, LA 70809</p>
          </div>
          <Link href="/services/residential-tinting/baton-rouge" className="font-display tracking-widest uppercase border border-[#2a2a2a] hover:border-[#a60303] text-white hover:text-[#a60303] px-6 py-3 text-sm transition-colors duration-200 shrink-0">Baton Rouge Location →</Link>
        </div>
      </section>

      <section className="bg-[#a60303] py-16 px-6 text-center">
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">COOL YOUR GONZALES HOME</h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">Free estimates. We schedule around you and complete most homes in one visit.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:2253811000" className="font-display tracking-widest uppercase bg-white text-[#a60303] hover:bg-[#f0f0f0] px-8 py-4 text-sm transition-colors duration-200">(225) 381-1000</a>
          <Link href="/contact" className="font-display tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[#a60303] px-8 py-4 text-sm transition-colors duration-200">Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
