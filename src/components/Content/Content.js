import React from "react";
import "./Content.css";
import Button from "../Button/Button";

const Content = () => {
  return (
    <div className="container">
      <h3>Google</h3>
      <input className="input"></input>
      <div>
        <Button text="Google Search" color="red" />
        <Button text="I'm Feeling Lucky" color="yellow" />
      </div>
    </div>
  );
};

export default Content;
