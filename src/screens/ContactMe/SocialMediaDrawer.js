/** @format */

import React, { useState } from "react";
import { View, Image, TouchableOpacity } from "../../components";
import { SocialMediaData } from "../../ConfigurationData";
import { colors } from "../../theme/colors";
import { shadow } from "../../theme/shadow";
import { isMobile } from "../../Utility";
const { surface_700, surface_800 } = colors;
export const SocialMediaDrawer = () => {
  const [isHover, setIsHover] = useState(false);

  let containerStyle = {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: isMobile ? surface_700 : surface_800,
    borderRadius: 24,
    padding: 8,
    paddingLeft: 12,
    paddingRight: 12,
    marginTop: 24,
    marginBottom: 24,
    ...(isHover || isMobile ? shadow : {}),
  };
  return (
    <View style={containerStyle} onMouseLeave={() => setIsHover(false)} onMouseEnter={() => setIsHover(true)}>
      {SocialMediaData.map((item, index) => {
        const { icon, label, link } = item;
        return (
          <TouchableOpacity
            title={label}
            onPress={() => {
              window.open(link, "_blank");
            }}
            style={{
              cursor: "pointer",
              padding: 8,
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image source={icon} style={{ marginRight: 8, height: 28, width: 28 }} />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
