import apiClient from "./client";

const endpoint = "/datoslinea";

const getDatosLinea = (username, linea) =>
  apiClient.post(endpoint, { username, linea });

export default { getDatosLinea };
