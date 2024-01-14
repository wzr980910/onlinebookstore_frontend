import Vue from 'vue'
import App from './App.vue'
//引入 router
import VueRouter from 'vue-router';
import router from "@/router";
//按需引入element-ui
import 'element-ui/lib/theme-chalk/index.css';
import {Row,Button} from 'element-ui';

//关闭生产提示
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.component(Row.name,Row);
Vue.component(Button.name, Button);


new Vue({
  el:'#app',
  render: h => h(App),
  router:router,
})
