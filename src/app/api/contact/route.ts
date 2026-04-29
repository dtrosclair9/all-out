import { NextRequest, NextResponse } from "next/server";

const ENDPOINTS: Record<string, string> = {
  "Baton Rouge": "https://formspree.io/f/mwvyerwq",
  "Gonzales": "https://formspree.io/f/mgodwndo",
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { location, name, phone, email, service, vehicle, referral, message } = body;

  if (!name || !phone || !service) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const endpoint = ENDPOINTS[location] ?? ENDPOINTS["Gonzales"];

  const res = await fetch(endpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
    body: JSON.stringify({ location, name, phone, email, service, vehicle, referral, message }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to submit." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
