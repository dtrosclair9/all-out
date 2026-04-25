import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Residential Window Tinting | All-Out Window Tint",
  description:
    "Residential window tinting in Gonzales and Baton Rouge, LA. Keep your home cooler, cut energy costs, and protect your furniture. Two locations. Call (225) 251-9184.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will residential window film make my home too dark?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. We carry a wide range of films — from nearly clear (blocks UV and heat without changing the look of your glass) to darker privacy films. You can get significant heat and UV protection while keeping your home bright and your view clear.",
      },
    },
    {
      "@type": "Question",
      name: "Can window film be applied to double-pane windows?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, with the right film. Some films can cause thermal stress on double-pane windows, so we always recommend the appropriate film type for your specific glass. We'll assess your windows and make the right recommendation.",
      },
    },
    {
      "@type": "Question",
      name: "How much can residential window film reduce my energy costs?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In Louisiana's climate, quality window film can reduce cooling costs significantly — especially in rooms with south or west-facing windows that get direct afternoon sun. Many homeowners see measurable differences on their energy bills within the first summer.",
      },
    },
    {
      "@type": "Question",
      name: "How long does residential window film last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Quality residential window film typically lasts 10–15 years or more with proper installation. We back our residential installs with a warranty against peeling, bubbling, and delamination.",
      },
    },
  ],
};

export default function ResidentialTintingPage() {
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
            <span className="text-white">Residential Tinting</span>
          </nav>
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
            Residential Window Tinting
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            HOME WINDOW TINTING IN
            <br />GONZALES & BATON ROUGE, LA
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            Beat the Louisiana heat. Professional residential window film that
            keeps your home cooler, cuts energy costs, protects your furniture,
            and adds privacy — without blocking your view.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/contact"
              className="font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] text-white px-8 py-4 text-sm transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:2252519184"
              className="font-display tracking-widest uppercase border border-white/30 hover:border-white text-white px-8 py-4 text-sm transition-colors duration-200"
            >
              (225) 251-9184
            </a>
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="bg-[#0a0a0a] pb-4 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-1">
          {[
            { src: "/images/residential-pool-home.jpg", alt: "Pool home window tinting" },
            { src: "/images/residential-acadian-white.jpg", alt: "Acadian home tinting" },
            { src: "/images/residential-acadian-2.jpg", alt: "Residential window film" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Service details */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
              COOLER HOME.
              <br />
              <span className="text-[#a60303]">LOWER BILLS. BETTER VIEW.</span>
            </h2>
            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                Louisiana summers are brutal. Your windows are one of the
                biggest sources of heat gain in your home, and most of that
                heat hits you where you can&apos;t avoid it — through the glass.
                Residential window film blocks up to 80% of solar heat before
                it enters your home, making your AC&apos;s job easier and your rooms
                noticeably more comfortable.
              </p>
              <p>
                Beyond comfort, our residential films block 99% of UV rays —
                the ones that fade hardwood floors, damage furniture, and
                accelerate the aging of anything near your windows. Privacy
                films also let you see out while keeping others from seeing in,
                without the need for blinds or curtains.
              </p>
              <p>
                We measure, cut, and install every film on-site. Most
                residential jobs are completed in a single visit. We work around
                your schedule and leave your home clean when we leave.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-display text-white text-xl font-bold mb-6 tracking-wide">WHAT WE OFFER</h3>
            <ul className="space-y-3 mb-10">
              {[
                "Single and multi-story homes",
                "New construction and existing homes",
                "Solar heat rejection up to 80%",
                "99% UV ray protection",
                "Privacy film options — see out, not in",
                "Glare reduction for TVs and screens",
                "Energy savings on cooling costs",
                "Decorative and frosted film options",
                "Available in multiple shades and finishes",
                "Professional installation — clean, precise, no mess",
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

      {/* Benefits grid */}
      <section className="bg-[#141414] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">Why Film</p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">THE BENEFITS</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#242424]">
            {[
              { title: "Heat Reduction", desc: "Block up to 80% of solar heat. Keep rooms comfortable without cranking the AC." },
              { title: "UV Protection", desc: "99% UV blocking protects floors, furniture, and artwork from fading and sun damage." },
              { title: "Privacy", desc: "Daytime privacy films let you see out while keeping your interior private from the street." },
              { title: "Energy Savings", desc: "Less heat in means less work for your HVAC system — and lower electricity bills." },
            ].map((b) => (
              <div key={b.title} className="bg-[#141414] p-8">
                <div className="w-8 h-0.5 bg-[#a60303] mb-5" />
                <h3 className="font-display text-white text-lg font-bold mb-3 tracking-wide">{b.title}</h3>
                <p className="font-body text-[#888888] text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Two locations */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">Two Locations</p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">RESIDENTIAL TINTING NEAR YOU</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#242424]">
            {[
              {
                city: "Gonzales",
                tag: "Original Location",
                address: "43469 Cannon Road, Gonzales, LA 70737",
                areas: "Serving Prairieville, Sorrento, Geismar & Ascension Parish",
                href: "/services/residential-tinting/gonzales",
              },
              {
                city: "Baton Rouge",
                tag: "Now Open",
                address: "7987 Pecue Lane, Suite 7G, Baton Rouge, LA 70809",
                areas: "Serving Central, Denham Springs, Walker & East Baton Rouge Parish",
                href: "/services/residential-tinting/baton-rouge",
              },
            ].map((loc) => (
              <div key={loc.city} className="bg-[#0a0a0a] p-10">
                <span className="font-display text-[#a60303] tracking-[0.25em] uppercase text-xs mb-4 inline-block">{loc.tag}</span>
                <h3 className="font-display text-white text-3xl font-bold mb-3">{loc.city}</h3>
                <p className="font-body text-white text-sm mb-2">{loc.address}</p>
                <p className="font-body text-[#888888] text-xs mb-6">{loc.areas}</p>
                <Link
                  href={loc.href}
                  className="font-display tracking-widest uppercase border border-[#a60303] text-[#a60303] hover:bg-[#a60303] hover:text-white px-6 py-3 text-xs transition-colors duration-200 inline-block"
                >
                  Residential Tinting in {loc.city} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#141414] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">FAQ</p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">COMMON QUESTIONS</h2>
          </div>
          <div className="space-y-0 divide-y divide-[#242424]">
            {[
              {
                q: "Will residential window film make my home too dark?",
                a: "Not at all. We carry a wide range of films — from nearly clear to darker privacy shades. You can get significant heat and UV protection while keeping your home bright.",
              },
              {
                q: "Can film be applied to double-pane windows?",
                a: "Yes, with the right film. Some films can cause thermal stress on double-pane glass, so we recommend the correct type for your specific windows. We'll assess your glass on-site.",
              },
              {
                q: "How much can window film reduce my energy costs?",
                a: "In Louisiana's climate, quality window film can meaningfully reduce cooling costs — especially in rooms with south or west-facing windows. Many homeowners notice the difference on their energy bills within the first summer.",
              },
              {
                q: "How long does residential window film last?",
                a: "Quality residential film lasts 10–15 years or more with proper installation. We back our installs with a warranty against peeling, bubbling, and delamination.",
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
          READY TO COOL YOUR HOME?
        </h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">
          Free estimates at both locations. Call us or fill out the form and
          we&apos;ll get you scheduled.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:2252519184"
            className="font-display tracking-widest uppercase bg-white text-[#a60303] hover:bg-[#f0f0f0] px-8 py-4 text-sm transition-colors duration-200"
          >
            (225) 251-9184
          </a>
          <Link
            href="/contact"
            className="font-display tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[#a60303] px-8 py-4 text-sm transition-colors duration-200"
          >
            Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
