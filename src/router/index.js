import VueRouter from 'vue-router';
import HomePage from "@/pages/BBSHome";
import QuestionsAnswer from "@/pages/BBSAsk";
import Community from "@/pages/BBSCommunity";
import LoginPage from "@/Login/Login"

//创建一个路由器
const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'login',
            component: LoginPage,
            meta: {
                title: '登录'
            }
          },
        {
            name: 'home',
            path: '/home',
            component: HomePage,
            children: [
              {
                name: 'ask',
                path: 'ask',
                component: QuestionsAnswer,
              },
              {
                name: 'community',
                path: 'community',
                component: Community,
              }
            ]
          }
    ]
})



export default router

