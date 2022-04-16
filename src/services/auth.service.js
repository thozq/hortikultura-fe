import axios from 'axios';
const API_URL = 'https://backend-cabai.herokuapp.com/api/v1/';
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
};
const authService = {
  signup,
  signin,
  logout
};
export default authService;
