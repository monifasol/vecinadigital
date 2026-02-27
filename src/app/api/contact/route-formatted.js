// import { Resend } from "resend"

// const resend = new Resend(process.env.RESEND_API_KEY)

// function escapeHtml(str = "") {
//   return str
//     .replaceAll("&", "&amp;")
//     .replaceAll("<", "&lt;")
//     .replaceAll(">", "&gt;")
//     .replaceAll('"', "&quot;")
//     .replaceAll("'", "&#039;")
// }

// function renderOwnerEmail({ email, message }) {
//   const safeEmail = escapeHtml(email)
//   const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>")

//   return `
//   <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height:1.5; color:#2b2622;">
//     <div style="max-width:640px;margin:0 auto;padding:24px;">
//       <h1 style="margin:0 0 12px;font-size:20px;">Nuevo mensaje desde Vecina Digital</h1>
//       <p style="margin:0 0 16px;color:rgba(43,38,34,.8);">
//         Te han escrito a través del formulario.
//       </p>

//       <div style="border:1px solid rgba(43,38,34,.12);border-radius:16px;padding:16px;background:#f6f1e8;">
//         <p style="margin:0 0 8px;"><strong>Email:</strong> ${safeEmail}</p>
//         <p style="margin:0 0 8px;"><strong>Mensaje:</strong></p>
//         <p style="margin:0;">${safeMessage}</p>
//       </div>

//       <p style="margin:18px 0 0;color:rgba(43,38,34,.75);font-size:13px;">
//         Consejo: responde directamente a este email — el “reply-to” está configurado al email del cliente.
//       </p>
//     </div>
//   </div>
//   `
// }

// function renderUserCopyEmail({ message }) {
//   const safeMessage = escapeHtml(message).replaceAll("\n", "<br/>")

//   return `
//   <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height:1.5; color:#2b2622;">
//     <div style="max-width:640px;margin:0 auto;padding:24px;">
//       <h1 style="margin:0 0 12px;font-size:20px;">He recibido tu mensaje 💛</h1>
//       <p style="margin:0 0 16px;color:rgba(43,38,34,.8);">
//         Gracias por escribirme. Te dejo una copia de lo que me has enviado:
//       </p>

//       <div style="border:1px solid rgba(43,38,34,.12);border-radius:16px;padding:16px;background:#f6f1e8;">
//         <p style="margin:0;">${safeMessage}</p>
//       </div>

//       <p style="margin:16px 0 0;color:rgba(43,38,34,.85);">
//         Te respondo con claridad y luego tú decides.
//       </p>

//       <p style="margin:10px 0 0;color:rgba(43,38,34,.75);font-size:13px;">
//         — Vecina Digital
//       </p>
//     </div>
//   </div>
//   `
// }

// export async function POST(request) {
//   try {
//     const { email, message } = await request.json()

//     if (!email || !message) {
//       return Response.json({ ok: false, error: "Missing fields" }, { status: 400 })
//     }

//     // 1) Email para ti (dueña)
//     await resend.emails.send({
//       from: "Vecina Digital <hola@vecinadigital.com>", // requires domain verified
//       to: ["hola@vecinadigital.com"],                  // you can swap to your personal email while testing
//       replyTo: email,
//       subject: "Nuevo mensaje desde Vecina Digital",
//       html: renderOwnerEmail({ email, message }),
//     })

//     // 2) Copia para la persona que escribió
//     await resend.emails.send({
//       from: "Vecina Digital <hola@vecinadigital.com>", // same sender
//       to: [email],
//       subject: "Copia de tu mensaje · Vecina Digital",
//       html: renderUserCopyEmail({ message }),
//     })

//     return Response.json({ ok: true })
//   } catch (err) {
//     return Response.json({ ok: false }, { status: 500 })
//   }
// }