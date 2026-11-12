import React from "react";
import "./Project.css";

import { useParams, Link } from "react-router-dom";

import ParallaxImage from "../../components/ParallaxImage/ParallaxImage";
import AnimatedCopy from "../../components/AnimatedCopy/AnimatedCopy";
import projects from "../../data/projects";

import ReactLenis from "lenis/react";

import Transition from "../../components/Transition/Transition";

const Project = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug) || projects[0];

  const currentIndex = projects.findIndex((p) => p.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <ReactLenis root>
      <div className="page project">
        <section className="project-header">
          <AnimatedCopy
            delay={1}
            animateOnScroll={false}
            className="primary sm"
          >
            {project.description}
          </AnimatedCopy>
          <AnimatedCopy tag="h2" delay={1}>
            {project.title}
          </AnimatedCopy>
        </section>

        <section className="project-banner-img">
          <div className="project-banner-img-wrapper">
            {project.video ? (
              <video
                className="project-banner-video"
                src={project.video}
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <ParallaxImage src={project.image} alt="" />
            )}
          </div>
        </section>

        <section className="project-details">
          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Overview
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              {project.description} de {project.title}.
            </AnimatedCopy>
          </div>

          <div className="details">
            <AnimatedCopy tag="p" animateOnScroll={true} className="primary sm">
              Category
            </AnimatedCopy>
            <AnimatedCopy tag="h4" animateOnScroll={true}>
              {project.description}
            </AnimatedCopy>
          </div>
        </section>

        <section className="project-images">
          <div className="project-images-container">
            {project.images.map((src, index) => (
              <div className="project-img" key={index}>
                <div className="project-img-wrapper">
                  <ParallaxImage src={src} alt="" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="next-project">
          <AnimatedCopy tag="h3" animateOnScroll={true}>
            Next
          </AnimatedCopy>

          <Link to={`/project/${nextProject.slug}`}>
            <div className="next-project-img">
              <div className="next-project-img-wrapper">
                <ParallaxImage src={nextProject.image} alt="" />
              </div>
            </div>

            <AnimatedCopy tag="h4" animateOnScroll={true}>
              {nextProject.title}
            </AnimatedCopy>
          </Link>
        </section>
      </div>
    </ReactLenis>
  );
};

export default Transition(Project);
