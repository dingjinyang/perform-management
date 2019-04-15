const getters = {
    token: state => state.user.token,
    userInfo: state => state.user.info,
    permissionRouters: state => state.permission.routers,
    addRouters: state => state.permission.addRouters
};
export default getters;