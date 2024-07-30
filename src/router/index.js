import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import PopularPage from '../views/PopularPage.vue';
import SearchPage from '../views/SearchPage.vue';
import AnimeDetails from '../views/AnimeDetails.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/popular', name: 'Popular', component: PopularPage },
  { path: '/search', name: 'Search', component: SearchPage },
  { path: '/anime/:id', name: 'AnimeDetails', component: AnimeDetails, props: true }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;