import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
// import bg from "../../assets/footer-bg.jpg";
// import logo from "../../assets/movie.png";

function Footer() {
  return (
    <div className="footer" style={{ background: "rgb(33,38,45)" }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            {/* <img src={logo} alt="" /> */}
            <Link to="/">Chess Player</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
            <Link to="/">Home</Link>
            <Link to="/">Contact us</Link>
            <Link to="/">Term of services</Link>
            <Link to="/">About us</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">Live</Link>
            <Link to="/">FAQ</Link>
            <Link to="/">Premium</Link>
            <Link to="/">Pravacy policy</Link>
          </div>
          <div className="footer__content__menu">
            <Link to="/">You must watch</Link>
            <Link to="/">Recent release</Link>
            <Link to="/">Top RANK</Link>
          </div>
        </div>
        <div
          style={{
            height: "2px",
            background: "#F6F8FA",
            marginTop: "1rem"
          }}
        ></div>
      </div>
    </div>
  );
}

export default Footer;
