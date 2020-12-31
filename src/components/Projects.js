import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <>
      <div id="projects" className="projects">
        <div className="projects-container">
          <h3 className="projects-title">Prosjekter</h3>
          <div className="projects-wrapper">
            <ul className="project-items">
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="http://folk.ntnu.no/karendaa/Webteknologi/venziaFERDIG/Prosjekt/html/"
                  className="project-link"
                >
                  <p>
                    <b>Venzia - Hjemmeside for en fiktiv restaurant</b>
                  </p>
                </a>
                <p>
                  Utviklet som en del av et gruppeprosjekt i faget IT2805
                  Webteknologi, første semester på informatikkstudiet.
                  <br />
                </p>
              </li>
              <li>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://5fcf8c8e40cd2bfb8be81c25--upbeat-noyce-f6ec83.netlify.app/"
                  className="project-link"
                >
                  <p>
                    <b>Bon apetit - Oppskriftsdatabase</b>
                  </p>
                </a>
                <p>
                  Utviklet som en del av et gruppeprosjekt i faget IT2810
                  Webutvikling ved bruk av React og TypeScript.
                  <br />
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
