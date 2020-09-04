import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const meta: Object = {
  title: 'OPEN DAY 2020 - NISER',
  metaTags: [
    {
      name: 'author',
      content: 'National Institute of Science Education and Research',
    },
    {
      name: 'description',
      content:
        'NISER virtual open day 2020, an outreach program held during the COVID-19 pandemic to hold discussions about science in relation to students and the effects of the pandemic on education.',
    },
  ],
};

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/Contact.vue'),
    meta,
  },
  {
    path: '/schedule',
    name: 'Schedule',
    component: () => import('../views/Schedule.vue'),
    meta,
  },
  {
    path: '/team',
    name: 'Organisers',
    component: () => import('../views/Organisers.vue'),
    meta,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

router.beforeEach((to, from, next) => {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);

  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  Array.from(
    document.querySelectorAll('[data-vue-router-controlled]'),
    // @ts-ignore
  ).map(el => el.parentNode.removeChild(el));

  if (!nearestWithMeta) return next();

  nearestWithMeta.meta.metaTags
    // @ts-ignore
    .map(tagDef => {
      const tag = document.createElement('meta');

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      tag.setAttribute('data-vue-router-controlled', '');

      return tag;
    })
    // @ts-ignore
    .forEach(tag => document.head.appendChild(tag));
  next();
});

export default router;
