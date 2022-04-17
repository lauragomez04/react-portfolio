import React from "react";
import "./Projects.css";
import { projectsData } from "./ProjectsData";
import WeatherModal from "./WeatherModal";

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
                className="img-fluid"
                src={project.image}
                alt={project.title}
              />

              <button
                type="button"
                class="btn  project-button"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <h3 className="text-center project-title project-link">
                  {project.title}
                </h3>
              </button>
              <p className="text-center">{project.tech}</p>
            </div>
          );
        })}
      </div>
      <WeatherModal />
    </section>
  );
}
