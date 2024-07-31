import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginPage from '../views/LoginPage.vue';
import SignUpPage from '../views/SignUpPage.vue';
import BasketPage from '../views/BasketPage.vue';
import AccountDetailPage from '../views/AccountDetailPage.vue';
import CuisineDetail from '../views/CuisineDetail.vue';
import AboutPage from '../views/AboutPage.vue';
import CuisinePage from '../views/CuisinePage.vue';
import CheckoutPage from '../views/CheckoutPage.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpPage
  },
  {
    path: '/basket',
    name: 'basket',
    component: BasketPage
  },
  {
    path: '/account',
    name: 'account',
    component: AccountDetailPage
  },
  {
    path: '/cuisine/:name',
    name: 'cuisine',
    component: CuisineDetail,
    props: route => ({ name: route.params.name })
  },
  {
    path: '/about',
    name: 'about',
    component: AboutPage
  },
  {
    path: '/shop',
    name: 'cuisinepage',
    component: CuisinePage
  },
  {
    path: '/checkout',
    name: 'checkout',
    component: CheckoutPage
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
