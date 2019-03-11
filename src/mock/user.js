import Mock from "mockjs";
export default {
  login: Mock.mock("/login", {
    code: 200,
    username: "@NAME",
    token: "jwt-tocken"
  }),
  getUserInfo: Mock.mock("/userInfo", {
    code: 200,
    info: {
      roles: ["admin"],
      name: "admin",
      avatar:
        "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif"
    }
  }),
  logout: Mock.mock("/logout", {
    code: 200,
    meg: "logout success"
  })
};
