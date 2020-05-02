import React from "react";
import { CountDispatchContext } from "./countContext";

function Counter() {
  return (
    <CountDispatchContext.Consumer>
      {(dispatch) => (
        <div>
          <button onClick={() => dispatch({ type: "increment" })}>
            Increment
          </button>
          <button onClick={() => dispatch({ type: "decrement" })}>
            Decrement
          </button>
        </div>
      )}
    </CountDispatchContext.Consumer>
  );
}

export default Counter;
