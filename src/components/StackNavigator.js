/** @format */

import React, { Component } from "react";

import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
export default (RouteConfigs, StackNavigatorConfig) => {
  class StackNavigator extends Component {
    render() {
      return (
        <Switch>
          {Object.keys(RouteConfigs).map((key) => {
            if (!key) {
              return null;
            }
            let { screen, path, navigationOptions } = RouteConfigs[key];
            let Component = null;
            let screenProps = { ...this.props, navigationOptions };
            if (typeof screen === "function") {
              Component = screen(screenProps);
            } else {
              Component = React.cloneElement(screen, screenProps);
            }
            return <Route path={path || `/${key}`} component={Component} />;
          })}
        </Switch>
      );
    }
  }

  return StackNavigator;
};
