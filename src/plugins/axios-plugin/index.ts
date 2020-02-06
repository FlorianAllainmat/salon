import store from '@/store/store';
import Axios, { AxiosInstance } from 'axios';
import { default as Vue, default as _Vue, PluginObject } from 'vue';

export default class AxiosPlugin implements PluginObject<{}> {
  [key: string]: any;

  public static install(vue: typeof _Vue, options?: {}) {
    vue.$http = Axios;
    Object.assign(Axios.defaults, options);

    vue.$http.interceptors.request.use(
      (config) => {
        store.commit('alert/HIDE');
        store.commit('loading/START');
        return config;
      },
      (error) => {
        store.commit('loading/STOP');
        return Promise.reject(error);
      },
    );

    vue.$http.interceptors.response.use(
      (config) => {
        store.commit('loading/STOP');
        return config;
      },
      (error) => {
        store.commit('loading/STOP');
        if (error.response && error.response.status === 440) {
          const payload: Error = error && error.response;
          store.commit('login/LOGIN_DISCONNECTED', payload);
          return Promise.reject();
        } else {
          return Promise.reject(error);
        }
      },
    );
  }

  public install(vue: typeof _Vue, options?: {}) {
    vue.$http = Axios;
    Object.assign(Axios.defaults, options);
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $http: AxiosInstance;
  }
  interface VueConstructor {
    $http: AxiosInstance;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    http?: AxiosInstance;
  }
}
