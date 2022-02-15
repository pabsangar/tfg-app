import React from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { BarChart } from "react-native-chart-kit";

import colors from "../config/colors";
import Screen from "../components/Screen";

function FacturaStatsScreen({ route }) {
  const facturas_id = route.params.facturas_id;

  //Ordenamos las facturas en funcion de la fecha
  const facturas = facturas_id.sort(function (a, b) {
    return a.fecha < b.fecha;
  });

  //Nos quedamos con las 5 ultimas facturas
  const fac1_fecha = facturas[0].fecha.split("-")[1];
  const fac1_importe = facturas[0].importe;
  const fac2_fecha = facturas[1].fecha.split("-")[1];
  const fac2_importe = facturas[1].importe;
  const fac3_fecha = facturas[2].fecha.split("-")[1];
  const fac3_importe = facturas[2].importe;
  const fac4_fecha = facturas[3].fecha.split("-")[1];
  const fac4_importe = facturas[3].importe;
  const fac5_fecha = facturas[4].fecha.split("-")[1];
  const fac5_importe = facturas[4].importe;

  //Nos quedamos solamente con el mes de cada factura
  var meses = [
    "Ene",
    "Feb",
    "Mar",
    "Abr",
    "May",
    "Jun",
    "Jul",
    "Ago",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const fac1_mes = meses[fac1_fecha - 1];
  const fac2_mes = meses[fac2_fecha - 1];
  const fac3_mes = meses[fac3_fecha - 1];
  const fac4_mes = meses[fac4_fecha - 1];
  const fac5_mes = meses[fac5_fecha - 1];

  //Ponemos los datos para manejarlos con la grafica
  const data = {
    labels: [fac5_mes, fac4_mes, fac3_mes, fac2_mes, fac1_mes],
    datasets: [
      {
        data: [
          fac5_importe,
          fac4_importe,
          fac3_importe,
          fac2_importe,
          fac1_importe,
        ],
      },
    ],
  };

  //Calculamos el gasto medio de los ultimos 5 meses
  const gasto_medio =
    (fac5_importe + fac4_importe + fac3_importe + fac2_importe + fac1_importe) /
    5;

  const chartConfig = {
    backgroundGradientFromOpacity: 0,
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.6,
  };

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={styles.title1}>Importes de tus últimas facturas</Text>
        <BarChart
          style={{
            marginVertical: 30,
            borderRadius: 16,
          }}
          data={data}
          width={Dimensions.get("window").width}
          height={220}
          yAxisLabel="€ "
          chartConfig={chartConfig}
          verticalLabelRotation={0}
          fromZero
        />
        <Text style={styles.title1}>Importe medio en los últimos 5 meses:</Text>
        <View style={styles.importeContainer}>
          <Text style={styles.importeText}>{gasto_medio.toFixed(2)} €</Text>
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appbackground,
  },
  title1: {
    color: colors.secondary,
    alignSelf: "flex-start",
    marginLeft: 20,
    marginTop: 20,
    fontSize: 22,
  },
  importeContainer: {
    backgroundColor: colors.appdark,
    width: "50%",
    height: 70,
    alignSelf: "center",
    borderRadius: 5,
    marginTop: 20,
    justifyContent: "center",
  },
  importeText: {
    color: colors.white,
    alignSelf: "center",
    fontSize: 35,
  },
});

export default FacturaStatsScreen;
