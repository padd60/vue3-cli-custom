import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { Home, About } from '@/views';
import { about, home } from '@/router/path';

const routes: Array<RouteRecordRaw> = [
  {
    path: home,
    name: 'Home',
    component: Home,
  },
  {
    path: about,
    name: 'About',
    component: About,
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
