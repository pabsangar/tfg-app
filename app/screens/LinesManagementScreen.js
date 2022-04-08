import React, { useContext, useState, useEffect } from "react";
import { View, StyleSheet, Text, FlatList, Alert } from "react-native";
import { ScrollView } from "react-native-gesture-handler";

import AuthContext from "../auth/context";
import AppButtonSettings from "../components/AppButtonSettings";
import PukIccComponent from "../components/PukIccComponent";
import Screen from "../components/Screen";
import TarifaComponent from "../components/TarifaComponent";
import colors from "../config/colors";
import tarifalineaApi from "../api/laWifi/tarifalinea";
import datosLineaApi from "../api/laWifi/datosLinea";
import isTokenExpired from "../auth/isTokenExpired";

function LinesManagementScreen({ navigation, route }) {
  const { user } = useContext(AuthContext);
  const [tarifa, setTarifa] = useState();
  const [datosLinea, setDatosLinea] = useState();
  const linea = route.params.id;

  useEffect(() => {
    loadTarifa();
    loadDatosLinea();
  }, []);

  const loadTarifa = async () => {
    //Comprobamos si el token ha caducado
    await isTokenExpired.isTokenExpired();

    const response = await tarifalineaApi.getTarifa(user.username, linea);

    if (response.data.error?.status == (400 || 401)) {
      Alert.alert("Error", response.data.error.message, [
        { text: "Aceptar", onPress: () => navigation.navigate("Lineas") },
      ]);
    }

    setTarifa(response.data);
  };

  const loadDatosLinea = async () => {
    //Comprobamos si el token ha caducado
    await isTokenExpired.isTokenExpired();

    const response = await datosLineaApi.getDatosLinea(user.username, linea);

    if (response.data.error?.status == (400 || 401)) {
      Alert.alert("Error", response.data.error.message, [
        { text: "Aceptar", onPress: () => navigation.navigate("Lineas") },
      ]);
    }

    setDatosLinea(response.data);
  };

  return (
    <Screen>
      <ScrollView style={styles.container}>
        <Text style={styles.lineaTitle}>{linea}</Text>

        <Text style={styles.titleText}>Datos</Text>
        <AppButtonSettings
          height={100}
          title="Consulta tus datos"
          ancho={370}
          nameLogo="database-search"
          colorLogo="white"
          onPress={() =>
            navigation.navigate("DatosDetailScreen", {
              linea_id: linea,
              tarifa_id: tarifa,
            })
          }
        />

        <Text style={styles.titleText}>LLamadas</Text>
        <AppButtonSettings
          height={100}
          title="Consulta tus llamadas"
          ancho={370}
          nameLogo="phone-check"
          colorLogo="white"
          onPress={() =>
            navigation.navigate("LlamadasDetailScreen", {
              linea_id: linea,
            })
          }
        />

        <Text style={styles.titleText}>sms</Text>
        <AppButtonSettings
          height={100}
          title="Consulta tus SMS"
          ancho={370}
          nameLogo="email-search"
          colorLogo="white"
          onPress={() =>
            navigation.navigate("SmsDetailScreen", { linea_id: linea })
          }
        />

        <Text style={styles.otrasConsultasText}>Otras Consultas</Text>
        <Text style={styles.secondTitleText}>tu tarifa</Text>
        <View style={styles.tarifaContainer}>
          <FlatList
            horizontal={true}
            data={tarifa}
            keyExtractor={(tarifaUser) => tarifaUser.cuota}
            renderItem={({ item }) => (
              <TarifaComponent
                cuota={item.cuota}
                precio={item.precio}
                tope={item.tope + " " + item.unidad}
              />
            )}
          />
        </View>

        <Text style={styles.secondTitleText}>PUK SIM</Text>
        <View style={styles.pukIccContainer}>
          <FlatList
            horizontal={true}
            data={datosLinea}
            keyExtractor={(datosLineaUser) => datosLineaUser.icc}
            renderItem={({ item }) => (
              <PukIccComponent pukIcc={item.puk1} nameLogo="shield-key" />
            )}
          />
        </View>

        <Text style={styles.secondTitleText}>ICC SIM</Text>
        <View style={styles.pukIccContainer}>
          <FlatList
            horizontal={true}
            data={datosLinea}
            keyExtractor={(datosLineaUser) => datosLineaUser.icc}
            renderItem={({ item }) => (
              <PukIccComponent pukIcc={item.icc} nameLogo="sim" />
            )}
          />
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appbackground,
  },
  header: {
    flex: 0.1,
    backgroundColor: colors.appbackground,
    justifyContent: "center",
  },
  data: {
    marginLeft: 20,
    color: colors.white,
    fontSize: 30,
    marginBottom: 25,
  },
  textWelcome: {
    margin: 20,
    marginBottom: 30,
    fontSize: 30,
    color: colors.secondary,
    alignSelf: "center",
  },
  datosText: {
    color: colors.darkWhite,
    margin: 15,
    marginLeft: 24,
    textTransform: "uppercase",
    fontSize: 28,
  },
  datosContainer: {
    width: 370,
    alignSelf: "center",
    backgroundColor: colors.appdark,
    borderRadius: 10,
    marginBottom: 10,
  },
  titleText: {
    color: colors.secondary,
    marginTop: 35,
    margin: 15,
    marginLeft: 24,
    textTransform: "uppercase",
    fontSize: 28,
  },
  secondTitleText: {
    color: colors.secondary,
    margin: 15,
    marginLeft: 24,
    textTransform: "uppercase",
    fontSize: 25,
  },
  otrasConsultasText: {
    color: colors.secondBlue,
    marginTop: 75,
    margin: 15,
    marginLeft: 24,
    textTransform: "uppercase",
    fontSize: 28,
  },
  tarifaContainer: {
    width: 370,
    alignSelf: "center",
    backgroundColor: colors.appdark,
    borderRadius: 10,
    marginBottom: 20,
  },
  pukIccContainer: {
    width: 370,
    alignSelf: "center",
    backgroundColor: colors.appdark,
    borderRadius: 10,
    marginBottom: 20,
  },
  lineaTitle: {
    color: colors.secondary,
    alignSelf: "center",
    marginTop: 15,
    textTransform: "uppercase",
    fontSize: 35,
  },
});

export default LinesManagementScreen;
