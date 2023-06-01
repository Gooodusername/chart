import Vue from 'vue';
import VueRouter from 'vue-router';
import Bar_Chart_1 from '../pages/Bar_Chart_1/Bar_Chart_1.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Bar_Chart_1',
    component: Bar_Chart_1,
  },
];

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes,
});

export default router;