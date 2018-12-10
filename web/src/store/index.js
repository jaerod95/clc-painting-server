import Vue from 'vue';
import Vuex from 'vuex';

import auth from './auth';
import cookie from './cookie';
import projects from './projects';
import employees from './employees';

import actions from './actions';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    auth,
    cookie,
    projects,
    employees,
  },
  actions,
});

export default store;
