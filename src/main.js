import Vue from 'vue'
import App from './App'
import router from './router'
// import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
// fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  // 创建根实例的时候把store传递进去了，Vuex创建store之后会被派发到每一个子组件里
  store,
  render: h => h(App)
}).$mount('#app')
