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
  addBrand: brand => {
    return axios.post("/api/addBrand", brand);
  },
  addStyle: style => {
    return axios.post("/api/addStyle", style);
  },
  addColor: color => {
    return axios.post("/api/addColor", color);
  },
  addSize: size => {
    return axios.post("/api/addSize", size);
  },
  addStock: stock => {
    return axios.post("/api/addStock", stock);
  },
  getWarehouses: () => {
    return axios.get("/api/getWarehouses");
  }
};