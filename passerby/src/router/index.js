import { createRouter, createWebHistory } from "vue-router";

import Index from "../pages/index/index.vue";
import Chat from "../pages/chat/index.vue";

const routes = [
  { path: "/", redirect: "/index" },
  { path: "/index", component: Index, name: "Index" },
  { path: "/chat", component: Chat, name: "Chat" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
