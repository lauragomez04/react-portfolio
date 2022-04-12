import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="about-me" id="about">
      <div className="row">
        <div className="col d-none d-md-block">
          <div className="d-flex align-items-center image-email">
            <a className="email-link" href="mailto:lauragomez.codes@gmail.com">
              lauragomez.codes@gmail.com
            </a>
            <img
              className="img-fluid about-img"
              src="./images/about-me-img.jpg"
              alt="about me"
            />
          </div>
        </div>
        <div className="col">
          <h2 className="text-center about-title title">About Me</h2>
          <p className="about-text">
            After supporting projects in different sectors as a product designer
            and digital marketer, I realized that front-end development is where
            I feel is the core of solution creation, focused on meeting actual
            needs, solving problems, and creating pleasant experiences that give
            me satisfaction. I’m a meticulous and curious, and so drawn to this
            field where there is always more to learn. I’m interested in joining
            a team where I can contribute and learn.
            <br />
            <br />
            When I’m not coding, I’m exploring hidden corners of Lisbon, looking
            for dolphins along the Tejo River, or embroidering, my other kind of
            coding.
          </p>
          <div className="about-leaf">
            <img src="./images/about-me-leaf.svg" alt="about me leaf" />
          </div>
        </div>
        <div className="text-center">
          <a href="/" className="btn about-button">
            CHECK OUT MY PROJECTS
          </a>
        </div>
      </div>
    </section>
  );
}
