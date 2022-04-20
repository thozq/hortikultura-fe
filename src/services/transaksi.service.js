import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://backend-cabai.herokuapp.com/api/v1/';

const getAllTransaksi = async () => {
  return axios.get(API_URL + 'petani/penjualan/lihatpenjualan', { headers: authHeader() });
};

const getTransaksiById = async (id) => {
  return axios.get(API_URL + 'petani/penjualan/lihatpenjualan/' + id, { headers: authHeader() });
};

const getTransaksiByTipeCabai = async (tipe) => {
  return axios.get(API_URL + 'petani/penjualan/lihatpenjualan' + tipe, { headers: authHeader() });
};

const addTransaksi = async (data) => {
  return axios.post(API_URL + 'petani/penjualan/tambahpenjualan', data, { headers: authHeader() });
};

const transaksiService = {
  getAllTransaksi,
  getTransaksiById,
  getTransaksiByTipeCabai,
  addTransaksi
};
export default transaksiService;
