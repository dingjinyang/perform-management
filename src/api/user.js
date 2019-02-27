import "../plugins/axios";
// eslint-disable-next-line
const _axios = axios;

export function login(loginForm) {
  return _axios.post("/login", { ...loginForm });
}

export function getUserInfo() {
  return _axios.get("/userInfo");
}
