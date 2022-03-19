import axios from "axios";

export const key = "f4f2abd0";

const api = axios.create({
  baseURL: "https://api.hgbrasil.com",
});

export default api;
