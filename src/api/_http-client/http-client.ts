import { AxiosRequestConfig, AxiosResponse } from 'axios';

import { axiosInstance } from './axios';

export interface HttpClient {
  get<T = unknown>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = unknown, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T>;
  put<T = unknown, D = unknown>(url: string, data?: D, config?: AxiosRequestConfig<D>): Promise<T>;
  delete<T = unknown, D = unknown>(url: string, config?: AxiosRequestConfig<D>): Promise<T>;
}

const responseData = (response: AxiosResponse) => response.data;

export const http: HttpClient = {
  get: (...args) => axiosInstance.get(...args).then(responseData),
  post: (...args) => axiosInstance.post(...args).then(responseData),
  put: (...args) => axiosInstance.put(...args).then(responseData),
  delete: (...args) => axiosInstance.delete(...args).then(responseData),
};
