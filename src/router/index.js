import { createRouter, createWebHashHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import WestpacBpay from '../views/WestpacBpay.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/bpay',
    name: 'bpay',
    component: WestpacBpay,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
