const API_URL = "https://api.forwardemail.net/v1/emails";

/**
 * Sends one message through Forward Email.
 * `message` follows Nodemailer's options: from, to, replyTo, subject, html, attachments.
 * The sender address must already exist as an alias on the domain.
 */
export async function sendEmail(message) {
  const token = process.env.FORWARDEMAIL_API_TOKEN;
  if (!token) {
    return { ok: false, error: "not_configured" };
  }

  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      Authorization: `Basic ${Buffer.from(`${token}:`).toString("base64")}`,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(message),
  });

  let body = null;
  try {
    body = await response.json();
  } catch {
    body = null;
  }

  if (!response.ok) {
    return {
      ok: false,
      error: "send_failed",
      status: response.status,
      detail: body,
    };
  }

  return { ok: true, id: body?.id ?? null };
}
