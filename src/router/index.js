import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../views/Home.vue"
import Gift from "../views/Gift.vue"
import Bag from "../views/Bag.vue"
import Signin from "../views/Signin.vue"
import Beds from "../views/Beds.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gift',
    name: "Gift",
    component: Gift
  },
  {
    path: '/signin',
    name: 'Signin',
    component: Signin
  },
  {
    path: '/bag',
    name: 'Bag',
    component: Bag
  },
  {
    path: '/bed',
    name: 'Bed',
    component: Beds
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
