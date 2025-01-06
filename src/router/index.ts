import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import About from '../pages/About.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/projects', name: 'Projects', component: () => import('../pages/Projects.vue') },
  { path: '/skills', name: 'Skills', component: () => import('../pages/Skills.vue') },
  { path: '/coursework', name: 'Coursework', component: () => import('../pages/Coursework.vue') },
  { path: '/contacts', name: 'Contacts', component: () => import('../pages/Contacts.vue') }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
