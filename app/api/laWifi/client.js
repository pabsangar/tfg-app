import { create } from "apisauce";

import authStorage from "../../auth/storage";

const apiClient = create({
  baseURL: "https://www.lawifi.es:3031/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.getToken();
  if (!authToken) return;
  request.headers["Authorization"] = "Bearer " + authToken;
});

export default apiClient;
