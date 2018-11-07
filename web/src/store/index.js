import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import cookie from './cookie';

import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    cookie,
  },
  actions,
});

export default store;
