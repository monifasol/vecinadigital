import { Resend } from "resend";
import {
  visitorConfirmationEmail,
  ownerNotificationEmail,
  logoAttachment,
  casitaAttachment,
} from "@/lib/contactEmails";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing");
      return Response.json(
        { success: false, error: "not_configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const email = String(body?.email || "").trim();
    const message = String(body?.message || "").trim();

    if (!email || !message) {
      return Response.json(
        { success: false, error: "invalid_input" },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL || "monism@gmail.com";
    const from =
      process.env.CONTACT_FROM_EMAIL ||
      "Vecina Digital <hola@vecinadigital.com>";
    const logo = logoAttachment();
    const casita = casitaAttachment();

    // 1. Email para mí
    const toMe = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: "Nuevo mensaje desde Vecina Digital",
      html: ownerNotificationEmail({ email, message }),
      attachments: [logo],
    });

    if (toMe.error) {
      console.error("Resend error (to me):", toMe.error);
      return Response.json({ success: false, error: toMe.error }, { status: 502 });
    }

    // 2. Copia para quien escribe
    const toUser = await resend.emails.send({
      from,
      to: email,
      replyTo: to,
      subject: "He recibido tu mensaje · Vecina Digital",
      html: visitorConfirmationEmail({ message }),
      attachments: [logo, casita],
    });

    if (toUser.error) {
      console.error("Resend error (to user):", toUser.error);
      return Response.json(
        { success: false, error: toUser.error },
        { status: 502 }
      );
    }

    return Response.json({ success: true, id: toMe.data?.id });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { success: false, error: "server_error" },
      { status: 500 }
    );
  }
}
