/** @format */

import React from "react";
import { Route, Switch } from "react-router-dom";
import { Image, TouchableOpacity, View } from "../components";
import { MenuIcon } from "../images";
import { shadow } from "../theme/shadow";

export default class MainPage extends React.Component {
  render() {
    return (
      <View>
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
        {/* <Switch>
          <Route path={"/"} render={(props) => <HomeScreen {...props} />} />
        </Switch> */}
      </View>
    );
  }
}
