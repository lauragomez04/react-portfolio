import React from "react";
import "./Projects.css";
import { projectsData } from "./ProjectsData";

export default function Projects() {
  return (
    <section className="Projects" id="projects">
      <h2 className="text-center title projects-heading">Projects</h2>
      <div className="row">
        {projectsData.map((project, index) => {
          return (
            <div className="col-sm project" key={index}>
              <h3 className="text-center number">{project.number}</h3>
              <a className="project-link" href="/">
                <img
                  className="img-fluid"
                  src={project.image}
                  alt={project.title}
                />
                <h3 className="text-center project-title">{project.title}</h3>
              </a>
              <p className="text-center">{project.tech}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
