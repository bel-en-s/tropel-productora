import "./Home.css";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import Work from "../Work/Work";
import About from "../About/About";
import ContactForm from "../../components/ContactForm/ContactForm";
import Footer from "../../components/Footer/Footer";
import { scrollToSection } from "../../utils/scrollToSection";

const servicios = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
];

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    const id = location.state?.scrollTo;
    if (!id) return;

    const timer = setTimeout(() => scrollToSection(id), 100);
    return () => clearTimeout(timer);
  }, [location.state]);

  return (
    <div className="page home">
      <section className="hero-video" id="inicio">
        <video
          className="hero-video-element"
          src="/home/hero.mp4"
          poster="/home/hero.jpg"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="hero-video-logo">
          <img src="/tropel-logo.png" alt="TROPEL" />
        </div>
      </section>

      <section className="hero">
        <div className="hobby-grid">
          {servicios.map((servicio) => (
            <div className="hobby" key={servicio}>
              {servicio === "visuales en vivo" ? (
                <iframe
                  className="hobby-embed"
                  src="https://www.youtube.com/embed/OYZMXvwgAXY?autoplay=1&mute=1&loop=1&playlist=OYZMXvwgAXY&controls=0&modestbranding=1&rel=0"
                  title="visuales en vivo"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              ) : (
                <video
                  className="hobby-video"
                  src="/home/hero.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
              <h4>{servicio}</h4>
            </div>
          ))}
        </div>
      </section>

      <section id="trabajo">
        <Work />
      </section>

      <section id="sobre">
        <About />
      </section>

      {/* <ContactForm />
      <Footer /> */}
    </div>
  );
};

export default Home;
