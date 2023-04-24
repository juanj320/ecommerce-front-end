import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/app",
    name: "app",
    meta: {
      requireAuth: true,
    },
    component: () => import("../modules/admin/AppLayoutView.vue"),
    children: [
      {
        path: "dashboard",
        name: "app.dashboard",
        component: () =>
          import("../modules/admin/modules/dashboard/DashboardView.vue"),
      },
    ],
  },
  {
    path: "/home",
    name: "home",
    meta: {
      requireGuest: true,
    },
    component: () => import("../modules/home/HomeView.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      requireGuest: true,
    },
    component: () => import("../modules/login/LoginView.vue"),
  },
  {
    path: "/reset-password/:token",
    name: "reset-password",
    meta: {
      requireGuest: true,
    },
    component: () => import("../modules/login/resetPasswordView.vue"),
  },
  {
    path: "**",
    name: "not-found",
    component: () => import("../modules/general/NotFoundView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
