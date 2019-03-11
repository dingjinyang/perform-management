import router from "./router";
import store from "./store";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { getToken } from "./util/token";

NProgress.configure({ showSpinner: false });

router.beforeEach((to, from, next) => {
  /// 开启加载条
  NProgress.start();

  /// 如果没有Token,重定向到登陆页
  if (!getToken()) {
    if (to.path.includes(`login`)) {
      next();
    } else {
      next(`/login`);
      NProgress.done();
    }
  } else {
    /// 直接访问登陆页面
    // if (to.path === "/login") {
    //   next({ path: "/" });
    //   NProgress.done();
    // } else {
    /// 判断当前用户是否已经获取userInfo
    if (store.getters.info.roles.length !== 0) {
      next();
    } else {
      store
        .dispatch("getUserInfo")
        .then(async res => {
          const roles = res.info.roles;
          /// 根据角色生成可访问路由表
          await store.dispatch("generateRouters", { roles });
          /// 添加到 router
          router.addRoutes(store.getters.addRouters);
          /// hack方法 确保addRoutes已完成
          next({ ...to, replace: true });
        })
        .catch(async err => {
          await store.dispatch("fontLogout");
          alert(err || "认证失败，请重新登陆");
          next({ path: "/" });
        });
      // }
    }
  }
});

/// 结束加载条
router.afterEach(() => {
  NProgress.done();
});
