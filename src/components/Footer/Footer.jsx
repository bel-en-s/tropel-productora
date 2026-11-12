import React from "react";
import "./Footer.css";

import { Link, useLocation, useNavigate } from "react-router-dom";

import { scrollToSection } from "../../utils/scrollToSection";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleSectionClick = (e, id) => {
    e.preventDefault();

    if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

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

          <a href="mailto:tropelfilms@gmail.com" className="btn">
            Escribinos
          </a>
        </div>

        <div className="footer-nav">
          <Link to="/" className="footer-nav-item">
            <span>Inicio</span>
            <span>&#8594;</span>
          </Link>

          <a
            href="#trabajo"
            className="footer-nav-item"
            onClick={(e) => handleSectionClick(e, "trabajo")}
          >
            <span>Trabajo</span>
            <span>&#8594;</span>
          </a>

          <a
            href="#sobre"
            className="footer-nav-item"
            onClick={(e) => handleSectionClick(e, "sobre")}
          >
            <span>Sobre</span>
            <span>&#8594;</span>
          </a>

          <a
            href="#contacto"
            className="footer-nav-item"
            onClick={(e) => handleSectionClick(e, "contacto")}
          >
            <span>Contacto</span>
            <span>&#8594;</span>
          </a>
        </div>
      </div>
      
      <div className="footer-row">
       <h3>
            Buenos Aires, Argentina
          </h3>

        <div className="footer-copyright-line">
          
          <p className="primary sm">&copy; TROPEL 2026</p>
          <div className="website-by">
            <p className="primary sm">crafted by</p>
            <a
              href="https://www.divinodivino.com.ar/"
              target="_blank"
              rel="noreferrer"
            >
              <img src="/logo-dd.png" alt="divino divino" />
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
