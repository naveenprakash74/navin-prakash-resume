/** @format */

import React, { useState } from "react";
import { View } from "../components";
import Backdrop from "./Drawer/Backdrop";
import SlideDrawer from "./Drawer/SlideDrawer";
import MainPage from "./MainPage";
const HomeScreen = () => {
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
      <MainPage toggle={drawerToggleClickHandler} />
    </View>
  );
};

export default HomeScreen;
