import React from "react";
import "./Introduction.css";

export default function Introduction() {
  return (
    <section className="introduction">
      <div className="row">
        <div className="col introduction-text">
          <p className="hello">¡HOLA!</p>
          <h1>I'm Laura Gómez</h1>
          <h2>FRONT-END DEVELOPER / DESIGNER BASED IN LISBON</h2>
          <p>
            I'm a front-end developer with a background in product design and
            digital marketing. I’m here to help you bring your ideas to life by
            building beautiful, functional, and responsive user interfaces with
            the magic of coding.
          </p>
        </div>
        <div className="col img-portada">
          <img
            className="img-fluid portada"
            src="./images/laura-gomez-frontend-developer.png"
            alt="Laura Gomez - Frontend Developer Portfolio"
          />
        </div>
      </div>
    </section>
  );
}
