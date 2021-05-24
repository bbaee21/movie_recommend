import Vue from 'vue'
import VueRouter from 'vue-router'
import Signup from '@/views/accounts/Signup'
import Login from '@/views/accounts/Login'
import Home from '@/views/movies/Home'
import Detail from '@/views/movies/Detail'
import Community from '@/views/community/Community'
import CommunityDetail from '@/views/community/CommunityDetail'
import DetailUpdate from '@/views/community/DetailUpdate'

Vue.use(VueRouter)

const routes = [
  {
    path: '/accounts/signup',
    name: 'Signup',
    component: Signup,
  },
  {
    path: '/accounts/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/movies/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/movies/detail',
    name: 'Detail',
    component: Detail,
    props: true,
  },
  {
    path: '/community',
    name: 'Community',
    component: Community,
  },
  {
    path: '/community/',
    name: 'CommunityDetail',
    component: CommunityDetail,
  },
  {
    path: '/community/community_d_u/',
    name: 'DetailUpdate',
    component: DetailUpdate,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
