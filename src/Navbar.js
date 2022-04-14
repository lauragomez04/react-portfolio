import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="Navbar">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              className="logo img-fluid"
              src="./images/laura-gomez-frontend-developer-logo.svg"
              width="300"
              alt="laura gomez logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link about" aria-current="page" href="#about">
                  ABOUT
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link projects" href="#projects">
                  PROJECTS
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link contact" href="#contact">
                  CONTACT
                </a>
              </li>
              <span className="vertical-line"></span>
              <span className="d-flex flex-row navbar-icons">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://github.com/lauragomez04"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-github github-icon"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="mailto:lauragomez.codes@gmail.com"
                  >
                    <i className="bi bi-envelope envelope-icon"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.linkedin.com/in/lauragomezblanco/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-linkedin linkedin-icon"></i>
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="https://www.instagram.com/laugom0904/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="bi bi-instagram instagram-icon"></i>
                  </a>
                </li>
              </span>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
