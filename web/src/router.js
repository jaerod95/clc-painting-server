import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: '/login',
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
    },
    {
      path: '/app',
      name: 'AppWrapper',
      redirect: '/app/projects',
      component: () =>
        import(/* webpackChunkName: "appWrapper" */ './views/AppWrapper.vue'),
      children: [
        {
          path: '/projects',
          name: 'Projects',
          component: () =>
            import(/* webpackChunkName: "projects" */ './views/Projects.vue'),
        },
        {
          path: '/createemployee',
          name: 'EmployeeCRUD',
          component: () =>
            import(/* webpackChunkName: "projects" */ './views/EmployeeCRUD.vue'),
        },
        {
          path: '/createproject',
          name: 'ProjectCRUD',
          component: () =>
            import(/* webpackChunkName: "projects" */ './views/ProjectCRUD.vue'),
        },
      ],
    },
  ],
});
