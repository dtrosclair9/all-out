import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Locations | All-Out Window Tint — Gonzales & Baton Rouge, LA",
  description:
    "All-Out Window Tint has two locations in Louisiana — Gonzales and Baton Rouge. Professional window tinting, PPF, and vehicle wraps near you.",
};

const locations = [
  {
    city: "Gonzales",
    state: "LA",
    address: "43469 Cannon Road",
    cityStateZip: "Gonzales, LA 70737",
    phone: "(225) 381-1000",
    hours: "Mon – Fri: 9AM – 5PM",
    href: "/locations/gonzales",
    mapQuery: "43469+Cannon+Road,+Gonzales,+LA+70737",
    tag: "Original Location",
  },
  {
    city: "Baton Rouge",
    state: "LA",
    address: "7987 Pecue Lane, Suite 7G",
    cityStateZip: "Baton Rouge, LA 70809",
    phone: "(225) 381-1000",
    hours: "Mon – Fri: 9AM – 5PM",
    href: "/locations/baton-rouge",
    mapQuery: "7987+Pecue+Lane,+Baton+Rouge,+LA+70809",
    tag: "Now Open",
  },
];

export default function LocationsPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0a0a0a] pt-36 pb-16 px-6 border-b border-[#1e1e1e]">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
            Find Us
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-4">
            OUR LOCATIONS
          </h1>
          <p className="font-body text-[#888888] text-base max-w-xl leading-relaxed">
            Two locations serving the greater Baton Rouge area. Same team, same
            lifetime warranty, same commitment to quality at every shop.
          </p>
        </div>
      </section>

      {/* Location Cards */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-px bg-[#1e1e1e]">
          {locations.map((loc) => (
            <div key={loc.city} className="bg-[#0a0a0a] p-10 flex flex-col">
              {/* Tag */}
              <span className="font-display text-[#a60303] tracking-[0.25em] uppercase text-xs mb-6 inline-block">
                {loc.tag}
              </span>

              {/* City */}
              <h2 className="font-display text-white text-4xl md:text-5xl font-bold mb-1">
                {loc.city}
              </h2>
              <p className="font-display text-[#555] text-lg mb-8">{loc.state}</p>

              {/* Info */}
              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-[#a60303] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                  </svg>
                  <div>
                    <p className="font-body text-white text-sm">{loc.address}</p>
                    <p className="font-body text-white text-sm">{loc.cityStateZip}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#a60303] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.59 1 1 0 01-.25 1.01l-2.2 2.2z" />
                  </svg>
                  <a href="tel:2253811000" className="font-body text-white text-sm hover:text-[#a60303] transition-colors duration-200">
                    {loc.phone}
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <svg className="w-4 h-4 text-[#a60303] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                  </svg>
                  <p className="font-body text-white text-sm">{loc.hours}</p>
                </div>
              </div>

              {/* Map */}
              <div className="w-full h-48 overflow-hidden border border-[#1e1e1e] grayscale mb-8">
                <iframe
                  src={`https://maps.google.com/maps?q=${loc.mapQuery}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`All-Out Window Tint ${loc.city}`}
                />
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <Link
                  href={loc.href}
                  className="font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] text-white px-6 py-3 text-sm transition-colors duration-200 text-center"
                >
                  Location Details
                </Link>
                <a
                  href={`https://maps.google.com/?q=${loc.mapQuery}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-display tracking-widest uppercase border border-[#2a2a2a] hover:border-white text-white px-6 py-3 text-sm transition-colors duration-200 text-center"
                >
                  Get Directions
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#a60303] py-16 px-6 text-center">
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">
          NOT SURE WHICH LOCATION?
        </h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">
          Call us or fill out the online form and we'll get you set up at
          whichever shop works best for you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:2253811000"
            className="font-display tracking-widest uppercase bg-white text-[#a60303] hover:bg-[#f0f0f0] px-8 py-4 text-sm transition-colors duration-200"
          >
            (225) 381-1000
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
