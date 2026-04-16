import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicle Wraps in Gonzales, LA | All-Out Window Tint",
  description:
    "Custom vehicle wraps in Gonzales, LA. Full wraps, color changes, fleet graphics, UTVs, and boats. Serving Ascension Parish. Premium vinyl. Call (225) 381-1000.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "All-Out Window Tint — Gonzales",
  description: "Custom vehicle wraps and vinyl in Gonzales, LA.",
  telephone: "+12253811000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "43469 Cannon Road",
    addressLocality: "Gonzales",
    addressRegion: "LA",
    postalCode: "70737",
    addressCountry: "US",
  },
  url: "https://alloutwindowtint.com/services/vehicle-wraps/gonzales",
};

export default function VehicleWrapsGonzalesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 font-body text-xs text-[#555] mb-6 flex-wrap">
            <Link href="/services" className="hover:text-[#a60303] transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/vehicle-wraps" className="hover:text-[#a60303] transition-colors">Vehicle Wraps & Vinyl</Link>
            <span>/</span>
            <span className="text-white">Gonzales</span>
          </nav>
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">Gonzales, Louisiana</p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            VEHICLE WRAPS IN
            <br />GONZALES, LA
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            Full wraps, color changes, fleet graphics, UTVs, boats, and
            trailers. If it moves, we can wrap it. Premium vinyl installed
            at our Gonzales shop — serving Ascension Parish and beyond.
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
              GONZALES&apos; WRAP SHOP.
              <br /><span className="text-[#a60303]">CARS, TRUCKS, UTVS, BOATS.</span>
            </h2>
            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                Whether you want a full color-change wrap on your truck, fleet
                graphics for your business vehicles, or a custom camo wrap on
                your Polaris Ranger — our Gonzales shop can handle it. We&apos;ve
                wrapped cars, trucks, UTVs, boats, trailers, and commercial
                vehicles for Ascension Parish customers since we opened.
              </p>
              <p>
                We use premium vinyl from leading manufacturers and cut patterns
                with precision plotters. Every wrap is installed by trained
                hands who take the time to do it right — clean edges, no
                lifting, no air pockets, and a finish that turns heads.
              </p>
              <p>
                We also offer partial wraps for hoods, roofs, and accent pieces,
                and commercial fleet graphics and lettering for businesses
                looking to brand their vehicles.
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
              {["Full color-change wraps", "Partial wraps & accents", "Commercial fleet graphics", "UTVs, ATVs & side-by-sides", "Boat & marine wraps", "RVs & travel trailers", "Custom decals & lettering", "Matte, satin, gloss & textured finishes"].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#a60303] rounded-full shrink-0 mt-1.5" />
                  <span className="font-body text-[#888888] text-sm">{f}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-[#0a0a0a] py-14 px-6 border-t border-[#242424]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-1">Also Available</p>
            <p className="font-display text-white text-lg font-bold">Vehicle Wraps — Baton Rouge</p>
            <p className="font-body text-[#888888] text-sm mt-1">7987 Pecue Lane, Suite 7G — Baton Rouge, LA 70809</p>
          </div>
          <Link href="/services/vehicle-wraps/baton-rouge" className="font-display tracking-widest uppercase border border-[#2a2a2a] hover:border-[#a60303] text-white hover:text-[#a60303] px-6 py-3 text-sm transition-colors duration-200 shrink-0">Baton Rouge Location →</Link>
        </div>
      </section>

      <section className="bg-[#a60303] py-16 px-6 text-center">
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">LET&apos;S WRAP YOUR RIDE IN GONZALES</h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">Free wrap quotes. Premium vinyl. Cannon Road, Gonzales — let&apos;s build something.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:2253811000" className="font-display tracking-widest uppercase bg-white text-[#a60303] hover:bg-[#f0f0f0] px-8 py-4 text-sm transition-colors duration-200">(225) 381-1000</a>
          <Link href="/contact" className="font-display tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[#a60303] px-8 py-4 text-sm transition-colors duration-200">Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
