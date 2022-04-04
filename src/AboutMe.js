import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-me">
      <div className="row">
        <div className="col">
          <a className="email-link" href="mailto:lauragomez.codes@gmail.com">
            lauragomez.codes@gmail.com
          </a>
          <img
            className="img-fluid about-img"
            src="./images/Laura-in-Lisbon.jpg"
            alt="about me"
          />
        </div>
      </div>
    </section>
  );
}
