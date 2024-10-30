import { createRouter, createWebHistory } from 'vue-router';
import Events from '../views/Events-News/Events.vue';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/events',
    name: 'Events',
    component: Events
  },
  // Define other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
