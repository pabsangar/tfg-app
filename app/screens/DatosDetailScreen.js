import React, { useContext, useEffect, useState } from "react";
import { Alert, Text, View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import DatosComponent from "../components/DatosComponent";
import AuthContext from "../auth/context";
import consumoLineaApi from "../api/laWifi/consumoLinea";
import ActivityIndicator from "../components/ActivityIndicator";
import AppButtonSettings from "../components/AppButtonSettings";
import AppButtonSortBy from "../components/AppButtonSortBy";

function DatosDetailScreen({ navigation, route }) {
  const { user } = useContext(AuthContext);
  const [consumo, setConsumo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [arrow, setArrow] = useState("arrow-down");
  const [arrow2, setArrow2] = useState("arrow-down");
  const linea = route.params.linea_id;
  const tarifa = route.params.tarifa_id;

  useEffect(() => {
    loadConsumo();
  }, []);

  const loadConsumo = async () => {
    setLoading(true);
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

    //Filtramos por el tipo de trafico DATOS
    const consumoDatos = order
      .filter(function (item) {
        return item.tipo_trafico == "Datos";
      })
      .map(function ({ fecha, horainicio, megas }) {
        return { fecha, horainicio, megas };
      });

    setConsumo(consumoDatos);
  };

  //Ordenamos los datos en funcion de la fecha al pulsar el boton
  const handleSortDate = () => {
    arrow == "arrow-up" ? setArrow("arrow-down") : setArrow("arrow-up");
    if (arrow == "arrow-down") {
      const newOrder = consumo.sort(function (a, b) {
        return a.fecha > b.fecha;
      });
      setConsumo(newOrder);
    } else {
      const newOrder = consumo.sort(function (a, b) {
        return a.fecha < b.fecha;
      });
      setConsumo(newOrder);
    }
  };

  //Ordenamos los datos en funcion de los megas al pulsar el boton
  const handleSortMegas = () => {
    arrow2 == "arrow-up" ? setArrow2("arrow-down") : setArrow2("arrow-up");
    if (arrow2 == "arrow-down") {
      const newOrder = consumo.sort(function (a, b) {
        return a.megas > b.megas;
      });
      setConsumo(newOrder);
    } else {
      const newOrder = consumo.sort(function (a, b) {
        return a.megas < b.megas;
      });
      setConsumo(newOrder);
    }
  };

  return (
    <Screen style={styles.container}>
      <Text style={styles.datosText}>consumo de datos</Text>
      <View style={styles.statsContainer}>
        <AppButtonSettings
          title="Ver estadísticas"
          nameLogo="chart-bar-stacked"
          colorLogo={colors.white}
          ancho={350}
          onPress={() =>
            navigation.navigate("DatosStats", {
              datos_id: consumo,
              tarifa_id: tarifa,
            })
          }
        />
        <View style={styles.sortContainer}>
          <AppButtonSortBy
            title="ordenar por fecha"
            nameLogo={arrow}
            colorLogo={colors.white}
            ancho={160}
            onPress={handleSortDate}
          />
          <AppButtonSortBy
            title="ordenar por megas"
            nameLogo={arrow2}
            colorLogo={colors.white}
            ancho={160}
            onPress={handleSortMegas}
          />
        </View>
      </View>

      <ActivityIndicator visible={loading} />
      <View style={styles.datosContainer}>
        <FlatList
          data={consumo}
          keyExtractor={(hora) => hora.horainicio}
          renderItem={({ item }) => (
            <DatosComponent
              fecha={item.fecha.split("-").reverse().join("/")}
              hora={item.horainicio}
              megas={item.megas}
            />
          )}
        />
      </View>
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
  statsContainer: {
    marginBottom: 20,
  },
  sortContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default DatosDetailScreen;
