/** @format */

import React, { useState, useEffect } from "react";
import { View } from "../components";
import Backdrop from "./Drawer/Backdrop";
import SlideDrawer from "./Drawer/SlideDrawer";
import MainPage from "./MainPage";
const HomeScreen = (props) => {
  const [drawerOpen, setdrawerOpen] = useState(false);
  const drawerToggleClickHandler = () => {
    setdrawerOpen(!drawerOpen);
  };
  const backdropClickHandler = () => {
    setdrawerOpen(false);
  };

  return (
    <View style={{ flex: 1, overflow: "hideen" }}>
      <SlideDrawer show={drawerOpen} closeModal={backdropClickHandler} />
      {drawerOpen ? <Backdrop closeModal={backdropClickHandler} /> : void 0}
      <MainPage toggle={drawerToggleClickHandler} {...props} />
    </View>
  );
};

export default HomeScreen;
