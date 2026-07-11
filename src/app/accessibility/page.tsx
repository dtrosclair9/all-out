import { pageMetadata } from "@/lib/site";
import Link from "next/link";

export const metadata = pageMetadata({
  path: "/accessibility",
  title: "Accessibility Statement | All-Out Window Tint",
  description:
    "Accessibility statement for All-Out Window Tint in Gonzales and Baton Rouge, LA. Our commitment to WCAG 2.2 Level AA and how to report an accessibility barrier.",
});

export default function AccessibilityPage() {
  const updated = "July 11, 2025";

  return (
    <section className="bg-[#0a0a0a] min-h-screen pt-36 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-display text-[#f56565] tracking-[0.3em] uppercase text-sm mb-3">
          Legal
        </p>
        <h1 className="font-display text-white text-4xl md:text-5xl font-bold mb-4">
          ACCESSIBILITY STATEMENT
        </h1>
        <p className="font-body text-[#888888] text-sm mb-12">
          Last updated: {updated}
        </p>

        <div className="space-y-10 font-body text-[#888888] text-sm leading-relaxed">

          <div>
            <h2 className="font-display text-white text-xl tracking-wide mb-3">
              Our Commitment
            </h2>
            <p>
              All-Out Window Tint is committed to making our website accessible
              to everyone, including people with disabilities. We want every
              visitor in Gonzales, Baton Rouge, and beyond to be able to browse
              our services, view our work, and reach out to us without barriers.
            </p>
          </div>

          <div>
            <h2 className="font-display text-white text-xl tracking-wide mb-3">
              Conformance Standard
            </h2>
            <p>
              We aim to conform to the Web Content Accessibility Guidelines
              (WCAG) 2.2 at Level AA. These guidelines, published by the World
              Wide Web Consortium (W3C), explain how to make web content more
              accessible to people with a wide range of disabilities, including
              visual, auditory, physical, speech, cognitive, and neurological
              differences.
            </p>
          </div>

          <div>
            <h2 className="font-display text-white text-xl tracking-wide mb-3">
              Measures We Take
            </h2>
            <p className="mb-3">
              To support an accessible experience, our site includes:
            </p>
            <ul className="space-y-2 pl-4">
              {[
                "Text and interface colors chosen to meet WCAG AA contrast ratios",
                "A “Skip to main content” link for keyboard and screen-reader users",
                "Visible keyboard focus indicators on links, buttons, and form fields",
                "Labels associated with every form field",
                "Descriptive alternative text on meaningful images",
                "Semantic headings and landmarks for assistive-technology navigation",
                "A responsive layout that works across phones, tablets, and desktops",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-[#a60303] rounded-full mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display text-white text-xl tracking-wide mb-3">
              Ongoing Effort
            </h2>
            <p>
              Accessibility is an ongoing effort, not a one-time task. We
              regularly review our website and work to fix any barriers we find.
              Some third-party content or embedded tools may not be fully under
              our control, but we strive to choose vendors that share our
              commitment to accessibility.
            </p>
          </div>

          <div>
            <h2 className="font-display text-white text-xl tracking-wide mb-3">
              Report an Accessibility Barrier
            </h2>
            <p className="mb-3">
              If you encounter any part of our website that is difficult to use
              or you cannot access, please let us know. Tell us the page address
              and what happened, and we will do our best to fix it and to
              provide the information you need in another format.
            </p>
            <div className="mt-3 space-y-1">
              <p>All-Out Window Tint</p>
              <p>43469 Cannon Road, Gonzales, LA 70737</p>
              <p>
                <a href="tel:2252519184" className="text-[#f56565] hover:underline">
                  (225) 251-9184
                </a>
              </p>
              <p>
                <a
                  href="mailto:alloutgonzales@gmail.com"
                  className="text-[#f56565] hover:underline"
                >
                  alloutgonzales@gmail.com
                </a>
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-[#1e1e1e]">
          <Link
            href="/"
            className="font-display tracking-widest uppercase text-[#f56565] hover:text-[#cc0404] text-sm transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
