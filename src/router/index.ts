import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import LoginView from '../views/LoginView.vue';
import ErrorView from '../views/ErrorView.vue';

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: "/:catchAll(.*)",
    name: "error",
    component: ErrorView,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

// Middleware to check authentication before each navigation
router.beforeEach((to, from, next) => {
  const requiresAuth = to.name !== 'login';
  const isAuthenticated = !!sessionStorage.getItem('authCode');

  if (requiresAuth && !isAuthenticated) {
    next({ name: 'login' });
  } else {
    next();
  }
});

export default router;