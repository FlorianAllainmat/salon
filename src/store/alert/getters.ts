import { RootState } from '@/store/types';
import { GetterTree } from 'vuex';
import { AlertState } from './types';

export const getters: GetterTree<AlertState, RootState> = {
  successMessage: (state) => {
    if (state && state.message && state.message.success) {
      return (state.message.prefix || '') + state.message.success;
    }
    return undefined;
  },
  errorMessage: (state) => {
    if (state && state.message && state.message.error) {
      return (state.message.prefix || '') + state.message.error;
    }
    return undefined;
  },
};
