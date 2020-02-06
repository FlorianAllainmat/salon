import { MutationTree } from 'vuex';
import { LoadingState } from './types';

export const mutations: MutationTree<LoadingState> = {
  START: (state, test) => {
    state.loading++;
  },
  STOP: (state) => {
    if (state.loading > 0) {
      state.loading--;
    }
  },
};
