import { mailOptions, transporter } from "@/app/config/Nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, message } = body;
  try {
    await transporter.sendMail({
      subject: `MikePadial.Dev - ${name} at ${email} sent you a message`,
      text: message,
      ...mailOptions,
    });
    return NextResponse.json({ message: "success" });
  } catch (error) {
    console.log(error);
    NextResponse.json({
      message: "Could not send the email. Your message was not sent.",
    });
  }
}
