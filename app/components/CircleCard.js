import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function CircleCard({
  nameIcon,
  text,
  onPress,
  width = 150,
  height = 150,
  borderRadius = 75,
}) {
  return (
    <View>
      <TouchableOpacity
        style={[styles.card, { width, height, borderRadius }]}
        onPress={onPress}
      >
        <MaterialCommunityIcons
          name={nameIcon}
          size={75}
          color={colors.secondary}
        />
      </TouchableOpacity>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    backgroundColor: colors.appdark,
    marginBottom: 5,
  },
  text: {
    alignSelf: "center",
    justifyContent: "center",
    fontSize: 25,
    textTransform: "uppercase",
    color: colors.white,
    marginBottom: 30,
  },
});

export default CircleCard;
