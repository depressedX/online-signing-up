import Vue from 'vue'
import Router from 'vue-router'

import {toFirstWordLowerCase, toFirstWordUpperCase} from "./utils";
import {hasLoggedIn} from "./resource";

const vc = require.context('./views')

Vue.use(Router)

const _ = component => vc(`./${toFirstWordLowerCase(component)}/${toFirstWordUpperCase(component)}.vue`).default

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: _('home'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: _('login')
        },
        {
            path: '/group',
            name: 'group',
            component: _('group'),
            props: route => ({id: route.query.id && Number(route.query.id) || 0}),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/join',
            name: 'join',
            component: _('join'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/work',
            name: 'work',
            component: _('work'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/process',
            name: 'process',
            component: _('process'),
            meta: {
                requiresAuth: true
            }
        },
        {
            path:'/404',
            component:vc('./PageNotFound').default
        }
    ]
})
export default router

router.beforeEach((to, from, next) => {

    //404
    if (to.matched.length === 0) {
        next('/404')
    }
    // 需要权限
    else if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!hasLoggedIn()) {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        } else {
            next()
        }
    }
    else if (to.name==='login'){
        if (hasLoggedIn()) {
            next('/home')
        }
    } 
    else {
        next() // 确保一定要调用 next()
    } 
})