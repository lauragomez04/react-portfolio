import React from "react";
import "./Introduction.css";

export default function Introduction() {
  return (
    <section className="Introduction">
      <div className="row">
        <ul className="contact-icons">
          <li>
            <a
              href="https://github.com/lauragomez04"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/lauragomezblanco/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="mailto:lauragomez.codes@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-envelope"></i>
            </a>
          </li>
        </ul>
        <div className="col-sm introduction-text">
          <h1 className="greeting text-center">Hola, I'm Laura Gómez</h1>
          <h2 className="text-center">
            FRONT-END DEVELOPER, DESIGNER &amp; DIGITAL MARKETER
          </h2>
          <p className="cta text-center">GET TO KNOW ME</p>
        </div>
      </div>
    </section>
  );
}
