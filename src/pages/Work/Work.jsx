import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import projects from "../../data/projects";
import "./Work.css";

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  const activeProject = projects[activeIndex];

  const goTo = useCallback((index) => {
    setActiveIndex(((index % projects.length) + projects.length) % projects.length);
  }, []);

  return (
    <div className="work-carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.slug}
          className="work-slider-img"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <img src={activeProject.image} alt={activeProject.title} />
        </motion.div>
      </AnimatePresence>

      <div className="work-items-preview-container">
        {projects.map((project, index) => (
          <div
            key={project.slug}
            className={`work-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => goTo(index)}
          >
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>

      <div className={`carousel-info ${activeProject.darkText ? "dark-text" : ""}`}>
        <div className="carousel-meta">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeProject.slug}
              initial={{ yPercent: 100 }}
              animate={{ yPercent: 0 }}
              exit={{ yPercent: -100 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {[activeProject.description, activeProject.year]
                .filter(Boolean)
                .join(" — ")}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="carousel-title">
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeProject.slug}
              style={{ cursor: "pointer" }}
              onClick={() =>
                activeProject.videoUrl
                  ? window.open(activeProject.videoUrl, "_blank", "noopener,noreferrer")
                  : navigate(`/project/${activeProject.slug}`)
              }
              initial={{ yPercent: 100 }}
              animate={{ yPercent: 0 }}
              exit={{ yPercent: -100 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {activeProject.title}
            </motion.h1>
          </AnimatePresence>
        </div>

        <div className="carousel-subtitle">
          <AnimatePresence mode="wait">
            {activeProject.subtitle && (
              <motion.p
                key={activeProject.slug}
                className="secondary"
                initial={{ yPercent: 100 }}
                animate={{ yPercent: 0 }}
                exit={{ yPercent: -100 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                {activeProject.subtitle}
              </motion.p>
            )}
          </AnimatePresence>
        </div>

        {(activeProject.videoUrl || activeProject.photosUrl) && (
          <div className="carousel-links">
            {activeProject.videoUrl && (
              <a
                className="carousel-video-link"
                href={activeProject.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver video
              </a>
            )}
            {activeProject.photosUrl && (
              <a
                className="carousel-video-link"
                href={activeProject.photosUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                Fotos
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
