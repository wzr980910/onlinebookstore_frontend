import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "@/pages/BBSHome";
import QuestionsAnswer from "@/pages/BBSAsk";
import Community from "@/pages/BBSCommunity";
// import LoginPage from "@/Login/Login";
// import HomeViewVue from '@/views/HomeView.vue';
import Car from '@/pages/Cart'
import BookDateilsVue from "@/pages/BookDateils.vue";

import Login from "../Login/Login.vue";
import Register from "../Login/Register.vue";
import Person_center from "../Login/Person_center.vue";

import IndentVue from "@/pages/Indent.vue"
import ClassVue from "@/pages/Class.vue";

import IndentVue from "@/pages/Indent.vue"
import ClassVue from "@/pages/Class.vue";


Vue.use(VueRouter)

//创建一个路由器
const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                title: '登录'
            }
          },
          {
            path: '/register',
            name: 'register',
            component: Register,
            meta: {
                title: '注册'
            }
          },
         
        {
            name: '/',
            path: '/',
            // component: HomeViewVue,
            children: [
              // {
              //   name: 'home',
              //   path: 'home',
              //   component: HomePage,
              // },
              {
                name: 'cart',
                path: 'cart',
                component: Car,
              },
              {
                name: 'indent',
                path: 'indent',
                component: IndentVue,
              },
              {
                name: 'class',
                path: 'class',
                component: ClassVue,
              },
              {
                path: '/person_center',
                name: 'person_center',
                component: Person_center,
                meta: {
                    title: '个人中心'
              }
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

