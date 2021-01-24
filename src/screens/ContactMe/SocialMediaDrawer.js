/** @format */

import React from "react";
import { View, Image, Text, TouchableOpacity } from "../../components";
import { SocialMediaData } from "../../ConfigurationData";
import { colors } from "../../theme/colors";
import { F1_R_HeadLine16 } from "../../theme/fonts";
const { textColor_50 } = colors;
export const SocialMediaDrawer = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", overflow: "auto" }}>
      {SocialMediaData.map((item) => {
        const { icon, label, link } = item;
        return (
          <TouchableOpacity
            title={label}
            onPress={() => {
              window.open(link, "_blank");
            }}
            style={{ cursor: "pointer", marginTop:8,padding: 12, flexDirection: "row", alignItems: "center" }}
          >
            <Image source={icon} style={{ marginRight: 8, height: 28, width: 28 }} />
            <Text style={{ color: textColor_50, ...F1_R_HeadLine16 }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export const SocialMediaDrawerSM = () => {};
