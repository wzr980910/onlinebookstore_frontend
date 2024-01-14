import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import ElementUI from 'element-ui'


Vue.use(ElementUI)
Vue.config.productionTip = false

//配置axios全局使用
axios.defaults.baseURL = 'http://localhost:8081/'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
