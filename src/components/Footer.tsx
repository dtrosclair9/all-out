import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#242424]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image
              src="/images/logo-primary.png"
              alt="All Out Tint & Auto Spa"
              width={120}
              height={60}
              className="h-14 w-auto object-contain mb-4"
            />
            <p className="text-[#888888] text-sm leading-relaxed font-body">
              Professional window tinting, PPF, and vehicle wraps. Family owned
              and operated in Gonzales, LA since 2020.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-white tracking-widest uppercase text-sm mb-5">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                { label: "Ceramic Coating", href: "/services/ceramic-coating" },
                { label: "Paint Protection Film", href: "/services/paint-protection-film" },
                { label: "Vehicle Wraps & Vinyl", href: "/services/vehicle-wraps" },
                { label: "Commercial Tinting", href: "/services/commercial-tinting" },
                { label: "Automotive Tinting", href: "/services/automotive-tinting" },
                { label: "Marine Tinting & Wraps", href: "/services/marine-tinting" },
                { label: "Residential Tinting", href: "/services/residential-tinting" },
              ].map((s) => (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    className="text-[#888888] hover:text-[#a60303] text-sm transition-colors font-body"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-white tracking-widest uppercase text-sm mb-5">
              Navigation
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/services", label: "Services" },
                { href: "/gallery", label: "Gallery" },
                { href: "/locations", label: "Locations" },
                { href: "/about", label: "About" },
                { href: "/franchise", label: "Franchise" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#888888] hover:text-[#a60303] text-sm transition-colors font-body"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h4 className="font-display text-white tracking-widest uppercase text-sm mb-5">
              Locations
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#a60303] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                <div>
                  <Link href="/locations/gonzales" className="text-white text-xs font-display tracking-wider uppercase hover:text-[#a60303] transition-colors">Gonzales</Link>
                  <p className="text-[#888888] text-sm font-body mt-0.5">43469 Cannon Road<br />Gonzales, LA 70737</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#a60303] mt-0.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                <div>
                  <Link href="/locations/baton-rouge" className="text-white text-xs font-display tracking-wider uppercase hover:text-[#a60303] transition-colors">Baton Rouge</Link>
                  <p className="text-[#888888] text-sm font-body mt-0.5">7987 Pecue Lane, Suite 7G<br />Baton Rouge, LA 70809</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#a60303] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.59 1 1 0 01-.25 1.01l-2.2 2.2z" />
                </svg>
                <a href="tel:2252519184" className="text-[#888888] hover:text-[#a60303] text-sm transition-colors font-body">(225) 251-9184</a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-[#a60303] shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2a10 10 0 100 20A10 10 0 0012 2zm0 18a8 8 0 110-16 8 8 0 010 16zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z" />
                </svg>
                <span className="text-[#888888] text-sm font-body">Mon–Fri: 9AM – 5PM</span>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/alloutwindowtintllc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#242424] flex items-center justify-center text-[#888888] hover:border-[#a60303] hover:text-[#a60303] transition-colors"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/alloutwindowtint"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 border border-[#242424] flex items-center justify-center text-[#888888] hover:border-[#a60303] hover:text-[#a60303] transition-colors"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#242424] flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[#888888] text-xs font-body">
            © {new Date().getFullYear()} All-Out Window Tint. All rights reserved. · Gonzales & Baton Rouge, LA
          </p>
          <Link href="/privacy" className="text-[#888888] hover:text-[#a60303] text-xs font-body transition-colors duration-200">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
