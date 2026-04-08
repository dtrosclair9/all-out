import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Automotive Tinting",
    desc: "Cars, trucks, SUVs — every make and model. Superior heat rejection and UV protection with a flawless, factory-quality finish.",
    icon: (
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-8l-2.08-5.99zM6.5 16a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm11 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zM5 11l1.5-4.5h11L19 11H5z" />
    ),
    image: "/images/auto-silverado-2500hd-black.jpg",
  },
  {
    title: "Residential Tinting",
    desc: "Keep your home cooler, protect your furniture, and add privacy without sacrificing your view. Transformative results inside and out.",
    icon: (
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    ),
    image: "/images/residential-pool-home.jpg",
  },
  {
    title: "Commercial Tinting",
    desc: "Storefronts, offices, and fleet vehicles. Reduce glare, lower energy costs, and give your business a sharp, professional look.",
    icon: (
      <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
    ),
    image: "/images/commercial-duplessis-builders.jpg",
  },
  {
    title: "Marine Tinting & Wraps",
    desc: "Boats, center consoles, and yacht enclosures. Custom interior wraps and tinting built to handle sun, salt, and open water.",
    icon: (
      <path d="M20 21c-1.39 0-2.78-.47-4-1.32-2.44 1.71-5.56 1.71-8 0C6.78 20.53 5.39 21 4 21H2v2h2c1.38 0 2.74-.35 4-.99 2.52 1.29 5.48 1.29 8 0 1.26.65 2.62.99 4 .99h2v-2h-2zM3.95 19H4c1.6 0 3.02-.88 4-2 .98 1.12 2.4 2 4 2s3.02-.88 4-2c.98 1.12 2.4 2 4 2h.05l1.89-6.68c.08-.26.06-.54-.06-.78s-.34-.42-.6-.5L20 11V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v5l-1.29.42c-.26.08-.48.26-.6.5s-.15.52-.06.78L3.95 19zM6 6h12v4.43l-6-1.93-6 1.93V6z" />
    ),
    image: "/images/marine-boat-interior-cabin.jpg",
  },
  {
    title: "Paint Protection Film",
    desc: "Invisible armor for your paint. Our PPF guards against rock chips, scratches, and road debris — keeping your finish looking new.",
    icon: (
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 4l5 2.18V11c0 3.5-2.33 6.79-5 7.93C9.33 17.79 7 14.5 7 11V7.18L12 5z" />
    ),
    image: "/images/process-ppf-hood.jpg",
  },
  {
    title: "Vehicle Wraps & Vinyl",
    desc: "Cars, trucks, UTVs, boats, and trailers. Full wraps, partial wraps, custom decals — if it moves, we can wrap it.",
    icon: (
      <path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z" />
    ),
    image: "/images/utv-polaris-ranger-camo.jpg",
  },
];

const stats = [
  { value: "5+", label: "Years in Business" },
  { value: "1000+", label: "Vehicles Tinted" },
  { value: "Lifetime", label: "Warranty" },
  { value: "5★", label: "Rated Service" },
];

const galleryPreview = [
  { src: "/images/auto-corvette-red-exterior.jpg", alt: "Red Corvette tinted" },
  { src: "/images/auto-gmc-yukon-black-side.jpg", alt: "Black GMC Yukon" },
  { src: "/images/auto-porsche-911-turbo-red.jpg", alt: "Porsche 911 Turbo" },
  { src: "/images/residential-acadian-white.jpg", alt: "Residential tinting" },
  { src: "/images/marine-boat-interior-cabin.jpg", alt: "Boat interior wrap" },
  { src: "/images/process-techs-installing.jpg", alt: "Installation in progress" },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative h-screen min-h-[600px] overflow-hidden bg-[#0a0a0a]">
        {/* Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay — top darkens for nav, bottom fades to page bg */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/65 via-black/25 to-[#0a0a0a]" />
        {/* Side vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />

        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-start text-center px-6 pt-[28vh]">
          <h1 className="font-display text-white text-4xl md:text-5xl lg:text-7xl font-bold leading-tight mb-6 max-w-2xl">
            GO
            <br />
            <span
              className="text-[#a60303]"
              style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.5)" }}
            >ALL OUT.</span>
          </h1>
          <p className="font-body text-white/70 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
            Professional automotive window tinting, paint protection film, and
            vehicle wraps in Gonzales, LA. Done right, every time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <Link
              href="/contact"
              className="font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] text-white px-8 py-4 text-sm transition-colors duration-200"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/gallery"
              className="font-display tracking-widest uppercase border border-white/40 hover:border-white text-white px-8 py-4 text-sm transition-colors duration-200"
            >
              View Our Work
            </Link>
          </div>
          <p className="font-display text-white/40 tracking-[0.3em] uppercase text-xs">
            Gonzales, Louisiana
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
              What We Do
            </p>
            <h2 className="font-display text-white text-4xl md:text-5xl font-bold">
              OUR SERVICES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#242424]">
            {services.map((service) => (
              <div
                key={service.title}
                className="relative bg-[#0a0a0a] group overflow-hidden"
              >
                {/* Background image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors duration-300" />
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 text-[#a60303] shrink-0">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        {service.icon}
                      </svg>
                    </div>
                    <h3 className="font-display text-white text-xl tracking-wide">
                      {service.title}
                    </h3>
                  </div>
                  <p className="font-body text-[#888888] text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>

                {/* Red bottom accent */}
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#a60303] group-hover:w-full transition-all duration-500" />
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/services"
              className="font-display tracking-widest uppercase border border-[#a60303] text-[#a60303] hover:bg-[#a60303] hover:text-white px-8 py-4 text-sm transition-colors duration-200 inline-block"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-[#a60303] py-16 px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="font-display text-white text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </p>
              <p className="font-body text-white/80 text-sm uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-[#0a0a0a] py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image stack */}
          <div className="relative">
            <div className="relative h-[500px]">
              <Image
                src="/images/shop-reception.jpg"
                alt="All Out Window Tint shop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 to-transparent" />
            </div>
            {/* Badge overlay */}
            <div className="absolute -bottom-6 -right-6 bg-[#a60303] p-6 text-center hidden md:block">
              <p className="font-display text-white text-3xl font-bold leading-none">EST.</p>
              <p className="font-display text-white text-4xl font-bold">2020</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
              Why All-Out
            </p>
            <h2 className="font-display text-white text-4xl md:text-5xl font-bold mb-6 leading-tight">
              WE PUT EVERYTHING
              <br />
              INTO EVERY JOB
            </h2>
            <p className="font-body text-[#888888] text-base leading-relaxed mb-8">
              Founded by Navy veteran Dax Normand, All-Out Window Tint was
              built on the principle that every job deserves your full effort.
              We're a family-owned operation in Gonzales, LA, and we treat
              every customer like one.
            </p>

            <div className="space-y-5">
              {[
                {
                  title: "Lifetime Warranty",
                  desc: "Every tinting job is backed by a lifetime warranty. We stand behind our work.",
                },
                {
                  title: "8+ Years of Experience",
                  desc: "Trained and skilled in the latest techniques for every vehicle, home, and business.",
                },
                {
                  title: "Family & Locally Owned",
                  desc: "Proudly serving Gonzales and the surrounding Baton Rouge area since 2020.",
                },
                {
                  title: "Free Estimates",
                  desc: "No pressure, no obligation. Get an honest quote before any work begins.",
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-1 bg-[#a60303] shrink-0 rounded-full" />
                  <div>
                    <h4 className="font-display text-white text-base tracking-wide mb-1">
                      {item.title}
                    </h4>
                    <p className="font-body text-[#888888] text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="mt-10 inline-block font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] text-white px-8 py-4 text-sm transition-colors duration-200"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ── GALLERY PREVIEW ── */}
      <section className="bg-[#141414] py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
              Our Work
            </p>
            <h2 className="font-display text-white text-4xl md:text-5xl font-bold">
              RECENT PROJECTS
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {galleryPreview.map((item) => (
              <Link key={item.src} href="/gallery" className="relative aspect-square group overflow-hidden block">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-10 h-10 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/gallery"
              className="font-display tracking-widest uppercase border border-[#a60303] text-[#a60303] hover:bg-[#a60303] hover:text-white px-8 py-4 text-sm transition-colors duration-200 inline-block"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image
          src="/images/auto-corvette-c6-gold.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/75" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-4">
            Ready to Get Started?
          </p>
          <h2 className="font-display text-white text-4xl md:text-6xl font-bold mb-6 leading-tight">
            GET YOUR FREE ESTIMATE TODAY
          </h2>
          <p className="font-body text-white/70 text-lg mb-10 max-w-lg mx-auto">
            Call us or fill out our online form. We'll get back to you fast.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:2253811000"
              className="font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] text-white px-8 py-4 text-sm transition-colors duration-200 inline-flex items-center justify-center gap-2"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.47 11.47 0 003.59.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.5a1 1 0 011 1 11.47 11.47 0 00.57 3.59 1 1 0 01-.25 1.01l-2.2 2.2z" />
              </svg>
              (225) 381-1000
            </a>
            <Link
              href="/contact"
              className="font-display tracking-widest uppercase border border-white text-white hover:bg-white hover:text-black px-8 py-4 text-sm transition-colors duration-200 inline-flex items-center justify-center"
            >
              Online Quote Form
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
