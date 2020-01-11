import Vue from 'vue';
import VueRouter from 'vue-router';
import Login from '../views/Login.vue';
import { authGuardFn } from './route-guards';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'dashboard',
    beforeEnter: authGuardFn,
    component: () =>
      import(
        /* webpackChunkName: "dashboard" */ '../views/dashboard/Index.vue'
      ),
    children: [
      {
        path: '/',
        name: 'serverList',
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '../views/dashboard/ServerSearch.vue'
          ),
      },
      {
        path: '/domainInfo/:uri',
        name: 'domainInfo',
        props: (r: any) => ({ uri: `${r.params.uri}` }),
        component: () =>
          import(
            /* webpackChunkName: "dashboard" */ '../views/dashboard/DomainInfo.vue'
          ),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
