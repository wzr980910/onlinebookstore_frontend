import VueRouter from 'vue-router';
import HomePage from "@/pages/BBSHome";
import QuestionsAnswer from "@/pages/BBSAsk";
import Community from "@/pages/BBSCommunity";
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