import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>Kontakt</h6>
            <p className="text-justify">
              <b>E-post:</b> karendahlaarhus@gmail.com <br></br>
              <b>Telefon:</b> 41079762
            </p>
          </div>

          <div className="col-xs-6 col-md-3"></div>
          <div className="col-xs-6 col-md-3"></div>
        </div>
        <hr />
      </div>
      <div className="container">
        <div className="row">
          <div className="footer col-md-12 col-sm-12 col-xs-12">
            <p className="copyright-text">Laget med &hearts; av Karen</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
