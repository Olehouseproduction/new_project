import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../components/Lobby.vue"),
    meta: {},
  },
  {
    path: "/Task1",
    name: "Position",
    component: () => import("../components/Task1.vue"),
    meta: {},
  },
  {
    path: "/Task2",
    name: "Layering",
    component: () => import("../components/Task2.vue"),
    meta: {},
  },
  {
    path: "/Task3",
    name: "SwitchClass",
    component: () => import("../components/Task3.vue"),
    meta: {},
  },
  {
    path: "/Task4",
    name: "Props",
    component: () => import("../components/Task4.vue"),
    meta: {},
  },
  {
    path: "/Task5",
    name: "Game",
    component: () => import("../components/Task5.vue"),
    meta: {},
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
