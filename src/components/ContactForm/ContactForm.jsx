import React from "react";
import "./ContactForm.css";

const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="contact-form-row">
        <div className="contact-form-row-copy-item">
          <p className="primary sm">Creemos algo juntos</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">(Escena — 07)</p>
        </div>
        <div className="contact-form-row-copy-item">
          <p className="primary sm">&copy; 2025</p>
        </div>
      </div>

      <div className="contact-form-row">
        <div className="contact-form-col">
          <div className="contact-form-header">
            <h3>Empecemos una conversación</h3>

            <p>
              ¿Tenés una historia en mente? Démosle vida. Me encantaría saber
              en qué estás trabajando y explorar cómo podemos colaborar.
            </p>
          </div>

          <div className="contact-form-availability">
            <p className="primary sm">Disponible para freelance</p>
            <p className="primary sm">Clientes en todo el mundo</p>
          </div>
        </div>

        <div className="contact-form-col">
          <div className="form-item">
            <input type="text" placeholder="Nombre" />
          </div>

          <div className="form-item">
            <input type="text" placeholder="Email" />
          </div>

          <div className="form-item">
            <textarea type="text" rows={6} placeholder="Mensaje" />
          </div>

          <div className="form-item">
            <button className="btn">Enviar mensaje</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
