/** @format */

import React from "react";
import { Route, Switch } from "react-router-dom";
import { Image, TouchableOpacity, View } from "../components";
import { MenuIcon } from "../images";
import { shadow } from "../theme/shadow";
import Home from "./Home";
import Projects from "./Projects";
import About from "./About";
import ContactMe from "./ContactMe";
import Skills from "./Skills";
import Publications from "./Publications";
export default class MainPage extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, overflow: "hidden" }}>
        <TouchableOpacity
          onPress={this.props.toggle}
          style={{
            position: "absolute",
            top: 16,
            left: 16,
            height: 42,
            width: 42,
            borderRadius: 32 / 2,
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            ...shadow,
          }}
        >
          <Image source={MenuIcon} style={{ height: 20, width: 20 }} />
        </TouchableOpacity>
        <Switch>
          <Route exact path={"/"} render={(props) => <Home {...props} />} />
          <Route path={"/home"} render={(props) => <Home {...props} />} />
          <Route path={"/projects"} render={(props) => <Projects {...props} />} />
          <Route path={"/skills"} render={(props) => <Skills {...props} />} />
          <Route path={"/publications"} render={(props) => <Publications {...props} />} />
          <Route path={"/contact"} render={(props) => <ContactMe {...props} />} />
          <Route path={"/about"} render={(props) => <About {...props} />} />
        </Switch>
      </View>
    );
  }
}
