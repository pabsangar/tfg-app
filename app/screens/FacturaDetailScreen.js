import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import colors from "../config/colors";
import AuthContext from "../auth/context";
import facturaPDFApi from "../api/laWifi/facturaPDF";

function FacturaDetailScreen({ route }) {
  const { user } = useContext(AuthContext);
  //Recuperamos los datos del elemento seleccionado
  const num_factura = route.params.id;
  const fecha = route.params.id_fecha;
  const importe = route.params.id_importe;

  const downloadPDF = async () => {
    const response = await facturaPDFApi.getFacturaPDF(
      user.username,
      user.cliente_id,
      num_factura,
      fecha
    );

    const pdf = response.data;
    if (pdf != null) {
      Alert.alert("Factura " + num_factura, pdf, [{ text: "Aceptar" }]);
    }
  };

  return (
    <Screen style={styles.container}>
      <Text style={styles.textTittle}>Detalle Factura</Text>
      <View style={styles.dataContainer}>
        <Text style={styles.textTittle2}>Factura nº</Text>
        <Text style={styles.textData}>{num_factura}</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.textTittle2}>Importe</Text>
        <Text style={styles.textData}>{importe} €</Text>
      </View>
      <View style={styles.dataContainer}>
        <Text style={styles.textTittle2}>Emitida el</Text>
        <Text style={styles.textData}>
          {fecha.split("-").reverse().join("/")}
        </Text>
      </View>
      <TouchableOpacity style={styles.downloadPDF} onPress={downloadPDF}>
        <Text style={styles.textPDF}>Descargar PDF</Text>
        <MaterialCommunityIcons
          name="download-circle-outline"
          size={40}
          color={colors.secondBlue}
        />
      </TouchableOpacity>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appbackground,
  },
  textTittle: {
    color: colors.secondary,
    alignSelf: "center",
    fontSize: 25,
    marginTop: 20,
  },
  dataContainer: {
    backgroundColor: colors.appdark,
    margin: 20,
    padding: 10,
    borderRadius: 5,
  },
  textData: {
    color: colors.white,
    fontSize: 25,
    alignSelf: "center",
  },
  textTittle2: {
    color: colors.darkWhite,
    fontSize: 15,
  },
  downloadPDF: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.appdark,
    borderRadius: 5,
    paddingBottom: 10,
  },
  textPDF: {
    marginTop: 10,
    marginBottom: 7,
    color: colors.white,
    fontSize: 20,
  },
});

export default FacturaDetailScreen;
