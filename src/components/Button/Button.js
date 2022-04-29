import React from "react";
import "./Button.css";

const Button = (props) => {
  console.log(props);
  return (
    <button
      style={{ color: props.color, ...props.style }}
      className={props.className}
    >
      {props.children}
    </button>
  );
};

export default Button;
