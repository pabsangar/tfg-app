import React, { useState, useContext, useEffect } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Modal,
  FlatList,
  SafeAreaView,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";
import lineasApi from "../api/laWifi/lineas";
import AuthContext from "../auth/context";
import AppButtonSettings from "./AppButtonSettings";
import isTokenExpired from "../auth/isTokenExpired";

function AppPicker({ onSelectItem, selectedItem }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [lineas, setLineas] = useState([]);
  const { user } = useContext(AuthContext);

  //Solo hacemos la peticion en el caso del rol cliente
  if (user.categoria_id == "rol_usuario_cliente") {
    useEffect(() => {
      loadLineas();
    }, []);

    const loadLineas = async () => {
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
          },
        ]);
      }

      setLineas(response.data);
    };
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.button}>
          <Text style={styles.text}>
            {selectedItem ? selectedItem.linea : "Seleccionar"}
          </Text>
          <MaterialCommunityIcons
            style={styles.icon}
            name="chevron-down"
            size={30}
            color={colors.white}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal animationType="slide" visible={modalVisible}>
        <SafeAreaView style={styles.modalView}>
          <View style={{ marginBottom: 20 }}>
            <AppButtonSettings
              title="Cerrar"
              onPress={() => setModalVisible(false)}
              ancho={"100%"}
              height={60}
              nameLogo="close"
              colorLogo={colors.white}
            />
          </View>
          <FlatList
            data={lineas}
            keyExtractor={(lineaUser) => lineaUser.linea}
            renderItem={({ item }) => (
              <AppButtonSettings
                title={item.linea}
                nameLogo="phone"
                colorLogo={colors.secondary}
                ancho={250}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    alignItems: "center",
    alignSelf: "center",
    padding: 15,
    width: 300,
    flexDirection: "row",
    marginBottom: 15,
    backgroundColor: colors.appdark,
  },
  text: {
    fontSize: 19,
    marginLeft: 15,
    color: colors.white,
  },
  icon: {
    marginLeft: 120,
  },
  modalView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.appbackground,
  },
});

export default AppPicker;
