import { createApp } from 'vue';
import store from './store';
import router from './router';
import App from './App.vue';

require('@/assets/main.scss');

const app = createApp(App);
app
  .use(store)
  .use(router)
  .mount('#app');
