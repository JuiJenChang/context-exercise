import React, { createContext } from "react";
import Change from "./change";

export const testContext = createContext({
  bool: "bool",
  color: "color",
  handleClick: "handleClick",
});

class MyContext extends React.Component {
  state = {
    bool: false,
    color: "orange",
    handleClick: () => {
      if (this.state.bool === false) {
        this.setState({ bool: true, color: "red" });
      } else if (this.state.bool === true) {
        this.setState({ bool: false, color: "orange" });
      }
    },
  };
  render() {
    return (
      <testContext.Provider value={this.state}>
        <Change />
      </testContext.Provider>
    );
  }
}

export default MyContext;