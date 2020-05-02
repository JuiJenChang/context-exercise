import React from "react";
import { testContext } from "./context";

function Change() {
  return (
  <testContext.Consumer>{({ color, handleClick }) => 
    <div>
      <span style={{ color: color }}>change color</span>
      <button onClick={ handleClick }>click me</button>
    </div>
    }
  </testContext.Consumer>
  );
}

export default Change;
