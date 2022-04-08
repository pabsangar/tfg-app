import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import { TouchableOpacity } from "react-native-gesture-handler";

function FacturaComponent({ onPress, numFactura, fecha, importe }) {
  return (
    <>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <View style={styles.numFacturaStyle}>
          <MaterialCommunityIcons
            name={"file-document"}
            color={colors.white}
            style={styles.icon}
          />
          <Text style={styles.numFacturaText}>{numFactura}</Text>
        </View>

        <View style={styles.fechaFacturaStyle}>
          <MaterialCommunityIcons
            name={"calendar-month"}
            color={colors.green}
            style={styles.icon}
          />
          <Text style={styles.fechaFacturaText}>{fecha}</Text>
        </View>

        <View style={styles.factura}>
          <Text style={styles.importeFactura}>{importe + " €"}</Text>
        </View>
      </TouchableOpacity>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "flex-start",
    alignSelf: "center",
    width: 350,
    height: 100,
    borderRadius: 10,
    backgroundColor: colors.appbackground,
    marginBottom: 55,
  },
  numFacturaStyle: {
    width: 200,
    height: 48,
    backgroundColor: colors.appdark,
    borderRadius: 10,
    flexDirection: "row",
  },
  fechaFacturaStyle: {
    width: 200,
    height: 48,
    backgroundColor: colors.appdark,
    borderRadius: 10,
    flexDirection: "row",
    marginTop: 5,
  },

  numFacturaText: {
    color: colors.secondary,
    fontSize: 30,
    alignSelf: "center",
    marginLeft: 5,
  },
  fechaFacturaText: {
    color: colors.white,
    alignSelf: "center",
    fontSize: 25,
    marginLeft: 5,
  },
  factura: {
    position: "absolute",
    backgroundColor: colors.appdark,
    alignSelf: "flex-end",
    alignContent: "center",
    justifyContent: "center",
    width: 140,
    height: 100,
    borderRadius: 10,
  },
  importeFactura: {
    color: colors.green,
    fontSize: 35,
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
  pdfButton: {
    marginBottom: 35,
  },
});

export default FacturaComponent;
