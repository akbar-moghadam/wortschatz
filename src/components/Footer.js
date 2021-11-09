import React from "react";
import { Link } from "react-router-dom";
import { Social,FooterListCenter,FooterListLeft,FooterListRight } from "./data";
import "../styles/main.scss";

const Footer = () => {
  const social = Social.map((item) => (
    <div className="b-social" key={item.id}>
      <Link to={item.to} className="link">
        <i className="social-cover">{item.icon}</i>
      </Link>
    </div>
  ));
   const Footerlistcenter=(
     <div className="footer-item"  >
       <ul className="footer-ul">
        { FooterListCenter.map((item) => (
         <Link to={item.to} key={item.id} className="footer-link">
         <li className="footer-li" >
           <span>{item.text}</span>
         </li>
         </Link>))}
       </ul>
     </div>
   );
  const Footerlistleft=(
    <div className="footer-item" >
      <ul className="footer-ul">
        {FooterListLeft.map((item) => (
        <Link to={item.to} key={item.id} className="footer-link">
        <li className="footer-li" >
          <span>{item.text}</span>
        </li>
        </Link>))}
      </ul>
    </div>
  );
  const Footerlistright=(
    <div className="footer-item" >
      <ul className="footer-ul">
     { FooterListRight.map((item) => (
        <Link to={item.to} key={item.id} className="footer-link">
        <li className="footer-li" >
          <span>{item.text}</span>
        </li>
        </Link>))}
      </ul>
    </div>
  );
  return (
    <div className="footer-container">
      <div className="brand-container">
        <div className="brand">
          <h2>Wortschatz</h2>
        </div>
        <div className="social">{social}</div>
      </div>
      <div className="footer">
        <div className="left">{Footerlistleft}</div>
        <div className="center">{Footerlistcenter}</div>
        <div className="right">{Footerlistright}</div>
      </div>
    </div>
  );
};

export default Footer;
