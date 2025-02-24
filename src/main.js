import "./assets/main.css";

import { createApp } from "vue";
import axios from "axios";
import { createPinia } from "pinia";
import TlbsMap from "tlbs-map-vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);
app.provide("axios", axios);
app.use(createPinia());
app.use(router);
app.use(TlbsMap);

app.mount("#app");
