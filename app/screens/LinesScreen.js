import React, { useContext, useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  Alert,
} from "react-native";

import AuthContext from "../auth/context";
import CircleCard from "../components/CircleCard";
import Screen from "../components/Screen";
import colors from "../config/colors";
import lineasApi from "../api/laWifi/lineas";
import ActivityIndicator from "../components/ActivityIndicator";
import AppButtonSettings from "../components/AppButtonSettings";
import isTokenExpired from "../auth/isTokenExpired";

function LinesScreen({ navigation }) {
  const [lineas, setLineas] = useState([]);
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);
  //Linea del usuario de prueba de la API
  const [lineaPrueba, setLineaPrueba] = useState(null);

  //Solo hacemos la peticion en el caso del rol cliente
  if (user.categoria_id == "rol_usuario_cliente") {
    useEffect(() => {
      loadLineas();
    }, []);

    const loadLineas = async () => {
      setLoading(true);

      //Comprobamos si el token ha caducado
      await isTokenExpired.isTokenExpired();

      const response = await lineasApi.getLineas(
        user.username,
        user.cliente_id
      );

      //Gestionamos posibles mensajes de error de la API
      if (response.data.error?.status == (400 || 401)) {
        Alert.alert("Error", response.data.error.message, [
          {
            text: "Aceptar",
            onPress: () => navigation.navigate("Inicio"),
          },
        ]);
      }

      setLoading(false);
      setLineas(response.data);
    };
  }
  //Para el caso del rol usuario de linea
  const handlePress = () => {
    if (lineaPrueba != null)
      return navigation.navigate("LinesManagement", { id: lineaPrueba });

    Alert.alert("¡Cuidado!", "Debes indicar tu línea", [{ text: "OK" }]);
  };

  return (
    <Screen>
      <View style={styles.container}>
        {user.categoria_id == "rol_usuario_cliente" ? (
          <>
            <Text style={styles.textWelcome}>Estas son tus líneas...</Text>
            <ActivityIndicator visible={loading} />
            <FlatList
              data={lineas}
              keyExtractor={(lineaUser) => lineaUser.linea}
              renderItem={({ item }) => (
                <CircleCard
                  nameIcon="phone"
                  text={item.linea}
                  onPress={() =>
                    navigation.navigate("LinesManagement", { id: item.linea })
                  }
                />
              )}
            />
          </>
        ) : (
          <View style={styles.container}>
            <Text style={styles.textWelcome}>Introduce tu línea</Text>
            <TextInput
              style={styles.textInput}
              placeholder="Introduce tu línea para continuar"
              placeholderTextColor={colors.white}
              keyboardType="numeric"
              onChangeText={(text) => setLineaPrueba(text)}
            />
            <AppButtonSettings
              style={styles.continueButton}
              title="Continuar"
              nameLogo="arrow-right"
              colorLogo={colors.white}
              ancho={200}
              height={60}
              onPress={handlePress}
            />
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
    fontSize: 30,
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
  textInput: {
    width: "90%",
    height: 50,
    backgroundColor: colors.appdark,
    alignSelf: "center",
    borderRadius: 10,
    marginBottom: 20,
    color: colors.white,
    paddingLeft: 15,
  },
  continueButton: {},
});

export default LinesScreen;
