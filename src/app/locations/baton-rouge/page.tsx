import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Window Tinting in Baton Rouge, LA | All-Out Window Tint",
  description:
    "Professional window tinting, paint protection film, and vehicle wraps in Baton Rouge, LA. Visit All-Out Window Tint at 7987 Pecue Lane, Suite 7G. Call (225) 381-1000.",
};

const services = [
  { label: "Ceramic Coating", href: "/services/ceramic-coating" },
  { label: "Paint Protection Film (PPF)", href: "/services/paint-protection-film/baton-rouge" },
  { label: "Vehicle Wraps & Vinyl", href: "/services/vehicle-wraps/baton-rouge" },
  { label: "Commercial Window Tinting", href: "/services/commercial-tinting/baton-rouge" },
  { label: "Automotive Window Tinting", href: "/services/automotive-tinting/baton-rouge" },
  { label: "Marine Tinting & Wraps", href: "/services/marine-tinting/baton-rouge" },
  { label: "Residential Window Tinting", href: "/services/residential-tinting/baton-rouge" },
];

const areasServed = [
  "Baton Rouge", "Central", "Zachary", "Baker",
  "Denham Springs", "Walker", "Port Allen", "East Baton Rouge Parish",
];

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "All-Out Window Tint — Baton Rouge",
  image: "https://alloutwindowtint.com/images/logo-primary.png",
  telephone: "+12253811000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "7987 Pecue Lane, Suite 7G",
    addressLocality: "Baton Rouge",
    addressRegion: "LA",
    postalCode: "70809",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 30.3629,
    longitude: -91.0637,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "17:00",
    },
  ],
  url: "https://alloutwindowtint.com/locations/baton-rouge",
  priceRange: "$$",
  areaServed: areasServed.map((a) => ({ "@type": "City", name: a })),
};

export default function BatonRougePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Header */}
      <section className="bg-[#0a0a0a] pt-36 pb-16 px-6 border-b border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
            Baton Rouge, Louisiana
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-4 leading-tight">
            WINDOW TINTING IN
            <br />
            BATON ROUGE, LA
          </h1>
          <p className="font-body text-[#888888] text-base max-w-xl leading-relaxed">
            Our Baton Rouge location on Pecue Lane. Serving Baton Rouge,
            Central, Denham Springs, Walker, and the greater East Baton Rouge
            Parish area. Same quality, same standard — now closer to the
            capital.
          </p>
        </div>
      </section>

      {/* Info + Map */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
          {/* Info */}
          <div>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-[#a60303] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                <div>
                  <p className="font-display text-[#888888] tracking-widest uppercase text-xs mb-1">Address</p>
                  <a
                    href="https://maps.google.com/?q=7987+Pecue+Lane,+Baton+Rouge,+LA+70809"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-white text-sm leading-relaxed hover:text-[#a60303] transition-colors"
                  >
                    7987 Pecue Lane, Suite 7G<br />Baton Rouge, LA 70809
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-[#a60303] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.59 1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>
                <div>
                  <p className="font-display text-[#888888] tracking-widest uppercase text-xs mb-1">Phone</p>
                  <a href="tel:2253811000" className="font-body text-white text-sm hover:text-[#a60303] transition-colors duration-200">
                    (225) 381-1000
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <svg className="w-5 h-5 text-[#a60303] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
                <div>
                  <p className="font-display text-[#888888] tracking-widest uppercase text-xs mb-1">Hours</p>
                  <p className="font-body text-white text-sm">Mon – Fri: 9AM – 5PM</p>
                  <p className="font-body text-[#888888] text-sm">Sat – Sun: By Appointment</p>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="border-t border-[#1e1e1e] pt-8 mb-10">
              <p className="font-display text-white tracking-widest uppercase text-xs mb-5">
                Services at This Location
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {services.map((s) => (
                  <li key={s.label}>
                    <Link href={s.href} className="flex items-center gap-2 group">
                      <div className="w-1 h-1 bg-[#a60303] rounded-full shrink-0" />
                      <span className="font-body text-[#888888] text-sm group-hover:text-[#a60303] transition-colors duration-200">
                        {s.label}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas served */}
            <div className="border-t border-[#1e1e1e] pt-8 mb-10">
              <p className="font-display text-white tracking-widest uppercase text-xs mb-4">
                Areas Served
              </p>
              <div className="flex flex-wrap gap-2">
                {areasServed.map((area) => (
                  <span key={area} className="font-body text-[#888888] text-xs border border-[#242424] px-3 py-1">
                    {area}
                  </span>
                ))}
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] text-white px-7 py-3.5 text-sm transition-colors duration-200 text-center"
              >
                Get a Free Quote
              </Link>
              <a
                href="https://maps.google.com/?q=7987+Pecue+Lane,+Baton+Rouge,+LA+70809"
                target="_blank"
                rel="noopener noreferrer"
                className="font-display tracking-widest uppercase border border-[#2a2a2a] hover:border-white text-white px-7 py-3.5 text-sm transition-colors duration-200 text-center"
              >
                Get Directions
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-96 overflow-hidden border border-[#1e1e1e] grayscale">
            <iframe
              src="https://maps.google.com/maps?q=7987+Pecue+Lane,+Baton+Rouge,+LA+70809&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="All-Out Window Tint Baton Rouge"
            />
          </div>
        </div>
      </section>

      {/* About this location */}
      <section className="bg-[#141414] py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14">
          <div>
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
              Baton Rouge
            </p>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
              BRINGING THE SAME
              <br />
              STANDARD TO THE CAPITAL
            </h2>
            <div className="space-y-4 font-body text-[#888888] text-sm leading-relaxed">
              <p>
                After five years of building our reputation in Ascension Parish,
                All-Out Window Tint expanded to Baton Rouge to serve a bigger
                market — without compromising the quality that earned us that
                reputation in the first place.
              </p>
              <p>
                Located on Pecue Lane in south Baton Rouge, we&apos;re easily
                accessible from Airline Highway, Perkins Road, and I-10. We
                serve customers throughout East Baton Rouge Parish — including
                Central, Zachary, Denham Springs, Walker, Baker, and Port Allen.
              </p>
              <p>
                Every job at our Baton Rouge location is handled by the same
                trained team that built All-Out from the ground up — the same
                people, the same process, the same standard.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-3 content-start">
            {[
              { value: "Now", label: "Open" },
              { value: "All 7", label: "Services" },
              { value: "2", label: "Locations" },
              { value: "5★", label: "Rated" },
            ].map((stat) => (
              <div key={stat.label} className="bg-[#0a0a0a] p-6 text-center">
                <p className="font-display text-white text-3xl font-bold mb-1">{stat.value}</p>
                <p className="font-body text-[#888888] text-xs uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other location */}
      <section className="bg-[#0a0a0a] py-14 px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="font-display text-[#a60303] tracking-widest uppercase text-xs mb-1">Original Location</p>
            <p className="font-display text-white text-xl font-bold">Gonzales — Est. 2020</p>
            <p className="font-body text-[#888888] text-sm mt-1">43469 Cannon Road — Gonzales, LA 70737</p>
          </div>
          <Link
            href="/locations/gonzales"
            className="font-display tracking-widest uppercase border border-[#2a2a2a] hover:border-[#a60303] text-white hover:text-[#a60303] px-6 py-3 text-sm transition-colors duration-200 shrink-0"
          >
            View Location
          </Link>
        </div>
      </section>
    </>
  );
}
