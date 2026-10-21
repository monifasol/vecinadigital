import fs from "fs";
import path from "path";

const SITE_URL = "https://www.vecinadigital.com";
const EMAIL_ASSETS = path.join(process.cwd(), "public/assets/email");
export const LOGO_CONTENT_ID = "vecina-logo";
export const CASITA_CONTENT_ID = "vecina-casita";

/** Resend treats `path` as a public URL. Local files go in `content` (base64). */
function inlinePng(filename, contentId) {
  const content = fs.readFileSync(path.join(EMAIL_ASSETS, filename)).toString("base64");
  return { filename, content, contentId };
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatMessage(message) {
  return escapeHtml(message).replaceAll("\n", "<br>");
}

/** Inline logo attachment for Resend (CID). */
export function logoAttachment() {
  return inlinePng("logo-vecina-digital-email.png", LOGO_CONTENT_ID);
}

/** Inline casita illustration for the visitor email. */
export function casitaAttachment() {
  return inlinePng("casa-acuarela-email.png", CASITA_CONTENT_ID);
}

function logoBlock({ width = 400 } = {}) {
  return `
              <a href="${SITE_URL}" style="display:inline-block;text-decoration:none;">
                <img
                  src="cid:${LOGO_CONTENT_ID}"
                  alt="Vecina Digital"
                  width="${width}"
                  style="display:block;width:${width}px;max-width:100%;height:auto;border:0;outline:none;"
                />
              </a>`;
}

function casitaBlock({ width = 120 } = {}) {
  return `
                <img
                  src="cid:${CASITA_CONTENT_ID}"
                  alt=""
                  width="${width}"
                  style="display:block;margin:0 auto;width:${width}px;max-width:100%;height:auto;border:0;outline:none;"
                />`;
}

/**
 * 4px accent painted on the rounded card. A bar in its own row stays square
 * unless the card clips it; the internal mail was missing that clip.
 */
function cardOpen(accentImage) {
  return `
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:560px;border-collapse:separate;border-spacing:0;">
          <tr>
            <td style="padding:0;">
              <div style="border-radius:18px;overflow:hidden;background-color:#fffcf8;background-image:${accentImage};background-repeat:no-repeat;background-position:top center;background-size:100% 4px;border:1px solid rgba(43,38,34,0.08);">
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">`;
}

function cardClose() {
  return `
                </table>
              </div>
            </td>
          </tr>
        </table>`;
}

/** Confirmation email sent to the visitor. */
export function visitorConfirmationEmail({ message }) {
  const safeMessage = formatMessage(message);

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>He recibido tu mensaje</title>
</head>
<body style="margin:0;padding:0;background-color:#f6f1e8;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f6f1e8;">
    <tr>
      <td align="center" style="padding:40px 20px;">
${cardOpen("linear-gradient(90deg,#c56a3a,#e6b59b,#6f7f5c)")}
          <tr>
            <td style="padding:40px 32px 28px;font-family:Georgia,'Times New Roman',serif;color:#2b2622;">
              <div style="margin:0 0 22px;">
${logoBlock({ width: 400 })}
              </div>
              <h1 style="margin:0 0 18px;font-size:28px;line-height:1.25;font-weight:600;color:#2b2622;">
                Gracias por escribir
              </h1>
              <p style="margin:0 0 22px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:16px;line-height:1.6;color:rgba(43,38,34,0.72);">
                He recibido tu mensaje! Te respondo lo antes posible.
              </p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f6f1e8;border-radius:14px;border:1px solid rgba(197,106,58,0.28);">
                <tr>
                  <td style="padding:18px 20px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:15px;line-height:1.65;color:#2b2622;">
                    <p style="margin:0 0 8px;font-size:11px;letter-spacing:0.12em;text-transform:uppercase;color:#c56a3a;font-weight:600;">
                      Este es tu mensaje
                    </p>
                    <p style="margin:0;">${safeMessage}</p>
                  </td>
                </tr>
              </table>
              <p style="margin:26px 0 8px;font-family:Georgia,'Times New Roman',serif;font-size:18px;line-height:1.4;color:#2b2622;text-align:center;">
                Estás en casa!
              </p>
              <div style="margin:0 0 22px;text-align:center;">
${casitaBlock({ width: 140 })}
              </div>
              <p style="margin:0;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:14px;line-height:1.55;color:rgba(43,38,34,0.72);">
                Si quieres añadir algo más, no respondas a este mail: envíame otro
                <a href="${SITE_URL}/contact" style="color:#6f7f5c;text-decoration:underline;">formulario de contacto</a>.
              </p>
            </td>
          </tr>
          <tr>
            <td style="padding:0 32px 36px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;font-size:13px;line-height:1.5;color:rgba(43,38,34,0.72);">
              <p style="margin:0;padding-top:18px;border-top:1px solid rgba(197,106,58,0.28);">
                tecnología · cuidado · diseño humano
              </p>
            </td>
          </tr>
${cardClose()}
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();
}

/** Notification email sent to Mónica. */
export function ownerNotificationEmail({ email, message }) {
  const safeEmail = escapeHtml(email);
  const safeMessage = formatMessage(message);

  return `
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Nuevo mensaje desde Vecina Digital</title>
</head>
<body style="margin:0;padding:0;background-color:#f6f1e8;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f6f1e8;">
    <tr>
      <td align="center" style="padding:40px 20px;">
${cardOpen("linear-gradient(#6f7f5c,#6f7f5c)")}
          <tr>
            <td style="padding:36px 32px 32px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;color:#2b2622;">
              <div style="margin:0 0 18px;">
${logoBlock({ width: 400 })}
              </div>
              <h1 style="margin:0 0 20px;font-family:Georgia,'Times New Roman',serif;font-size:24px;line-height:1.3;font-weight:600;">
                Nuevo mensaje
              </h1>
              <p style="margin:0 0 18px;font-size:15px;line-height:1.5;color:rgba(43,38,34,0.72);">
                <strong style="color:#2b2622;">Email:</strong>
                <a href="mailto:${safeEmail}" style="color:#6f7f5c;text-decoration:none;">${safeEmail}</a>
              </p>
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background-color:#f6f1e8;border-radius:14px;border:1px solid rgba(197,106,58,0.28);">
                <tr>
                  <td style="padding:18px 20px;font-size:15px;line-height:1.65;color:#2b2622;">
                    ${safeMessage}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
${cardClose()}
      </td>
    </tr>
  </table>
</body>
</html>
`.trim();
}
