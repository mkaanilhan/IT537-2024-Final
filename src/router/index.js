import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import AnimeDetails from '../views/AnimeDetails.vue';
import PopularPage from '../views/PopularPage.vue';
import SearchPage from '../views/SearchPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: HomePage },
    { path: '/anime/:id', name: 'AnimeDetail', component: AnimeDetails },
    { path: '/popular', name: 'Popular', component: PopularPage },
    { path: '/search', name: 'Search', component: SearchPage }
  ],
});

export default router;
