import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import PersonaForm from '../components/PersonaForm.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/form', component: PersonaForm }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
