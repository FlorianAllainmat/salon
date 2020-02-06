import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { LoadingState } from './types';
import { RootState } from '../types';

export const state: LoadingState = {
  loading: 0,
};

const namespaced: boolean = true;

export const loading: Module<LoadingState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
