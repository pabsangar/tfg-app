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
    const result = await authApi.login(username, password);
    await authStorage.storeToken(result.data["token"]);
  } else {
    //Token Actualizado
  }
};

export default {
  isTokenExpired,
};
