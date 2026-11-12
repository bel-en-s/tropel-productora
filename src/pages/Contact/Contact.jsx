import React from "react";
import "./Contact.css";

import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const Contact = () => {
  return (
    <ReactLenis root>
      <div className="page contact">
        <section className="contact-hero">
          <h3>
            Trabajemos Juntxs <br />
            film<span>@</span>tropel.com
          </h3>

          <p className="secondary">
            TROPEL es una productora y colectivo audiovisual. Formados en el
            lenguaje del video musical, desarrollamos una identidad basada en
            la narración visual y la construcción de atmósferas.
          </p>
        </section>

        <ContactForm />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Contact);
