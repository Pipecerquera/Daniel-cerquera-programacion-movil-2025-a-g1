import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue'; // Asegúrate de que este archivo exista

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // Ruta inicial
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;