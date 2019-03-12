import Mock from "mockjs";
export default {
  login: Mock.mock("/login", {
    code: 200,
    username: "@NAME",
    token: "jwt-tocken"
  }),
  getUserInfo: Mock.mock("/userInfo", {
    code: 200,
    data: {
      roles: ["admin"],
      name: "admin",
      avatar:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      department: { id: 1, name: "软件学院" },
      jobNumber: "5771"
    }
  }),
  logout: Mock.mock("/logout", {
    code: 200,
    meg: "logout success"
  })
};
