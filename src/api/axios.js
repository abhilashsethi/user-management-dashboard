import axios from "axios";
import { API } from "../constants/api";

const axiosInstance = axios.create({
  baseURL: API.BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    console.log(
      `[Request] ${config.method?.toUpperCase()} ${config.url}`
    );
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error("[API Error]", error);

    return Promise.reject(error);
  }
);

export default axiosInstance;