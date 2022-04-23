import axios from 'axios';
import authHeader from './auth-header';
const API_URL = 'https://backend-cabai.herokuapp.com/api/v1/';

const getPedagangByRole = (role) => {
  return axios.get(API_URL + 'transaksi/lihatpedagang/' + role, { headers: authHeader() });
};

const userService = {
  getPedagangByRole
};
export default userService;
