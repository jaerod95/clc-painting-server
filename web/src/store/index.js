import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';

import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
  },
  actions,
});

export default store;
