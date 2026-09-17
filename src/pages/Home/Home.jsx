import workList from "../../data/workList";
import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import Reviews from "../../components/Reviews/Reviews";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ReactLenis from "lenis/react";

gsap.registerPlugin(ScrollTrigger);

import Transition from "../../components/Transition/Transition";

const Home = () => {
  const workItems = Array.isArray(workList) ? workList : [];
  const stickyWorkHeaderRef = useRef(null);
  const homeWorkRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    const workHeaderSection = stickyWorkHeaderRef.current;
    const homeWorkSection = homeWorkRef.current;

    let workHeaderPinTrigger;
    if (workHeaderSection && homeWorkSection) {
      workHeaderPinTrigger = ScrollTrigger.create({
        trigger: workHeaderSection,
        start: "top top",
        endTrigger: homeWorkSection,
        end: "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    }

    return () => {
      if (workHeaderPinTrigger) {
        workHeaderPinTrigger.kill();
      }
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ReactLenis root>
      <div className="page home">
        <section className="hero">
          <div className="hero-img">
            <video src="/home/hero.mp4" autoPlay loop muted playsInline />
          </div>

          <div className="hero-header">
            <img className="hero-logo" src="/tropel-logo.png" alt="TROPEL" />
          </div>
        </section>

        <section ref={stickyWorkHeaderRef} className="sticky-work-header editorial">
          <div className="editorial-meta">
            <span>01</span>
            <span>Productora · Colectivo</span>
          </div>

          <h2 className="editorial-title">Sobre Tropel</h2>

          <p className="editorial-lead">
            TROPEL es una productora y colectivo audiovisual. Formados en el
            lenguaje del video musical, desarrollamos una identidad basada en
            la narración visual y la construcción de atmósferas.
          </p>

          <div className="editorial-columns">
            <p className="editorial-copy">
              TROPEL nace del encuentro entre Melo Piccolomini y Tiki
              Palomeque, artistas multidisciplinares. Desde el año 2022,
              realizamos videos musicales, sesiones en vivo, visuales para
              shows y coberturas.
            </p>
            <p className="editorial-copy">
              Nuestras producciones invitan a repensar el ritmo de vida
              acelerado, uso y abuso de la tecnología y adormecimiento del
              pensamiento crítico. Con una puesta en escena que privilegia la
              atmósfera por sobre la explicación, buscamos evidenciar el
              desgaste emocional y la desconexión social que percibimos en la
              experiencia urbana contemporánea.
            </p>
          </div>
        </section>

        <section ref={homeWorkRef} className="home-work">
          <div className="home-work-list">
            {workItems.map((work, index) => (
              <Link
                to="/sample-project"
                key={work.id}
                className="home-work-item"
              >
                <p className="primary sm">{`${String(index + 1).padStart(
                  2,
                  "0"
                )} - ${String(workItems.length).padStart(2, "0")}`}</p>
                <h3>{work.title}</h3>
                <div className="work-item-img">
                  {work.images && work.images.length > 0 ? (
                    <div className="work-marquee">
                      <div className="work-marquee-track">
                        {[...work.images, ...work.images].map((src, i) => (
                          <div className="work-marquee-slide" key={i}>
                            <img src={src} alt={`${work.title} ${i + 1}`} />
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <img src={work.image} alt={work.title} />
                  )}
                </div>
                <h4>{work.category}</h4>
              </Link>
            ))}
          </div>
        </section>

        <Reviews />

        <section className="hobbies">
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              arte de tapa
            </AnimatedCopy>
          </div>
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              visuales en vivo
            </AnimatedCopy>
          </div>
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              foto y video
            </AnimatedCopy>
          </div>
          <div className="hobby">
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              edicion
            </AnimatedCopy>
          </div>
        </section>

        <ContactForm />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(Home);
