import {
  login,
  getUserInfo,
  logout
} from '@/api/user';
import {
  getToken,
  setToken,
  removeToken
} from '@/utils/token';

const user = {
  state: {
    token: getToken(),
    info: {
      roles: []
    }
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_INFO: (state, info) => {
      state.info = info;
    }
  },

  actions: {
    /**
     * store - 登陆
     * @param {*} commit commit
     * @param loginForm 用户信息
     */
    login({
      commit
    }, loginForm) {
      return new Promise((resolve, reject) => {
        login(loginForm)
          .then(res => {
            setToken(res.token);
            commit("SET_TOKEN", res.token);
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    /**
     * 获取用户信息
     * @param commit
     * @returns {Promise<any>}
     */
    getUserInfo({
      commit
    }) {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then(res => {
            const data = res.data;
            if (data.roles && data.roles.length > 0) {
              // 验证返回的roles是否是一个非空数组
              commit("SET_INFO", data);
            } else {
              reject("getInfo: roles must be a non-null array !");
            }
            resolve(res);
          })
          .catch(err => {
            reject(err);
          });
      });
    },

    /**
     * 前端登出
     * @param commit
     * @returns {Promise<void>}
     */
    fontLogout({
      commit
    }) {
      return new Promise(resolve => {
        logout().then(res => {
          if (res.code === 200) {
            removeToken();
            commit("SET_TOKEN", "");
            resolve("success");
          }
        });
      });
    }
  }
};

export default user;