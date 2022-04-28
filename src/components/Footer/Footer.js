import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="main">
      <span>
        <button className="f1">About</button>
        <button className="f1">Advertising</button>
        <button className="f1">Business</button>
        <button className="f1">How Search Work</button>
      </span>
      <span className="s2">
        <button className="f2">Privacy</button>
        <button className="f2">terms</button>
        <button className="f2">Setting</button>
      </span>
    </div>
  );
};

export default Footer;
