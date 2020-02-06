import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { AlertState } from './types';
import { RootState } from '../types';

export const state: AlertState = {
  visible: false,
  message: undefined,
  timeout: undefined,
};

const namespaced: boolean = true;

export const alert: Module<AlertState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
