import Mock from "mockjs";
export default {
  /** 用户登陆 */
  login: Mock.mock("/login", {
    code: 200,
    username: "@CNAME",
    token: "jwt-tocken"
  }),
  /** 获取用户信息 */
  getUserInfo: Mock.mock("/userInfo", {
    code: 200,
    data: {
      roles: ["admin"],
      name: "@NAME",
      avatar:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      department: "软件学院",
      jobNumber: "5771"
    }
  }),
  /** 根据学生id获取学生信息 */
  getStudentInfoById: Mock.mock("/getStudentInfoById", {
    code: 200,
    data: {
      studentid: "201619150123",
      studentdepartment: "软件学院",
      studentclass: "RB软工卓越161",
      studentname: "丁魏武"
    }
  }),
  getPaperPoint: Mock.mock("/getPaperPoint", {
    code: 200,
    data: {
      point: 50
    }
  }),
  /** 用户登出 */
  logout: Mock.mock("/logout", {
    code: 200,
    meg: "logout success"
  })
};
