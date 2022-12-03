import { createApp } from "vue";
import App from "./App.vue";
// import './assets/main.css'
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";

// import Vue from "vue";
// import VueRouter from "vue-router";
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap-vue/dist/bootstrap-vue.css";


axios.defaults.baseURL = "http://127.0.0.1:8000"; //laravel serve

createApp(App).use(router).use(VueAxios, axios).mount("#app");

