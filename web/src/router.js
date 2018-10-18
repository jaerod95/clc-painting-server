import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/app',
      children: [
        {
          path: '/projects',
          name: 'Projects',
          component: () =>
            import(/* webpackChunkName: "projects" */ './views/Projects.vue'),
        },
      ],
    },
  ],
});
