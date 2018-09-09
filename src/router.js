import Vue from 'vue'
import Router from 'vue-router'

import {toFirstWordLowerCase, toFirstWordUpperCase} from "./utils";
import {hasLoggedIn} from "./resource";

const vc = require.context('./views')

Vue.use(Router)

const _ = component => vc(`./${toFirstWordLowerCase(component)}/${toFirstWordUpperCase(component)}.vue`).default

// 事业群介绍相关路由
const groupRoutes = [
    {
        path: '/group/tech',
        component: vc('./group/Tech').default,
        meta: {
            title: '部门介绍'
        }
    },
    {
        path: '/group/media',
        component: vc('./group/Media').default,
        meta: {
            title: '部门介绍'
        }
    },
    {
        path: '/group/application',
        component: vc('./group/Application').default,
        meta: {
            title: '部门介绍'
        }
    },
    {
        path: '/group/team',
        component: vc('./group/Team').default,
        meta: {
            title: '部门介绍'
        }
    },
    {
        path: '/group/yiban',
        component: vc('./group/YiBan').default,
        meta: {
            title: '部门介绍'
        }
    },
]

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: _('home'),
            meta: {
                title: '首页'
            }
        },
        {
            path: '/login',
            name: 'login',
            component: _('login'),
            meta: {
                title: '登录'
            }
        },
        
        ...groupRoutes,

        {
            path: '/join',
            name: 'join',
            component: _('join'),
            meta: {
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

    //404
    if (to.matched.length === 0) {
        next('/404')
        return
    }

    // 更改title
    let titleRoute = to.matched.find(s => s.meta.title)
    titleRoute && (document.title = titleRoute.meta.title)

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