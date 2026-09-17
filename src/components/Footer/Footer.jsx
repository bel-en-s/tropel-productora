import React from "react";
import "./Footer.css";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-row">
        <div className="footer-contact">
          <h3>
            Trabajemos Juntxs <br />
            film<span>@</span>tropel.com
          </h3>

          <p className="secondary">
            TROPEL es una productora y colectivo audiovisual. Formados en el
            lenguaje del video musical, desarrollamos una identidad basada en
            la narración visual y la construcción de atmósferas.
          </p>

          <Link to="/contact" className="btn">
            Escribinos
          </Link>
        </div>

        <div className="footer-nav">
          <Link to="/" className="footer-nav-item">
            <span>Inicio</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/work" className="footer-nav-item">
            <span>Trabajo</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/about" className="footer-nav-item">
            <span>Sobre</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/contact" className="footer-nav-item">
            <span>Contacto</span>
            <span>&#8594;</span>
          </Link>

          <Link to="/faq" className="footer-nav-item">
            <span>Preguntas</span>
            <span>&#8594;</span>
          </Link>
        </div>
      </div>
      <div className="footer-row">
       

        <div className="footer-copyright-line">
          <p className="primary sm">&copy; TROPEL 2026</p>
          <div className="website-by">
            <p className="primary sm">Diseño y desarrollo por</p>
            <img src="/logo-dd.png" alt="divino divino" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
