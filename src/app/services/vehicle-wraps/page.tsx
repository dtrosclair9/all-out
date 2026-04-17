import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Vehicle Wraps & Vinyl | All-Out Window Tint",
  description:
    "Custom vehicle wraps and vinyl in Gonzales and Baton Rouge, LA. Full wraps, partial wraps, color changes, fleet graphics, UTVs, and boats. Call (225) 381-1000.",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of vehicles can you wrap?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We wrap cars, trucks, SUVs, UTVs, ATVs, side-by-sides, boats, trailers, RVs, golf carts, and commercial vehicles. If it has a surface we can prepare, we can wrap it.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a vehicle wrap last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A professionally installed wrap using quality vinyl typically lasts 5–7 years. Longevity depends on how the vehicle is stored and maintained. We only use premium vinyl films.",
      },
    },
    {
      "@type": "Question",
      name: "Will a wrap damage my paint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No — in fact, a wrap protects your paint from minor scratches and UV fading. When professionally installed and removed, the paint underneath is preserved. The key is a proper prep process and quality film, which is what we use.",
      },
    },
    {
      "@type": "Question",
      name: "Do you do commercial fleet graphics?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Fleet graphics and commercial lettering are a specialty. We work with businesses of all sizes to create professional, consistent branding across their entire fleet.",
      },
    },
  ],
};

export default function VehicleWrapsPage() {
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
            <span className="text-white">Vehicle Wraps & Vinyl</span>
          </nav>
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
            Vehicle Wraps & Vinyl
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6 leading-tight">
            VEHICLE WRAPS IN
            <br />GONZALES & BATON ROUGE, LA
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            Full wraps, partial wraps, color changes, fleet graphics, UTVs,
            boats, and trailers. If it moves, we can wrap it — using premium
            vinyl and precision installation.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <Link
              href="/contact"
              className="font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] text-white px-8 py-4 text-sm transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
            <a
              href="tel:2253811000"
              className="font-display tracking-widest uppercase border border-white/30 hover:border-white text-white px-8 py-4 text-sm transition-colors duration-200"
            >
              (225) 381-1000
            </a>
          </div>
        </div>
      </section>

      {/* Images */}
      <section className="bg-[#0a0a0a] pb-4 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-1">
          {[
            { src: "/images/wraps-parish-fence-truck.jpg", alt: "Parish Fence & Gates fleet wrap" },
            { src: "/images/wraps-generator-install.jpg", alt: "Generator wrap installation" },
            { src: "/images/wraps-vinyl-install.jpg", alt: "Technician applying vinyl wrap" },
          ].map((img) => (
            <div key={img.src} className="relative aspect-[4/3] overflow-hidden">
              <Image src={img.src} alt={img.alt} fill className="object-cover hover:scale-105 transition-transform duration-500" />
            </div>
          ))}
        </div>
      </section>

      {/* Details */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
              TRANSFORM ANYTHING.
              <br /><span className="text-[#a60303]">WRAP IT ALL OUT.</span>
            </h2>
            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                A vehicle wrap is one of the most dramatic transformations you
                can make. New color, custom graphics, matte or satin finish,
                camo patterns, carbon fiber textures — we can execute virtually
                any look on virtually any vehicle.
              </p>
              <p>
                We work with premium vinyl from leading manufacturers, cut with
                precision plotters and installed by trained hands. Full
                color-change wraps, commercial fleet graphics, partial wraps
                for hoods and roofs, decals, and lettering — all available at
                both our Gonzales and Baton Rouge locations.
              </p>
              <p>
                We also wrap UTVs, side-by-sides, boats, trailers, and RVs —
                not just cars. If you use it, we can brand or transform it.
              </p>
            </div>
          </div>
          <div>
            <h3 className="font-display text-white text-xl font-bold mb-6 tracking-wide">WRAP SERVICES</h3>
            <ul className="space-y-3">
              {[
                "Full color-change vehicle wraps",
                "Partial wraps — hoods, roofs, accents",
                "Commercial fleet graphics & lettering",
                "Custom decals and striping",
                "UTVs, ATVs & side-by-sides",
                "Boat & marine wraps",
                "RVs & travel trailers",
                "Truck bed wraps",
                "Interior vinyl wraps",
                "Matte, satin, gloss, and textured finishes",
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

      {/* Two locations */}
      <section className="bg-[#141414] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">Two Locations</p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">VEHICLE WRAPS NEAR YOU</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#242424]">
            {[
              {
                city: "Gonzales",
                tag: "Original Location",
                address: "43469 Cannon Road, Gonzales, LA 70737",
                href: "/services/vehicle-wraps/gonzales",
              },
              {
                city: "Baton Rouge",
                tag: "Now Open",
                address: "7987 Pecue Lane, Suite 7G, Baton Rouge, LA 70809",
                href: "/services/vehicle-wraps/baton-rouge",
              },
            ].map((loc) => (
              <div key={loc.city} className="bg-[#141414] p-10">
                <span className="font-display text-[#a60303] tracking-[0.25em] uppercase text-xs mb-4 inline-block">{loc.tag}</span>
                <h3 className="font-display text-white text-3xl font-bold mb-3">{loc.city}</h3>
                <p className="font-body text-white text-sm mb-6">{loc.address}</p>
                <Link
                  href={loc.href}
                  className="font-display tracking-widest uppercase border border-[#a60303] text-[#a60303] hover:bg-[#a60303] hover:text-white px-6 py-3 text-xs transition-colors duration-200 inline-block"
                >
                  Vehicle Wraps in {loc.city} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">FAQ</p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold">COMMON QUESTIONS</h2>
          </div>
          <div className="space-y-0 divide-y divide-[#242424]">
            {[
              {
                q: "What types of vehicles can you wrap?",
                a: "We wrap cars, trucks, SUVs, UTVs, ATVs, side-by-sides, boats, trailers, RVs, and commercial vehicles. If it has a surface we can prepare, we can wrap it.",
              },
              {
                q: "How long does a vehicle wrap last?",
                a: "A professionally installed wrap using quality vinyl typically lasts 5–7 years, depending on storage and maintenance. We only use premium vinyl films.",
              },
              {
                q: "Will a wrap damage my paint?",
                a: "No — in fact, a wrap protects your paint from minor scratches and UV fading. When professionally installed and removed, the paint underneath is preserved.",
              },
              {
                q: "Do you do commercial fleet graphics?",
                a: "Yes. Fleet graphics and commercial lettering are a specialty. We work with businesses of all sizes to create professional, consistent branding across their entire fleet.",
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
          READY TO TRANSFORM YOUR RIDE?
        </h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">
          Free wrap quotes at both Gonzales and Baton Rouge. Let&apos;s build something.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="tel:2253811000" className="font-display tracking-widest uppercase bg-white text-[#a60303] hover:bg-[#f0f0f0] px-8 py-4 text-sm transition-colors duration-200">
            (225) 381-1000
          </a>
          <Link href="/contact" className="font-display tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[#a60303] px-8 py-4 text-sm transition-colors duration-200">
            Free Estimate
          </Link>
        </div>
      </section>
    </>
  );
}
