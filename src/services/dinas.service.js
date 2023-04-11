import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL;
import authHeader from './auth-header';

const filterStatisik = async (data) => {
  return axios.post(API_URL + 'dinas', data, { headers: authHeader() });
};

const dinasService = {
  filterStatisik
};
export default dinasService;
