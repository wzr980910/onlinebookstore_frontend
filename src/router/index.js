import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/pages/BBSHome";
import QuestionsAnswer from "@/pages/BBSAsk";
import Community from "@/pages/BBSCommunity";
import LoginPage from "@/Login/Login";
import HomeViewVue from '@/views/HomeView.vue';
import Car from '@/pages/Cart'
import BookDateilsVue from "@/pages/BookDateils.vue";


Vue.use(VueRouter)

//创建一个路由器
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: LoginPage,
            meta: {
                title: '登录'
            }
          },
        {
            name: '/',
            path: '/',
            component: HomeViewVue,
            children: [
              {
                name: 'home',
                path: 'home',
                component: HomePage,
              },
              {
                name: 'cart',
                path: 'cart',
                component: Car,
              },
              {
                name: 'bookdetails',
                path: 'bookdetails',
                component: BookDateilsVue,
              },
              {
                name: 'community',
                path: 'community',
                component: Community,
              },
              {
                name: 'ask',
                path: 'ask',
                component: QuestionsAnswer,
              }
            ]
          }
    ]
})




export default router

