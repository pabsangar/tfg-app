import apiClient from "./client";

const endpoint = "/tarifalinea";

const getTarifa = (username, linea) =>
  apiClient.post(endpoint, { username, linea });

export default {
  getTarifa,
};
