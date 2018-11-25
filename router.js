import Vue from 'vue'
import router from 'vue-router'

import Login from './src/components/Login'
import Register from './src/components/Register'
import Home from './src/components/Home'

Vue.use(router);

export default new router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register,
        },
    ]
})