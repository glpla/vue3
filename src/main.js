import "./assets/main.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
axios.defaults.baseURL = import.meta.env.VITE_BASE_URL;
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.provide("axios", axios);

app.mount("#app");
