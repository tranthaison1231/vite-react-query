import axios from 'axios';
import qs from 'qs';
import { getToken } from './token';

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  paramsSerializer: params => {
    return qs.stringify(params, { encode: true });
  },
});

request.interceptors.request.use(
  config => {
    const token = getToken();
    if (token) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error.response || error.message);
  },
);

request.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error.response.data || error.message);
  },
);
export default request;
