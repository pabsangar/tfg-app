import apiClient from "./client";

const endpoint = "/facturacliente";

const getFacturaPDF = (username, clienteid, numfactura, fecha) =>
  apiClient.post(endpoint, { username, clienteid, numfactura, fecha });

export default {
  getFacturaPDF,
};
