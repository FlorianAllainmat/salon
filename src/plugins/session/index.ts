import _Vue, { PluginFunction, PluginObject } from 'vue';
import Vue from 'vue';

export default class Session implements PluginObject<{}> {
  private options: any;
  [key: string]: any;

  public static install(vue: typeof _Vue, options?: {}) {
    vue.$session = new Session(options);
  }

  constructor(options?: {}) {
    this.options = options;
  }

  public install(vue: typeof _Vue, options?: {}) {
    vue.$session = this;
  }

  public create(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  public destroy() {
    localStorage.removeItem('user');
  }

  public isAuthenticated(): boolean {
    return localStorage.getItem('user') != null;
  }
}

declare module 'vue/types/vue' {
  interface Vue {
    $session: Session;
  }
  interface VueConstructor {
    $session: Session;
  }
}

declare module 'vue/types/options' {
  interface ComponentOptions<V extends Vue> {
    session?: Session;
  }
}
