import axios from "axios";
import config from "../../../config";

export const getAllPosts = () => {
  return axios.get(`${config.default.allPosts}`);
};

export const addNewPost = (payload) => {
  return axios.post(`${config.default.allPosts}`,payload);
};


export const editPost = (payload) => {
  return axios.put(`${config.default.allPosts}/${payload?.id}`,payload);
};

export const removePost = (payload) => {
  return axios.delete(`${config.default.allPosts}/${payload?.id}`);
};
