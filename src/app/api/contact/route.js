import { sendEmail } from "@/lib/forwardEmail";
import {
  visitorConfirmationEmail,
  ownerNotificationEmail,
  logoAttachment,
  casitaAttachment,
} from "@/lib/contactEmails";
import { decideContactPost, signFormToken } from "@/lib/contactGate";

export async function GET() {
  const secret = process.env.FORWARDEMAIL_API_TOKEN;
  if (!secret) {
    console.error("FORWARDEMAIL_API_TOKEN is missing");
    return Response.json(
      { success: false, error: "not_configured" },
      { status: 500 }
    );
  }

  return Response.json(
    { token: signFormToken(secret) },
    { headers: { "Cache-Control": "no-store" } }
  );
}

export async function POST(request) {
  try {
    const secret = process.env.FORWARDEMAIL_API_TOKEN;
    if (!secret) {
      console.error("FORWARDEMAIL_API_TOKEN is missing");
      return Response.json(
        { success: false, error: "not_configured" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const decision = decideContactPost(body, secret);

    if (!decision.send) {
      if (decision.reason) console.info("Contact rejected:", decision.reason);
      return Response.json(
        { success: false, error: decision.error },
        { status: decision.status }
      );
    }

    const { email, message } = decision;

    const to = process.env.CONTACT_TO_EMAIL || "monism@gmail.com";
    const from =
      process.env.CONTACT_FROM_EMAIL ||
      "Vecina Digital <hola@vecinadigital.com>";
    const logo = logoAttachment();
    const casita = casitaAttachment();

    const toMe = await sendEmail({
      from,
      to,
      replyTo: email,
      subject: "Nuevo mensaje desde Vecina Digital",
      html: ownerNotificationEmail({ email, message }),
      attachments: [logo],
    });

    if (!toMe.ok) {
      console.error("Forward Email error (to me):", toMe.status, toMe.detail);
      return Response.json({ success: false, error: "send_failed" }, { status: 502 });
    }

    const toUser = await sendEmail({
      from,
      to: email,
      replyTo: to,
      subject: "He recibido tu mensaje · Vecina Digital",
      html: visitorConfirmationEmail({ message }),
      attachments: [logo, casita],
    });

    if (!toUser.ok) {
      console.error("Forward Email error (to user):", toUser.status, toUser.detail);
      return Response.json(
        { success: false, error: "send_failed" },
        { status: 502 }
      );
    }

    return Response.json({ success: true, id: toMe.id });
  } catch (error) {
    console.error("Contact API error:", error);
    return Response.json(
      { success: false, error: "server_error" },
      { status: 500 }
    );
  }
}
