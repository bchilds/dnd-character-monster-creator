import axios from "axios";

const apiBase = axios.create({
  baseURL: "http://localhost:3000/api",
});

export default apiBase;
