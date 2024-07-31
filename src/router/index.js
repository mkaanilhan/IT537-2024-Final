import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PokemonDetails from '../views/PokemonDetails.vue'
import PokemonAbilities from '../components/PokemonAbilities.vue'
import PokemonStats from '../components/PokemonStats.vue'
import SellPokemon from '../views/SellPokemon.vue'  
import CatchPokemon from '../views/CatchPokemon.vue' 
import FeedPokemon from '../views/FeedPokemon.vue'
import FightPage from '../views/FightPage.vue'  


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/fight',
    name: 'FightPage',
    component: FightPage   },
  {
    path: '/sell',
    name: 'SellPokemon',
    component: SellPokemon  
  },
  {
    path: '/catch',
    name: 'CatchPokemon',
    component: CatchPokemon  
  },
  {
    path: '/pokemon/:name',
    name: 'PokemonDetails',
    component: PokemonDetails
  },
  {
    path: '/pokemon/random',
    name: 'RandomPokemon',
    component: PokemonDetails 
  },
  {
    path: '/feed',
    name: 'FeedPokemon',
    component: FeedPokemon
  },
  {
    path: '/abilities',
    name: 'PokemonAbilities',
    component: PokemonAbilities
  },
  {
    path: '/stats',
    name: 'PokemonStats',
    component: PokemonStats
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
