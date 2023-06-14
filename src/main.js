import { createApp } from 'vue'
import { createPinia } from "pinia";
import App from './App.vue'
import router from './router'
import store from './store'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/main.css";

const app = createApp(App);

app.use(store);
app.use(router);
app.use(createPinia());

app.mount('#app');
