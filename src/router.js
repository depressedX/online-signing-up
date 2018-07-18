import Vue from 'vue'
import Router from 'vue-router'

import {toFirstWordLowerCase, toFirstWordUpperCase} from "./utils";

const vc = require.context('./views')

Vue.use(Router)

const _ = component => vc(`./${toFirstWordLowerCase(component)}/${toFirstWordUpperCase(component)}.vue`).default

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: _('home')
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
            props: route => ({id: route.query.id && Number(route.query.id) || 0})
        },
        {
            path: '/join',
            name: 'join',
            component: _('join')
        },
        {
            path: '/work',
            name: 'work',
            component: _('work')
        },
        {
            path: '/process',
            name: 'process',
            component: _('process')
        },
    ]
})
