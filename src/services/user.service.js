import axios from 'axios';
import authHeader from './auth-header';
const API_URL = process.env.REACT_APP_API_URL;

const getPedagangByRole = (role) => {
  return axios.get(API_URL + 'transaksi/lihatpedagang/' + role, { headers: authHeader() });
};

const userService = {
  getPedagangByRole
};
export default userService;
