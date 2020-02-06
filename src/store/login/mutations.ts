import router from '@/router';
import session from '@/session';
import { Error } from '@/store/types';
import { MutationTree } from 'vuex';
import { LoginState, User } from './types';
import store from '@/store/store';

export const mutations: MutationTree<LoginState> = {
  LOGIN_SUCCESS: (state, payload: User) => {
    state.user = payload;
    session.create(payload);
    router.push('/');
  },
  LOGIN_ERROR: (state, payload: Error) => {
    state.user = undefined;
    store.commit('alert/SHOW', {
      prefix: 'LOGIN_ERROR_',
      error: payload.status,
    });
  },
  LOGOUT_SUCCESS: (state) => {
    state.user = undefined;
    session.destroy();
    router.push('/login');
  },
  LOGOUT_ERROR: (state, payload: Error) => {
    state.user = undefined;
    store.commit('alert/SHOW', {
      prefix: 'LOGIN_ERROR_',
      error: payload.status,
    });
    session.destroy();
    router.push('/login');
  },
  LOGIN_DISCONNECTED: (state, payload: Error) => {
    state.user = undefined;
    store.commit('alert/SHOW', {
      prefix: 'LOGIN_ERROR_',
      error: payload.status,
    });
    session.destroy();
    router.replace('/login');
  },
};
