import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function SmsComponent({ destino, trafico, fecha, hora }) {
  return (
    <View style={styles.container}>
      <View style={styles.traficoStyle}>
        <MaterialCommunityIcons
          name={"email"}
          color={colors.white}
          style={styles.icon}
        />
        <Text style={styles.traficoText}>{trafico}</Text>
      </View>

      <View style={styles.fechaStyle}>
        <MaterialCommunityIcons
          name={"phone-outgoing"}
          color={colors.white}
          style={styles.icon}
        />
        <Text style={styles.fechaDatosText}>{destino}</Text>
      </View>

      <View style={styles.horaInicioStyle}>
        <MaterialCommunityIcons
          name={"calendar-month"}
          color={colors.green}
          style={styles.icon}
        />
        <Text style={styles.horaInicioText}>{fecha}</Text>
      </View>

      <View style={styles.horaInicioStyle}>
        <MaterialCommunityIcons
          name={"clock-outline"}
          color={colors.green}
          style={styles.icon}
        />
        <Text style={styles.horaInicioText}>{hora}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: 350,
    height: 150,
    borderRadius: 10,
    backgroundColor: colors.appdark,
    margin: 40,
    marginBottom: 60,
  },
  fechaStyle: {
    width: 300,
    height: 48,
    backgroundColor: colors.appbackground,
    borderRadius: 10,
    flexDirection: "row",
  },
  horaInicioStyle: {
    width: 300,
    height: 48,
    backgroundColor: colors.appbackground,
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 5,
  },

  fechaDatosText: {
    color: colors.green,
    fontSize: 27,
    alignSelf: "center",
    marginLeft: 5,
  },
  horaInicioText: {
    color: colors.white,
    alignSelf: "center",
    fontSize: 25,
    marginLeft: 5,
  },
  megasStyle: {
    position: "absolute",
    backgroundColor: colors.appbackground,
    alignSelf: "flex-end",
    alignContent: "center",
    justifyContent: "center",
    width: 140,
    height: 100,
    borderRadius: 10,
  },
  megasText: {
    color: colors.green,
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
  traficoStyle: {
    width: 300,
    height: 48,
    backgroundColor: colors.appbackground,
    borderRadius: 10,
    flexDirection: "row",
    marginBottom: 5,
  },
  traficoText: {
    color: colors.secondary,
    fontSize: 27,
    alignSelf: "center",
    marginLeft: 5,
  },
});

export default SmsComponent;
