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
  getAllBrands: () => {
    return axios.get("/api/getAllBrands");
  },
  getAllStyles: () => {
    return axios.get("/api/getAllStyles");
  },
  getAllColors: () => {
    return axios.get("/api/getAllColors");
  },
  getAllSizes: () => {
    return axios.get("/api/getAllSizes");
  },
  getStylesById: BrandId => {
    return axios.get("/api/getStylesById/?BrandId=" + BrandId);
  },
  getColorsById: StyleId => {
    return axios.get("/api/getColorsById/?StyleId=" + StyleId);
  },
  getSizesById: ColorId => {
    return axios.get("/api/getSizesById/?ColorId=" + ColorId);
  }
};