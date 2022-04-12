import React from "react";
import "./Projects.css";
import { projectsData } from "./ProjectsData";

export default function Projects() {
  return (
    <section className="Projects" id="projects">
      <h2 className="text-center title projects-heading">Projects</h2>
      <div className="row">
        {projectsData.map((project) => (
          <div className="col project-1">
            <h3 className="text-center number">{project.number}</h3>
            <img
              className="img-fluid"
              src={project.image}
              alt="weather app project"
            />
            <h3 className="text-center project-title">{project.title}</h3>
            <p className="text-center">{project.tech}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
