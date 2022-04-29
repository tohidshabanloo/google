import React from "react";
import "./Content.css";
import Button from "../Button/Button";

const Content = () => {
  return (
    <div className="container">
      <h3>Google</h3>
      <input className="input"></input>
      <div>
        <Button color="white" className="bgRed">
          Google Search
        </Button>
        <Button color="white" className="bgRed">
          I'm Feeling Lucky
        </Button>
      </div>
    </div>
  );
};

export default Content;
