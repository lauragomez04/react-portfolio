import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="background-image container-fluid"></div>
      <div className="Footer" id="contact">
        <h2 className="title text-center">Let's work together</h2>
        <a
          className="d-block text-center"
          href="mailto:lauragomez.codes@gmail.com"
        >
          lauragomez.codes@gmail.com
        </a>
        <ul className="text-center">
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
              href="https://www.instagram.com/laugom0904/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="bi bi-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
      <p className="text-center mt-4 signature">
        DESIGNED AND BUILT BY{" "}
        <a
          href="https://github.com/lauragomez04/react-portfolio"
          target="_blank"
          rel="noreferrer"
        >
          LAURA GÓMEZ
        </a>
      </p>
    </div>
  );
}
