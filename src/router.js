import Vue from 'vue'
import Welcome from './components/Welcome1.vue'

Vue.use(Router)
export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
    {
        path:'/',
        name:'welcome',
        component: Welcome
    },
    {
        path: '/about',
        name: 'about',
        component: () => import( './component/Welcome1.vue')
    }
  ]
    



})