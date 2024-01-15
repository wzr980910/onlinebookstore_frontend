import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'

Vue.use(ElementUI)
Vue.config.productionTip = false

//配置axios全局使用
axios.defaults.baseURL = 'http://localhost:8081/'
//引入 router
import VueRouter from 'vue-router';
// import router from "@/router";
//按需引入element-ui
import 'element-ui/lib/theme-chalk/index.css';
import {Row,Button} from 'element-ui';

//关闭生产提示
Vue.config.productionTip = false


Vue.component(Row.name,Row);
Vue.component(Button.name, Button);

new Vue({
  el:'#app',
  render: h => h(App),
  router:router,
})
