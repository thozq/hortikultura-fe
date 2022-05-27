import axios from 'axios';
import authHeader from './auth-header';
const API_URL = process.env.REACT_APP_API_URL;

const getAllTransaksi = async () => {
  return axios.get(API_URL + 'transaksi/lihattransaksi', { headers: authHeader() });
};

const getTransaksiById = async (id) => {
  return axios.get(API_URL + 'transaksi/lihattransaksi/' + id, { headers: authHeader() });
};

const getTransaksiByType = async (tipe) => {
  return axios.get(API_URL + 'transaksi/lihattransaksi' + tipe, { headers: authHeader() });
};

const addTransaksi = async (data) => {
  return axios.post(API_URL + 'transaksi/tambahtransaksi', data, { headers: authHeader() });
};

const deleteTransaksi = async (id) => {
  return axios.delete(API_URL + 'transaksi/hapustransaksi/' + id, { headers: authHeader() });
};

const acceptTransaksi = async (id) => {
  return axios.put(API_URL + 'transaksi/ubahstatus/terima/' + id, {}, { headers: authHeader() });
};

const declineTransaksi = async (id) => {
  return axios.put(API_URL + 'transaksi/ubahstatus/tolak/' + id, {}, { headers: authHeader() });
};

const editTransaksi = async ({ id, formData }) => {
  return axios.put(API_URL + 'transaksi/ubahstatus/ajukankembali/' + id, formData, {
    headers: authHeader()
  });
};

const transaksiService = {
  getAllTransaksi,
  getTransaksiById,
  getTransaksiByType,
  addTransaksi,
  deleteTransaksi,
  acceptTransaksi,
  declineTransaksi,
  editTransaksi
};
export default transaksiService;
