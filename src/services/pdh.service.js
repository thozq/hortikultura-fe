import axios from 'axios';
import authHeader from './auth-header';
const API_URL = process.env.REACT_APP_API_URL;

const getAllSupervisi = async () => {
  return axios.get(API_URL + 'supervisi/lihatsupervisi', { headers: authHeader() });
};

const pdhService = {
  getAllSupervisi
};

export default pdhService;
