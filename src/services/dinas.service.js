import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;
import authHeader from './auth-header';

const filterStatisik = async (params) => {
  return axios.get(API_URL + 'dinas', { headers: authHeader(), params: params });
};

const dinasService = {
  filterStatisik
};
export default dinasService;
