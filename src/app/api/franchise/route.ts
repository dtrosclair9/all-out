import { NextRequest, NextResponse } from "next/server";

const FRANCHISE_ENDPOINT = "https://formspree.io/f/xgodevkj";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, location, occupation, capital, ownsBusiness, autoExperience, message } = body;

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const [firstName, ...rest] = (name as string).trim().split(" ");
  const lastName = rest.join(" ");

  const res = await fetch(FRANCHISE_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({
      firstName,
      lastName,
      phone,
      email,
      location,
      occupation,
      capital,
      ownsBusiness,
      autoExperience,
      message,
      service: "Franchise Inquiry",
    }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to submit." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
