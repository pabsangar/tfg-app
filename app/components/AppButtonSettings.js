import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppButtonSettings({
  title,
  onPress,
  color = "appdark",
  textColor = "white",
  nameLogo,
  colorLogo,
  ancho,
  height,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[color], width: ancho, height: height },
      ]}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={nameLogo} size={35} color={colorLogo} />
      <Text style={[styles.text, { color: colors[textColor] }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    padding: 15,
    width: 340,
    flexDirection: "row",
    marginBottom: 15,
  },
  text: {
    fontSize: 20,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginLeft: 15,
  },
});

export default AppButtonSettings;
