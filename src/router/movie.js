import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Details from "../views/Details.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/about", component: About },
  { path: "/movie/:id", component: Details },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
