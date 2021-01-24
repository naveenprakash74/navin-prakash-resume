/** @format */

import React from "react";
import { View, Text } from "../../components";
import { colors } from "../../theme/colors";
import { F1_M_HeadLine24 } from "../../theme/fonts";
import { isMobile } from "../../Utility";
import { ContactForm } from "./contactMeForm";
import { SocialMediaDrawer } from "./SocialMediaDrawer";
const { surface_800, surface_700, textColor_50, borderColor, surface_green } = colors;
export default (props) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: surface_800,
        paddingTop: isMobile ? 80 : 0,
      }}
    >
      <View
        style={{
          padding: 20,
          borderRadius: 8,
          backgroundColor: surface_700,
          maxWidth: isMobile ? "80%" : "60%",
          // height: isMobile ? void 0 : "70%",
        }}
      >
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: textColor_50,
              ...F1_M_HeadLine24,
              borderStyle: "solid",
              borderWidth: 0,
              borderBottomWidth: 2,
              borderBottomColor: borderColor,
              textAlign: "center",
            }}
          >
            Contact Me
          </Text>
        </View>
        {isMobile ? void 0 : <SocialMediaDrawer />}
        <ContactForm />
      </View>
      {isMobile ? <SocialMediaDrawer /> : void 0}
    </View>
  );
};
