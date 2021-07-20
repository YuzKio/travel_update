import  Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from "./mutaitions";
// Vue中使用插件
Vue.use(Vuex)



export default new Vuex.Store({
  // 存放全局公用数据
  state,
  // 因为没有任何异步操作，所以可以省略
  // actions: {
  //   changeCity (ctx, city) {
  //     ctx.commit('changeCity', city)
  //   }
  // },
  mutations,
  // getters的作用有点类似于组件中的computed，可以根据state计算
  getters: {
    doubleCity (state) {
      return state.city + ' ' + state.city
    }
  }
})
