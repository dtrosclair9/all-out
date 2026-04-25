import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automotive Window Tinting | All-Out Window Tint",
  description:
    "Professional automotive window tinting in Gonzales and Baton Rouge, LA. Cars, trucks, SUVs, and exotics. Precision installation at both locations. Call (225) 251-9184.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What tint percentage is legal in Louisiana?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Louisiana law requires front side windows to allow at least 25% visible light transmission (VLT). Rear side windows and the rear windshield can be any darkness on non-passenger vehicles. We carry all legal shades and will recommend the right level for your needs and your vehicle type.",
      },
    },
    {
      "@type": "Question",
      name: "How long does automotive window tinting take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most vehicles take 2–4 hours. Larger SUVs and trucks may take slightly longer. We'll give you an accurate time estimate when you drop off.",
      },
    },
    {
      "@type": "Question",
      name: "How long do I wait before rolling my windows down?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We recommend waiting at least 3 days before rolling your windows down to allow the film to fully cure. Louisiana heat actually helps speed up the cure time.",
      },
    },
    {
      "@type": "Question",
      name: "What's the difference between dyed, carbon, and ceramic window film?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Dyed film is the most affordable option with good UV protection. Carbon film adds better heat rejection and a matte finish. Ceramic film is the top tier — it rejects up to 80% of infrared heat, won't fade, and doesn't interfere with electronics like GPS or cell signals. We'll walk you through the options.",
      },
    },
    {
      "@type": "Question",
      name: "Does window tinting affect my rear defroster?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Our installation process never covers or damages the defroster elements on your rear windshield. Your defroster will work exactly as it did before.",
      },
    },
  ],
};

export default function AutomotiveTintingPage() {
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
            <span className="text-white">Automotive Tinting</span>
          </nav>
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
            Automotive Window Tinting
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            CAR WINDOW TINTING IN
            <br />GONZALES & BATON ROUGE, LA
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            Every make, every model. Professional-grade film installed to a
            flawless finish — no bubbles, no lifting, expertly installed at both locations.
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
              className="font-display tracking-widest uppercase border border-white/30 hover:border-white text-white px-8 py-4 text-sm transition-colors duration-200 inline-flex items-center gap-2"
            >
              (225) 251-9184
            </a>
          </div>
        </div>
      </section>

      {/* Image gallery */}
      <section className="bg-[#0a0a0a] pb-4 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-1">
          {[
            { src: "/images/auto-jeep-cherokee-hex-shop.jpg", alt: "Jeep Grand Cherokee in shop with hexagon lighting" },
            { src: "/images/auto-corvette-orange-doors.jpg", alt: "Orange C8 Corvette" },
            { src: "/images/auto-corvette-duo.jpg", alt: "Red and white Corvettes in shop" },
            { src: "/images/auto-ford-lifted-led.jpg", alt: "Lifted Ford Super Duty" },
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
              PROFESSIONAL TINTING
              <br />
              <span className="text-[#a60303]">DONE RIGHT THE FIRST TIME.</span>
            </h2>
            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                Window tinting is one of the best upgrades you can make to any
                vehicle. It reduces interior heat — critical in Louisiana
                summers — blocks 99% of UV rays that fade upholstery and
                damage skin, cuts glare, and gives your vehicle a clean,
                finished look that makes a real difference.
              </p>
              <p>
                At All-Out, we don&apos;t cut corners. Every install starts with a
                thorough cleaning of the glass, precise computer-cut film
                patterns, and a careful hand installation that leaves zero
                bubbles and clean edges. We stand behind every job with a
                clean finish with no bubbles, no lifting, and no shortcuts.
              </p>
              <p>
                We carry multiple film options across a range of shades so you
                can dial in the exact look and performance level you&apos;re after.
                Not sure what you need? We&apos;ll walk you through it.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-display text-white text-xl font-bold mb-6 tracking-wide">WHAT&apos;S INCLUDED</h3>
            <ul className="space-y-3 mb-10">
              {[
                "Cars, trucks, SUVs, vans — all makes and models",
                "Professional-grade film, multiple shades available",
                "High heat rejection film available",
                "99% UV ray protection",
                "Precision computer-cut film patterns",
                "Zero-bubble installation guarantee",
                "All legal Louisiana tint levels available",
                "Zero-bubble installation — we don't rush, we don't cut corners",
              ].map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#a60303] rounded-full shrink-0 mt-1.5" />
                  <span className="font-body text-[#888888] text-sm leading-relaxed">{f}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#141414] p-6 border border-[#242424]">
              <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-3">Louisiana Tint Law</p>
              <p className="font-body text-[#888888] text-sm leading-relaxed">
                Front side windows must allow at least <strong className="text-white">25% VLT</strong>. Rear
                windows and the rear windshield can be any shade on non-passenger
                vehicles. We know the law and will keep your vehicle compliant.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two locations */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">Two Locations</p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">
              AUTOMOTIVE TINTING NEAR YOU
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#242424]">
            {[
              {
                city: "Gonzales",
                tag: "Original Location",
                address: "43469 Cannon Road, Gonzales, LA 70737",
                areas: "Serving Prairieville, Sorrento, Geismar & Ascension Parish",
                href: "/services/automotive-tinting/gonzales",
              },
              {
                city: "Baton Rouge",
                tag: "Now Open",
                address: "7987 Pecue Lane, Suite 7G, Baton Rouge, LA 70809",
                areas: "Serving Central, Denham Springs, Walker & East Baton Rouge Parish",
                href: "/services/automotive-tinting/baton-rouge",
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
                  Automotive Tinting in {loc.city} →
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
                q: "What tint percentage is legal in Louisiana?",
                a: "Louisiana law requires front side windows to allow at least 25% visible light transmission (VLT). Rear side windows and the rear windshield can be any darkness on non-passenger vehicles. We carry all legal shades and will keep your vehicle compliant.",
              },
              {
                q: "How long does automotive window tinting take?",
                a: "Most vehicles take 2–4 hours. Larger SUVs and trucks may take slightly longer. We'll give you an accurate estimate when you drop off.",
              },
              {
                q: "How long do I wait before rolling my windows down?",
                a: "We recommend waiting at least 3 days before rolling your windows down to allow the film to fully cure. Louisiana heat actually helps speed up the process.",
              },
              {
                q: "What's the difference between dyed, carbon, and ceramic film?",
                a: "Dyed film offers good UV protection at an accessible price point. Carbon film adds better heat rejection without signal interference. Ceramic is the top tier — rejecting up to 80% of infrared heat, with no signal interference and maximum clarity. We'll walk you through each option.",
              },
              {
                q: "Does window tinting affect my rear defroster?",
                a: "No. Our installation process never covers or damages the defroster elements. Your defroster will work exactly as before.",
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
          READY TO TINT YOUR VEHICLE?
        </h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">
          Get a free estimate at our Gonzales or Baton Rouge location. Call us
          or fill out the form — we reply fast.
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
