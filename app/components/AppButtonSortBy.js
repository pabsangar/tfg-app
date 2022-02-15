import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppButtonSortBy({
  title,
  onPress,
  color = "appdark",
  textColor = "white",
  nameLogo,
  colorLogo,
}) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colors[color] }]}
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
    alignItems: "center",
    alignSelf: "center",
    padding: 10,
    width: 165,
    flexDirection: "row",
    marginTop: 0,
    margin: 10,
  },
  text: {
    fontSize: 15,
    textTransform: "uppercase",
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default AppButtonSortBy;
