import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import PokemonDetails from '../components/PokemonDetails.vue'
import About from '../views/About.vue'
import Favorites from '../views/Favorites.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/pokemon/:name',
    name: 'PokemonDetails',
    component: PokemonDetails
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router