import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from './components/Welcome1.vue'

Vue.use(Router)
Vue.use(VueRouter)
export default new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
    {
        path:'/',
        name:'welcome',
        component: () => import( './components/Welcome1.vue')
    },
    {
        path: '/Resultado',
        name: 'Resultado',
        component: () => import( './components/Resultado.vue')
     }
  ],



})