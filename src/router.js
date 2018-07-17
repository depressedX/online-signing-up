import Vue from 'vue'
import Router from 'vue-router'

const views = require.context('./views')

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: views.resolve('Home')
        },
        {
            path: '/login',
            name: 'login',
            component: views.resolve('Login')
        },
        {
            path: '/group/:code',
            name: 'group',
            component: views.resolve('Group'),
            props: true
        },
        {
            path: '/join',
            name: 'join',
            component: views.resolve('Join')
        },
        {
            path: '/work',
            name: 'work',
            component: views.resolve('Work')
        },
        {
            path: '/process',
            name: 'process',
            component: views.resolve('Process')
        },
    ]
})
