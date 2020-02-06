import { MutationTree } from 'vuex';
import { AlertState, IMessage } from './types';

export const mutations: MutationTree<AlertState> = {
  SHOW: (state, payload: IMessage) => {
    if (payload.error !== undefined || payload.success !== undefined) {
      state.message = payload;
      state.visible = true;
    }
  },
  HIDE: (state) => {
    state.visible = false;
  },
};
