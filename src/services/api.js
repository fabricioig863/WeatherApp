import axios from 'axios';

export const key = "07973b7f";

const api = axios.create({
  baseURL: 'https://api.hgbrasil.com'
})

export default api;