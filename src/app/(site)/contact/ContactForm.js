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
        <label className="field">
            <input type="email" name="email" autoComplete="email" placeholder=" " required />
            <span>Tu email</span>
        </label>

        <label className="field">
            <textarea name="message" rows={4} placeholder=" " required />
            <span>Cuéntame qué tienes en mente</span>
        </label>

        <button className="btn" type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Enviando..." : "Enviar mensaje"}
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
