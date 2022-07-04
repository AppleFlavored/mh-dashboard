import * as VueRouter from 'vue-router';
import Home from './views/Home.vue';
import Dashboard from './views/Dashboard.vue';

const routes: VueRouter.RouteRecordRaw[] = [
    { path: '/:pathMatch(.*)*', redirect: '/' }, /* 404 Catch-all */

    { path: '/', name: 'home', component: Home },
    { path: '/dashboard', name: 'dashboard', component: Dashboard },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes: routes,
});

export { router };