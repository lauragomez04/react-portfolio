import React from "react";
import "./Introduction.css";

export default function Introduction() {
  return (
    <div className="row">
      <div className="col introduction-text">
        <p className="hello">¡Hola!</p>
        <h1>I'm Laura Gómez</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
      </div>
      <div className="col img-portada">
        <img
          className="img-fluid portada"
          src="./images/laura-gomez-frontend-developer.jpg"
          alt="Laura Gomez - Frontend Developer Portfolio"
        />
      </div>
    </div>
  );
}
