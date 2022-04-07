import React from "react";
import { View, StyleSheet, Text, Image } from "react-native";

import colors from "../config/colors";

function AboutAppScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../assets/lemonvilWhite.png")}
        />
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>
          La aplicación de Lemonvil está pensada para ayudarte a controlar todos
          los servicios que tienes contratados con Lemonvil. Con ella podrás:
        </Text>
        <Text style={styles.infoText}>
          - Gestionar tus líneas en tiempo real,
        </Text>
        <Text style={styles.infoText}>
          - Ver tu consumo de datos móviles, llamadas y SMS,
        </Text>
        <Text style={styles.infoText}>- Ver estadísticas de tu consumo,</Text>
        <Text style={styles.infoText}>
          - Ver la tarifa que tienes contratada,
        </Text>
        <Text style={styles.infoText}>
          - Ver el código PUK e ICC de tu SIM,
        </Text>
        <Text style={styles.infoText}>- Ver tus facturas y estadísticas.</Text>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Versión 3.0.0</Text>
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
  infoContainer: {
    width: "90%",
    height: 500,
    backgroundColor: colors.appbackground,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 25,
  },
  infoText: {
    fontSize: 22,
    color: colors.darkWhite,
    lineHeight: 33,
    textAlign: "justify",
  },
  header: {
    paddingTop: 30,
    flex: 0.2,
    backgroundColor: colors.appbackground,
    justifyContent: "center",
    marginBottom: 60,
  },
  logo: {
    marginTop: 30,
    alignSelf: "center",
    marginBottom: 10,
  },
  footer: {
    alignSelf: "center",
    width: "90%",
    backgroundColor: colors.appbackground,
    marginTop: 50,
  },
  footerText: {
    color: colors.secondBlue,
    alignSelf: "center",
    fontSize: 15,
  },
});

export default AboutAppScreen;
