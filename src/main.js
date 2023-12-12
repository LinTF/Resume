import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@/assets/css/style.scss";
import "@/assets/css/media.scss";
import "@/assets/css/bg.scss";
import '@fortawesome/fontawesome-free/js/all.js';
import router from "@/router/index.js";

createApp(App).use(router).mount("#app");