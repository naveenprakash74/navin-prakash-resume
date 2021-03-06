/** @format */

import React, { useState } from "react";
import { db } from "../../firebase/firebaseConfig";
import { View, Text, TextInput, TouchableOpacity, TextAreaInput } from "../../components";
import { colors } from "../../theme/colors";
import { F1_M_HeadLine14, F1_M_HeadLine18, F1_R_HeadLine16 } from "../../theme/fonts";
import { isMobile } from "../../Utility";
import { sendEmail } from "../../EmailApi/configEmail";
const { surface_green, textColor_200, surface_800, textColor_300 } = colors;

export const ContactForm = (props) => {
  const [name, setName] = useState(void 0);
  const [message, setMessage] = useState(void 0);
  const [email, setEmail] = useState(void 0);
  const [subject, setSubject] = useState(void 0);
  const [successMessage, setsuccessMessage] = useState(void 0);
  const [loader, setloader] = useState(false);
  const textInputStyle = {
    padding: 14,
    backgroundColor: surface_800,
    outline: "none",
    border: 0,
    color: textColor_300,
  };
  const handelSubmit = async () => {
    try {
      if (email && name && message) {
        setloader(true);
        sendEmail({ email, name, message, subject })
          .then((res) => {
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
                setloader(false);
              });
          })
          .catch((err) => {
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
                setloader(false);
              });
          });
      }
    } catch (e) {}
  };
  return (
    <View style={{ flex: isMobile ? void 0 : 1, overflow: "hidden", minWidth: isMobile ? void 0 : 400 }}>
      <View style={{ alignItems: "center" }}>
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
      <View style={{ flex: 1, flexDirection: isMobile ? "column" : "row", overflow: "hidden", marginTop: 12 }}>
        <TextInput
          value={name}
          onChange={(event) => {
            if (loader) return false;
            setName(event.target.value);
          }}
          placeholder={"Name"}
          style={{ ...textInputStyle, width: "100%" }}
        />
        <TextInput
          value={email}
          type={"email"}
          onChange={(event) => {
            if (loader) return false;

            setEmail(event.target.value);
          }}
          placeholder={"Email"}
          style={{ ...textInputStyle, width: "100%", marginLeft: isMobile ? 0 : 12, marginTop: isMobile ? 12 : 0 }}
        />
      </View>
      <View style={{ paddingTop: 12 }}>
        <TextInput
          value={subject}
          placeholder={"Subject"}
          onChange={(event) => {
            if (loader) return false;

            setSubject(event.target.value);
          }}
          style={textInputStyle}
        />
        <TextAreaInput
          value={message}
          placeholder={"Message"}
          onChange={(event) => {
            if (loader) return false;

            setMessage(event.target.value);
          }}
          style={{ ...textInputStyle, marginTop: 12 }}
        />
      </View>
      <TouchableOpacity
        className={"button"}
        style={{
          //   alignSelf: "flex-end",
          marginTop: 12,
          padding: 8,
          paddingLeft: 16,
          paddingRight: 16,
        }}
        onPress={handelSubmit}
      >
        <Text style={{ color: textColor_300, ...F1_R_HeadLine16 }} className={"btntext"}>
          {!loader ? "Send" : "Sending..."}
        </Text>
      </TouchableOpacity>
    </View>
  );
};
