import axios from "axios";

export const key = "3b2d739b";

const api = axios.create({
  baseURL: "https://api.hgbrasil.com",
});

export default api;
