import axios from 'axios';
import authHeader from './auth-header';
const API_URL = process.env.REACT_APP_API_URL;

const getAllBlanko = async () => {
  return axios.get(API_URL + 'blanko/lihatblanko', { headers: authHeader() });
};

const getBlankoById = async (id) => {
  return axios.get(API_URL + 'blanko/lihatblanko/' + id, { headers: authHeader() });
};

const getBlankoByType = async (type) => {
  return axios.get(API_URL + 'blanko/lihatblankobytype/' + type, { headers: authHeader() });
};

const addBlanko = async (data) => {
  return axios.post(API_URL + 'blanko/tambahblanko', data, { headers: authHeader() });
};

const blankoService = {
  getAllBlanko,
  getBlankoById,
  getBlankoByType,
  addBlanko
};
export default blankoService;
