import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Parameter from '../views/parameter.vue'
import Query from '../views/query.vue'
import Parent from '../views/Children/parent.vue'
import Children from '../views/Children/children.vue'
import Guard from '../views/guard.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/parameter',
    name: 'Parameter',
    component:Parameter
  },
  {
    path: '/query',
    name: 'Query',
    component:Query
  },
  {
    path: '/parent',
    name: 'Parent',
    component:Parent,
    children: [
      {
        path:':value',
        name:'Children',
        component:Children
      }
    ]
  },
  {
    path: '/guqrd',
    name: 'Guard',
    component:Guard
    //beforeEnter:(to,from,next) => { 라우터가 실행되기전에 먼저 실행
      //to : 라우터가 어디로가는지
      //from : 어디에서
      //next : 라우터가 실제로 어디로 갈것인지
     // next('/')
   // }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
