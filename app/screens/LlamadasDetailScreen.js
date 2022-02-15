import React, { useContext, useState, useEffect } from "react";
import { Alert, Text, View, StyleSheet, FlatList } from "react-native";

import Screen from "../components/Screen";
import colors from "../config/colors";
import LlamadasComponent from "../components/LlamadasComponent";
import AuthContext from "../auth/context";
import consumoLineaApi from "../api/laWifi/consumoLinea";
import ActivityIndicator from "../components/ActivityIndicator";
import AppButtonSettings from "../components/AppButtonSettings";
import AppButtonSortBy from "../components/AppButtonSortBy";

function LlamadasDetailScreen({ navigation, route }) {
  const { user } = useContext(AuthContext);
  const [consumo, setConsumo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [arrow, setArrow] = useState("arrow-down");
  const [arrow2, setArrow2] = useState("arrow-down");
  const linea = route.params.linea_id;

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

    //Ordenamos las llamadas por fecha
    const order = data.sort(function (a, b) {
      return a.fecha < b.fecha;
    });

    //Filtramos por el tipo de trafico LLAMADAS
    const consumoLlamadas = order
      .filter(function (item) {
        return (
          item.tipo_trafico != "Datos" &&
          item.tipo_trafico != "SMS Nacional" &&
          item.tipo_trafico != "SMS Internacional"
        );
      })
      .map(function ({ destino, tipo_trafico, fecha, horainicio, duracion }) {
        return { destino, tipo_trafico, fecha, horainicio, duracion };
      });

    setConsumo(consumoLlamadas);
  };

  //Ordenamos las llamadas en funcion de la fecha al pulsar el boton
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

  //Ordenamos las llamadas en funcion de la duracion al pulsar el boton
  const handleSortDuracion = () => {
    arrow2 == "arrow-up" ? setArrow2("arrow-down") : setArrow2("arrow-up");
    if (arrow2 == "arrow-down") {
      const newOrder = consumo.sort(function (a, b) {
        return a.duracion > b.duracion;
      });
      setConsumo(newOrder);
    } else {
      const newOrder = consumo.sort(function (a, b) {
        return a.duracion < b.duracion;
      });
      setConsumo(newOrder);
    }
  };

  return (
    <Screen style={styles.container}>
      <Text style={styles.llamadasText}>tus llamadas</Text>
      <View style={styles.statsContainer}>
        <AppButtonSettings
          title="Ver estadísticas"
          nameLogo="chart-bar-stacked"
          colorLogo={colors.white}
          ancho={350}
          onPress={() =>
            navigation.navigate("LlamadasStats", {
              consumo_id: consumo,
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
            title="ordenar por duración"
            nameLogo={arrow2}
            colorLogo={colors.white}
            ancho={160}
            onPress={handleSortDuracion}
          />
        </View>
      </View>

      <ActivityIndicator visible={loading} />
      <View style={styles.llamadasContainer}>
        <FlatList
          data={consumo}
          keyExtractor={(hora) => hora.horainicio}
          renderItem={({ item }) => (
            <LlamadasComponent
              destino={item.destino}
              trafico={item.tipo_trafico}
              fecha={item.fecha.split("-").reverse().join("/")}
              hora={item.horainicio}
              duracion={item.duracion}
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
  llamadasText: {
    color: colors.secondary,
    margin: 15,
    marginLeft: 24,
    textTransform: "uppercase",
    fontSize: 28,
  },
  llamadasContainer: {
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

export default LlamadasDetailScreen;
