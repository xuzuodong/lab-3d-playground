import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import experimentsRoutes from './experiments'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: Home },

  // 注入虚拟实验的路由
  ...experimentsRoutes,

  { path: '*', component: () => import('../views/NotFound.vue') }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
