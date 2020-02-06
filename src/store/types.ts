import { AxiosError, AxiosResponse } from 'axios';

export interface Error {
  status?: number;
  statusText?: string;
}

export interface RootState {
  version: string;
  menuVisible: boolean;
}

export class Error implements Error {
  constructor(error?: AxiosError | undefined) {
    this.status = error && error.response && error.response.status;
    this.statusText = error && error.response && error.response.statusText;
  }
}
