/** @format */

import React from "react";
import "./App.css";
import MainApp from "./screens";
const App = (props) => {
  return (
    <div style={{ flex: 1, backgroundColor: "#fff" }}>
      <MainApp {...props} />
    </div>
  );
};

export default App;
