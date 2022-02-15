import apiClient from "./client";

const endpoint = "/consumolinea";

const getConsumo = (username, linea) =>
  apiClient.post(endpoint, { username, linea });

export default {
  getConsumo,
};
