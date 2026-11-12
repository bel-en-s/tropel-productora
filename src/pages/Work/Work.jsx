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
          key={activeProject.id}
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
            key={project.id}
            className={`work-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => goTo(index)}
          >
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>

      <div className="carousel-info">
        <div className="carousel-description">
          <AnimatePresence mode="wait">
            <motion.p
              key={activeProject.id}
              className="primary sm"
              initial={{ yPercent: 100 }}
              animate={{ yPercent: 0 }}
              exit={{ yPercent: -100 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {activeProject.description}
            </motion.p>
          </AnimatePresence>
        </div>

        <div className="carousel-title">
          <AnimatePresence mode="wait">
            <motion.h1
              key={activeProject.id}
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/project/${activeProject.slug}`)}
              initial={{ yPercent: 100 }}
              animate={{ yPercent: 0 }}
              exit={{ yPercent: -100 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {activeProject.title}
            </motion.h1>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Work;
