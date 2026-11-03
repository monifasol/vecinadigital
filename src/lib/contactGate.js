import { createHmac, timingSafeEqual } from "node:crypto";

/** A person does not finish the form in under two seconds. */
const MIN_AGE_MS = 2_000;
/** Left-open tabs can still send the same day. */
const MAX_AGE_MS = 12 * 60 * 60 * 1000;

/**
 * These probes are not people writing.
 * Gmail ignores dots, so a bot parks many senders in one inbox:
 * hu.r.e.z.i.mab83@gmail.com is the same box as hurezimab83@gmail.com.
 * Three or more dots in the local part is the pattern; a normal
 * first.last or first.middle.last stays under that.
 */
export function isProbeEmail(email) {
  const local = String(email).split("@")[0] ?? "";
  const dots = local.match(/\./g);
  return (dots?.length ?? 0) >= 3;
}

/**
 * The probe body is one random token, no spaces: JabWkUanoKoFFiay.
 * A real note has spaces, or is a short word.
 */
export function isProbeMessage(message) {
  const text = String(message).trim();
  if (text.length < 12) return false;
  if (/\s/.test(text)) return false;
  return /^[A-Za-z0-9]+$/.test(text);
}

export function honeypotTripped(value) {
  return String(value ?? "").trim().length > 0;
}

export function signFormToken(secret, issuedAt = Date.now()) {
  const payload = String(issuedAt);
  const sig = createHmac("sha256", secret).update(payload).digest("base64url");
  return `${payload}.${sig}`;
}

export function formTokenError(token, secret, now = Date.now()) {
  if (!secret) return "not_configured";
  if (!token) return "missing";

  const parts = String(token).split(".");
  if (parts.length !== 2 || !parts[0] || !parts[1]) return "malformed";

  const [payload, sig] = parts;
  const expected = createHmac("sha256", secret).update(payload).digest("base64url");
  const got = Buffer.from(sig);
  const want = Buffer.from(expected);
  if (got.length !== want.length || !timingSafeEqual(got, want)) return "bad_signature";

  const issuedAt = Number(payload);
  if (!Number.isFinite(issuedAt)) return "malformed";

  const age = now - issuedAt;
  if (age < MIN_AGE_MS) return "too_fast";
  if (age > MAX_AGE_MS) return "expired";
  return null;
}

/**
 * Decides whether this POST may send mail.
 * `send: false` means respond with an error and do not call the mailer.
 * The reason stays on the server. The client only hears "rejected".
 */
export function decideContactPost(body, secret, now = Date.now()) {
  const email = String(body?.email || "").trim();
  const message = String(body?.message || "").trim();

  if (!email || !message) {
    return { send: false, status: 400, error: "invalid_input" };
  }

  let reason = null;
  if (honeypotTripped(body?.vd_hp)) reason = "honeypot";
  else if (isProbeEmail(email)) reason = "probe_email";
  else if (isProbeMessage(message)) reason = "probe_message";
  else reason = formTokenError(body?.formToken, secret, now);

  if (reason) {
    return { send: false, status: 400, error: "rejected", reason };
  }

  return { send: true, email, message };
}
