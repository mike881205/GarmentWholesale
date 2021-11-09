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
  addStock: stockInfo => {
    return axios.post("/api/addStock", stockInfo);
  },
  getStock: () => {
    return axios.get("/api/getStock");
  },
  getWarehouses: () => {
    return axios.get("/api/getWarehouses");
  },
  getBrands: () => {
    return axios.get("/api/getBrands");
  },
  getStyles: BrandId => {
    return axios.get("/api/getStyles/?BrandId=" + BrandId);
  },
  getColors: StyleId => {
    return axios.get("/api/getColors/?StyleId=" + StyleId);
  },
  getSizes: ColorId => {
    return axios.get("/api/getSizes/?ColorId=" + ColorId);
  }
};