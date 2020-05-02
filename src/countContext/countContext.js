import React, { createContext, useReducer } from "react";
import Counter from "./Counter";
import CountDisplay from "./CountDisplay";

export const CountStateContext = createContext();
export const CountDispatchContext = createContext();

function countReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

function CountProvider() {
  const [state, dispatch] = useReducer(countReducer, { count: 0 });
  return (
    <CountStateContext.Provider value={state}>
      <CountDispatchContext.Provider value={dispatch}>
        <CountDisplay />
        <Counter />
      </CountDispatchContext.Provider>
    </CountStateContext.Provider>
  );
}

export default CountProvider;
