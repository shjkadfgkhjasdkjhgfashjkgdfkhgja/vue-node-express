import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'



Vue.use(VueRouter)

const routes = [
  
  {
    path: '/home',
    name: 'home',
    component: Home
      
  },
  {
    path: '/member',
    name: 'member',
    component: () => import('../views/Member')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/Cart')
  },
  {
    path: '/getProduct',
    name: 'search',
    component: () => import('../views/GetProduct')
  },
  {
    path:'/UserComment',
    name:'UserComment',
    component: () => import('../views/UserComment')
  },
  {
    path:'/UserComment/UserCommentDetail/:id',
    name:'UserCommentDetail',
    component: () => import('../views/UserCommentDetail')
  },
  {
    path:'/comment',
    name:'comment',
    component: () => import('../components/Comment')
  },
  {
    path:'/products',
    name:'products',
    component: () => import('../views/Products')
  },
   {
    path:'/products/productIntroduce/:id',
    name:'productIntroduce',
    component: () => import('../views/ProductIntroduce')
  },
  {
    path:'/register',
    name:'register',
    component: () => import('../views/Register')
  },
  {
    path:'*',
    redirect:'/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
