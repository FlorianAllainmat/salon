import ConnectedLayout from '@/layouts/ConnectedLayout.vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import AxiosPlugin from '@/plugins/axios-plugin';
import store from '@/store/store';
import Vue from 'vue';
import App from './App.vue';
import i18n from './i18n';
import router from './router';
import session from './session';

// Use axis plugin
Vue.use(AxiosPlugin, {
  baseURL: process.env.VUE_APP_API_BASE_URL || '/',
  withCredentials: true,
});

// Production false
Vue.config.productionTip = false;

Vue.component('default-layout', DefaultLayout);
Vue.component('connected-layout', ConnectedLayout);

/**
 * Main app
 */
const app = new Vue({
  router,
  store,
  i18n,
  session,
  render: (h) => h(App),
}).$mount('#app');
