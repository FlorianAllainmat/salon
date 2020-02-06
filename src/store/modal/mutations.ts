import { MutationTree } from 'vuex';
import { ModalState } from './types';

export const mutations: MutationTree<ModalState> = {
  SHOW: (state, payload: any) => {
    state.visible = true;
    state.view = payload.view;
  },
  HIDE: (state) => {
    state.visible = false;
  },
};
