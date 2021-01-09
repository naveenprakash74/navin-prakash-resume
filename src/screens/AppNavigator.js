/** @format */

import React, { Component } from "react";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import { View } from "../components";
import HomeScreen from "./HomeScreen";
class AppNavigator extends React.Component {
  render() {
    return (
      <Switch>
        <Route path={"/"} render={(props) => <HomeScreen {...props} />} />
      </Switch>
    );
  }
}
export default AppNavigator;
