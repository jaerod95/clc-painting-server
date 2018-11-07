import Vue from 'vue';
import ax from 'axios';
import VueAxios from 'vue-axios';

const axios = ax.create({
  baseURL: process.env.VUE_APP_ROOT_API_URL,
});

Vue.use(VueAxios, axios);

// eslint-disable-next-line
export { axios };
