import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/pages/home/Home'
// import City from '@/pages/city/City'
// import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      // component: Home 为了实现异步组件，直接用组件，而是用Import的形式
      component: () => import('@/pages/home/Home')
    }, {
      path: '/city',
      name: 'City',
      component: () => import('@/pages/city/City')
    }, {
      path: '/detail/:id',
      name: 'Detail',
      component: () => import('@/pages/detail/Detail')
    }
  ],
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y : 0}
  }
})
