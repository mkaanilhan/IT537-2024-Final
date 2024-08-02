import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router';
import './assets/main.css'; // Tailwind CSS

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');


// 6X2Q3RM7BNUXE6E3EBB6VZJWFZ2PSCNSMX


