import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://backend-cabai.herokuapp.com/api/v1/';

const getDashboardStok = async () => {
  return axios.get(API_URL + 'stok', { headers: authHeader() });
};
const addStok = (data) => {
  return axios.post(API_URL + 'stok/tambahstok', data, { headers: authHeader() });
};
const getAllStok = () => {
  return axios.get(API_URL + 'stok/lihatstok', { headers: authHeader() });
};
const getStokById = (id) => {
  return axios.get(API_URL + `stok/lihatstok/${id}`, {
    headers: authHeader()
  });
};
const getStokByType = (type) => {
  return axios.get(API_URL + `stok/lihatstok/${type}`, {
    headers: authHeader()
  });
};

const stokService = {
  getDashboardStok,
  addStok,
  getAllStok,
  getStokById,
  getStokByType
};
export default stokService;
