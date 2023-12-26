import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", redirect: "/index/home" },
  {
    path: "/index",
    component: () => import("../pages/index/index.vue"),
    name: "Index",
    children: [
      {
        path: "home",
        component: () => import("../pages/home/index.vue"),
      },
      {
        path: "chat",
        component: () => import("../pages/chat/index.vue"),
      },
    ],
  },
];


const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
