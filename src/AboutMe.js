import React from "react";
import "./AboutMe.css";

export default function AboutMe() {
  return (
    <section className="AboutMe" id="about">
      <div className="row">
        <div className="col d-none d-md-block">
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
        <div className="col">
          <h2 className="text-center about-title title">About Me</h2>
          <p className="about-text">
            My interest in web development began while supporting projects in
            different sectors as a product designer and digital marketer. I used
            to plan and execute digital marketing strategies, so I constantly
            edited and built websites with page builders for WordPress. I loved
            this creative part of my job, but always wished I knew how to code
            as my creativity was often limited by the tools available to me.
            <br />
            <br />I stopped wishing, made it happen, and got hooked. I realized
            front-end development was the perfect way to combine my soft skills,
            hard skills, and passion for creating and bringing designs to life.
            I’m meticulous, curious, and captivated by this field where there is
            always more to learn.
            <br />
            <br />
            When I'm not coding, I'm exploring hidden corners of Lisbon, looking
            for dolphins along the Tejo River, or embroidering, my other kind of
            coding.
            <br />
            <br />
            I’m interested in joining a team where I can contribute and learn.
            The technologies I've been working with are HTML5, CSS3, Javascript,
            React, and Bootstrap. Click on the button below to see my C.V.
          </p>
          <div className="about-leaf">
            <img src="./images/about-me-leaf.svg" alt="" />
          </div>
        </div>
        <div className="text-center">
          <a href="/" className="btn about-button">
            READ MY RESUME
          </a>
        </div>
      </div>
    </section>
  );
}
