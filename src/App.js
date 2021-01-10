/** @format */

import React from "react";
import "./App.css";
import MainApp from "./screens";
class App extends React.Component {
  state = { windowSize: window.innerWidth };
  handleWindowSizeChange = () => {
    this.setState({ windowSize: window.innerWidth });
  };
  componentDidMount() {
    window.addEventListener("resize", this.handleWindowSizeChange);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowSizeChange);
  }
  render() {
    return (
      <div style={{ flex: 1, backgroundColor: "#fff" }}>
        <MainApp {...this.props} windowSize={this.state.windowSize} />
      </div>
    );
  }
}
export default App;
