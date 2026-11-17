import "./Home.css";
import "../../components/Footer/Footer.css";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Work from "../Work/Work";
import About from "../About/About";
import { scrollToSection } from "../../utils/scrollToSection";

const servicios = [
  {
    name: "Arte de tapa",
    images: [
      "/project/artes-de-tapa/lichi-como-luces.jpeg",
      "/project/artes-de-tapa/lichi-escuchen-contratapa.jpeg",
      "/project/artes-de-tapa/lichi-escuchen-tapa.jpeg",
      "/project/artes-de-tapa/pj-marmota.jpg",
      "/project/artes-de-tapa/portada-cenado-pj.jpg",
      "/project/artes-de-tapa/supershow-prueba13.png",
    ],
  },
  {
    name: "Visuales en vivo",
    images: [
      "/project/visuales-en-vivo/visual-1.png",
      "/project/visuales-en-vivo/visual-2.png",
      "/project/visuales-en-vivo/visual-3.png",
      "/project/visuales-en-vivo/visual-4.png",
    ],
  },
  { name: "Videoclips", images: ["/project/videoclips/videoclip-1.png"] },
  {
    name: "Live Sessions",
    images: [
      "/project/sesiones/sesion-1.png",
      "/project/sesiones/sesion-2.png",
      "/project/sesiones/sesion-3.png",
    ],
  },
];

const scatterPositions = [
  { top: "4%", left: "8%" },
  { top: "20%", left: "66%" },
  { top: "54%", left: "66%" },
  { top: "70%", left: "8%" },
];

const mobileScatterPositions = [
  { top: "2%", left: "20%" },
  { top: "22%", left: "20%" },
  { top: "60%", left: "20%" },
  { top: "80%", left: "20%" },
];

const rotations = [-7, 5, -4, 6];

const ServiceChip = ({ servicio, position, rotation, offset, dragConstraints, onDragEnd, index }) => {
  const images = servicio.images || [servicio.image];
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    let interval;
    const timeout = setTimeout(() => {
      interval = setInterval(
        () => setActiveImage((i) => (i + 1) % images.length),
        2200
      );
    }, index * 1100);
    return () => {
      clearTimeout(timeout);
      if (interval) clearInterval(interval);
    };
  }, [images.length, index]);

  return (
    <motion.div
      className="service-chip"
      drag
      dragConstraints={dragConstraints}
      dragElastic={0.1}
      dragMomentum={false}
      whileDrag={{ scale: 1.06, zIndex: 20 }}
      onDragEnd={onDragEnd}
      style={{ ...position, x: offset.x, y: offset.y, rotate: rotation }}
    >
      {images.length > 1 ? (
        <div className="service-chip-img">
          <AnimatePresence initial={false}>
            <motion.img
              key={activeImage}
              src={images[activeImage]}
              alt={servicio.name}
              draggable={false}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            />
          </AnimatePresence>
        </div>
      ) : (
        <img src={images[0]} alt={servicio.name} draggable={false} />
      )}
      <span>{servicio.name}</span>
    </motion.div>
  );
};

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const scatterRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);
  const [chipOffsets, setChipOffsets] = useState({});

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1000px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const handleDragEnd = (name) => (e, info) => {
    setChipOffsets((prev) => {
      const current = prev[name] || { x: 0, y: 0 };
      return {
        ...prev,
        [name]: {
          x: current.x + info.offset.x,
          y: current.y + info.offset.y,
        },
      };
    });
  };

  const handleSectionClick = (e, id) => {
    e.preventDefault();

    if (location.pathname === "/") {
      scrollToSection(id);
    } else {
      navigate("/", { state: { scrollTo: id } });
    }
  };

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
          src="/home/hero-short.mp4"
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

      <section className="hero-statement">
        <div className="statement-row">
          <div className="statement-text">
            <h3>
              TROPEL es una productora y colectivo audiovisual  <br/>basado en Buenos Aires.
            </h3>
            <br />
            {/* <p className="secondary">
              Formados en el lenguaje del video musical, trabajamos con la
              narración visual y la construcción de atmósferas.
            </p> */}
          </div>
        </div>
      </section>

      <section className="horse-animation">
        {/* <h2 className="what-we-do-title">Todo lo que podemos hacer</h2> */}

        <div className="services-scatter" ref={scatterRef}>
          <video
            className="horse-animation-video"
            src="/loading-horse.mp4"
            autoPlay
            loop
            muted
            playsInline
          />

          {servicios.map((servicio, index) => {
            const offset = chipOffsets[servicio.name] || { x: 0, y: 0 };
            return (
              <ServiceChip
                key={servicio.name}
                servicio={servicio}
                position={
                  isMobile ? mobileScatterPositions[index] : scatterPositions[index]
                }
                rotation={rotations[index]}
                offset={offset}
                dragConstraints={scatterRef}
                onDragEnd={handleDragEnd(servicio.name)}
                index={index}
              />
            );
          })}
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
