import React, { useContext, useEffect, useState } from "react";
import { Alert, View, StyleSheet, Text, FlatList } from "react-native";

import facturasApi from "../api/laWifi/facturas";
import Screen from "../components/Screen";
import colors from "../config/colors";
import FacturaComponent from "../components/FacturaComponent";
import AuthContext from "../auth/context";
import ActivityIndicator from "../components/ActivityIndicator";
import WarningIndicator from "../components/WarningIndicator";
import AppButtonSettings from "../components/AppButtonSettings";
import AppButtonSortBy from "../components/AppButtonSortBy";
import isTokenExpired from "../auth/isTokenExpired";

function FacturaScreen({ navigation }) {
  const [facturas, setFacturas] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  const [arrow, setArrow] = useState("arrow-down");
  const [arrow2, setArrow2] = useState("arrow-down");

  //Ordenamos las facturas en funcion de la fecha al pulsar el boton
  const handleSortDate = () => {
    arrow == "arrow-up" ? setArrow("arrow-down") : setArrow("arrow-up");
    if (arrow == "arrow-down") {
      const newOrder = facturas.sort(function (a, b) {
        return a.fecha > b.fecha;
      });
      setFacturas(newOrder);
    } else {
      const newOrder = facturas.sort(function (a, b) {
        return a.fecha < b.fecha;
      });
      setFacturas(newOrder);
    }
  };

  //Ordenamos las facturas en funcion del importe al pulsar el boton
  const handleSortPrice = () => {
    arrow2 == "arrow-up" ? setArrow2("arrow-down") : setArrow2("arrow-up");
    if (arrow2 == "arrow-down") {
      const newOrder = facturas.sort(function (a, b) {
        return a.importe > b.importe;
      });
      setFacturas(newOrder);
    } else {
      const newOrder = facturas.sort(function (a, b) {
        return a.importe < b.importe;
      });
      setFacturas(newOrder);
    }
  };

  //Solo hacemos la peticion en el caso del rol cliente
  if (user.categoria_id == "rol_usuario_cliente") {
    useEffect(() => {
      loadFacturas();
    }, []);

    const loadFacturas = async () => {
      setLoading(true);

      //Comprobamos si el token ha caducado
      await isTokenExpired.isTokenExpired();

      const response = await facturasApi.getFacturas(
        user.username,
        user.cliente_id
      );

      //Gestionamos posibles errores de respuesta de la API
      if (response.data.error?.status == (400 || 401)) {
        Alert.alert("Error", response.data.error.message, [
          {
            text: "Aceptar",
            onPress: () => navigation.navigate("Inicio"),
          },
        ]);
      }

      setLoading(false);

      const data = response.data;

      //Por defecto se ordenan los datos en funcion de la fecha
      const order = data.sort(function (a, b) {
        return a.fecha < b.fecha;
      });
      setFacturas(order);
    };
  }

  return (
    <Screen>
      <View style={styles.container}>
        {user.categoria_id == "rol_usuario_cliente" ? (
          <>
            <Text style={styles.textWelcome}>TUS FACTURAS</Text>
            <View style={styles.statsContainer}>
              <AppButtonSettings
                title="Ver estadísticas"
                nameLogo="chart-bar-stacked"
                colorLogo={colors.white}
                ancho={350}
                onPress={() =>
                  navigation.navigate("FacturasStats", {
                    facturas_id: facturas,
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
                  title="ordenar por importe"
                  nameLogo={arrow2}
                  colorLogo={colors.white}
                  ancho={160}
                  onPress={handleSortPrice}
                />
              </View>
            </View>

            <ActivityIndicator visible={loading} />
            <FlatList
              data={facturas}
              keyExtractor={(factura) => factura.num_factura}
              renderItem={({ item }) => (
                <FacturaComponent
                  numFactura={item.num_factura}
                  fecha={item.fecha.split("-").reverse().join("/")}
                  importe={item.importe.toFixed(2)}
                  onPress={() =>
                    navigation.navigate("FacturasDetail", {
                      id: item.num_factura,
                      id_fecha: item.fecha,
                      id_importe: item.importe,
                    })
                  }
                />
              )}
            />
          </>
        ) : (
          <View>
            <WarningIndicator />
            <Text style={styles.factura_usuario_text}>
              ¡Vaya! Tienes que ser cliente para poder ver las facturas
            </Text>
          </View>
        )}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appbackground,
    justifyContent: "flex-start",
  },
  text: {
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    color: colors.white,
    marginBottom: 10,
  },
  textWelcome: {
    margin: 20,
    marginBottom: 30,
    fontSize: 30,
    color: colors.secondary,
  },
  factura_usuario_text: {
    marginRight: 20,
    marginLeft: 20,
    marginTop: 400,
    fontSize: 35,
    color: colors.darkWhite,
  },
  statsContainer: {
    marginBottom: 20,
  },
  sortContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
});

export default FacturaScreen;
