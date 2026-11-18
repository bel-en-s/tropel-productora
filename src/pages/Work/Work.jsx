import { useState, useCallback, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";
import projects from "../../data/projects";
import "./Work.css";

const Work = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const navigate = useNavigate();
  const touchStartX = useRef(null);

  const activeProject = projects[activeIndex];

  const slides = activeProject.slides || [activeProject.image];
  const currentSlide = slides[slideIndex] || activeProject.image;

  useEffect(() => {
    setSlideIndex(0);
    if (slides.length <= 1) return;
    const interval = setInterval(() => {
      setSlideIndex((i) => (i + 1) % slides.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeProject.slug]);

  const goTo = useCallback((index) => {
    setActiveIndex(((index % projects.length) + projects.length) % projects.length);
  }, []);

  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 50) {
      goTo(activeIndex + (dx < 0 ? 1 : -1));
    }
    touchStartX.current = null;
  };

  return (
    <div className="work-carousel">
      <AnimatePresence mode="wait">
        <motion.div
          key={activeProject.slug}
          className="work-slider-img"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <AnimatePresence>
            <motion.img
              key={`${activeProject.slug}-${slideIndex}`}
              src={currentSlide}
              alt={activeProject.title}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </AnimatePresence>
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
            <span className="work-item-label">{project.title}</span>
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
              {[activeProject.year, activeProject.description]
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

        {activeProject.videoUrl && (
          <div className="carousel-links">
            <a
              className="carousel-video-link"
              href={activeProject.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver video
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Work;
