import React, { useState } from "react";
import "./Content.css";
import Button from "../Button/Button";

const Content = () => {
  const btn = ["Google Search", "I'm Feeling Lucky"];
  const [val, func] = useState(2);
  const addNew = () => {
    func(val ** 2);
  };
  const remove = () => {
    func(val - 1);
  };
  return (
    <div className="container">
      <h3>Google</h3>

      <input className="input"></input>
      {/* <div>
        <button onClick={addNew}>ADD</button>
        <div>{val}</div>
        <button onClick={remove}>Delete</button>
      </div> */}
      <div>
        {btn.map((el) => {
          return (
            <>
              <Button color="white" className="bgRed">
                {el}
              </Button>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Content;
