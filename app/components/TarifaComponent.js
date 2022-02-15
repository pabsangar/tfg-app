import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function TarifaComponent({ cuota, precio, tope }) {
  return (
    <View style={styles.container}>
      <View style={styles.tarifaStyle}>
        <MaterialCommunityIcons
          name={"package-variant-closed"}
          color={colors.white}
          style={styles.icon}
        />
        <Text style={styles.tarifaText}>{cuota}</Text>
      </View>

      <View style={styles.precioStyle}>
        <MaterialCommunityIcons
          name={"cash-usd-outline"}
          color={colors.green}
          style={styles.icon}
        />
        <Text style={styles.precioText}>{precio} €</Text>
      </View>

      <View style={styles.topeStyle}>
        <MaterialCommunityIcons
          name={"database"}
          color={colors.green}
          style={styles.icon}
        />
        <Text style={styles.topeText}>{tope}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    alignSelf: "center",
    width: 340,
    height: 100,
    borderRadius: 10,
    backgroundColor: colors.appdark,
    margin: 20,
    marginLeft: 15,
  },
  tarifaStyle: {
    width: 340,
    height: 48,
    backgroundColor: colors.appbackground,
    borderRadius: 10,
    flexDirection: "row",
  },
  precioStyle: {
    justifyContent: "center",
    width: 160,
    height: 48,
    backgroundColor: colors.appbackground,
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 5,
  },

  tarifaText: {
    color: colors.green,
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 5,
  },
  precioText: {
    color: colors.white,
    alignSelf: "center",
    fontSize: 25,
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
  topeText: {
    color: colors.white,
    alignSelf: "center",
    fontSize: 25,
    marginLeft: 5,
  },
  topeStyle: {
    position: "absolute",
    alignSelf: "flex-end",
    justifyContent: "center",
    width: 150,
    height: 48,
    backgroundColor: colors.appbackground,
    borderRadius: 10,
    flexDirection: "row",
  },
});

export default TarifaComponent;
