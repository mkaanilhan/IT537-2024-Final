import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Account from '../pages/Account.vue';
import TransactionDetails from '../pages/TransactionDetails.vue';

const routes = [
    { path: '/', name: 'Home', component: Home },
    { path: '/account/:address', name: 'Account', component: Account },
    { path: '/transaction/:txHash', name: 'TransactionDetails', component: TransactionDetails },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
