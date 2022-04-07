import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function PukIccComponent({ nameLogo, pukIcc }) {
  return (
    <View style={styles.container}>
      <View style={styles.pukIccStyle}>
        <MaterialCommunityIcons
          name={nameLogo}
          color={colors.white}
          style={styles.icon}
        />
        <Text style={styles.textStyle}>{pukIcc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignSelf: "center",
    width: 340,
    height: 45,
    borderRadius: 10,
    backgroundColor: colors.appdark,
    margin: 20,
    marginLeft: 15,
  },
  pukIccStyle: {
    width: 340,
    height: 48,
    backgroundColor: colors.appbackground,
    borderRadius: 10,
    flexDirection: "row",
  },
  textStyle: {
    color: colors.white,
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 5,
  },
  icon: {
    color: colors.white,
    fontSize: 30,
    alignSelf: "center",
    alignContent: "flex-end",
    marginRight: 5,
    marginLeft: 5,
  },
});

export default PukIccComponent;
