import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <span>
        <button className="btn1">Gmail</button>
        <button className="btn1">Image</button>
        
      </span>
      <img className="menu" src="/menu.png" />
      <img className="avatar" src="/avatar.png" />
    </div>
  );
};

export default Header;
