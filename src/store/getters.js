const getters = {
    token: state => state.user.token,
    sidebar: state => state.app.sidebar,
    device: state => state.app.device,
    userInfo: state => state.user.info,
    permissionRouters: state => state.permission.routers,
    addRouters: state => state.permission.addRouters
};
export default getters;