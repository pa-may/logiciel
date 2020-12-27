import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [mobile, setMobile] = useState(false);
  const handleMenu = () => {
    // x.classList.toggle("change");
    setMobile((prev) => !prev);
  };
  return (
    <header>
      <Link to="/logiciel/" className="logo-container">
        <img className="logo" src="img/logo.png" />
        <p className="logo-text">Logiciel solution</p>
      </Link>
      <Link className="desktop" to="/logiciel/">
        Home
      </Link>
      <Link className="desktop" to="/logiciel/jobsearch">
        Job search
      </Link>
      <Link className="desktop" to="/logiciel/im-looking">
        Looking for work
      </Link>
      <Link className="desktop" to="/logiciel/im-hiring">
        Submit a vacancy
      </Link>
      <Link className="desktop" to="/logiciel/about-us">
        About us
      </Link>
      {/* <div className="header__btn mobile">&nbsp;</div> */}
      <div
        className={`container mobile ${mobile && "change"}`}
        onClick={handleMenu}
      >
        <div className={`bar1 ${mobile && "bar--active"}`}></div>
        <div className={`bar2 ${mobile && "bar--active"}`}></div>
        <div className={`bar3 ${mobile && "bar--active"}`}></div>
      </div>
      {mobile && (
        <div className={`header__mobile ${mobile && "change"}`}>
          <Link
            className="desktop"
            onClick={() => setMobile(false)}
            to="/logiciel/"
          >
            Home
          </Link>
          <Link
            className="desktop"
            onClick={() => setMobile(false)}
            to="/logiciel/jobsearch"
          >
            Job search
          </Link>
          <Link
            className="desktop"
            onClick={() => setMobile(false)}
            to="/logiciel/im-looking"
          >
            Looking for work
          </Link>
          <Link
            className="desktop"
            onClick={() => setMobile(false)}
            to="/logiciel/im-hiring"
          >
            Submit a vacancy
          </Link>
          <Link
            className="desktop"
            onClick={() => setMobile(false)}
            to="/logiciel/about-us"
          >
            About us
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
