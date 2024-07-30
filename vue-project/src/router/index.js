import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/HomePage.vue'
import Basket from '../views/ShoppingBasket.vue'
import AboutPage from '../views/AboutPage.vue'
import ProductDetails from '../views/ProductDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  },
  {
    path: '/aboutPage',
    name: 'AboutPage',
    component: AboutPage
  },
  {
    path: '/product/:id',
    name: 'ProductDetails',
    component: ProductDetails,
    props: true
  },
 
 
 
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
