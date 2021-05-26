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
    path: '/movies/home:age:gender',
    name: 'Home',
    component: Home,
    props: route => ({
      age: String(route.params.age),
      gender: String(route.params.gender)
    })
  },
  {
    path: '/movies/',
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
    path: '/communitydetail/:community_id',
    name: 'CommunityDetail',
    component: CommunityDetail,
    props: route => ({
      community_id: Number(route.params.community_id)
    })
  },
  {
    path: '/community-d-u/:community_id',
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
