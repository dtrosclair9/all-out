import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services | All-Out Window Tint — Gonzales & Baton Rouge, LA",
  description:
    "Window tinting, ceramic coating, paint protection film, and vehicle wraps in Gonzales and Baton Rouge, LA. Automotive, residential, commercial, marine, and aviation. Two locations. Call (225) 381-1000.",
};

const services = [
  {
    id: "ceramic",
    title: "Ceramic Coating",
    headline: "A Permanent Bond. Not a Wax.",
    desc: `System X ceramic coating forms a permanent chemical bond with your paint, gelcoat, or aircraft surface. Water beads off. Contaminants can't grip. UV rays are blocked. And your finish stays cleaner with half the effort.

We carry System X Automotive (lifetime warranty), Marine (5-year warranty), and Aviation (10-year warranty) — the right product for the right surface.`,
    features: [
      "System X Automotive — Lifetime Warranty",
      "System X Marine — 5-Year Warranty",
      "System X Aviation — 10-Year Warranty",
      "Hydrophobic self-cleaning effect",
      "UV and oxidation protection",
      "Bonds to paint, gelcoat & aircraft surfaces",
    ],
    images: [
      "/images/auto-corvette-z06-dramatic.jpg",
      "/images/auto-porsche-911-turbo-red.jpg",
      "/images/auto-mercedes-g63-black.jpg",
    ],
    href: "/services/ceramic-coating",
  },
  {
    id: "ppf",
    title: "Paint Protection Film",
    headline: "Invisible Armor for Your Paint.",
    desc: `Paint Protection Film (PPF) is the gold standard in paint preservation. This clear, self-healing film absorbs rock chips, scratches, and road debris before they can reach your paint — keeping your finish looking factory fresh for years.

We install PPF on full vehicles, partial front ends, hoods, rocker panels, mirror backs, and any high-impact area.`,
    features: [
      "Full vehicle & partial coverage",
      "Self-healing technology",
      "Rock chip protection",
      "Scratch resistance",
      "Preserves paint & resale value",
      "Gloss or matte finish options",
    ],
    images: [
      "/images/process-ppf-hood.jpg",
      "/images/process-ppf-install.jpg",
      "/images/auto-corvette-z06-dramatic.jpg",
    ],
    href: "/services/paint-protection-film",
  },
  {
    id: "wraps",
    title: "Vehicle Wraps & Vinyl",
    headline: "Custom Wraps for Everything.",
    desc: `From full color-change wraps to custom graphics, we can transform any vehicle, trailer, UTV, or boat. We use premium vinyl films and precision-cut patterns to achieve results that last.

Whether you want a bold new look, branded fleet graphics, or a custom interior treatment, we have the skills and equipment to make it happen.`,
    features: [
      "Full & partial color-change wraps",
      "Commercial fleet graphics",
      "UTVs, ATVs & side-by-sides",
      "Boat & marine wraps",
      "RVs & travel trailers",
      "Custom decals & lettering",
    ],
    images: [
      "/images/utv-polaris-ranger-camo.jpg",
      "/images/utv-canam-defender-outside.jpg",
      "/images/process-techs-installing.jpg",
    ],
    href: "/services/vehicle-wraps",
  },
  {
    id: "commercial",
    title: "Commercial Tinting",
    headline: "Protect Your People. Reduce Your Costs.",
    desc: `Commercial window film pays for itself. Lower your energy bills, reduce glare for employees and customers, protect interior merchandise from UV damage, and give your storefront a clean, modern look.

We handle everything from single storefronts to multi-location fleet accounts.`,
    features: [
      "Storefronts & office buildings",
      "Fleet & commercial vehicles",
      "Energy cost reduction",
      "Graffiti & safety films available",
      "Government & law enforcement",
      "Bulk fleet pricing available",
    ],
    images: [
      "/images/commercial-duplessis-builders.jpg",
      "/images/commercial-storefront-brick.jpg",
      "/images/commercial-state-police.jpg",
    ],
    href: "/services/commercial-tinting",
  },
  {
    id: "automotive",
    title: "Automotive Tinting",
    headline: "Every Make. Every Model.",
    desc: `Your vehicle deserves the best. Whether it's a daily driver, a show truck, or an exotic, we deliver a flawless, bubble-free tint job with precision film patterns and a clean finish that lasts.

We work with all types of film — from standard dyed to the highest-grade ceramic — to give you the perfect combination of heat rejection, UV protection, and style.`,
    features: [
      "Cars, trucks, SUVs, vans",
      "Ceramic & carbon film options",
      "Heat rejection up to 80%",
      "99% UV protection",
      "All legal tint levels available",
      "Zero-bubble installation guarantee",
    ],
    images: [
      "/images/auto-silverado-2500hd-black.jpg",
      "/images/auto-corvette-red-exterior.jpg",
      "/images/auto-gmc-yukon-black-side.jpg",
    ],
    href: "/services/automotive-tinting",
  },
  {
    id: "marine",
    title: "Marine Services",
    headline: "Built for the Water.",
    desc: `Boats face some of the harshest conditions out there — direct sun, salt air, constant UV exposure. We offer a full range of marine services: tinting, detailing, paint protection film, and custom wraps — everything your boat needs to look sharp and stay protected.`,
    features: [
      "Marine window tinting",
      "Marine detailing & hull care",
      "Paint protection film (PPF) for boats",
      "Custom interior vinyl wraps",
      "Console & dashboard wraps",
      "Yacht windows & enclosures",
      "Marine-grade film technology",
      "UV protection for upholstery & electronics",
    ],
    images: [
      "/images/marine-boat-interior-cabin.jpg",
      "/images/marine-chaparral-boat.jpg",
      "/images/marine-center-console-helm.jpg",
    ],
    href: "/services/marine-tinting",
  },
  {
    id: "residential",
    title: "Residential Tinting",
    headline: "Comfort, Privacy & Style at Home.",
    desc: `Window film isn't just for cars. Residential tinting keeps your home cooler in Louisiana's brutal summers, protects your furniture and flooring from UV fade, and adds a layer of privacy — all without blocking your view.

Whether you have a new construction or an existing home, we'll find the perfect film for every window.`,
    features: [
      "Single and multi-story homes",
      "Energy savings year-round",
      "UV protection for furniture & floors",
      "Privacy without losing natural light",
      "Glare reduction",
      "Available in multiple shades & finishes",
    ],
    images: [
      "/images/residential-pool-home.jpg",
      "/images/residential-acadian-white.jpg",
      "/images/residential-acadian-2.jpg",
    ],
    href: "/services/residential-tinting",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
            What We Offer
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6">
            OUR SERVICES
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            Automotive, residential, commercial, and marine window tinting in
            Gonzales and Baton Rouge, LA. Plus paint protection film and vehicle
            wraps. Both locations. Same standard on every job.
          </p>
        </div>
      </section>

      {/* Services */}
      {services.map((service, i) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 px-6 ${i % 2 === 0 ? "bg-[#0a0a0a]" : "bg-[#141414]"}`}
        >
          <div
            className={`max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
              i % 2 !== 0 ? "lg:flex-row-reverse" : ""
            }`}
            style={i % 2 !== 0 ? { direction: "rtl" } : undefined}
          >
            {/* Images */}
            <div style={i % 2 !== 0 ? { direction: "ltr" } : undefined}>
              <div className="grid grid-cols-2 gap-2">
                <div className="relative col-span-2 h-64">
                  <Image
                    src={service.images[0]}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40">
                  <Image
                    src={service.images[1]}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-40">
                  <Image
                    src={service.images[2]}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div style={i % 2 !== 0 ? { direction: "ltr" } : undefined}>
              <p className="font-display text-[#a60303] tracking-[0.2em] uppercase text-xs mb-2">
                {service.title}
              </p>
              <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {service.headline}
              </h2>
              <div className="space-y-3 mb-8">
                {service.desc.split("\n\n").map((para, j) => (
                  <p key={j} className="font-body text-[#888888] text-sm leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>

              <ul className="grid grid-cols-2 gap-2 mb-8">
                {service.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#a60303] rounded-full shrink-0" />
                    <span className="font-body text-[#888888] text-sm">{f}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <Link
                  href={service.href}
                  className="font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] text-white px-7 py-3.5 text-sm transition-colors duration-200 inline-block"
                >
                  Full Details
                </Link>
                <Link
                  href="/contact"
                  className="font-display tracking-widest uppercase border border-[#2a2a2a] hover:border-white text-white px-7 py-3.5 text-sm transition-colors duration-200 inline-block"
                >
                  Get a Quote
                </Link>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="bg-[#a60303] py-16 px-6 text-center">
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">
          NOT SURE WHAT YOU NEED?
        </h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-xl mx-auto">
          Give us a call or send us a message. We&apos;ll walk you through the best
          options for your vehicle, home, or business. No pressure, no
          obligation. Available at both Gonzales and Baton Rouge.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:2253811000"
            className="font-display tracking-widest uppercase bg-white text-[#a60303] hover:bg-[#f0f0f0] px-8 py-4 text-sm transition-colors duration-200 inline-flex items-center justify-center gap-2"
          >
            (225) 381-1000
          </a>
          <Link
            href="/contact"
            className="font-display tracking-widest uppercase border border-white text-white hover:bg-white hover:text-[#a60303] px-8 py-4 text-sm transition-colors duration-200 inline-block"
          >
            Send a Message
          </Link>
        </div>
      </section>
    </>
  );
}
