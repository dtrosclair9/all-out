import Link from "next/link";
import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/services/paint-protection-film/gonzales",
  title: "Paint Protection Film (PPF) in Gonzales, LA | All-Out Window Tint",
  description:
    "Paint protection film in Gonzales, LA. Self-healing PPF guards your paint from rock chips and road debris. Serving Ascension Parish. Call (225) 251-9184 now.",
});

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "All-Out Window Tint — Gonzales",
  description: "Paint protection film (PPF) installation in Gonzales, LA.",
  telephone: "+12252519184",
  address: {
    "@type": "PostalAddress",
    streetAddress: "43469 Cannon Road",
    addressLocality: "Gonzales",
    addressRegion: "LA",
    postalCode: "70737",
    addressCountry: "US",
  },
  url: "https://all-outwindowtint.com/services/paint-protection-film/gonzales",
};

const faqs = [
  {
    q: "What is the difference between paint protection film and ceramic coating?",
    a: "Paint protection film (PPF) is a thick, clear physical layer that absorbs rock chips and scratches before they reach your paint. Ceramic coating is a thin liquid layer that makes the surface slick and easier to clean but does not stop impact. Many owners run PPF on high-impact areas and ceramic over the rest.",
  },
  {
    q: "Does PPF really self-heal scratches?",
    a: "Quality PPF does self-heal light surface swirls and fine scratches with heat. In Louisiana, the sun and summer temperatures are often enough to trigger it, and warm water speeds it up. Deeper cuts are a different story, but the everyday marks the road leaves behind tend to disappear.",
  },
  {
    q: "Should I get full-front or full-vehicle PPF?",
    a: "It depends on how and where you drive. The front bumper, hood, mirrors, and fenders take the most abuse from gravel roads, construction, and highway debris around Ascension Parish, so a front-end package covers the highest-risk areas. Full-vehicle coverage protects everything. We will help you weigh it against your driving.",
  },
  {
    q: "Is PPF visible once it is installed?",
    a: "Properly installed PPF is essentially invisible, with clean edges and no cloudiness. It comes in gloss to keep your factory shine or matte to give glossy paint a satin look. Either way, it protects without changing the character of your finish.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function PPFGonzalesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 font-body text-xs text-[#888888] mb-6 flex-wrap">
            <Link href="/services" className="hover:text-white transition-colors">Services</Link>
            <span>/</span>
            <Link href="/services/paint-protection-film" className="hover:text-white transition-colors">Paint Protection Film</Link>
            <span>/</span>
            <span className="text-white">Gonzales</span>
          </nav>
          <p className="font-display text-white tracking-[0.3em] uppercase text-sm mb-3">Gonzales, Louisiana</p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            PAINT PROTECTION FILM
            <br />IN GONZALES, LA
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            Protect your paint from Louisiana roads. Self-healing PPF installed
            at our Gonzales shop — invisible protection against rock chips,
            scratches, and road debris. Serving Ascension Parish and surrounding areas.
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
              LOUISIANA ROADS ARE ROUGH.
              <br /><span className="text-[#E01818]">YOUR PAINT DOESN&apos;T HAVE TO SHOW IT.</span>
            </h2>
            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                Between the construction, gravel roads, and highway debris that
                come standard with Louisiana driving, your paint takes hits
                constantly. Rock chips, scratches from debris, and road grime
                add up fast — especially on the front end of any vehicle that
                puts real miles on the road.
              </p>
              <p>
                Paint Protection Film from our Gonzales shop gives you an
                invisible layer of defense over your paint. It absorbs the
                impact before it reaches your finish. High-quality PPF is also
                self-healing — minor surface scratches disappear with heat.
                It&apos;s the most effective way to preserve your paint and your
                vehicle&apos;s resale value.
              </p>
              <p>
                We offer full-vehicle coverage and targeted partial installs —
                front end, hood, rocker panels, door edges, or wherever your
                vehicle takes the most abuse.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-[#141414] border border-[#242424] p-8 mb-8">
              <p className="font-display text-white tracking-widest uppercase text-xs mb-4">Gonzales Location</p>
              <div className="space-y-3">
                <a href="https://maps.google.com/?q=43469+Cannon+Road,+Gonzales,+LA+70737" target="_blank" rel="noopener noreferrer" className="font-body text-white text-sm hover:text-white transition-colors block">43469 Cannon Road, Gonzales, LA 70737</a>
                <a href="tel:2252519184" className="font-body text-white text-sm hover:text-white transition-colors block">(225) 251-9184</a>
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
            <p className="font-display text-white tracking-widest uppercase text-xs mb-1">Also Available</p>
            <p className="font-display text-white text-lg font-bold">PPF — Baton Rouge</p>
            <p className="font-body text-[#888888] text-sm mt-1">7987 Pecue Lane, Suite 7G — Baton Rouge, LA 70809</p>
          </div>
          <Link href="/services/paint-protection-film/baton-rouge" className="font-display tracking-widest uppercase border border-[#2a2a2a] hover:border-[#a60303] text-white hover:text-white px-6 py-3 text-sm transition-colors duration-200 shrink-0">Baton Rouge Location →</Link>
        </div>
      </section>

      {/* FAQ */}
      {/* TODO(owner): confirm specifics (price ranges, warranty terms) to strengthen */}
      <section className="bg-[#141414] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-white tracking-[0.3em] uppercase text-sm mb-3">FAQ</p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">COMMON QUESTIONS</h2>
          </div>
          <div className="space-y-0 divide-y divide-[#242424]">
            {faqs.map((item) => (
              <div key={item.q} className="py-6">
                <h3 className="font-display text-white text-base font-bold mb-3 tracking-wide">{item.q}</h3>
                <p className="font-body text-[#888888] text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#a60303] py-16 px-6 text-center">
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">PROTECT YOUR PAINT IN GONZALES</h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">Free PPF estimates. Cannon Road, Gonzales. Same-day quotes.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:2252519184" className="font-display tracking-widest uppercase bg-white text-[#a60303] hover:bg-[#f0f0f0] px-8 py-4 text-sm transition-colors duration-200">(225) 251-9184</a>
          <Link href="/contact" className="font-display tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[#a60303] px-8 py-4 text-sm transition-colors duration-200">Free Estimate</Link>
        </div>
      </section>
    </>
  );
}
