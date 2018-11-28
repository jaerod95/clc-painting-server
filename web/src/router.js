import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/views/Login.vue';

Vue.use(Router);

export const routes = [
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
    redirect: '/app/dashboard',
    component: () =>
      import(/* webpackChunkName: "appWrapper" */ '@/views/AppWrapper.vue'),
    children: [
      {
        path: '/app/dashboard',
        name: 'Dashboard',
        component: () =>
          import(/* webpackChunkName: "dashboard" */ '@/views/Dashboard.vue'),
      },
      {
        path: '/app/projects',
        name: 'Projects',
        component: () =>
          import(/* webpackChunkName: "projects" */ '@/views/Projects.vue'),
        children: [
          {
            path: '/app/projects/:id',
            name: 'Project Details',
            component: () =>
              import(/* webpackChunkName: "projects" */ '@/views/ProjectCRUD.vue'),
          },
        ],
      },
      {
        path: '/app/employees',
        name: 'Employees',
        component: () =>
          import(/* webpackChunkName: "employees" */ '@/views/Employees.vue'),
      },
      {
        path: '/app/employees/table',
        name: 'EmployeeTable',
        component: () =>
          import(/* webpackChunkName: "employees" */ '@/views/EmployeeTable.vue'),
      },
      {
        path: '/app/create/employee',
        name: 'EmployeeCRUD',
        component: () =>
          import(/* webpackChunkName: "employeeCRUD" */ '@/views/EmployeeCRUD.vue'),
      },
      {
        path: '/app/create/project',
        name: 'ProjectCRUD',
        component: () =>
          import(/* webpackChunkName: "projectCRUD" */ '@/views/ProjectCRUD.vue'),
      },
    ],
  },
];

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});
