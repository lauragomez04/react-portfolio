import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="AboutMe" id="about">
      <div className="row">
        <div className="col-lg">
          <div className="d-flex align-items-center image-email">
            <a className="email-link" href="mailto:lauragomez.codes@gmail.com">
              lauragomez.codes@gmail.com
            </a>
            <img
              className="img-fluid about-img"
              src="./images/laura-gomez-frontend-developer.png"
              alt="about me"
            />
          </div>
        </div>
        <div className="col-lg">
          <h2 className="text-center about-title title">About Me</h2>
          <p className="about-text">
            I'm Laura, a front-end developer with experience in product design
            and digital marketing. I'm here to help you bring ideas to life by
            building responsive user interfaces. I live to make things, and I'm
            only happy when they are beautiful and functional.
            <br />
            <br />
            My interest in web development began while supporting projects in
            different sectors as a designer and digital marketer. I constantly
            edited and built websites with page builders for WordPress but felt
            limited by these tools and my lack of knowledge in coding.
            <br />
            <br />
            I joined SheCodes Pro workshops to upgrade and combine my skills and
            focus more on product development. I'm captivated by this field,
            where there is always more to learn. I’m interested in joining a
            team where I can contribute and continue learning.
            <br />
            <br />
            When I'm not coding, I'm exploring hidden corners of Lisbon, looking
            for dolphins along the Tejo River, or embroidering, my other kind of
            coding.
            <br />
            <br />
            Technologies I've been working with are HTML5, CSS3, Javascript,
            React, and Bootstrap.
            <br />
            <br />
            <span className="about-cta">
              CHECK OUT MY PROJECTS <i className="bi bi-arrow-down arrow"></i>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
