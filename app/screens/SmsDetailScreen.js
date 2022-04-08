import React, { useContext, useEffect, useState } from "react";
import { Alert, View, StyleSheet, Text, FlatList } from "react-native";

import colors from "../config/colors";
import Screen from "../components/Screen";
import AuthContext from "../auth/context";
import consumoLineaApi from "../api/laWifi/consumoLinea";
import ActivityIndicator from "../components/ActivityIndicator";
import SmsComponent from "../components/SmsComponent";
import WarningSmsIndicator from "../components/WarningSmsIndicator";
import isTokenExpired from "../auth/isTokenExpired";

function SmsDetailScreen({ route, navigation }) {
  const { user } = useContext(AuthContext);
  const [consumo, setConsumo] = useState([]);
  const [loading, setLoading] = useState(false);
  const linea = route.params.linea_id;

  useEffect(() => {
    loadConsumo();
  }, []);

  const loadConsumo = async () => {
    setLoading(true);

    //Comprobamos si el token ha caducado
    await isTokenExpired.isTokenExpired();

    const response = await consumoLineaApi.getConsumo(user.username, linea);

    if (response.data.error?.status == (400 || 401)) {
      Alert.alert("Error", response.data.error.message, [
        {
          text: "Aceptar",
          onPress: () => navigation.navigate("LinesManagement"),
        },
      ]);
    }

    setLoading(false);

    const data = response.data;

    //Ordenamos los datos por fecha
    const order = data.sort(function (a, b) {
      return a.fecha < b.fecha;
    });

    //Filtramos por el tipo de trafico SMS
    const consumoSms = order
      .filter(function (item) {
        return (
          item.tipo_trafico == "SMS Nacional" ||
          item.tipo_trafico == "SMS Internacional"
        );
      })
      .map(function ({ destino, tipo_trafico, fecha, horainicio }) {
        return { destino, tipo_trafico, fecha, horainicio };
      });

    setConsumo(consumoSms);
  };

  return (
    <Screen style={styles.container}>
      {consumo.length != 0 ? (
        <>
          <Text style={styles.datosText}>Tus SMS</Text>
          <ActivityIndicator visible={loading} />
          <View style={styles.datosContainer}>
            <FlatList
              data={consumo}
              keyExtractor={(hora) => hora.horainicio}
              renderItem={({ item }) => (
                <SmsComponent
                  destino={item.destino}
                  trafico={item.tipo_trafico}
                  fecha={item.fecha.split("-").reverse().join("/")}
                  hora={item.horainicio}
                />
              )}
            />
          </View>
        </>
      ) : (
        <View style={styles.alertContainer}>
          <WarningSmsIndicator />
          <Text style={styles.textSMS}></Text>
          <Text style={styles.textAlert}>¡Vaya! No has enviado SMS</Text>
        </View>
      )}
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appbackground,
  },
  datosText: {
    color: colors.secondary,
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
  textSMS: {
    color: colors.white,
    fontSize: 30,
    marginBottom: 200,
    justifyContent: "center",
    alignSelf: "center",
  },
  textAlert: {
    color: colors.white,
    fontSize: 30,
    alignSelf: "center",
    marginTop: 30,
  },
});

export default SmsDetailScreen;
