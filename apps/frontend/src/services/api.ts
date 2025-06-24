import axios, { AxiosInstance } from 'axios';
import { ApiSettings } from '../const';

const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: ApiSettings.BASE_URL,
    timeout: ApiSettings.API_TIMEOUT,
  });
  return api;
};

export { createAPI };
