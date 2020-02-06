import { Error, RootState } from '@/store/types';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { ActionTree } from 'vuex';
import { LoginState, User } from './types';

export const actions: ActionTree<LoginState, RootState> = {
  login({ commit, state }, user: User): any {
    axios({
      url: '/api/v1/users/login',
      method: 'POST',
      data: user,
    }).then(
      (response: AxiosResponse) => {
        const payload: User = response && response.data;
        commit('LOGIN_SUCCESS', payload);
      },
      (error: AxiosError) => {
        const payload: Error = new Error(error);
        commit('LOGIN_ERROR', payload);
      },
    );
  },
  logout({ commit, state }): any {
    axios({
      url: '/api/v1/users/logout',
      method: 'POST',
    }).then(
      (response: AxiosResponse) => {
        const payload: User = response && response.data;
        commit('LOGOUT_SUCCESS', payload);
      },
      (error: AxiosError) => {
        const payload: Error = new Error(error);
        commit('LOGOUT_ERROR', payload);
      },
    );
  },
  register({ commit, state }, user: User): any {
    console.log(user);
    // axios({
    //   url: '/api/v1/users/register',
    //   method: 'POST',
    //   data: user,
    // }).then(
    //   (response: AxiosResponse) => {
    //     const payload: User = response && response.data;
    //     commit('REGISTER_SUCCESS', payload);
    //   },
    //   (error: AxiosError) => {
    //     const payload: Error = new Error(error);
    //     commit('REGISTER_ERROR', payload);
    //   },
    // );
  },
};
