import "./assets/main.css";

import { createApp } from "vue";
import axios from "axios";
import { createPinia } from "pinia";
import TlbsMap from "tlbs-map-vue";
import App from "./App.vue";
import router from "./router";
const app = createApp(App);
const pinia = createPinia();
app.provide("axios", axios);

app.use(pinia);
app.use(router);
app.use(TlbsMap);

app.mount("#app");
