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
  createStock: (SizeId, WarehouseId, qty) => {
    return axios.post("/api/createStock", SizeId, WarehouseId, qty);
  },
  addStock: (SizeId, WarehouseId, qty) => {
    console.log(SizeId, WarehouseId, qty)
    return axios.put("/api/addStock/?SizeId=" + SizeId + "&WarehouseId=" + WarehouseId + "&qty=" + qty);
  },
  getStock: () => {
    return axios.get("/api/getStock");
  },
  searchStock: (SizeId, WarehouseId) => {
    return axios.get("/api/searchStock/?SizeId=" + SizeId + "&WarehouseId=" + WarehouseId)
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