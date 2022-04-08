import apiClient from "./client";

const endpoint = "/lineascliente";

const getLineas = (username, clienteid) =>
  apiClient.post(endpoint, { username, clienteid });

export default {
  getLineas,
};
