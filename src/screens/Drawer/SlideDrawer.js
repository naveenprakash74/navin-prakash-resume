/** @format */

import React from "react";
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
const DrawerOptions = ({ options }) => {
  return (
    <View style={{ flex: 1, overflow: "hidden" }}>
      {options.map((item) => {
        const { onPress, title, icon } = item;
        return (
          <TouchableOpacity
            onPress={onPress}
            style={{
              padding: 12,
              flexDirection: "row",
              alignItems: "center",
              marginTop: 12,
              // borderStyle: "solid",
              // borderColor: "transparent",
              // borderWidth: 0,
              // borderBottomWidth: 2,
              // borderBottomColor: borderColor,
              borderWidth: 2,
              borderRadius: 4,
              cursor: "pointer",
            }}
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
  let drawerClasses = "side-drawer";
  if (props.show) {
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
        options={[
          { title: "Home", icon: homeLightIcon, onPress: () => {} },
          { title: "Projets", icon: projectsLightIcon, onPress: () => {} },
          { title: "Skills", icon: skillsLightIcon, onPress: () => {} },
          { title: "Publications", icon: publicationsIconLight, onPress: () => {} },
          { title: "Contact Me", icon: constactMeLightIcon, onPress: () => {} },
          { title: "About Me!", icon: aboutMeLightIcon, onPress: () => {} },
        ]}
      />
    </View>
  );
};
export default SlideDrawer;
