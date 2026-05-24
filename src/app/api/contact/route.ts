import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, readingType, message } = await req.json();

    if (!name || !email || !readingType) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Aurazone Booking" <${process.env.FROM_EMAIL}>`,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `Aurazone Booking — ${readingType}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0a0612; color: #e8e0d0; padding: 32px; border-radius: 12px; border: 1px solid #d4af3740;">
          <h2 style="color: #d4af37; letter-spacing: 0.2em; font-size: 20px; margin-bottom: 24px;">✦ New Booking Request</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; color: #a89880; width: 140px; vertical-align: top;">Name</td><td style="padding: 10px 0; color: #f8f4e8;">${name}</td></tr>
            <tr><td style="padding: 10px 0; color: #a89880; vertical-align: top;">Email</td><td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #d4af37;">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; color: #a89880; vertical-align: top;">Phone</td><td style="padding: 10px 0; color: #f8f4e8;">${phone || "—"}</td></tr>
            <tr><td style="padding: 10px 0; color: #a89880; vertical-align: top;">Reading Type</td><td style="padding: 10px 0; color: #e8c547; font-weight: bold;">${readingType}</td></tr>
            ${message ? `<tr><td style="padding: 10px 0; color: #a89880; vertical-align: top;">Message</td><td style="padding: 10px 0; color: #f8f4e8; white-space: pre-wrap;">${message}</td></tr>` : ""}
          </table>
          <hr style="border: none; border-top: 1px solid #d4af3730; margin: 24px 0;" />
          <p style="color: #a89880; font-size: 12px; margin: 0;">Sent from Aurazone landing page · <a href="https://www.instagram.com/aurazone0006" style="color: #d4af37;">@aurazone0006</a></p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[Aurazone contact]", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
