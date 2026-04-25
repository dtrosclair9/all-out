import Link from "next/link";

export default function NotFound() {
  return (
    <section className="bg-[#0a0a0a] min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-4">
        404 Error
      </p>
      <h1 className="font-display text-white text-6xl md:text-8xl font-bold leading-none mb-4">
        LOST?
      </h1>
      <p className="font-body text-[#888888] text-base max-w-md leading-relaxed mb-10">
        This page doesn&apos;t exist. Head back home or give us a call and we&apos;ll
        point you in the right direction.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="font-display tracking-widest uppercase bg-[#a60303] hover:bg-[#cc0404] text-white px-8 py-4 text-sm transition-colors duration-200"
        >
          Back to Home
        </Link>
        <a
          href="tel:2252519184"
          className="font-display tracking-widest uppercase border border-white/30 hover:border-white text-white px-8 py-4 text-sm transition-colors duration-200"
        >
          (225) 251-9184
        </a>
      </div>
      <div className="mt-16 w-px h-24 bg-gradient-to-b from-[#a60303] to-transparent" />
    </section>
  );
}
