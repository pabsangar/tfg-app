import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function LlamadasComponent({ destino, trafico, fecha, hora, duracion }) {
  return (
    <View style={styles.container}>
      <View style={styles.tipoStyle}>
        <MaterialCommunityIcons
          name={"earth"}
          color={colors.white}
          style={styles.icon}
        />
        <Text style={styles.traficoText}>{trafico}</Text>
      </View>

      <View style={styles.destinoStyle}>
        <MaterialCommunityIcons
          name={"phone-outgoing"}
          color={colors.white}
          style={styles.icon}
        />
        <Text style={styles.destinoText}>{destino}</Text>
      </View>

      <View style={styles.fechaStyle}>
        <MaterialCommunityIcons
          name={"calendar-month"}
          color={colors.green}
          style={styles.icon}
        />
        <Text style={styles.fechaTextStyle}>{fecha}</Text>
      </View>

      <View style={styles.fechaStyle}>
        <MaterialCommunityIcons
          name={"clock-outline"}
          color={colors.green}
          style={styles.icon}
        />
        <Text style={styles.fechaTextStyle}>{hora}</Text>
      </View>

      <View style={styles.duracionStyle}>
        <MaterialCommunityIcons
          name={"timer-outline"}
          color={colors.green}
          style={styles.timer}
        />
        <Text style={styles.duracionText}>{duracion} seg</Text>
      </View>
      <View style={styles.complementStyle}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "center",
    width: 350,
    borderRadius: 10,
    backgroundColor: colors.appdark,
    margin: 20,
    marginBottom: -25,
  },
  destinoStyle: {
    width: 200,
    height: 48,
    backgroundColor: colors.appbackground,
    borderRadius: 10,
    flexDirection: "row",
  },
  fechaStyle: {
    width: 200,
    height: 48,
    backgroundColor: colors.appbackground,
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 5,
  },

  destinoText: {
    color: colors.green,
    fontSize: 27,
    alignSelf: "center",
    marginLeft: 5,
  },
  fechaTextStyle: {
    color: colors.white,
    alignSelf: "center",
    fontSize: 25,
    marginLeft: 5,
  },
  duracionStyle: {
    position: "absolute",
    backgroundColor: colors.appbackground,
    alignSelf: "flex-end",
    alignContent: "center",
    justifyContent: "center",
    width: 140,
    height: 153,
    borderRadius: 10,
  },
  duracionText: {
    color: colors.yellow,
    fontSize: 27,
    alignSelf: "center",
  },
  icon: {
    color: colors.white,
    fontSize: 30,
    alignSelf: "center",
    alignContent: "flex-end",
    marginRight: 5,
    marginLeft: 5,
  },
  timer: {
    color: colors.white,
    fontSize: 30,
    alignSelf: "center",
    alignContent: "flex-end",
    marginBottom: 10,
  },
  tipoStyle: {
    width: 350,
    height: 48,
    backgroundColor: colors.appbackground,
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 5,
  },
  traficoText: {
    color: colors.secondary,
    fontSize: 22,
    alignSelf: "center",
    marginLeft: 5,
  },
  complementStyle: {
    backgroundColor: colors.green,
    alignSelf: "flex-end",
    width: 140,
    marginBottom: 53,
  },
});

export default LlamadasComponent;
