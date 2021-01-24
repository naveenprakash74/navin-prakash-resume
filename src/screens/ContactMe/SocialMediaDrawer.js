/** @format */

import React from "react";
import { View, Image, Text, TouchableOpacity } from "../../components";
import { SocialMediaData } from "../../ConfigurationData";
import { colors } from "../../theme/colors";
import { F1_R_HeadLine16 } from "../../theme/fonts";
import { shadow } from "../../theme/shadow";
const { textColor_50, surface_700 } = colors;
export const SocialMediaDrawer = ({ removeText }) => {
  let containerStyle = {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    overflow: "auto",
    flexDirection: "column",
  };
  if (removeText) {
    containerStyle = {
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "row",
      backgroundColor: surface_700,
      borderRadius: 24,
      padding: 8,
      paddingLeft: 12,
      paddingRight: 12,
      marginTop: 24,
      marginBottom: 24,
      ...shadow,
    };
  }
  return (
    <View style={containerStyle}>
      {SocialMediaData.map((item) => {
        const { icon, label, link } = item;
        return (
          <TouchableOpacity
            title={label}
            onPress={() => {
              window.open(link, "_blank");
            }}
            style={{
              cursor: "pointer",
              marginTop: removeText ? 0 : 8,
              padding: removeText ? 8 : 12,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={icon} style={{ marginRight: 8, height: 28, width: 28 }} />
            {!removeText ? <Text style={{ color: textColor_50, ...F1_R_HeadLine16 }}>{label}</Text> : void 0}
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
