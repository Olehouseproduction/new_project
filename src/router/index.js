import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Lobby.vue"),
    meta: {},
  },
  {
    path: "/Task_1",
    name: "Position",
    component: () => import("../components/Task_1.vue"),
    meta: {},
  },
  {
    path: "/Task_2",
    name: "Layering",
    component: () => import("../components/Task_2.vue"),
    meta: {},
  },
  {
    path: "/Task_3",
    name: "SwitchClass",
    component: () => import("../components/Task_3.vue"),
    meta: {},
  },
  {
    path: "/Task_4",
    name: "Props",
    component: () => import("../components/Task_4.vue"),
    meta: {},
  },
  {
    path: "/Task_5",
    name: "Game",
    component: () => import("../components/Task_5.vue"),
    meta: {},
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
