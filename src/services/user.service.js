import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://backend-cabai.herokuapp.com/api/v1/';

const getPedagangByRole = (data) => {
  console.log('ini data', data);
  return axios.get(API_URL + 'petani/penjualan/lihatpedagang', { headers: authHeader() });
};

const userService = {
  getPedagangByRole
};
export default userService;
