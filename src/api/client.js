import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.2.12:9000/api",
});

export default apiClient;