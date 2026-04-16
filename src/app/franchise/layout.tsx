import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Franchise Opportunities | All-Out Window Tint",
  description:
    "Own an All-Out Window Tint franchise. Proven auto services model — window tinting, PPF, ceramic coating, and vehicle wraps. Louisiana-first expansion. Inquire today.",
};

export default function FranchiseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
