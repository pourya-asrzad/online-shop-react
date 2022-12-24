import axios from "axios";
import { API_BASE_URL } from "../configs/variables.config";

class HttpService {
  constructor() {
    axios.defaults.baseURL = API_BASE_URL;
  }
  get(url, config) {
    return axios.get(url, config);
  }
  delete(url, config) {
    return axios.delete(url, config);
  }
  post(url, config, data) {
    return axios.post(url, data, config);
  }
  patch(url, config, data) {
    return axios.patch(url, data, config);
  }
  put(url, config, data) {
    return axios.put(url, data, config);
  }
}
export default new HttpService();
