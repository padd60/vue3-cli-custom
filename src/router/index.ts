import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { Home, About, Test } from '@/views';
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
    children: [{
      path: 'test',
      component: Test,
    }],
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
