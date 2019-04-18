import Layout from '@/layout/Layout'

export default [{
  path: "/scientific",
  component: Layout,
  name: "Scientific",
  meta: {
    text: "科研论文",
    icon: "page",
  },
  model: false,
  hideInMenu: false,
  children: [{
    path: "stupaper",
    name: "StudentPaper",
    component: () => import("@/views/scientific/StudentPaper"),
    meta: {
      text: "校级优秀毕业设计论文",
      icon: "content_copy"
    }
  }, {
    path: "teapaper",
    name: "TeacherPaper",
    component: () => import("@/views/scientific/TeacherPaper"),
    meta: {
      text: "教学改革科研论文",
      icon: "content_copy"
    }
  }]
}, {
  component: Layout,
  path: "/",
  name: "Personal",
  hideInMenu: true,
  children: [{
    hideInMenu: true,
    path: "/personal",
    component: () => import("@/views/Personal")
  }]
}]