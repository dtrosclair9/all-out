import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | All-Out Window Tint",
  description:
    "Privacy policy for All-Out Window Tint. Learn how we collect, use, and protect your personal information.",
};

export default function PrivacyPage() {
  const updated = "April 7, 2025";

  return (
    <section className="bg-[#0a0a0a] min-h-screen pt-36 pb-24 px-6">
      <div className="max-w-3xl mx-auto">
        <p className="font-display text-[#a60303] tracking-[0.3em] uppercase text-sm mb-3">
          Legal
        </p>
        <h1 className="font-display text-white text-4xl md:text-5xl font-bold mb-4">
          PRIVACY POLICY
        </h1>
        <p className="font-body text-[#555] text-sm mb-12">
          Last updated: {updated}
        </p>

        <div className="space-y-10 font-body text-[#888888] text-sm leading-relaxed">

          <div>
            <h2 className="font-display text-white text-xl tracking-wide mb-3">
              Overview
            </h2>
            <p>
              All-Out Window Tint (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website
              all-outwindowtint.com. This policy explains what information we
              collect when you visit our site or contact us, how we use it, and
              how we protect it. We do not sell your information to anyone.
            </p>
          </div>

          <div>
            <h2 className="font-display text-white text-xl tracking-wide mb-3">
              Information We Collect
            </h2>
            <p className="mb-3">
              We only collect information you choose to provide. When you submit
              a quote request through our contact form, we may collect:
            </p>
            <ul className="space-y-2 pl-4">
              {[
                "Your name",
                "Phone number",
                "Email address",
                "Vehicle year, make, and model",
                "The service you are inquiring about",
                "How you heard about us",
                "Any additional details you include in your message",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-[#a60303] rounded-full mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              We do not collect payment information through this website. All
              transactions are handled in person at our shop.
            </p>
          </div>

          <div>
            <h2 className="font-display text-white text-xl tracking-wide mb-3">
              How We Use Your Information
            </h2>
            <p className="mb-3">
              The information you submit is used solely to respond to your
              inquiry and provide you with a quote. Specifically, we use it to:
            </p>
            <ul className="space-y-2 pl-4">
              {[
                "Contact you about your quote request",
                "Schedule appointments",
                "Follow up on completed services",
                "Improve our services based on how customers find us",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-[#a60303] rounded-full mt-2 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-3">
              We will not add you to a marketing list, share your information
              with advertisers, or contact you for any purpose unrelated to your
              inquiry without your permission.
            </p>
          </div>

          <div>
            <h2 className="font-display text-white text-xl tracking-wide mb-3">
              Third-Party Services
            </h2>
            <p className="mb-3">
              Our contact form is processed through{" "}
              <a
                href="https://formspree.io"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#a60303] hover:underline"
              >
                Formspree
              </a>
              , a third-party form service. When you submit a form, your data
              is transmitted to Formspree&apos;s servers before being delivered to us.
              Formspree&apos;s own privacy policy governs how they handle that data.
            </p>
            <p>
              Our website may be hosted on Vercel or Netlify. These platforms
              may collect basic server logs (IP addresses, browser type,
              timestamps) as part of normal operations. This data is not linked
              to your identity and is not used by us for any purpose.
            </p>
          </div>

          <div>
            <h2 className="font-display text-white text-xl tracking-wide mb-3">
              Cookies
            </h2>
            <p>
              This website does not use tracking cookies, advertising cookies,
              or any third-party analytics. Basic session cookies may be set by
              the hosting platform as part of normal web operations.
            </p>
          </div>

          <div>
            <h2 className="font-display text-white text-xl tracking-wide mb-3">
              Data Retention
            </h2>
            <p>
              Quote request submissions are retained only as long as needed to
              respond to your inquiry and maintain basic business records. We do
              not maintain a customer database beyond what is necessary to
              operate our business.
            </p>
          </div>

          <div>
            <h2 className="font-display text-white text-xl tracking-wide mb-3">
              Your Rights
            </h2>
            <p>
              You may request that we delete any personal information you have
              submitted to us. To do so, contact us by phone or email and we
              will honor your request promptly.
            </p>
          </div>

          <div>
            <h2 className="font-display text-white text-xl tracking-wide mb-3">
              Contact
            </h2>
            <p>
              If you have questions about this policy, reach out directly:
            </p>
            <div className="mt-3 space-y-1">
              <p>All-Out Window Tint</p>
              <p>43469 Cannon Road, Gonzales, LA 70737</p>
              <p>
                <a href="tel:2252519184" className="text-[#a60303] hover:underline">
                  (225) 251-9184
                </a>
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 pt-8 border-t border-[#1e1e1e]">
          <Link
            href="/"
            className="font-display tracking-widest uppercase text-[#a60303] hover:text-[#cc0404] text-sm transition-colors duration-200"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
}
