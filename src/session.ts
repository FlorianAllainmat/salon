import Vue from 'vue';
import Session from '@/plugins/session';

Vue.use(Session);

const session: Session = new Session();

export default session;
