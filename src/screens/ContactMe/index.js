/** @format */

import React, { useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { View, Text, TextInput, TouchableOpacity, TextAreaInput } from "../../components";
import { colors } from "../../theme/colors";
import { F1_M_HeadLine14, F1_M_HeadLine18, F1_M_HeadLine24, F1_R_HeadLine16 } from "../../theme/fonts";
import { isMobile } from "../../Utility";
const { surface_800, textColor_50, surface_green, textColor_200, borderColor, surface_700, textColor_300 } = colors;
export default (props) => {
  const [name, setName] = useState(void 0);
  const [message, setMessage] = useState(void 0);
  const [email, setEmail] = useState(void 0);
  const [subject, setSubject] = useState(void 0);
  const [successMessage, setsuccessMessage] = useState(void 0);
  const textInputStyle = {
    padding: 20,
    paddingLeft: 20,
    paddiingRight: 20,
    backgroundColor: surface_700,
    // width: "100%",
    outline: "none",
    border: 0,
    color: textColor_300,
  };
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
      <View style={{ padding: 16, overflow: "hidden" }}>
        <View style={{ alignItems: "center" }}>
          <Text
            style={{
              color: textColor_50,
              ...F1_M_HeadLine24,
              borderStyle: "solid",
              borderWidth: 0,
              borderBottomWidth: 2,
              borderBottomColor: borderColor,
            }}
          >
            Contact Me
          </Text>
          <Text style={{ marginTop: 12, color: textColor_200, ...F1_M_HeadLine18 }}>
            Have a question or want to work together?
          </Text>
          {successMessage ? (
            <Text style={{ marginTop: 12, color: surface_green, ...F1_M_HeadLine14 }}>
              Thanks for contact. I well reach to you soon.
            </Text>
          ) : (
            void 0
          )}
        </View>
        <View style={{ flexDirection: isMobile ? "column" : "row", flex: 1, paddingTop: 12 }}>
          <TextInput
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            placeholder={"Name"}
            style={textInputStyle}
          />
          <TextInput
            value={email}
            type={"email"}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            placeholder={"Email"}
            style={{ ...textInputStyle, marginLeft: isMobile ? 0 : 12, marginTop: isMobile ? 12 : 0 }}
          />
        </View>
        <View style={{ flex: 1, paddingTop: 12 }}>
          <TextInput
            value={subject}
            placeholder={"Subject"}
            onChange={(event) => {
              setSubject(event.target.value);
            }}
            style={textInputStyle}
          />
          <TextAreaInput
            value={message}
            placeholder={"Message"}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
            style={{ ...textInputStyle, marginTop: 12 }}
          />
        </View>
        <TouchableOpacity
          className={"button"}
          style={{
            alignSelf: "flex-end",
            marginTop: 12,
            padding: 8,
            paddingLeft: 16,
            paddingRight: 16,
          }}
          onPress={async () => {
            try {
              if (email && name && message) {
                db.collection("emails")
                  .add({
                    name,
                    email,
                    message,
                    subject,
                    time: new Date(),
                  })
                  .then((res) => {
                    setName("");
                    setEmail("");
                    setSubject("");
                    setMessage("");
                    setsuccessMessage(true);
                    console.log("@@@@@@res", res);
                  });
              }
            } catch (e) {
              console.log("@@@@@@Error in sending message", e);
            }
          }}
        >
          <Text style={{ color: textColor_300, ...F1_R_HeadLine16 }} className={"btntext"}>
            Send
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
