import "./plugins/axios";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/css/reset.css";
import "@/assets/css/base.css";

createApp(App).use(store).use(router).mount("#app");
