import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function AppButtonAccount({ title, onPress, nameLogo, bgcolor, width }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: bgcolor, width: width }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
      <MaterialCommunityIcons
        name={nameLogo}
        size={30}
        color={colors.darkWhite}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    padding: 15,
    width: 350,
    flexDirection: "row",
    backgroundColor: colors.appbackground,
  },
  text: {
    fontSize: 19,
    marginLeft: 15,
    color: colors.white,
    flex: 1,
  },
});

export default AppButtonAccount;
