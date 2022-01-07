import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './styles/reset.scss';
import './styles/index.scss';

createApp(App).use(store).use(router).mount('#app');
