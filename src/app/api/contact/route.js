import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is missing")
      return Response.json({ success: false, error: "not_configured" }, { status: 500 })
    }

    const { email, message } = await request.json()

    if (!email || !message) {
      return Response.json({ success: false, error: "invalid_input" }, { status: 400 })
    }

    // 1. Email para mí
    const toMe = await resend.emails.send({
      from: "Vecina Digital <hola@vecinadigital.com>",
      to: "monism@gmail.com",
      replyTo: email,
      subject: "Nuevo mensaje desde Vecina Digital",
      html: `
        <h2>Nuevo mensaje</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    })

    if (toMe.error) {
      console.error("Resend error (to me):", toMe.error)
      return Response.json({ success: false, error: toMe.error }, { status: 502 })
    }

    // 2. Copia para el usuario
    const toUser = await resend.emails.send({
      from: "Vecina Digital <hola@vecinadigital.com>",
      to: email,
      replyTo: "monism@gmail.com",
      subject: "He recibido tu mensaje · Vecina Digital",
      html: `
        <h2>Gracias por escribir 💛</h2>
        <p>Este es el mensaje que me has enviado:</p>
        <p>${message}</p>
        <p>Te respondo muy pronto con claridad y luego tú decides.</p>
      `,
    })

    if (toUser.error) {
      console.error("Resend error (to user):", toUser.error)
      return Response.json({ success: false, error: toUser.error }, { status: 502 })
    }

    return Response.json({ success: true, id: toMe.data?.id })
  } catch (error) {
    console.error("Contact API error:", error)
    return Response.json({ success: false, error: "server_error" }, { status: 500 })
  }
}
