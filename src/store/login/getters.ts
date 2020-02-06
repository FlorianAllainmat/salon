import { GetterTree } from 'vuex';
import { LoginState } from './types';
import { RootState } from '@/store/types';

export const getters: GetterTree<LoginState, RootState> = {
  // errorCode(state): string | undefined {
  //   const { error } = state;
  //   if (error && error.status) return `LOGIN_ERROR_${error.status}`;
  // },
};
