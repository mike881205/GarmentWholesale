import axios from "axios";

export default {
  register: user => {
    return axios.post("/api/register", user);
  },
  login: user => {
    return axios.post("/api/login", user);
  },
  isAuthorized: () => {
    return axios.get("/api/authorized");
  },
  logout: () => {
    return axios.get("/api/logout");
  },
  availableUN: username => {
    return axios.get("/api/user/?username=" + username);
  },
  addProduct: stock => {
    return axios.post("/api/addProduct", stock);
  },
  getWarehouses: () => {
    return axios.get("/api/getWarehouses");
  }
};