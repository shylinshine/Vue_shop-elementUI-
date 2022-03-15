import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import { Container, Header, Aside, Main, MessageBox } from 'element-ui'
//导入全局样式表
import './assets/css/global.css'
import ElementUI from 'element-ui'
//引入这个之后才有样式
import 'element-ui/lib/theme-chalk/index.css'

// 导入弹框提示组件
import { Message } from 'element-ui'

Vue.prototype.$http = axios
//把弹框组件挂在到Vue的原型对象上
Vue.prototype.$message = Message

Vue.prototype.$confirm = MessageBox.confirm

//配置请求的根路径
axios.defaults.baseURL = 'https://lianghj.top:8888/api/private/v1'
axios.interceptors.request.use((config) => {
  // console.log(config)
  config.headers.Authorization = window.sessionStorage.getItem('token')
  //最后必须return config
  return config
})
Vue.config.productionTip = false

// 注册
Vue.use(ElementUI)
Vue.use(Container)
Vue.use(Aside)
Vue.use(Main)

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app')
