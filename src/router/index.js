<<<<<<< HEAD
import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '../Login/Login.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
        title: '登录'
    }
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
]
=======
import VueRouter from 'vue-router';
import HomePage from "@/pages/BBSHome";
import QuestionsAnswer from "@/pages/BBSAsk";
import Community from "@/pages/BBSCommunity";
>>>>>>> 73c35a23730790a44ff3c778304a92b336bb569a

//创建一个路由器
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            name: '/',
            path: '/',
            component: HomePage,
        },
        {
            name: 'home',
            path: '/home',
            component: HomePage,
        },
        {
            name: 'ask',
            path: '/ask',
            component: QuestionsAnswer,
        },
        {
            name: 'community',
            path: '/community',
            component: Community,
        }
    ]
})
<<<<<<< HEAD


export default router
=======
export default router
>>>>>>> 73c35a23730790a44ff3c778304a92b336bb569a
