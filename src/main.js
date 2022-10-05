import { createApp } from 'vue';
import Toast from 'vue-toastification';
import store from './store';
import router from './router';
import App from './App.vue';
import 'vue-toastification/dist/index.css';

require('@/assets/main.scss');

const app = createApp(App);
const options = {
  // You can set your default options here
};

app
  .use(store)
  .use(router)
  .use(Toast, options)
  .mount('#app');
