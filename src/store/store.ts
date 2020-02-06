import Vue from 'vue';
import Vuex from 'vuex';
import { alert } from './alert';
import { modal } from './modal';
import { loading } from './loading';
import { login } from './login';
import { user } from './user';
import { RootState } from './types';

Vue.use(Vuex);

export default new Vuex.Store<RootState>({
  state: {
    version: '1.0.0',
    menuVisible: false,
  },
  modules: {
    modal,
    login,
    user,
    alert,
    loading,
  },
  mutations: {
    toggleMenu: (state) => {
      state.menuVisible = !state.menuVisible;
    },
    closeMenu: (state) => {
      state.menuVisible = false;
    },
    openMenu: (state) => {
      state.menuVisible = true;
    },
  },
  actions: {},
});
