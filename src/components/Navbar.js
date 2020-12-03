import React, { useState } from "react";
import "../App.css";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
  };
  const closeMobileMenu = () => {
    setClick(false);
  };
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#welcome" className="nav-links" onClick={closeMobileMenu}>
          {""}
        </a>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <a href="#welcome" className="nav-links" onClick={closeMobileMenu}>
              Hjem
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-links" onClick={closeMobileMenu}>
              Om meg
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-links" onClick={closeMobileMenu}>
              Prosjekter
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
