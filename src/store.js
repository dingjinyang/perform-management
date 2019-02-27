import Vue from "vue";
import Vuex from "vuex";
import user from "./store/user";
import permission from "./store/permission";

Vue.use(Vuex);

const getters = {
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  permissionRouters: state => state.permission.routers,
  addRouters: state => state.permission.addRouters
};

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    user,
    permission
  },
  getters
});
