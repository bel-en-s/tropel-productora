import React, { useState } from "react";
import "./ContactForm.css";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/tropelfilms@gmail.com";

const ContactForm = () => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          Nombre: nombre,
          Email: email,
          Mensaje: mensaje,
          _subject: "Nueva consulta desde tropel.com",
          _template: "table",
          _captcha: "false",
        }),
      });

      if (res.ok) {
        setStatus("success");
        setNombre("");
        setEmail("");
        setMensaje("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className="contact-form" id="contacto" onSubmit={handleSubmit}>
      <div className="contact-form-row">
        <div className="contact-form-row-copy-item">
          <p className="primary sm">Hagamos algo juntos</p>
        </div>
        <div className="contact-form-row-copy-item">
      
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">&copy; 2026</p>
        </div>
      </div>

      <div className="contact-form-row">
        <div className="contact-form-col">
          <div className="contact-form-header">
            <h3>Tenés un proyecto en mente?</h3>

            <p>
              Démosle vida. Contactanos y hablemos de tu proyecto. Estamos
              disponibles para freelance y clientes en todo el mundo. Nos encanta
              colaborar con artistas, marcas y creativos de todas partes.
            </p>
          </div>
        </div>

        <div className="contact-form-col">
          <div className="form-item">
            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>

          <div className="form-item">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="form-item">
            <textarea
              name="mensaje"
              rows={6}
              placeholder="Mensaje"
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              required
            />
          </div>

          <div className="form-item">
            <button
              className="btn"
              type="submit"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Enviando..." : "Enviar mensaje"}
            </button>
          </div>

          {status === "success" && (
            <p className="primary sm">¡Gracias! Tu mensaje fue enviado.</p>
          )}
          {status === "error" && (
            <p className="primary sm">
              Hubo un error. Escribinos a tropelfilms@gmail.com
            </p>
          )}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
