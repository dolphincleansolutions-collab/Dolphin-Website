import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const { name, email, phone, serviceType, preferredDate } = await req.json();

  if (!name || !email || !serviceType) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: "Dolphin Clean Solutions <abed@abedkadaan.com>",
    to: "dolphincleansolutions@gmail.com",
    subject: `New Booking Request — ${serviceType}`,
    html: `
      <h2>New Booking Request</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
      <p><strong>Service Type:</strong> ${serviceType}</p>
      <p><strong>Preferred Date:</strong> ${preferredDate || "Not specified"}</p>
    `,
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true });
}
