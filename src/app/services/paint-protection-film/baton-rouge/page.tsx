import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paint Protection Film (PPF) in Baton Rouge, LA | All-Out Window Tint",
  description:
    "PPF installation in Baton Rouge, LA. Self-healing paint protection film guards your finish against rock chips and road debris. Serving East Baton Rouge Parish. Call (225) 251-9184.",
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "All-Out Window Tint — Baton Rouge",
  description: "Paint protection film (PPF) installation in Baton Rouge, LA.",
  telephone: "+12252519184",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7987 Pecue Lane, Suite 7G",
    addressLocality: "Baton Rouge",
    addressRegion: "LA",
    postalCode: "70809",
    addressCountry: "US",
  },
  url: "https://alloutwindowtint.com/services/paint-protection-film/baton-rouge",
};

export default function PPFBatonRougePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center gap-2 font-body text-xs text-[#555] mb-6 flex-wrap">
            <Link href="/services" className="hover:text-[#a60303] transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/paint-protection-film" className="hover:text-[#a60303] transition-colors">Paint Protection Film</Link>
            <span>/</span>
            <span className="text-white">Baton Rouge</span>
          </nav>
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">Baton Rouge, Louisiana</p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            PAINT PROTECTION FILM
            <br />IN BATON ROUGE, LA
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            Self-healing PPF installed at our Baton Rouge location. Invisible
            protection against rock chips, road debris, and minor scratches —
            keeping your finish looking factory fresh on Baton Rouge roads.
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
              BATON ROUGE ROADS
              <br /><span className="text-[#a60303]">DON&apos;T HAVE TO SHOW ON YOUR CAR.</span>
            </h2>
            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                I-10, Airline Highway, construction zones, and gravel-covered
                backroads — Baton Rouge roads send debris flying at your paint
                constantly. Without protection, rock chips and scratches add
                up fast and erode your vehicle&apos;s finish and resale value.
              </p>
              <p>
                Paint Protection Film from our Baton Rouge location gives you
                an invisible, self-healing barrier between your paint and
                everything the road throws at it. It absorbs the impact. Minor
                surface scratches disappear with heat. And your paint stays
                protected without any visible difference.
              </p>
              <p>
                We install full-vehicle PPF and targeted partial packages — so
                you can protect just the front end, the rocker panels, or the
                high-impact areas that matter most to you.
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
              {["Full vehicle coverage", "Partial front end packages", "Rocker panel protection", "Door edge guards", "Self-healing film technology", "Gloss & matte options", "Preserves paint & resale value"].map((f) => (
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
            <p className="font-display text-white text-lg font-bold">PPF — Gonzales</p>
            <p className="font-body text-[#888888] text-sm mt-1">43469 Cannon Road — Gonzales, LA 70737</p>
          </div>
          <Link href="/services/paint-protection-film/gonzales" className="font-display tracking-widest uppercase border border-[#2a2a2a] hover:border-[#a60303] text-white hover:text-[#a60303] px-6 py-3 text-sm transition-colors duration-200 shrink-0">Gonzales Location →</Link>
        </div>
      </section>

      <section className="bg-[#a60303] py-16 px-6 text-center">
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">PROTECT YOUR PAINT IN BATON ROUGE</h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">Free PPF estimates at our Pecue Lane location. Same-day quotes.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:2252519184" className="font-display tracking-widest uppercase bg-white text-[#a60303] hover:bg-[#f0f0f0] px-8 py-4 text-sm transition-colors duration-200">(225) 251-9184</a>
          <Link href="/contact" className="font-display tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[#a60303] px-8 py-4 text-sm transition-colors duration-200">Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
