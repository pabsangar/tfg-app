import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { ProgressChart } from "react-native-chart-kit";

import colors from "../config/colors";

function DatosStatsScreen({ route }) {
  const mesActual = new Date().getMonth() + 1;
  const anioActual = new Date().getFullYear();
  const datos_id = route.params.datos_id;
  const tarifa = route.params.tarifa_id;
  const tope = tarifa[0].tope;
  const unidad = tarifa[0].unidad;
  var megas_consumidos = 0;

  //Ordenamos los datos en funcion de la fecha
  const datos = datos_id.sort(function (a, b) {
    return a.fecha < b.fecha;
  });

  //Filtramos los datos para quedarnos con los del mes actual
  const datos_grafica = datos.filter((e) => {
    var [year, month] = e.fecha.split("-");
    return mesActual == +month && anioActual == year;
  });

  //Hacemos la suma de los megas consumidos este mes
  for (var x in datos_grafica) {
    megas_consumidos += datos_grafica[x].megas;
  }

  //Calculamos el porcentaje sobre 1 de megas consumidos
  var porcentaje_mb = (megas_consumidos / 1024).toFixed(2) / tope;

  //Rellenamos los datos para la grafica
  const data = {
    data: [porcentaje_mb],
  };

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title1}>Tu consumo actual</Text>
      <View style={styles.graContainer}>
        <ProgressChart
          style={{
            marginVertical: 0,
          }}
          data={data}
          width={400}
          height={400}
          strokeWidth={15}
          radius={150}
          chartConfig={chartConfig}
          hideLegend={true}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>LLevas</Text>
          <Text style={styles.infoText2}>
            {(megas_consumidos / 1024).toFixed(2)} GB
          </Text>
          <Text style={styles.infoText}>de</Text>
          <Text style={styles.infoText3}>{tope + " " + unidad}</Text>
        </View>
        <View style={styles.infoContainer2}>
          <Text style={styles.infoText4}>
            Has consumido el {(porcentaje_mb * 100).toFixed(1)}% de tus megas
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appbackground,
  },
  graContainer: {
    alignSelf: "center",
    marginTop: 7,
  },
  title1: {
    color: colors.secondary,
    alignSelf: "center",
    marginTop: 20,
    fontSize: 30,
  },
  infoContainer: {
    backgroundColor: colors.appbackground,
    width: 210,
    height: 160,
    alignSelf: "center",
    borderRadius: 10,
    marginTop: -270,
  },
  infoText: {
    color: colors.white,
    alignSelf: "flex-start",
    fontSize: 18,
    marginLeft: 10,
  },
  infoText2: {
    color: colors.green,
    alignSelf: "center",
    fontSize: 40,
    marginLeft: 10,
  },
  infoText3: {
    color: colors.secondary,
    alignSelf: "center",
    fontSize: 40,
    marginLeft: 10,
  },
  infoContainer2: {
    alignSelf: "center",
    width: "80%",
    marginTop: 110,
  },
  infoText4: {
    color: colors.white,
    fontSize: 23,
    alignSelf: "center",
  },
});

export default DatosStatsScreen;
