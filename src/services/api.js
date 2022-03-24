import axios from "axios";

export const key = "19ccd095";

const api = axios.create({
  baseURL: "https://api.hgbrasil.com",
});

export default api;
