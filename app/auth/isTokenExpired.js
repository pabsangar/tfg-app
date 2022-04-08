import { Alert } from "react-native";
import jwtDecode from "jwt-decode";

import authStorage from "../auth/storage";
import authApi from "../api/laWifi/auth";

const isTokenExpired = async () => {
  const token = await authStorage.getToken();
  const decoded = jwtDecode(token);
  const username = await authStorage.getUsername();
  const password = await authStorage.getPassword();

  if (decoded.exp < Date.now() / 1000) {
    //Token caducado - Obtenemos uno nuevo
    const response = await authApi.login(username, password);

    //Gestionamos posibles errores de respuesta de la API
    if (response.data.error?.status == (401 || 500)) {
      Alert.alert("Error", response.data.error.message, [
        {
          text: "Aceptar",
        },
      ]);
    } else {
      await authStorage.storeToken(response.data["token"]);
    }
  } else {
    //Token Actualizado - No es necesario refrescarlo
  }
};

export default {
  isTokenExpired,
};
