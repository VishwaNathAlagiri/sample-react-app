import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8001/",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default () => {
  return Api;
};
