import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | All-Out Window Tint — Gonzales, LA",
  description:
    "Browse our portfolio of window tinting, PPF, and vehicle wrap work on cars, trucks, boats, homes, and more.",
};

const categories = [
  {
    label: "Automotive",
    photos: [
      { src: "/images/auto-silverado-2500hd-black.jpg", caption: "Chevy Silverado 2500HD" },
      { src: "/images/auto-corvette-red-exterior.jpg", caption: "C8 Corvette" },
      { src: "/images/auto-gmc-yukon-black-side.jpg", caption: "GMC Yukon" },
      { src: "/images/auto-porsche-911-turbo-red.jpg", caption: "Porsche 911 Turbo S" },
      { src: "/images/auto-lincoln-nautilus-black-shop.jpg", caption: "Lincoln Nautilus" },
      { src: "/images/auto-corvette-z06-gray-shop.jpg", caption: "C8 Corvette Z06" },
      { src: "/images/auto-tesla-cybertruck.jpg", caption: "Tesla Cybertruck" },
      { src: "/images/auto-jeep-wrangler-rubicon.jpg", caption: "Jeep Wrangler Rubicon 392" },
      { src: "/images/auto-cadillac-escalade-detail.jpg", caption: "Cadillac Escalade" },
      { src: "/images/auto-mercedes-g63-black.jpg", caption: "Mercedes G63 AMG" },
      { src: "/images/auto-ford-f150-king-ranch.jpg", caption: "Ford F-150 King Ranch" },
      { src: "/images/auto-genesis-g80-shop.jpg", caption: "Genesis G80" },
    ],
  },
  {
    label: "Residential",
    photos: [
      { src: "/images/residential-pool-home.jpg", caption: "Pool Home — Privacy Tint" },
      { src: "/images/residential-acadian-white.jpg", caption: "Acadian Home" },
      { src: "/images/residential-brick-large-window.jpg", caption: "Custom Home — Large Window" },
      { src: "/images/residential-colonial-white.jpg", caption: "Colonial Home" },
      { src: "/images/residential-modern-farmhouse.jpg", caption: "Modern Farmhouse" },
      { src: "/images/residential-porch-sliding-doors.jpg", caption: "Back Porch Sliding Doors" },
      { src: "/images/residential-kitchen-interior.jpg", caption: "Kitchen Window Film" },
      { src: "/images/residential-coastal-home.jpg", caption: "Coastal Home" },
    ],
  },
  {
    label: "Commercial",
    photos: [
      { src: "/images/commercial-duplessis-builders.jpg", caption: "Duplessis Builders — Storefront" },
      { src: "/images/commercial-storefront-brick.jpg", caption: "Commercial Storefront" },
      { src: "/images/commercial-state-police.jpg", caption: "Louisiana State Police Fleet" },
      { src: "/images/commercial-fleet-truck.jpg", caption: "EPS Commercial Fleet" },
    ],
  },
  {
    label: "Marine",
    photos: [
      { src: "/images/marine-boat-interior-cabin.jpg", caption: "Boat Interior Marble Wrap" },
      { src: "/images/marine-boat-interior-helm.jpg", caption: "Helm Wrap Detail" },
      { src: "/images/marine-chaparral-boat.jpg", caption: "Chaparral — Marine Tint" },
      { src: "/images/marine-center-console-helm.jpg", caption: "Center Console Helm" },
      { src: "/images/marine-monterey-speedboat.jpg", caption: "Monterey Speedboat" },
      { src: "/images/marine-chaparral-red.jpg", caption: "Chaparral Bow Rider" },
    ],
  },
  {
    label: "Specialty",
    photos: [
      { src: "/images/utv-polaris-ranger-camo.jpg", caption: "Polaris Ranger — Camo Wrap" },
      { src: "/images/utv-canam-defender-outside.jpg", caption: "Can-Am Defender MAX" },
      { src: "/images/specialty-motorhome-front.jpg", caption: "Entegra Motorhome" },
      { src: "/images/specialty-kubota-tractor.jpg", caption: "Kubota Tractor" },
      { src: "/images/specialty-fifth-wheel.jpg", caption: "Fifth Wheel Trailer" },
      { src: "/images/specialty-travel-trailer.jpg", caption: "Travel Trailer" },
    ],
  },
  {
    label: "PPF & Wraps",
    photos: [
      { src: "/images/process-ppf-hood.jpg", caption: "PPF Application" },
      { src: "/images/process-ppf-install.jpg", caption: "PPF Install — White Truck" },
      { src: "/images/process-techs-installing.jpg", caption: "Team at Work" },
      { src: "/images/auto-corvette-z06-dramatic.jpg", caption: "C8 Corvette Z06 — PPF" },
      { src: "/images/auto-corvette-z06-yellow.jpg", caption: "Corvette Z06 — Yellow" },
      { src: "/images/auto-porsche-panamera-silver.jpg", caption: "Porsche Panamera" },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
            Our Work
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6">
            WINDOW TINT GALLERY
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            Browse our portfolio of window tinting, PPF, and vehicle wrap work.
            Automotive, residential, commercial, marine, and specialty vehicles
            serviced in and around Gonzales, LA.
          </p>
        </div>
      </section>

      {/* Gallery by category */}
      {categories.map((cat, i) => (
        <section
          key={cat.label}
          className={`py-16 px-6 ${i % 2 === 0 ? "bg-[#0a0a0a]" : "bg-[#141414]"}`}
        >
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-white text-2xl md:text-3xl font-bold tracking-wide mb-8 flex items-center gap-4">
              <span className="w-8 h-0.5 bg-[#a60303]" />
              {cat.label}
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
              {cat.photos.map((photo) => (
                <div
                  key={photo.src}
                  className="relative aspect-square group overflow-hidden"
                >
                  <Image
                    src={photo.src}
                    alt={photo.caption}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-colors duration-300 flex items-end p-3">
                    <p className="font-body text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-[#a60303] py-16 px-6 text-center">
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">
          READY TO SEE YOUR CAR IN HERE?
        </h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">
          Call us or request a free estimate online. We'd love to add your project to the portfolio.
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
