import axios from "axios";
import appConfig from "../_config/appConfiguration.json";

const { baseURL } = appConfig.serverSettings;
const Api = axios.create({
  baseURL,
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default () => {
  return Api;
};
