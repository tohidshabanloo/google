import React from "react";
import "./Button.css";

const Button = ({ text, color }) => {
  return (
    <span>
      <button style={{ color: { color } }} className="btn">
        {text}
      </button>
    </span>
  );
};

export default Button;
