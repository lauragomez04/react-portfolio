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
            I'm Laura, a front-end developer with experience in product design
            and digital marketing. I'm here to help you bring ideas to life by
            building responsive user interfaces. I live to make things, and I'm
            only happy when they are beautiful and functional.
          </p>
          <div className="deco-brush"></div>
        </div>
        <div className="col-sm img-portada text-center">
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
