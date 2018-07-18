import Vue from 'vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue'
import router from './router'

import './style/global.scss'

Vue.use(ElementUI);

import AppBar from './components/AppBar'
Vue.component('app-bar',AppBar)

Vue.config.productionTip = false


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
