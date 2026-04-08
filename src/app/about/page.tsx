import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | All-Out Window Tint — Gonzales, LA",
  description:
    "Meet Dax Normand, US Navy veteran and founder of All-Out Window Tint. Family owned and operated in Gonzales, LA since 2020.",
};

const values = [
  {
    title: "All-Out Effort",
    desc: "The name isn't just a brand — it's a commitment. Every job gets everything we've got, whether it's a single car window or an entire commercial building.",
  },
  {
    title: "Military Precision",
    desc: "Dax's time in the US Navy instilled a standard for quality and attention to detail that carries into every install. No shortcuts. No excuses.",
  },
  {
    title: "Family First",
    desc: "We treat every customer the way we'd treat family. That means honest pricing, real communication, and work we're genuinely proud to stand behind.",
  },
  {
    title: "Community Rooted",
    desc: "We live and work right here in Gonzales, LA. Supporting local businesses and neighbors isn't a marketing angle — it's who we are.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-32 pb-16 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
            Our Story
          </p>
          <h1 className="font-display text-white text-5xl md:text-6xl font-bold mb-6">
            ABOUT US
          </h1>
          <p className="font-body text-[#888888] text-lg max-w-2xl leading-relaxed">
            All-Out Window Tint was founded by a Navy veteran with a simple
            belief: do the job right, or don't do it at all.
          </p>
        </div>
      </section>

      {/* Owner story */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[550px]">
              <Image
                src="/images/shop-reception.jpg"
                alt="All Out Window Tint shop"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-display text-white text-2xl font-bold">Dax Normand</p>
              <p className="font-body text-[#a60303] text-sm tracking-wider uppercase">
                Founder & Owner · US Navy Veteran
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
              BUILT BY SOMEONE
              <br />
              <span className="text-[#a60303]">WHO GOES ALL OUT.</span>
            </h2>

            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                Dax Normand grew up with a passion for vehicles and a drive to
                be the best at whatever he put his hand to. After serving his
                country in the US Navy, he brought that same discipline home to
                Gonzales, Louisiana.
              </p>
              <p>
                In 2020, Dax launched All-Out Window Tint, and the name says
                it all. As a serial entrepreneur and family man, Dax puts
                everything into every venture. But this one is personal. It's
                built in the community he loves, for the neighbors, families,
                and businesses that make this area home.
              </p>
              <p>
                What started as a focused window tinting operation has grown
                into a full-service auto spa offering tinting, paint protection
                film, vehicle wraps, marine services, and more. All backed by
                the same commitment to quality that Dax brought home from the
                Navy.
              </p>
              <p>
                When you bring your vehicle, home, or business to All-Out, you
                get Dax's personal standard: the job is done right, or it
                doesn't leave the shop.
              </p>
            </div>

            <div className="flex gap-8 mt-10 pt-8 border-t border-[#242424]">
              <div>
                <p className="font-display text-white text-3xl font-bold">2020</p>
                <p className="font-body text-[#888888] text-sm">Founded</p>
              </div>
              <div>
                <p className="font-display text-white text-3xl font-bold">1000+</p>
                <p className="font-body text-[#888888] text-sm">Jobs Completed</p>
              </div>
              <div>
                <p className="font-display text-white text-3xl font-bold">Lifetime</p>
                <p className="font-body text-[#888888] text-sm">Warranty</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 px-6 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
              What Drives Us
            </p>
            <h2 className="font-display text-white text-4xl md:text-5xl font-bold">
              OUR VALUES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#242424]">
            {values.map((val) => (
              <div key={val.title} className="bg-[#141414] p-10">
                <div className="w-10 h-0.5 bg-[#a60303] mb-6" />
                <h3 className="font-display text-white text-2xl font-bold mb-3 tracking-wide">
                  {val.title}
                </h3>
                <p className="font-body text-[#888888] text-sm leading-relaxed">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Shop showcase */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
              Our Shop
            </p>
            <h2 className="font-display text-white text-4xl md:text-5xl font-bold">
              WHERE IT ALL HAPPENS
            </h2>
            <p className="font-body text-[#888888] text-base mt-4 max-w-xl mx-auto">
              43469 Cannon Road, Gonzales, LA 70737<br />
              Mon–Fri 9AM–5PM · (225) 381-1000
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
            {[
              "/images/auto-silverado-2500hd-black.jpg",
              "/images/auto-corvette-red-exterior.jpg",
              "/images/auto-gmc-yukon-black-side.jpg",
              "/images/auto-genesis-g80-shop.jpg",
              "/images/auto-ford-f150-white-shop.jpg",
              "/images/auto-gmc-sierra-black-shop.jpg",
            ].map((src, i) => (
              <div key={i} className="relative aspect-square overflow-hidden">
                <Image
                  src={src}
                  alt="All Out Window Tint shop"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#a60303] py-16 px-6 text-center">
        <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-4">
          COME SEE US IN GONZALES
        </h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">
          Stop by, give us a call, or fill out our online form. We'd love to
          earn your business.
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
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
