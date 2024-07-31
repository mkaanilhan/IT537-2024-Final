import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/pages/Home.vue';
import WeatherDetails from '@/pages/WeatherDetails.vue';
import About from '@/pages/About.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/details/:location', component: WeatherDetails },
  { path: '/about', component: About },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
