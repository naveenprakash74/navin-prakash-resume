/** @format */

import React from "react";
import { View, Text } from "../../components";
import { colors } from "../../theme/colors";
const { surface_800 } = colors;
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
      <Text>Coming Soon...</Text>
    </View>
  );
};
