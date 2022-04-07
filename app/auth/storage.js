import * as SecureStore from "expo-secure-store";

const key = "authToken";
const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error almacenando authToken", error);
  }
};

const storeUsername = async (authUsername) => {
  try {
    await SecureStore.setItemAsync("authUsername", authUsername);
  } catch (error) {
    console.log("Error almacenando authUsername", error);
  }
};

const storePassword = async (authPassword) => {
  try {
    await SecureStore.setItemAsync("authPassword", authPassword);
  } catch (error) {
    console.log("Error almacenando authPassword", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error obteniendo authToken", error);
  }
};

const getUsername = async () => {
  try {
    return await SecureStore.getItemAsync("authUsername");
  } catch (error) {
    console.log("Error obteniendo authUsername", error);
  }
};

const getPassword = async () => {
  try {
    return await SecureStore.getItemAsync("authPassword");
  } catch (error) {
    console.log("Error obteniendo authPassword", error);
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error eliminando authToken", error);
  }
};

const removeUsername = async () => {
  try {
    await SecureStore.deleteItemAsync("authUsername");
  } catch (error) {
    console.log("Error eliminando authUsername", error);
  }
};

const removePassword = async () => {
  try {
    await SecureStore.deleteItemAsync("authPassword");
  } catch (error) {
    console.log("Error eliminando authPassword", error);
  }
};

export default {
  storeToken,
  storeUsername,
  storePassword,
  getToken,
  getUsername,
  getPassword,
  removeToken,
  removeUsername,
  removePassword,
};
