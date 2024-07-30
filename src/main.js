import "../src/index.css";
import "../src/assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router/movie";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
