import axios from 'axios';
import { middleware } from '@root/config';
import { formatFullPath } from '@root/utils';

const { protocol, address, port, service } = middleware;
const request = axios.create({
  baseURL: formatFullPath({ protocol, address, port, subUrl: service.vue }),
  // withCredentials: true
});

request.interceptors.request.use(config => {
  return config;
}, e => {
  return Promise.reject(e);
});

request.interceptors.response.use(res => {
  let result = {};
  try {
    result = res.data.data;
  } catch (e) {
    result = {};
  }
  return result;
}, (e) => {
  return {};
});

export default request;
