import React from "react";
import { CountStateContext } from "./countContext";

function CountDisplay() {
  return (
    <CountStateContext.Consumer>
      {({ count }) => <div>{`The current count is ${count}`}</div>}
    </CountStateContext.Consumer>
  );
}

export default CountDisplay;
