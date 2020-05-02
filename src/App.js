import React from "react";
import MyContext from "./changeContext/context";
import CountProvider from "./countContext/countContext";

function App() {
  return (
    <div>
      <MyContext />
      <CountProvider />
    </div>
  );
}

export default App;
