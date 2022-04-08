import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function Card({ name, text, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
      <MaterialCommunityIcons name={name} size={90} color={colors.secondary} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    borderRadius: 15,
    backgroundColor: colors.appdark,
    marginBottom: 30,
  },
  text: {
    fontWeight: "bold",
    fontSize: 25,
    textTransform: "uppercase",
    color: colors.white,
  },
});

export default Card;
