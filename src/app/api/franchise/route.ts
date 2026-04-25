import { NextRequest, NextResponse } from "next/server";

const BR_WEBHOOK = "https://services.leadconnectorhq.com/hooks/R5NAXh96Dwhe5fpNW8OO/webhook-trigger/14e2bf88-7443-4317-a8b2-dae154e47f9f";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, location, occupation, capital, ownsBusinesss, autExperience, message } = body;

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const [firstName, ...rest] = (name as string).trim().split(" ");
  const lastName = rest.join(" ");

  const res = await fetch(BR_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      firstName,
      lastName,
      phone,
      email,
      location,
      occupation,
      capital,
      ownsBusinesss,
      autExperience,
      message,
      service: "Franchise Inquiry",
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to submit." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
