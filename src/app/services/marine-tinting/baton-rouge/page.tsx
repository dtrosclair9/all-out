import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marine Window Tinting & Wraps in Baton Rouge, LA | All-Out Window Tint",
  description:
    "Marine window tinting and custom boat wraps in Baton Rouge, LA. Pontoons, center consoles, fishing boats. Marine-grade film. Serving East Baton Rouge Parish. Call (225) 381-1000.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "All-Out Window Tint — Baton Rouge",
  description: "Marine window tinting and custom wraps in Baton Rouge, LA.",
  telephone: "+12253811000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7987 Pecue Lane, Suite 7G",
    addressLocality: "Baton Rouge",
    addressRegion: "LA",
    postalCode: "70809",
    addressCountry: "US",
  },
  url: "https://alloutwindowtint.com/services/marine-tinting/baton-rouge",
};

export default function MarineTintingBatonRougePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 font-body text-xs text-[#555] mb-6 flex-wrap">
            <Link href="/services" className="hover:text-[#a60303] transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/marine-tinting" className="hover:text-[#a60303] transition-colors">Marine Tinting & Wraps</Link>
            <span>/</span>
            <span className="text-white">Baton Rouge</span>
          </nav>
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">Baton Rouge, Louisiana</p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            MARINE TINTING & WRAPS
            <br />IN BATON ROUGE, LA
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            Marine-grade window tinting and custom wraps for Baton
            Rouge boaters. Pontoons, center consoles, fishing boats, and yachts
            — UV protection and custom styling built for Louisiana waterways.
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
              BATON ROUGE BOATERS
              <br /><span className="text-[#a60303]">KNOW THE HEAT.</span>
            </h2>
            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                The lakes, rivers, and bayous around Baton Rouge get a lot of
                use — and a lot of sun. Whether you&apos;re on the Amite, at False
                River, or running the Mississippi, your boat takes UV exposure
                all day long. Our Baton Rouge location installs marine-grade
                window film designed specifically for high-UV, high-moisture
                environments.
              </p>
              <p>
                We tint pontoons, center consoles, bay boats, fishing boats,
                ski boats, cruisers, and yacht enclosures throughout East Baton
                Rouge Parish and surrounding areas. Marine film keeps cabins
                cooler, protects upholstery and electronics from UV damage,
                and reduces glare at the helm.
              </p>
              <p>
                Ask about our custom wraps — vinyl applications for
                consoles, dashboards, and cabin walls that transform the look
                of your boat without a full renovation.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-[#141414] border border-[#242424] p-8 mb-8">
              <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-4">Baton Rouge Location</p>
              <div className="space-y-3">
                <a href="https://maps.google.com/?q=7987+Pecue+Lane,+Baton+Rouge,+LA+70809" target="_blank" rel="noopener noreferrer" className="font-body text-white text-sm hover:text-[#a60303] transition-colors block">7987 Pecue Lane, Suite 7G, Baton Rouge, LA 70809</a>
                <a href="tel:2253811000" className="font-body text-white text-sm hover:text-[#a60303] transition-colors block">(225) 381-1000</a>
                <p className="font-body text-[#888888] text-sm">Mon – Fri: 9AM – 5PM · Sat–Sun: By Appt</p>
              </div>
            </div>
            <ul className="space-y-3">
              {["Pontoon & center console tinting", "Bay & offshore fishing boats", "Yacht windows & enclosures", "Custom vinyl wraps", "Console & dashboard wraps", "Marine-grade film technology", "UV protection for upholstery & electronics"].map((f) => (
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
            <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-1">Original Location</p>
            <p className="font-display text-white text-lg font-bold">Marine Tinting — Gonzales</p>
            <p className="font-body text-[#888888] text-sm mt-1">43469 Cannon Road — Gonzales, LA 70737</p>
          </div>
          <Link href="/services/marine-tinting/gonzales" className="font-display tracking-widest uppercase border border-[#2a2a2a] hover:border-[#a60303] text-white hover:text-[#a60303] px-6 py-3 text-sm transition-colors duration-200 shrink-0">Gonzales Location →</Link>
        </div>
      </section>

      <section className="bg-[#a60303] py-16 px-6 text-center">
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">PROTECT YOUR BOAT IN BATON ROUGE</h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">Marine tinting and custom wraps at our Pecue Lane location. Free estimates.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:2253811000" className="font-display tracking-widest uppercase bg-white text-[#a60303] hover:bg-[#f0f0f0] px-8 py-4 text-sm transition-colors duration-200">(225) 381-1000</a>
          <Link href="/contact" className="font-display tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[#a60303] px-8 py-4 text-sm transition-colors duration-200">Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
