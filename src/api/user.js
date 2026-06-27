import axiosInstance from "./axios";
import { API } from "../constants/api";

export const getUsers = () => {
  return axiosInstance.get(API.USERS);
};

export const getUserById = (id) => {
  return axiosInstance.get(`${API.USERS}/${id}`);
};

export const createUser = (data) => {
  return axiosInstance.post(API.USERS, data);
};

export const updateUser = (id, data) => {
  return axiosInstance.put(`${API.USERS}/${id}`, data);
};

export const deleteUser = (id) => {
  return axiosInstance.delete(`${API.USERS}/${id}`);
};