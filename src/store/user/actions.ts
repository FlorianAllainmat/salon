import { Error, RootState } from '@/store/types';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { ActionTree } from 'vuex';
import { UserState, User } from './types';

export const actions: ActionTree<UserState, RootState> = {};
