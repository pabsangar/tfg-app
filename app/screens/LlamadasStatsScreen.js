import React from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";

function LlamadasStatsScreen({ route }) {
  const mesActual = new Date().getMonth() + 1;
  const anioActual = new Date().getFullYear();
  const llamadas_id = route.params.consumo_id;
  var segundos_hablados = 0;

  //Ordenamos las llamadas por fecha
  const llamadas = llamadas_id.sort(function (a, b) {
    return a.fecha < b.fecha;
  });

  //Filtramos las llamadas para quedarnos con las del mes actual
  const llamadas_actual = llamadas.filter((e) => {
    var [year, month] = e.fecha.split("-");
    return mesActual == +month && anioActual == year;
  });

  //Hacemos la suma de los segundos hablados este mes
  for (var x in llamadas_actual) {
    segundos_hablados += llamadas_actual[x].duracion;
  }

  //Calculamos el tiempo hablado en horas, minutos y segundos
  var horas = Math.floor(segundos_hablados / 3600);
  var minutos = Math.floor((segundos_hablados % 3600) / 60);
  var segundos = Math.floor((segundos_hablados % 3600) % 60);

  var hDisplay = horas > 0 ? horas + (horas == 1 ? " hora, " : " horas, ") : "";
  var mDisplay =
    minutos > 0 ? minutos + (minutos == 1 ? " minuto y " : " minutos y ") : "";
  var sDisplay =
    segundos > 0 ? segundos + (segundos == 1 ? " segundo" : " segundos") : "";

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Este mes llevas hablado un total de</Text>
      <View style={styles.info1Container}>
        <Text style={styles.infoText}>{hDisplay + mDisplay + sDisplay}</Text>
      </View>
      <Text style={styles.title}>Este mes llevas realizadas un total de</Text>
      <View style={styles.info1Container}>
        <Text style={styles.infoText}>{llamadas_actual.length} Llamadas</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appbackground,
  },
  info1Container: {
    backgroundColor: colors.appdark,
    justifyContent: "center",
    width: 350,
    height: 100,
    margin: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  title: {
    color: colors.secondary,
    fontSize: 21,
    marginTop: 30,
    marginLeft: 20,
  },
  infoText: {
    color: colors.white,
    fontSize: 20,
    alignSelf: "center",
  },
});

export default LlamadasStatsScreen;
