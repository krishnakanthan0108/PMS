import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, business, service, message } = await req.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"PMS Contact Form" <${process.env.GMAIL_USER}>`,
      to: "krishnasubash2004@gmail.com",
      replyTo: email,
      subject: `PMS Enquiry – ${service} from ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; background: #0A0A0B; color: #E8E4DC; padding: 40px; border: 1px solid rgba(201,168,76,0.3);">
          <div style="border-bottom: 1px solid rgba(201,168,76,0.3); padding-bottom: 24px; margin-bottom: 24px;">
            <h1 style="font-size: 28px; font-weight: 300; color: #C9A84C; margin: 0;">
              New Enquiry Received
            </h1>
            <p style="font-size: 11px; letter-spacing: 3px; text-transform: uppercase; color: #6B6B6B; margin: 8px 0 0; font-family: monospace;">
              PMS Contact Form
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: #6B6B6B; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-family: monospace; width: 40%;">Full Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: #E8E4DC; font-size: 14px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: #6B6B6B; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-family: monospace;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: #C9A84C; font-size: 14px;">
                <a href="mailto:${email}" style="color: #C9A84C; text-decoration: none;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: #6B6B6B; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-family: monospace;">Business</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: #E8E4DC; font-size: 14px;">${business || "—"}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: #6B6B6B; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-family: monospace;">Service</td>
              <td style="padding: 12px 0; border-bottom: 1px solid rgba(255,255,255,0.05); color: #E8E4DC; font-size: 14px;">${service}</td>
            </tr>
          </table>

          <div style="margin-top: 28px;">
            <p style="color: #6B6B6B; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; font-family: monospace; margin-bottom: 12px;">Message</p>
            <div style="background: rgba(201,168,76,0.04); border: 1px solid rgba(201,168,76,0.15); padding: 20px; color: #C4BDB0; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">
              ${message}
            </div>
          </div>

          <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid rgba(201,168,76,0.2); text-align: center;">
            <p style="color: #3A3A3A; font-size: 11px; letter-spacing: 2px; font-family: monospace; margin: 0;">
              PMS — PROFESSIONAL MANAGEMENT SERVICES
            </p>
          </div>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Mail error:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
// statusus :: 4000