import axios from "axios";
import configApp from "../config";

let REACT_APP_API_URL = configApp.REACT_APP_API_URL;

export const postRequest = async (endpoint, data, params, token) => {
  let url = REACT_APP_API_URL + endpoint;
  return await axios.post(url, data, {
    params: params,
    timeout: 20000,
    // headers: {
    //   Authorization: token || store.getState().userData.token,
    // },
  });
};

export const getRequest = async (endpoint, params) => {
  let url = REACT_APP_API_URL + endpoint;
  return await axios.get(url, {
    params: params,
    timeout: 20000,
    // headers: {
    //   Authorization: token || store.getState().userData.token,
    // },
  });
};
