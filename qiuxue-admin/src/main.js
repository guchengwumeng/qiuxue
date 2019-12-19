import Vue from 'vue'
import ElementUI from 'element-ui'
import axios from 'axios'
import App from './App.vue'
import router from './router/index'
import VueRouter from 'vue-router';
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.use(ElementUI) // 全局引入ui框架
Vue.prototype.axios = axios
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  // 路由拦截
  let query = JSON.parse(sessionStorage.getItem('query')) // 登陆成功保存的值
  if ((query !== '' && query !== null) || to.name === 'Login') {
    next()// 可以依次跳转
  } else {
    next({ name: 'Login' })// 没登录跳转到登陆页面
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
