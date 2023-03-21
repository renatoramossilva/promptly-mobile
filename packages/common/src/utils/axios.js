import Axios from 'axios';

const AxiosInstance = Axios.create();
export const CancelToken = Axios.CancelToken;

export const setBaseURL = (URL) => {
  AxiosInstance.defaults.baseURL = URL;
};

export const setDefaultHeaderCommon = (key, value) => {
  AxiosInstance.defaults.headers.common[key] = value;
};

export default AxiosInstance;
