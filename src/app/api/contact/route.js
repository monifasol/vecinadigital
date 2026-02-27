import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const { email, message } = await request.json()

    if (!email || !message) {
      return Response.json({ success: false }, { status: 400 })
    }

    // 1. Email para mí 
    await resend.emails.send({
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

    // 2. Copia para el usuario
    await resend.emails.send({
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

    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ success: false }, { status: 500 })
  }
}
