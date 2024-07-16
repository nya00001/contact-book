import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ContactView from '../views/ContactView.vue';
import AddContactView from '../views/AddContactView.vue';
import EditContactView from '../views/EditContactView.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/contact/:id', component: ContactView },
  { path: '/add-contact', component: AddContactView },
  { path: '/edit-contact/:id', component: EditContactView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
