import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "home",
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("@/views/Home.vue"),
  },

  {
    path: "/company-introduce",
    name: "CompanyIntroduce",
    component: () => import("@/views/companyIntroduce/Index.vue"),
    children: [
      {
        path: "/company-introduce/introduce",
        name: "Introduce",
        component: () => import("@/views/companyIntroduce/introduce/Index.vue"),
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
