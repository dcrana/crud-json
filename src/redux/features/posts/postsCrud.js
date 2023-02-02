import axios from "axios";
import config from "../../../config";


export const getAllPosts = () => {
    return axios.get(`${config.default.allPosts}`);
  };