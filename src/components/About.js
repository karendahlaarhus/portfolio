import React from "react";
import "./About.css";
import Picture from "../images/circle-cropped.png";

function About() {
  return (
    <>
      <div id="about" className="about">
        <div className="about-container">
          <div className="about-wrapper">
            <ul className="about-items">
              <li className="about-item">
                <img src={Picture} alt="" width="350" className="bilde"></img>
              </li>
              <li className="about-item">
                <h3 className="about-title">Om meg</h3>
                <p className="about-text">
                  Jeg heter Karen og jeg er en student på 3. året av en bachelor
                  i informatikk ved NTNU i Trondheim! Her skal/har jeg samlet
                  prosjekter jeg har jobbet med både privat og i
                  studie-sammenheng, sjekk de gjerne ut lenger ned på siden :)
                </p>

                <p className="about-text">
                  Når det kommer til teknologier og programmeringsspråk har jeg
                  erfaring med blant annet HTML5, CSS, Javascript/Typescript,
                  Python, React og Django.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
