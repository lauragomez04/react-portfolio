import React from "react";
import "./Introduction.css";

export default function Introduction() {
  return (
    <section className="Introduction">
      <div className="row">
        <div className="col-sm introduction-text">
          <p className="greeting">¡HOLA!</p>
          <h1>I'm Laura Gómez</h1>
          <h2>FRONT-END DEVELOPER / DESIGNER / DIGITAL MARKETER</h2>
          <p>
            I'm a front-end developer with a background in product design and
            digital marketing. I’m here to help you bring your ideas to life by
            building beautiful, functional, and responsive user interfaces with
            the magic of coding.
          </p>
        </div>
        <div className="col-sm img-portada">
          <img
            className="img-fluid"
            src="./images/laura-gomez-frontend-developer.png"
            alt="Laura Gomez - Frontend Developer Portfolio"
          />
        </div>
      </div>
    </section>
  );
}
