import apiClient from "./client";

const endpoint = "/facturascliente";

const getFacturas = (username, clienteid) =>
  apiClient.post(endpoint, { username, clienteid });

export default {
  getFacturas,
};
