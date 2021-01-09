/** @format */

import React, { useState } from "react";
import { View, Text } from "../components";
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
    <div style={{}}>
      <SlideDrawer show={drawerOpen} />
      {drawerOpen ? <Backdrop close={backdropClickHandler} /> : void 0}
      <MainPage toggle={drawerToggleClickHandler} />
    </div>
  );
};

export default HomeScreen;
