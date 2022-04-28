import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <span>
        <button className="btn1">Gmail</button>
        <button className="btn1">Image</button>
        <img className="img" src="/menu.png" />
      </span>
    </div>
  );
};

export default Header;
