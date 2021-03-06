import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Submit from '../views/Submit.vue'
import Gods from '../views/Gods.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/submit',
    name: 'Submit',
    component: Submit
  },
  {
    path: '/gods',
    name: 'Gods',
    component: Gods
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
