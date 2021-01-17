/** @format */

import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "../../components";
import "./styles.css";
import { colors } from "../../theme/colors";
import { F1_M_HeadLine16, F1_M_HeadLine24, F1_R_HeadLine14, F1_R_HeadLine16 } from "../../theme/fonts";
import { shadow } from "../../theme/shadow";
import { allData, reactData, reactNativeData } from "./projectData";
import { isMobile } from "../../Utility";
import BackComponent from "../../components/BackComponent";
const {
  surface_900,
  surface_800,
  surface_700,
  textColor_300,
  textColor_200,
  textColor_50,
  borderColor,
  surface_green,
} = colors;
const TAB = (tab) => {
  const { label, index, onPress, tabs, active } = tab;
  return (
    <>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={onPress}
          style={{
            padding: 20,
            cursor: "pointer",
            marginLeft: 12,
          }}
        >
          <Text style={{ ...F1_M_HeadLine16, color: textColor_200 }}>{label}</Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: active ? surface_green : "transparent",
            width: 30,
            height: 1,
          }}
        />
      </View>
      {index !== tabs.length - 1 ? <View style={{ width: 2, height: 20, backgroundColor: borderColor }} /> : void 0}
    </>
  );
};
const ProjectCard = ({ item, index, onPress }) => {
  if (!item) return null;
  const { name, sortDescript } = item;
  return (
    <TouchableOpacity
      className={"project-card"}
      style={{
        backgroundColor: surface_700,
        padding: 16,
        borderRadius: 8,
        width: 200,
        height: 250,
        margin: 8,
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <View style={{ flex: 1, overflow: "hidden", alignItems: "center" }}>
        <Text
          title={name}
          style={{
            textAlign: "center",
            color: textColor_50,
            ...F1_M_HeadLine24,
            display: "inline-block",
            width: 200,

            "white-space": "nowrap",
            overflow: "hidden",
            "text-overflow": "ellipsis",
            borderColor,
            borderStyle: "solid",
            borderWidth: 0,
            borderBottomWidth: 2,
          }}
        >
          {name}
        </Text>
        <Text style={{ paddingTop: 12, color: textColor_50, ...F1_R_HeadLine14, wordBreak: "break-word" }}>
          {sortDescript}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          onPress(item);
        }}
        className={"more-btn project-card"}
        style={{
          padding: 8,
          paddingLeft: 20,
          paddingRight: 20,
          flexDirection: "row",
          alignItems: "center",
          marginTop: 8,
          borderStyle: "solid",
          borderWidth: 2,
          borderRadius: 4,
          cursor: "pointer",
        }}
      >
        <Text style={{ color: textColor_300, ...F1_R_HeadLine16 }}>More</Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
const ProjectDetailCard = ({ item, index, onPress }) => {
  if (!item) return null;
  const { name, description, link, organization } = item;
  return (
    <TouchableOpacity
      style={{
        alignItems: "center",
        overflow: "hidden",
        borderRadius: 8,
        ...shadow,
        padding: 20,
        backgroundColor: surface_700,
        maxHeight: isMobile ? "60%" : "50%",
        maxWidth: isMobile ? "80%" : "50%",
        flex: 1,
        overflow: "hidden",
      }}
    >
      {/* <BackComponent onPress={() => onPress(void 0)} style={{position:"absolute",left:0}} /> */}
      <Text
        title={name}
        style={{
          textAlign: "center",
          color: textColor_50,
          ...F1_M_HeadLine24,
          display: "inline-block",
          borderColor,
          borderStyle: "solid",
          borderWidth: 0,
          borderBottomWidth: 2,
        }}
      >
        {name}
      </Text>
      {organization ? (
        <Text style={{ paddingTop: 12, color: textColor_50, ...F1_R_HeadLine14, wordBreak: "break-word" }}>
          Ownership : {organization}
        </Text>
      ) : (
        void 0
      )}
      <Text style={{ flex: 1, paddingTop: 12, color: textColor_50, ...F1_R_HeadLine14, wordBreak: "break-word" }}>
        {description}
      </Text>
      {link ? (
        <TouchableOpacity
          onPress={() => {
            window.open(link, "_blank");
          }}
          className={"more-btn project-card"}
          style={{
            padding: 8,
            paddingLeft: 20,
            paddingRight: 20,
            flexDirection: "row",
            alignItems: "center",
            marginTop: 8,
            borderStyle: "solid",
            borderWidth: 2,
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          <Text style={{ color: textColor_300, ...F1_R_HeadLine16 }}>View More aboit it! </Text>
        </TouchableOpacity>
      ) : (
        void 0
      )}
    </TouchableOpacity>
  );
};
export default () => {
  const [activeTab, setactiveTab] = useState("all");
  const [activeTabData, setactiveTabData] = useState(allData);
  const [activeDetail, setactiveDetail] = useState(void 0);

  const tabs = [
    {
      _id: "all",
      label: "All",
      onPress: () => {
        setactiveTab("all");
        setactiveTabData(allData);
      },
    },
    {
      _id: "react",
      label: "React",
      onPress: () => {
        setactiveTab("react");
        setactiveTabData(reactData);
      },
    },
    {
      _id: "reactNative",
      label: "React Native",
      onPress: () => {
        setactiveTab("reactNative");
        setactiveTabData(reactNativeData);
      },
    },
  ];
  if (activeDetail) {
    return (
      <View
        style={{
          flex: 1,
          overflow: "hidden",
          backgroundColor: surface_800,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ProjectDetailCard item={activeDetail} onPress={setactiveDetail} />
      </View>
    );
  }
  return (
    <View
      style={{
        flex: 1,
        overflow: "hidden",
        backgroundColor: surface_800,
      }}
    >
      <View
        style={{
          backgroundColor: surface_900,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "flex-end",
          ...shadow,
        }}
      >
        {tabs.map((tab, index) => {
          return <TAB {...tab} index={index} setactiveTab={setactiveTab} tabs={tabs} active={activeTab === tab._id} />;
        })}
      </View>
      <View
        style={{
          flex: 1,
          overflow: "hidden",
          flexDirection: "row",
          justifyContent: "center",
          flexWrap: "wrap",
          padding: 16,
          // overflow: "hidden",
        }}
      >
        {[...activeTabData].map((item, index) => (
          <ProjectCard item={item} index={index} onPress={setactiveDetail} />
        ))}
      </View>
    </View>
  );
};
