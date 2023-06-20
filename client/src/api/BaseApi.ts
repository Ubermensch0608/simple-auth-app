import axios from "axios";

class BaseApi {
  public axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_END_POINT,
    withCredentials: true,
  });
}

export default new BaseApi().axiosInstance;
