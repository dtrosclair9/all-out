import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Quote | All-Out Window Tint — Gonzales & Baton Rouge",
  description:
    "Request a free quote for window tinting, PPF, ceramic coating, or vehicle wraps at our Gonzales or Baton Rouge location. Fast response. Call (225) 381-1000.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
