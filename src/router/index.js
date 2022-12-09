import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    // 使得一个路由地址A与另一个路由地址B联系起来，执行A的时候会跳转执行B
    redirect: '/login'
  },
  {
    path: "/login",
    name: "login",
    meta: { title: '登录' },
    component: () =>
      import("../views/login.vue"),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/home/layout/layout.vue"),
    children: [
      {
        path: "/index",
        name: "Index",
        meta: { title: '首页' },
        component: () => import("../views/home/index/index.vue"),
      },{
        path: "/employee",
        name: "Employee",
        meta: { title: '学生管理' },
        component: () => import("../views/home/employee/index.vue"),
        children: [
          {
            path: "/employee/list",
            name: "EmployeeList",
            meta: { title: '学生列表' },
            component: () => import("../views/home/employee/list.vue"),
          }, {
            path: "/employee/save",
            name: "UserSave",
            meta: { title: '添加学生' },
            component: () => import("../views/home/employee/save.vue"),
          }
        ]
      },{
        path: "/employee",
        name: "Employee",
        meta: { title: '组件练习' },
        component: () => import("../views/home/employee/index.vue"),
        children: [
          {
            path: "/employee/test01",
            name: "EmployeeList",
            meta: { title: 'layout布局' },
            component: () => import("../views/home/employee/test01.vue")
          },{
            path: "/employee/test02",
            name: "EmployeeList",
            meta: { title: '备选项' },
            component: () => import("../views/home/employee/test02.vue")
          },{
            path: "/employee/test03",
            name: "EmployeeList",
            meta: { title: '计数器' },
            component: () => import("../views/home/employee/test03.vue")
          }
          ,{
            path: "/employee/test04",
            name: "EmployeeList",
            meta: { title: '选择器' },
            component: () => import("../views/home/employee/test04.vue")
          }
        ]
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
