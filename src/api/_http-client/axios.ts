import axios from 'axios';

import { apiBaseUrl } from '../urls';
import { clientErrorInterceptor } from './interceptors';

export const axiosInstance = axios.create({
  baseURL: apiBaseUrl,
});

// Client response interceptor
axiosInstance.interceptors.response.use(response => response, clientErrorInterceptor);
