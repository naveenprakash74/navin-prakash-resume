/** @format */

import React from "react";
import { useHistory } from "react-router-dom";
import { View, Text, TouchableOpacity } from "../../components";
import { colors } from "../../theme/colors";
import {
  F1_B_HeadLine24,
  F1_M_HeadLine16,
  F1_M_HeadLine22,
  F1_M_HeadLine24,
  F1_R_HeadLine16,
} from "../../theme/fonts";
const { surface_800, borderColor, textColor_300, textColor_50, textColor_200 } = colors;
const Home = () => {
  const history = useHistory();
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
      <View style={{ padding: 20 }}>
        <Text style={{ color: textColor_50, ...F1_M_HeadLine24 }}>Hi!,</Text>
        <Text style={{ flexDirection: "row", color: textColor_50, ...F1_M_HeadLine24, fontSize: 32 }}>
          I'm <Text style={{ paddingLeft: 12, color: "#03DAC6" }}>Navin Prakash</Text>.
        </Text>
        <Text style={{ color: textColor_200, ...F1_M_HeadLine24, fontSize: 36 }}>
          I'm a React js | React-Native Developer.
        </Text>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            padding: 12,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 12,
            borderStyle: "solid",
            borderWidth: 2,
            borderColor: borderColor,
            borderWidth: 2,
            borderRadius: 4,
            cursor: "pointer",
            maxWidth: 150,
          }}
        >
          <Text style={{ color: textColor_300, ...F1_R_HeadLine16 }}>View my work! </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Home;
