import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, phone, location, occupation, capital, ownsBusinesss, autExperience, message } = body;

  if (!name || !email || !phone) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const toEmail = process.env.EMAIL_FRANCHISE || process.env.EMAIL_GONZALES;
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

  const subject = `Franchise Inquiry — ${name} — ${location || "Location TBD"}`;

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; background: #0a0a0a; color: #ffffff; padding: 32px; border: 1px solid #242424;">
      <div style="border-bottom: 2px solid #a60303; padding-bottom: 16px; margin-bottom: 24px;">
        <h1 style="color: #a60303; font-size: 20px; margin: 0; letter-spacing: 2px; text-transform: uppercase;">New Franchise Inquiry</h1>
        <p style="color: #888; font-size: 13px; margin: 4px 0 0;">All-Out Window Tint — Franchise Development</p>
      </div>

      <table style="width: 100%; border-collapse: collapse;">
        <tr style="border-bottom: 1px solid #242424;">
          <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 160px;">Name</td>
          <td style="padding: 10px 0; color: #fff; font-size: 14px;">${name}</td>
        </tr>
        <tr style="border-bottom: 1px solid #242424;">
          <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
          <td style="padding: 10px 0; color: #fff; font-size: 14px;"><a href="tel:${phone}" style="color: #a60303;">${phone}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #242424;">
          <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
          <td style="padding: 10px 0; color: #fff; font-size: 14px;"><a href="mailto:${email}" style="color: #a60303;">${email}</a></td>
        </tr>
        ${location ? `
        <tr style="border-bottom: 1px solid #242424;">
          <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Target Market</td>
          <td style="padding: 10px 0; color: #fff; font-size: 14px;">${location}</td>
        </tr>` : ""}
        ${occupation ? `
        <tr style="border-bottom: 1px solid #242424;">
          <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Occupation</td>
          <td style="padding: 10px 0; color: #fff; font-size: 14px;">${occupation}</td>
        </tr>` : ""}
        ${capital ? `
        <tr style="border-bottom: 1px solid #242424;">
          <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Liquid Capital</td>
          <td style="padding: 10px 0; color: #fff; font-size: 14px;">${capital}</td>
        </tr>` : ""}
        <tr style="border-bottom: 1px solid #242424;">
          <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Owns a Business</td>
          <td style="padding: 10px 0; color: #fff; font-size: 14px;">${ownsBusinesss === "yes" ? "Yes" : "No"}</td>
        </tr>
        <tr style="border-bottom: 1px solid #242424;">
          <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Auto/Trades Experience</td>
          <td style="padding: 10px 0; color: #fff; font-size: 14px;">${autExperience === "yes" ? "Yes" : "No"}</td>
        </tr>
        ${message ? `
        <tr>
          <td style="padding: 10px 0; color: #888; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">About Them</td>
          <td style="padding: 10px 0; color: #fff; font-size: 14px; line-height: 1.6;">${message.replace(/\n/g, "<br>")}</td>
        </tr>` : ""}
      </table>

      <div style="margin-top: 24px; padding: 16px; background: #141414; border-left: 3px solid #a60303;">
        <p style="color: #888; font-size: 12px; margin: 0;">Submitted via alloutwindowtint.com/franchise</p>
      </div>
    </div>
  `;

  await transporter.sendMail({
    from: `"All-Out Window Tint Franchise" <${process.env.SMTP_USER}>`,
    to: toEmail,
    replyTo: email,
    subject,
    html,
  });

  return NextResponse.json({ ok: true });
}
