/** @format */

import React from "react";
import { View, Text, TouchableOpacity } from "../../components";
import { colors } from "../../theme/colors";
import { F1_R_HeadLine16, F1_B_HeadLine24 } from "../../theme/fonts";
import { publicationData } from "./publicationData";
import { isMobile } from "../../Utility";
const { surface_800, surface_700, borderColor, surface_green, textColor_50, textColor_300 } = colors;

export default () => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: surface_800,
      }}
    >
      <View
        style={{
          backgroundColor: surface_700,
          borderRadius: 8,
          padding: 20,
          margin: 20,
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        {publicationData.map((item, index) => {
          const { type, title, link, date, authers } = item;
          return (
            <>
              <View style={{ flex: 1 }}>
                <Text style={{ ...F1_B_HeadLine24, color: textColor_300 }}>{type}</Text>
                <Text style={{ ...F1_R_HeadLine16, color: textColor_50 }}>{title}</Text>
                <Text style={{ flex: 1, ...F1_R_HeadLine16, color: textColor_50 }}>{date}</Text>
                {/* <View style={{ flexDirection: "row" }}>
                  <Text style={{ ...F1_R_HeadLine14, color: textColor_200 }}>Authers:</Text>
                  <View style={{ flexDirection: "row" }}>
                    {authers.map((value) => {
                      return (
                        <Text style={{ ...F1_R_HeadLine14, color: textColor_200, paddingLeft: 8 }}>{value.name},</Text>
                      );
                    })}
                  </View>
                </View> */}
                <TouchableOpacity
                  onPress={() => {
                    window.open(link, "_blank");
                  }}
                  style={{
                    cursor: "pointer",
                    flexDirection: "row",
                    alignItems: "center",
                    padding: 8,
                  }}
                >
                  <Text
                    style={{
                      ...F1_R_HeadLine16,
                      color: textColor_50,
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderBottomWidth: 2,
                      borderColor,
                    }}
                  >
                    More...
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  display: index === publicationData.length - 1 ? "none" : "flex",
                  backgroundColor: surface_green,
                  height: isMobile ? 2 : "80%",
                  width: isMobile ? "80%" : 2,
                  margin: 20,
                }}
              />
            </>
          );
        })}
      </View>
    </View>
  );
};
