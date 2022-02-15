import React, { useContext } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  Linking,
  Alert,
} from "react-native";
import AuthContext from "../auth/context";

import AppButtonSettings from "../components/AppButtonSettings";
import Card from "../components/Card";
import ImagesPromo from "../components/ImagesPromo";
import Screen from "../components/Screen";
import colors from "../config/colors";

function MenuScreen({ navigation }) {
  const { user } = useContext(AuthContext);
  //Creamos un saludo en funcion de la hora del dia
  var today = new Date();
  var time = today.getHours();
  var greet;

  if (time >= 20) {
    greet = "Buenas noches,";
  } else if (time >= 12) {
    greet = "Buenas tardes,";
  } else if (time >= 0) {
    greet = "Buenos días,";
  }

  return (
    <Screen>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../assets/lemonvilWhite.png")}
        />
      </View>

      <ScrollView style={styles.menu}>
        <Text style={styles.textWelcome}>{greet + " " + user.usuario}</Text>
        <Card
          name="cellphone-iphone"
          text="gestión de líneas"
          onPress={() => navigation.navigate("Lineas")}
        />
        <Card
          name="file-document"
          text="facturas"
          onPress={() => navigation.navigate("Facturas")}
        />

        <Text style={styles.textTitle}>consulta nuestras tarifas</Text>
        <View style={styles.swipeContainer}>
          <ImagesPromo />
        </View>

        <Text style={styles.textTitle}>visitanos en la web</Text>
        <AppButtonSettings
          ancho={340}
          title="ir a la web"
          nameLogo="web"
          colorLogo={colors.secondary}
          onPress={() => Linking.openURL("https://www.lemonvil.com")}
        />

        <Text style={styles.textTitle}>contáctanos</Text>
        <View style={styles.contacto}>
          <Text style={styles.textContacto}>clientes@lemonvil.com</Text>
          <Text style={styles.textContacto}>(+34) 900 804 412</Text>
          <Text style={styles.textContacto}>Lun - Jue: 10h-14h y 17h-20h</Text>
          <Text style={styles.textContacto}>Vie: 10h-14h</Text>
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  contacto: {
    backgroundColor: colors.appdark,
    borderRadius: 10,
    alignSelf: "center",
    width: 340,
    height: 140,
    marginBottom: 20,
  },
  header: {
    paddingTop: 25,
    flex: 0.2,
    backgroundColor: colors.appbackground,
    justifyContent: "center",
  },
  imagePromo: {
    width: 340,
    height: 287,
    alignSelf: "center",
    marginBottom: 20,
    borderRadius: 10,
  },
  logo: {
    marginTop: 30,
    alignSelf: "center",
    marginBottom: 10,
  },
  menu: {
    flex: 0.8,
    backgroundColor: colors.appbackground,
  },
  textContacto: {
    marginTop: 10,
    alignSelf: "center",
    fontSize: 16,
    color: colors.white,
  },
  textTitle: {
    color: colors.darkWhite,
    margin: 15,
    marginLeft: 24,
    textTransform: "uppercase",
    fontSize: 15,
  },
  text: {
    fontWeight: "bold",
    fontSize: 30,
    alignSelf: "center",
    color: colors.white,
    marginBottom: 10,
  },
  textWelcome: {
    margin: 20,
    marginBottom: 40,
    fontSize: 30,
    color: colors.white,
  },
  swipeContainer: {
    height: 340,
  },
});

export default MenuScreen;
