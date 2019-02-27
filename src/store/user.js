import { login, getUserInfo } from "../api/user";
import { getToken, setToken, removeToken } from "../util/token";

const user = {
  state: {
    token: getToken(),
    name: "",
    avatar: "",
    roles: []
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    }
  },

  actions: {
    /**
     * store - 登陆
     * @param {*} commit commit
     * @param loginForm 用户信息
     */
    login({ commit }, loginForm) {
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
    getUserInfo({ commit }) {
      return new Promise((resolve, reject) => {
        getUserInfo()
          .then(res => {
            const data = res.data;
            if (data.roles && data.roles.length > 0) {
              // 验证返回的roles是否是一个非空数组
              commit("SET_ROLES", data.roles);
            } else {
              reject("getInfo: roles must be a non-null array !");
            }
            commit("SET_NAME", data.name);
            commit("SET_AVATAR", data.avatar);
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
    fontLogout({ commit }) {
      commit("SET_TOKEN", "");
      removeToken();
    }
  }
};

export default user;
