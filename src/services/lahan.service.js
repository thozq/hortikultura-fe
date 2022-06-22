import axios from 'axios';
import authHeader from './auth-header';
const API_URL = process.env.REACT_APP_API_URL;

const getAllLahan = async () => {
  return axios.get(API_URL + 'lahan/lihatlahan', { headers: authHeader() });
};

const addLahan = async (data) => {
  return axios.post(API_URL + 'lahan/tambahlahan', data, { headers: authHeader() });
};

const getLahanName = async () => {
  return axios.get(API_URL + 'lahan/namalahan', { headers: authHeader() });
};

const getLahanById = async (id) => {
  return axios.get(API_URL + 'lahan/lihatlahan/' + id, { headers: authHeader() });
};

const lahanService = {
  getAllLahan,
  addLahan,
  getLahanName,
  getLahanById
};
export default lahanService;
