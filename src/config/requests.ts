import { type AxiosRequestConfig } from "axios";
import { axiosInstance } from "./axios";

type AxiosConfig = AxiosRequestConfig | undefined;

export function get<T>(
  url: string,
  config: AxiosConfig = undefined
): Promise<T> {
  return axiosInstance(import.meta.env.VITE_BASE_URL_API)
    .get(url, config)
    .then((response) => Promise.resolve(response.data))
    .catch((error) => Promise.reject(new Error(error)));
}

export function post<T, R>(
  url: string,
  data: T,
  config: AxiosConfig = undefined
): Promise<R> {
  return axiosInstance(import.meta.env.VITE_BASE_URL_API)
    .post(url, data, config)
    .then((response) => Promise.resolve(response.data.result))
    .catch((error) => Promise.reject(new Error(error)));
}

export function remove<T>(
  url: string,
  config: AxiosConfig = undefined
): Promise<T> {
  return axiosInstance(import.meta.env.VITE_BASE_URL_API)
    .delete(url, config)
    .then((response) => Promise.resolve(response.data.result))
    .catch((error) => Promise.reject(new Error(error)));
}

export default {
  get,
  post,
  remove,
};
