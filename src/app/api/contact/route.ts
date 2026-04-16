import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const LOCATION_EMAILS: Record<string, string> = {
  Gonzales: process.env.EMAIL_GONZALES ?? "",
  "Baton Rouge": process.env.EMAIL_BATON_ROUGE ?? "",
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { location, name, phone, email, service, vehicle, referral, message } = body;

  if (!name || !phone || !service) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const toEmail = LOCATION_EMAILS[location] || process.env.EMAIL_GONZALES;
  if (!toEmail) {
    return NextResponse.json({ error: "Email configuration missing." }, { status: 500 });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const locationLabel = location || "Not specified";
  const subject = `New Quote Request — ${locationLabel} — ${service}`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; background: #0a0a0a; color: #ffffff; padding: 32px; border: 1px solid #242424;">
      <div style="border-bottom: 2px solid #a60303; padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="color: #a60303; font-size: 20px; margin: 0; letter-spacing: 2px; text-transform: uppercase;">New Quote Request</h1>
        <p style="color: #888; font-size: 13px; margin: 4px 0 0;">All-Out Window Tint — ${locationLabel} Location</p>
      </div>

      <table style="width: 100%; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #242424;">
          <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 140px;">Name</td>
          <td style="padding: 10px 0; color: #fff; font-size: 14px;">${name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #242424;">
          <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
          <td style="padding: 10px 0; color: #fff; font-size: 14px;"><a href="tel:${phone}" style="color: #a60303;">${phone}</a></td>
        </tr>
        ${email ? `
        <tr style="border-bottom: 1px solid #242424;">
          <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
          <td style="padding: 10px 0; color: #fff; font-size: 14px;"><a href="mailto:${email}" style="color: #a60303;">${email}</a></td>
        </tr>` : ""}
        <tr style="border-bottom: 1px solid #242424;">
          <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Location</td>
          <td style="padding: 10px 0; color: #fff; font-size: 14px;">${locationLabel}</td>
        </tr>
        <tr style="border-bottom: 1px solid #242424;">
          <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Service</td>
          <td style="padding: 10px 0; color: #fff; font-size: 14px;">${service}</td>
        </tr>
        ${vehicle ? `
        <tr style="border-bottom: 1px solid #242424;">
          <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Vehicle</td>
          <td style="padding: 10px 0; color: #fff; font-size: 14px;">${vehicle}</td>
        </tr>` : ""}
        ${referral ? `
        <tr style="border-bottom: 1px solid #242424;">
          <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Found Us Via</td>
          <td style="padding: 10px 0; color: #fff; font-size: 14px;">${referral}</td>
        </tr>` : ""}
        ${message ? `
        <tr>
          <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Details</td>
          <td style="padding: 10px 0; color: #fff; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
        </tr>` : ""}
      </table>

      <div style="margin-top: 24px; padding: 16px; background: #141414; border-left: 3px solid #a60303;">
        <p style="color: #888; font-size: 12px; margin: 0;">Submitted via alloutwindowtint.com</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"All-Out Window Tint" <${process.env.SMTP_USER}>`,
    to: toEmail,
    replyTo: email || undefined,
    subject,
    html,
  });

  return NextResponse.json({ ok: true });
}
