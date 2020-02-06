import Home from '@/views/Home.vue';
import Login from '@/views/Login.vue';
import Register from '@/views/Register.vue';
import Account from '@/views/Account.vue';
import LostPassword from '@/views/LostPassword.vue';
import Vue from 'vue';
import Router from 'vue-router';
import store from './store/store';
import Session from './plugins/session';

Vue.use(Router);

/**
 * Router
 */
const router: Router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        isPrivate: true,
        layout: 'connected-layout',
        title: 'home',
      },
    },
    {
      path: '/account',
      name: 'account',
      component: Account,
      meta: {
        isPrivate: true,
        layout: 'connected-layout',
        title: 'account',
      },
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    },
    {
      path: '/register',
      name: 'register',
      component: Register,
    },
    {
      path: '/lost-password',
      name: 'lost-password',
      component: LostPassword,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

/**
 * Before each route
 */
router.beforeEach((to, from, next) => {
  // Session plugin
  const session: Session = Vue.$session;

  // Check if user authticated
  const isAuthenticated = session.isAuthenticated();

  // Check meta private or go login page
  if (to.meta.isPrivate && !isAuthenticated) {
    return next('/login');
  }

  store.commit('alert/HIDE');

  // Goto next route
  next();
});

export default router;
