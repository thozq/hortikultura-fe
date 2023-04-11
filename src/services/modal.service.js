import axios from 'axios';
import authHeader from './auth-header';
const API_URL = process.env.REACT_APP_API_URL;

const getAllModal = async (id) => {
  return axios.get(API_URL + 'modal/modal/' + id, { headers: authHeader() });
};

const addModal = async (id, data) => {
  return axios.post(API_URL + 'modal/addModal/' + id, data, { headers: authHeader() });
};
const modalService = {
  getAllModal,
  addModal
};

export default modalService;
