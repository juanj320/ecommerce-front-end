import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../modules/home/HomeView.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../modules/login/LoginView.vue')
  },
  {
    path: '**',
    name: 'not-found',
    component: () => import( '../modules/general/NotFoundView.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
