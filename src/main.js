import Vue from 'vue'
import App from './App'
import router from './router'
// import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// 有些浏览器不支持Promise，引入这个包就会自动添加相应的属性
import 'babel-polyfill'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/swiper-bundle.css'

Vue.config.productionTip = false
// fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  el: '#app',
  router,
  // 创建根实例的时候把store传递进去了，Vuex创建store之后会被派发到每一个子组件里
  store,
  render: h => h(App)
})
