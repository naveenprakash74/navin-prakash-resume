/** @format */

import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Image, Text, TouchableOpacity, View } from "../../components";
import {
  aboutMeLightIcon,
  constactMeLightIcon,
  homeLightIcon,
  ProfileIcon,
  projectsLightIcon,
  publicationsIconLight,
  skillsLightIcon,
} from "../../images";
import { colors } from "../../theme/colors";
import { F2_M_HeadLine24, F2_M_HeadLine16 } from "../../theme/fonts";
import "./SlideDrawer.css";
const { borderColor, textColor_200, textColor_50 } = colors;
const DrawerOptions = ({ closeModal, options }) => {
  const history = useHistory();
  return (
    <View style={{ flex: 1, overflow: "hidden" }}>
      {options.map((item) => {
        const { onPress, title, icon, link } = item;
        return (
          <TouchableOpacity
            
            onPress={() => {
              history.push(link);
              closeModal && closeModal();
              onPress && onPress();
            }}
            style={{
              padding: 12,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
              borderRadius: 4,
              cursor: "pointer",
            }}
            className={"btn"}
          >
            <Image source={icon} style={{ height: 16, width: 16 }} />
            <Text style={{ marginLeft: 12, color: textColor_200, F2_M_HeadLine16 }}>{title}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const SlideDrawer = (props) => {
  const { closeModal, show } = props;
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <View className={drawerClasses}>
      <View style={{ paddingTop: 8, alignItems: "center" }}>
        <View
          style={{
            height: 80,
            width: 80,
            borderRadius: 80 / 2,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: borderColor,
          }}
        >
          <Image source={ProfileIcon} style={{ height: 70, width: 70, borderRadius: 70 / 2 }} />
        </View>
        <Text style={{ paddingTop: 12, color: textColor_50, ...F2_M_HeadLine24 }}>Navin Prakash</Text>
      </View>
      <View style={{ marginTop: 12, marginBottom: 12, height: 2, backgroundColor: borderColor }} />
      <DrawerOptions
        closeModal={closeModal}
        options={[
          { title: "Home", icon: homeLightIcon, link: "/home" },
          { title: "Projects", icon: projectsLightIcon, link: "/projects" },
          { title: "Skills", icon: skillsLightIcon, link: "/skills" },
          { title: "Publications", icon: publicationsIconLight, link: "/publications" },
          { title: "Contact Me", icon: constactMeLightIcon, link: "/contact" },
          { title: "About Me!", icon: aboutMeLightIcon, link: "/about" },
        ]}
      />
    </View>
  );
};
export default SlideDrawer;
