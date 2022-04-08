import React, { useContext } from "react";
import { View, StyleSheet, Image, Text } from "react-native";

import AuthContext from "../auth/context";
import authStorage from "../auth/storage";
import AppButtonSettings from "../components/AppButtonSettings";
import Screen from "../components/Screen";
import colors from "../config/colors";
import UserProfile from "../components/UserProfile";
import AppButtonAccount from "../components/AppButtonAccount";

function AccountScreen({ navigation }) {
  const { user, setUser } = useContext(AuthContext);
  const rol =
    user.categoria_id == "rol_usuario_cliente" ? "Cliente" : "Usuario";

  const handleLogOut = () => {
    setUser(null);
    authStorage.removeToken();
    authStorage.removeUsername();
    authStorage.removePassword();
  };

  return (
    <Screen>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require("../assets/lemonvilWhite.png")}
        />
      </View>

      <View style={styles.menu}>
        <UserProfile title={user.usuario} subTitle={rol} />

        <View style={styles.dataContainer}>
          <Text style={styles.title}>Configuración</Text>
          <AppButtonAccount
            title="Datos Personales"
            nameLogo="chevron-right"
            width={350}
            bgcolor={colors.appbackground}
            onPress={() => navigation.navigate("PersonalDataScreen")}
          />
        </View>

        <View style={styles.dataContainer}>
          <Text style={styles.title}>Dudas más comunes</Text>
          <AppButtonAccount
            title="Soporte Técnico"
            nameLogo="chevron-right"
            width={350}
            bgcolor={colors.appbackground}
            onPress={() => navigation.navigate("SupportTechScreen")}
          />
          <AppButtonAccount
            title="Sobre la app"
            nameLogo="chevron-right"
            width={350}
            bgcolor={colors.appbackground}
            onPress={() => navigation.navigate("AboutAppScreen")}
          />
        </View>

        <View style={styles.logoutContainer}>
          <AppButtonSettings
            ancho={340}
            colorLogo={colors.white}
            title="cerrar sesión"
            nameLogo="logout-variant"
            onPress={handleLogOut}
          />
        </View>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 25,
    flex: 0.2,
    backgroundColor: colors.appbackground,
    justifyContent: "center",
  },
  logo: {
    marginTop: 30,
    alignSelf: "center",
    marginBottom: 10,
  },
  menu: {
    flex: 0.8,
    backgroundColor: colors.appbackground,
    justifyContent: "flex-start",
  },

  title: {
    color: colors.secondary,
    fontSize: 20,
    marginLeft: 20,
  },
  logoutContainer: {
    marginTop: 30,
  },
  dataContainer: {
    marginBottom: 10,
  },
});

export default AccountScreen;
