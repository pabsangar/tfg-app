import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Constants from "expo-constants";
import { useNetInfo } from "@react-native-community/netinfo";

import colors from "../config/colors";

function OfflineNotice(props) {
  const netInfo = useNetInfo();

  if (netInfo.type !== "unknown" && netInfo.isInternetReachable === false)
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sin conexión a Internet</Text>
      </View>
    );

  return null;
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "center",
    alignItems: "center",
    backgroundColor: colors.secondary,
    height: 90,
    width: "100%",
    top: Constants.statusBarHeight,
  },
  text: {
    color: colors.white,
    fontSize: 20,
  },
});

export default OfflineNotice;
