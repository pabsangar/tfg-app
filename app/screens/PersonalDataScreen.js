import React, { useState, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";

import colors from "../config/colors";
import AppPicker from "../components/AppPicker";
import AuthContext from "../auth/context";

function PersonalDataScreen() {
  const { user } = useContext(AuthContext);
  const [linea, setLinea] = useState();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tus Datos Personales</Text>
      {user.categoria_id == "rol_usuario_cliente" ? (
        <View style={styles.infoContainer}>
          <Text style={styles.infoText}>Teléfono principal de contacto </Text>
          <AppPicker
            selectedItem={linea}
            onSelectItem={(item) => setLinea(item)}
          />
        </View>
      ) : (
        <View></View>
      )}

      <View style={styles.infoContainer2}>
        <Text style={styles.infoText}>Email de contacto </Text>
        <View style={styles.emailContainer}>
          <Text style={styles.emailText}>{user.email}</Text>
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
  title: {
    color: colors.secondary,
    fontSize: 25,
    margin: 15,
  },
  infoContainer: {
    marginTop: 15,
    width: 350,
    height: 100,
    alignSelf: "center",
    backgroundColor: colors.appbackground,
  },
  infoText: {
    color: colors.white,
    fontSize: 21,
    marginBottom: 10,
  },
  infoContainer2: {
    marginTop: 30,
    width: 350,
    height: 100,
    alignSelf: "center",
    backgroundColor: colors.appbackground,
  },
  emailText: {
    fontSize: 19,
    color: colors.white,
    alignSelf: "center",
  },
  emailContainer: {
    alignSelf: "center",
    backgroundColor: colors.appdark,
    padding: 20,
    borderRadius: 10,
    width: 300,
    height: 65,
  },
});

export default PersonalDataScreen;
