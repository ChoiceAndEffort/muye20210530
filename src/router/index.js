import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/home",//首页
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },

  {
    path: "/company",//关于公司
    name: "Company",
    component: () => import("@/views/company/Index.vue"),
    children: [
      {
        path: "/company/introduce",//公司介绍
        name: "Introduce",
        component: () => import("@/views/company/introduce/Index.vue"),
      },
      {
        path: "/company/history",//公司发展
        name: "History",
        component: () => import("@/views/company/history/Index.vue"),
      },
    ],
  },
  {
    path: "/industrial",//产业发展
    name: "Industrial",
    component: () => import("@/views/industrial/Index.vue"),
    children: [
      // {
      //   path: "/company/introduce",//
      //   name: "Introduce",
      //   component: () => import("@/views/company/introduce/Index.vue"),
      // },
      // {
      //   path: "/company/history",//
      //   name: "History",
      //   component: () => import("@/views/company/history/Index.vue"),
      // },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
