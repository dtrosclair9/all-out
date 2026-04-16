import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | All-Out Window Tint — Gonzales & Baton Rouge, LA",
  description:
    "Meet the team behind All-Out Window Tint. Family owned and operated with two locations in Gonzales and Baton Rouge, LA since 2020.",
};

// Update names/roles here when ready
const team = [
  { img: "/images/team-member-5.jpg", name: "Team Member", role: "Installer" },
  { img: "/images/team-member-6.jpg", name: "Team Member", role: "Installer" },
  { img: "/images/team-member-1.jpg", name: "Team Member", role: "Installer" },
  { img: "/images/team-member-2.jpg", name: "Team Member", role: "Installer" },
  { img: "/images/team-member-3.jpg", name: "Team Member", role: "Installer" },
  { img: "/images/team-member-4.jpg", name: "Team Member", role: "Installer" },
];

const values = [
  {
    title: "All-Out Effort",
    desc: "The name isn't just a brand — it's a commitment. Every job gets everything we've got, whether it's a single car window or an entire commercial building.",
  },
  {
    title: "Craft Over Shortcuts",
    desc: "Tinting is a trade. Doing it right takes training, patience, and a standard you hold yourself to even when no one's watching. That's how we were built.",
  },
  {
    title: "Family First",
    desc: "We treat every customer the way we'd treat family. Honest pricing, real communication, and work we're genuinely proud to stand behind.",
  },
  {
    title: "Community Rooted",
    desc: "We live and work right here in Louisiana. Supporting local businesses and neighbors isn't a marketing angle — it's who we are.",
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
            All-Out Window Tint was built by two people who bet on themselves —
            and on the belief that doing the job right is the only way to do it.
          </p>
        </div>
      </section>

      {/* Dax's story */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[550px]">
              <Image
                src="/images/dax-military.jpg"
                alt="Dax Normand — Founder"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-display text-white text-2xl font-bold">Dax Normand</p>
              <p className="font-body text-[#a60303] text-sm tracking-wider uppercase">
                Co-Owner · Navy Corpsman
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
                be the best at whatever he put his hand to. He served as a Navy
                Corpsman embedded with the Marines — a role that demands
                precision, composure, and the kind of discipline you don&apos;t
                forget. He brought all of that home to Gonzales, Louisiana.
              </p>
              <p>
                In May 2020, Dax launched All-Out Window Tint, and the name
                says it all. As a serial entrepreneur and family man, he puts
                everything into every venture. But this one is personal. It&apos;s
                built in the community he loves, for the neighbors, families,
                and businesses that make this area home.
              </p>
              <p>
                What started as a focused window tinting operation has grown
                into a full-service auto spa offering tinting, paint protection
                film, vehicle wraps, marine services, and more — all backed by
                the same standard Dax brought home from the Navy.
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
                <p className="font-display text-white text-3xl font-bold">2</p>
                <p className="font-body text-[#888888] text-sm">Locations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="bg-[#0a0a0a] px-6">
        <div className="max-w-7xl mx-auto border-t border-[#242424]" />
      </div>

      {/* Reed's story */}
      <section className="py-20 px-6 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content — left on this block for visual balance */}
          <div className="order-2 lg:order-1">
            <h2 className="font-display text-white text-3xl md:text-4xl font-bold mb-6 leading-tight">
              A TRADE TURNED
              <br />
              <span className="text-[#a60303]">INTO A CALLING.</span>
            </h2>

            <div className="space-y-4 font-body text-[#888888] text-base leading-relaxed">
              <p>
                Reed Babin got his start in the industry in 2017 while working
                at a custom shop. When he was told he needed to learn window
                tinting, he flew to Los Angeles and got properly trained. What
                started as something he was pushed into quickly became something
                he took real pride in — the precision, the process, the way a
                clean install could completely transform a vehicle.
              </p>
              <p>
                Reed was still in college at the time and went on to graduate
                with a degree in instrumentation. Like a lot of people, he
                followed the practical route and went to work in the plants —
                but it didn&apos;t take long to realize that life wasn&apos;t for him. He
                went back to the craft, and knew he wanted to build something of
                his own around it.
              </p>
              <p>
                He bet on himself. May 1st, 2020 — right in the middle of
                COVID — Reed opened All-Out Window Tint. Not ideal timing, but
                he believed in what he was building and moved forward anyway.
                For the years since, he&apos;s been hands-on in every part of the
                business: every vehicle, every install, every customer.
              </p>
              <p>
                Now, by bringing in the right partners and expanding into Baton
                Rouge, Reed and the All-Out team are growing into something
                bigger — while keeping the same quality and attention to detail
                that got them here.
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="relative order-1 lg:order-2">
            <div className="relative h-[550px]">
              <Image
                src="/images/reed-babin.jpg"
                alt="Reed Babin — Co-Owner"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="font-display text-white text-2xl font-bold">Reed Babin</p>
              <p className="font-body text-[#a60303] text-sm tracking-wider uppercase">
                Co-Owner · Certified Installer
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 px-6 bg-[#141414]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
              The People Behind the Work
            </p>
            <h2 className="font-display text-white text-4xl md:text-5xl font-bold">
              MEET THE TEAM
            </h2>
          </div>

          {/* Group photo */}
          <div className="relative w-full overflow-hidden mb-10">
            <Image
              src="/images/team-group-2.jpg"
              alt="All-Out Window Tint Team"
              width={1456}
              height={816}
              className="w-full h-auto"
            />
          </div>

          {/* Individual grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            {team.map((member, i) => (
              <div key={i} className="overflow-hidden group">
                <Image
                  src={member.img}
                  alt={member.name}
                  width={1456}
                  height={816}
                  className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch Us Work */}
      <section className="bg-[#0a0a0a] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
              The Process
            </p>
            <h2 className="font-display text-white text-4xl md:text-5xl font-bold">
              WATCH US WORK
            </h2>
          </div>
          <div className="w-full h-[500px] md:h-[580px] overflow-hidden border border-[#1e1e1e] relative">
            <video
              src="/service-clip.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
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
              Our Work
            </p>
            <h2 className="font-display text-white text-4xl md:text-5xl font-bold">
              WHERE IT ALL HAPPENS
            </h2>
            <p className="font-body text-[#888888] text-base mt-4 max-w-xl mx-auto">
              Two locations. Same standard.
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
                  alt="All Out Window Tint work"
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
          COME SEE US
        </h2>
        <p className="font-body text-white/80 text-base mb-8 max-w-md mx-auto">
          Gonzales or Baton Rouge — stop by, give us a call, or fill out our
          online form. We&apos;d love to earn your business.
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
