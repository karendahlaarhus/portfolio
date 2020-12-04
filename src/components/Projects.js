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
                <p>
                  <b>Venzia - Hjemmeside for en fiktiv restaurant</b>
                </p>
                <p>
                  Utviklet som en del av et gruppeprosjekt i faget IT2805
                  Webteknologi, første semester på informatikkstudiet. Sjekk den
                  ut{" "}
                  <a href="http://folk.ntnu.no/karendaa/Webteknologi/venziaFERDIG/Prosjekt/html/">
                    her
                  </a>
                </p>
              </li>
              <li>
                <p>
                  <b>Bon apetit - Oppskriftsdatabase</b>
                </p>
                <p>
                  Utviklet som en del av et gruppeprosjekt i faget IT2810
                  Webutvikling.
                </p>
              </li>
              <li>
                <p>
                  <b>BlaBlaBla</b>
                </p>
                <p>blablabalblabalbalblablablablablabalbalablablab</p>
              </li>
              <li>
                <p>
                  <b>BlaBlaBla</b>
                </p>
                <p>blablabalblabalbalblablablablablabalbalablablab</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
