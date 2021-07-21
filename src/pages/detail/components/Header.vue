<template>
  <div>
    <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
      <div class="iconfont header-abs-back">&#xe624;</div>
    </router-link>
    <div
      class="header-fixed"
      v-show="!showAbs"
      :style="opacityStyle"
    >
      景点详情
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      // 有些浏览器不兼容下面的代码，会出现白屏
      // const top = document.documentElement.scrollTop
      const top = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {
          opacity
        }
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  // // 页面一被展示，activated的代码就会执行，只有在keep-alive管辖范围内的组件才有这个钩子函数
  // activated () {
  //   // 如果在这个局部组件中对window这个全局对象进行绑定，在其他组件中也会触发事件
  //   // 但是我们把Detail从keep-alive中exclude了之后，就无法使用这个钩子了，所以效果也不会被触发，这点要注意，所以把activated改为mounted
  //   window.addEventListener('scroll', this.handleScroll)
  // },
  // // 页面即将隐藏，或页面即将被替换为新的页面时，这个组件的这个钩子会被执行
  // deactivated () {
  //   // 页面展示的时候，绑定scroll事件，页面隐藏时，对这个全局事件解绑
  //   window.removeEventListener('scroll', this.handleScroll)
  // }
  // 页面一被展示，activated的代码就会执行，只有在keep-alive管辖范围内的组件才有这个钩子函数
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .8rem
    height: .8rem
    line-height: .8rem
    border-radius: .4rem
    text-align: center
    background: rgba(0, 0, 0, .8)
    .header-abs-back
      color: #fff
      font-size: .4rem
  .header-fixed
    z-index: 2
    position: fixed
    top: 0
    left: 0
    right: 0
    height: $headerHeight
    line-height: $headerHeight
    text-align: center
    color: #fff
    background: $bgColor
    font-size: .32rem
    .header-fixed-back
      position: absolute
      top: 0
      left: 0
      width: .64rem
      text-align: center
      font-size: .4rem
      color: #fff
</style>
