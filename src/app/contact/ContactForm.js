'use client'

import { useState } from "react"

export default function ContactForm() {
  const [status, setStatus] = useState("idle")

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget

    setStatus("loading")

    try {
        const formData = new FormData(form)
        const data = {
            email: formData.get("email"),
            message: formData.get("message"),
        }

        const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        })

        if (!res.ok) throw new Error("Failed")

        form.reset()
        setStatus("success")
    } catch {
        setStatus("error")
    }
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
        <label>
            Tu email
            <input type="email" name="email" autoComplete="email" required />
        </label>

        <label>
            Cuéntame (2-3 líneas)
            <textarea name="message" rows={4} required />
        </label>

        <button className="btn" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Enviando..." : "Escríbeme"}
        </button>

        {status === "success" && (
            <p className="form__notice form__notice--success">Gracias 💛 Te he enviado una copia y te respondo pronto.</p>
        )}

        {status === "error" && (
        <div className="form__notice form__notice--error">
            Algo no ha salido bien.  
            Si quieres, escríbeme por <a href="https://wa.me/34622210151">WhatsApp</a> mientras lo reviso.
        </div>
        )}
    </form>
  )
}
