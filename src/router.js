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
                requiresAuth: true,
                title: '首页'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: _('login'),
            meta: {
                title: '登陆'
            }
        },
        {
            path: '/group',
            name: 'group',
            component: _('group'),
            props: route => ({id: route.query.id && Number(route.query.id) || 0}),
            meta: {
                requiresAuth: true,
                title: '事业群'
            }
        },
        {
            path: '/join',
            name: 'join',
            component: _('join'),
            meta: {
                requiresAuth: true,
                title: '加入我们'
            }
        },
        {
            path: '/work',
            name: 'work',
            component: _('work'),
            meta: {
                requiresAuth: true,
                title: '试用期作业'
            }
        },
        {
            path: '/process',
            name: 'process',
            component: _('process'),
            meta: {
                requiresAuth: true,
                title: '招新进程'
            }
        },
        {
            path: '/404',
            component: vc('./PageNotFound').default,
            meta: {
                title: '404'
            }
        }
    ]
})
export default router

router.beforeEach((to, from, next) => {
    next()
    return
    
    //404
    if (to.matched.length === 0) {
        next('/404')
        return
    }

    document.title = to.matched[0].meta.title

    // 需要权限
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!hasLoggedIn()) {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        } else {
            next()
        }
    }
    else if (to.name === 'login') {
        if (hasLoggedIn()) {
            next({
                name: 'home'
            })
        } else {
            next()
        }
    }
    else {
        next() // 确保一定要调用 next()
    }
})