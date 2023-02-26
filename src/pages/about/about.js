import { createApp } from "vue";
import About from "./About.vue";
import 'reset-css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "@/assets/css/style.scss";
import "@/assets/css/media.scss";
import '@fortawesome/fontawesome-free/js/all.js';

createApp(About).mount("#app");