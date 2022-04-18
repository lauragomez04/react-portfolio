import React from "react";
import "./Projects.css";
import { projectsData } from "./ProjectsData";
import ProjectsModal from "./ProjectsModal";

export default function Projects() {
  return (
    <section className="Projects" id="projects">
      <h2 className="text-center title projects-heading">Projects</h2>
      <div className="row">
        {projectsData.map((project, index) => {
          return (
            <div className="col-sm project" key={index}>
              <h3 className="text-center number">{project.number}</h3>

              <img
                className="img-fluid project-image"
                src={project.image}
                alt={project.title}
              />

              <button
                type="button"
                className="btn  project-button"
                data-bs-toggle="modal"
                data-bs-target={"#" + project.id}
              >
                <h3 className="text-center project-title project-link">
                  {project.title}
                </h3>
              </button>
              <p className="text-center">TECH STACK: {project.tech}</p>
              <ProjectsModal data={project} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
