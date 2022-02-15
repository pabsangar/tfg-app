import React from "react";
import { View, StyleSheet, Text, Linking } from "react-native";

import AppButtonSettings from "../components/AppButtonSettings";
import colors from "../config/colors";

function SupportTechScreen(props) {
  const phoneCall = () => {
    Linking.openURL(`tel:${900804412}`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SOPORTE TÉCNICO</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.infoText}>¿Tienes alguna incidencia?</Text>
        <Text style={styles.infoText2}>
          Si alguno de tus servicios no funciona bien puedes resolver un
          problema técnico o consultar el estado del mismo contactando con
          nosotros
        </Text>
      </View>
      <View style={styles.phoneContainer}>
        <AppButtonSettings
          title="Llamar a Lemonvil"
          nameLogo="phone"
          colorLogo={colors.secondary}
          onPress={phoneCall}
        />
      </View>
      <View style={styles.emailContainer}>
        <Text style={styles.infoText}>También puedes mandarnos un email</Text>
        <Text style={styles.infoText3}>clientes@lemonvil.com</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.appbackground,
  },
  title: {
    color: colors.secondary,
    fontSize: 25,
    margin: 15,
    marginTop: 30,
  },
  infoContainer: {
    width: "90%",
    height: 250,
    backgroundColor: colors.appbackground,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 10,
  },
  infoText: {
    fontSize: 22,
    color: colors.darkWhite,
    lineHeight: 33,
    marginBottom: 10,
  },
  infoText2: {
    fontSize: 22,
    color: colors.darkWhite,
    lineHeight: 33,
    alignSelf: "center",
    textAlign: "justify",
  },
  infoText3: {
    fontSize: 22,
    color: colors.secondary,
    lineHeight: 33,
    alignSelf: "center",
    textAlign: "justify",
  },
  phoneText: {
    color: colors.secondary,
    fontSize: 30,
    marginTop: 30,
    justifyContent: "center",
    alignSelf: "center",
  },
  phoneContainer: {
    backgroundColor: colors.appbackground,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 20,
  },
  emailContainer: {
    width: "90%",
    height: 100,
    backgroundColor: colors.appbackground,
    justifyContent: "center",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 15,
  },
});

export default SupportTechScreen;
