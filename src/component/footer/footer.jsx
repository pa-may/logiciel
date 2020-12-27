import React from "react";
import "./footer.css";

const Footer = () => {
  return <div>

    <footer className="footer">
      <div className="footer-box box-1">
        <div className="footer-logo"></div>
        <div className="footer-text">Matching exceptional support staff to top businesses and private individuals globally.</div>
      </div>
      <div className="footer-box box-2">
        <ul className="footer-items">
          <li className="footer-list">WHO WE ARE</li>
          <li className="footer-list">WHAT WE DO</li>
          <li className="footer-list">WORK</li>
          <li className="footer-list">INSIGHT</li>
          <li className="footer-list">PARTNERS</li>
          <li className="footer-list">CONTACT</li>
          <li className="footer-list">PRIVACY POLICY</li>
          <li className="footer-list">TERMS & CONDITIONS</li>
        </ul>
      </div>
      <div className="footer-box box-3">
        <div className="footer-socials">
          <div className="icon footer-icon-1"></div>
          <div className="icon footer-icon-2"></div>
          <div className="icon footer-icon-3"></div>
          <div className="icon footer-icon-4"></div>
        </div>
        <div className="footer-para">
          Also find us on social media platforms
    </div>
      </div>

    </footer>

    <div className="small-footer">
      <div className="small-footer-txt">© 2019 LOGICAL SOLUTION. ALL RIGHTS RESERVED
          REPRODUCTION OF MATERIAL FROM LOGICALSOLUTION.COM WITHOUT WRITTEN PERMISSION IS STRICTLY PROHIBITED.</div>
    </div>

  </div>;
};

export default Footer;
