import constantRouterMap from '@/router/common';
import asyncRouterMap from '@/router/modules'
const permission = {
  state: {
    routers: constantRouterMap,
    addRouters: []
  },
  mutations: {
    SET_ROUTERS: (state, routers) => {
      state.addRouters = routers;
      state.routers = constantRouterMap.concat(routers);
    }
  },
  actions: {
    async generateRouters({
      commit
    }, data) {
      commit("SET_ROUTERS", await generateRouters(data));
    }
  }
};

export default permission;

/**
 * 通过meta.role判断是否与当前用户权限匹配
 * @param {*} roles
 * @param {*} route
 */
const hasPermission = (roles, route) => {
  if (route.meta && route.meta.roles) {
    return roles.some(role => route.meta.roles.includes(role));
  } else {
    return true;
  }
};

/**
 * 递归过滤异步路由表，返回符合用户角色权限的路由表
 * @param routers 路由表
 * @param roles 角色表
 */
const asyncFilterRouter = (routers, roles) => {
  let result = [];
  routers.forEach(item => {
    const temp = {
      ...item
    };
    if (hasPermission(roles, temp)) {
      if (temp.children) {
        temp.children = asyncFilterRouter(temp.children, roles);
      }
      result.push(temp);
    }
  });

  return result;
};

/**
 * 生成符合角色权限的路由表
 * @param data
 * @returns {*}
 */
const generateRouters = async data => {
  const {
    roles
  } = data;
  if (roles.includes("admin")) {

    return asyncRouterMap;
  } else {
    return await asyncFilterRouter(asyncRouterMap, roles);
  }
};