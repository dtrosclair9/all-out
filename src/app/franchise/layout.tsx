import { pageMetadata } from "@/lib/site";

export const metadata = pageMetadata({
  path: "/franchise",
  title: "Franchise Opportunities | All-Out Window Tint",
  description:
    "Own an All-Out Window Tint franchise. A proven auto-services model: window tinting, PPF, ceramic coating, and vehicle wraps. Louisiana-first. Inquire today.",
});

export default function FranchiseLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
