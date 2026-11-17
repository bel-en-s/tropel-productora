import React, { useState, useEffect } from "react";
import "./About.css";

import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const servicesBannerImages = [
  "/about/services-banner-1.png",
  "/about/services-banner-2.png",
  "/about/services-banner-3.png",
];

const About = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBannerIndex((prev) => (prev + 1) % servicesBannerImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ReactLenis root>
      <div className="page about">
        {/* <section className="about-header">
          <h1>Est</h1>
          <h1>1997</h1>
        </section> */}

        {/* <section className="about-hero">
          <div className="about-hero-img">
            <img src="/about/about-hero.jpg" alt="" />
          </div>
        </section> */}

        {/* <section className="about-me-copy">
          <div className="about-me-copy-wrapper">
            <AnimatedCopy animateOnScroll={true} tag="h3">
              I'm TROPEL — a filmmaker drawn to human stories, quiet
              moments, and the visual language of emotion. My work spans short
              films, experimental pieces, and cinematic visuals.
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
              For me, filmmaking isn’t just about images — it’s about what those
              images make us feel. I believe in subtlety, texture, and honesty
              in storytelling.
            </AnimatedCopy>

            <AnimatedCopy animateOnScroll={true} tag="h3">
              Every project is a new collaboration, a new challenge, and a new
              chance to create something meaningful. If it moves someone, even
              for a second — it's done its job.
            </AnimatedCopy>
          </div>
        </section> */}

        <section className="services">
          <div className="services-col">
            <div className="services-banner">
              {servicesBannerImages.map((src, index) => (
                <img
                  key={src}
                  src={src}
                  alt=""
                  className={index === bannerIndex ? "active" : ""}
                />
              ))}
            </div>
          </div>
          <div className="services-col">
           
            <p className="about-copy">
              Tropel nace del encuentro entre Melo Piccolomini y Tiki Palomeque,
              artistas multidisciplinares. Desde el año 2022, realizamos videos
              musicales, sesiones en vivo, visuales para shows y coberturas.
            </p>
            <p className="about-copy">
              Nuestras producciones invitan a repensar el ritmo de vida acelerado,
              uso y abuso de la tecnología y adormecimiento del pensamiento
              crítico. Con una puesta en escena que privilegia la atmósfera por
              sobre la explicación, buscamos evidenciar el desgaste emocional y la
              desconexión social que percibimos en la experiencia urbana
              contemporánea.
            </p>

            {/* <div className="services-list">
              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Arte de tapa</h5>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Visuales en vivo</h5>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Videoclips</h5>
                </div>
              </div>

              <div className="service-list-row">
                <div className="service-list-col">
                  <h5>Fotografía</h5>
                </div>
              </div>
            </div> */}
          </div>
        </section>

        {/* <section className="about-banner-img">
          <div className="about-banner-img-wrapper">
            <img src="/about/about-banner.jpg" alt="" />
          </div>
        </section> */}

        {/* <section className="fav-tools">
          <div className="fav-tools-header">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Daily Stack
            </AnimatedCopy>
            <AnimatedCopy tag="h2" animateOnScroll={true} delay={0.25}>
              Favourite Tools
            </AnimatedCopy>
            <AnimatedCopy
              tag="p"
              animateOnScroll={true}
              className="secondary"
              delay={0.5}
            >
              My favorite stack includes Framer, Figma, and other cutting-edge
              technologies to ensure seamless and dynamic designs.
            </AnimatedCopy>
          </div>

          <div className="fav-tools-list">
            <div className="fav-tools-list-row">
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-1.jpg" alt="" />
                </div>
                <h4>DaVinci Resolve</h4>
                <p className="primary sm">Color Grading</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-2.jpg" alt="" />
                </div>
                <h4>Adobe Premiere Pro</h4>
                <p className="primary sm">Video Editing</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-3.jpg" alt="" />
                </div>
                <h4>Blackmagic Pocket</h4>
                <p className="primary sm">Cinematic Shooting</p>
              </div>
            </div>
            {/* <div className="fav-tools-list-row">
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-4.jpg" alt="" />
                </div>
                <h4>ShotDeck</h4>
                <p className="primary sm">Visual References</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-5.jpg" alt="" />
                </div>
                <h4>Frame.io</h4>
                <p className="primary sm">Remote Collaboration</p>
              </div>
              <div className="fav-tool">
                <div className="fav-tool-img">
                  <img src="/about/tool-6.jpg" alt="" />
                </div>
                <h4>Celtx</h4>
                <p className="primary sm">Scriptwriting Tool</p>
              </div>
            </div> 
          </div>
        </section> */}

        <ContactForm />

        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Transition(About);
