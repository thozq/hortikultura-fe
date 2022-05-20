import axios from 'axios';
import authHeader from './auth-header';
const API_URL = process.env.REACT_APP_API_URL;

const signup = (name, email, password, provinsi, kecamatan, kabupaten, alamat, role) => {
  return axios.post(API_URL + 'auth/signup', {
    name,
    email,
    password,
    provinsi,
    kecamatan,
    kabupaten,
    alamat,
    role
  });
};

const signin = (email, password) => {
  return axios
    .post(API_URL + 'auth/signin', {
      email,
      password
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data.user));
        localStorage.setItem('auth-token', response.data.token);
      }
      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem('user');
  localStorage.removeItem('auth-token');
  localStorage.removeItem('child-user');
  localStorage.removeItem('child-token');
};

const relog = async (data) => {
  return axios
    .post(API_URL + 'supervisi/relog', data, { headers: authHeader() })
    .then((response) => {
      if (response.data) {
        localStorage.setItem('child-user', JSON.stringify(response.data.user));
        localStorage.setItem('child-token', response.data.token);
      }
      return response.data;
    });
};
const authService = {
  signup,
  signin,
  logout,
  relog
};
export default authService;
