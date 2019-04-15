import "@/plugins/axios";
const _axios = axios;

export default {
  /**
   * 根据学生id获取学生信息
   * @param {string} data 学生Id
   */
  getStudentInfoById(data) {
    return _axios.post("/getStudentInfoById", data);
  },
  getPaperPoint(data) {
    return _axios.post("/getPaperPoint", data)
  }
};

export function login(loginForm) {
  return _axios.post("/login", {
    ...loginForm
  });
}

export function getUserInfo() {
  return _axios.get("/userInfo");
}

export function logout() {
  return _axios.get("/logout");
}