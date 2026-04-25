import { NextRequest, NextResponse } from "next/server";

const WEBHOOKS: Record<string, string> = {
  "Baton Rouge": "https://services.leadconnectorhq.com/hooks/R5NAXh96Dwhe5fpNW8OO/webhook-trigger/14e2bf88-7443-4317-a8b2-dae154e47f9f",
  "Gonzales": "https://services.leadconnectorhq.com/hooks/oR9TwwX7c1CkV7MnfKre/webhook-trigger/1810e3af-ad84-4baf-8ced-98c7425ad1a8",
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { location, name, phone, email, service, vehicle, referral, message } = body;

  if (!name || !phone || !service) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const webhook = WEBHOOKS[location] ?? WEBHOOKS["Gonzales"];

  const [firstName, ...rest] = (name as string).trim().split(" ");
  const lastName = rest.join(" ");

  const res = await fetch(webhook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ firstName, lastName, phone, email, service, vehicle, referral, message, location }),
  });

  if (!res.ok) {
    return NextResponse.json({ error: "Failed to submit." }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
