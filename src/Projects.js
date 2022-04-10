import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <div className="Projects">
      <h2 className="text-center title projects-title">Projects</h2>
      <div className="row">
        <div className="col project-1">
          <h3 className="text-center">01</h3>
        </div>
        <div className="col project-2">
          <h3 className="text-center">02</h3>
        </div>
        <div className="col project-3">
          <h3 className="text-center">03</h3>
        </div>
      </div>
    </div>
  );
}
