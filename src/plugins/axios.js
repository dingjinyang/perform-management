import Vue from "vue";
import axios from "axios";
import { getToken, setToken } from "../util/token";

axios.defaults.headers.common["Authorization"] = getToken();

/** @namespace process.env.VUE_APP_APIURL */
let config = {
  baseURL: process.env.VUE_APP_APIURL,
  timeout: 3 * 1000, // Timeout
  withCredentials: true // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
  function(config) {
    // Do something before request is sent
    console.info(config);
    return config;
  },
  function(error) {
    // Do something with request error
    console.error(error);
    return Promise.reject(error);
  }
);

// Add a response interceptor
_axios.interceptors.response.use(
  function(response) {
    // Do something with response data
    console.info(response);
    return response.data;
  },
  function(error) {
    // Do something with response error
    console.error(error);
    return Promise.reject(error);
  }
);

Plugin.install = function(Vue) {
  Vue.axios = _axios;
  window.axios = _axios;
  Object.defineProperties(Vue.prototype, {
    axios: {
      get() {
        return _axios;
      }
    },
    $axios: {
      get() {
        return _axios;
      }
    }
  });
};

Vue.use(Plugin);

export default Plugin;
