import React from "react";
import "../App.css";
import "./Welcome.css";

function Welcome() {
  return (
    <>
      <div className="welcome-container">
        <h1>KAREN DAHL AARHUS</h1>
        <p>Velkommen til min portfolio</p>

        <div>
          <a
            href="https://github.com/karendahlaarhus"
            target="_blank"
            rel="noreferrer"
            className="fab fa-github"
          >
            {""}
          </a>
          <a
            href="https://www.facebook.com/karen.d.aarhus"
            target="_blank"
            rel="noreferrer"
            className="fab fa-facebook"
          >
            {""}
          </a>
          <a
            href="https://www.instagram.com/karendahlaarhus"
            target="_blank"
            rel="noreferrer"
            className="fab fa-instagram"
          >
            {""}
          </a>
          <a
            href="https://www.linkedin.com/in/karen-dahl-aarhus/"
            target="_blank"
            rel="noreferrer"
            className="fab fa-linkedin"
          >
            {""}
          </a>
          <a
            href="mailto:karendahlaarhus@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="fas fa-envelope"
          >
            {""}
          </a>
        </div>
      </div>
    </>
  );
}

export default Welcome;
