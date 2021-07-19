<template>
  <div class="wrapper">
<!--    有数组传递过来才创建-->
    <swiper :options="swiperOptions" v-if="showSwiper">
      <swiper-slide v-for="item of list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
export default {
  name: "HomeSwiper",
  props: {
    list: Array
  },
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
    }
  },
  computed: {
    showSwiper () {
      return this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
  // 样式进行穿透，这样可以不受scope的限制
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0 // 如果直接在这里写31.25%，相对的并不是wrapper的宽度，而是父级元素的高度。想要实现图片宽高比例自适应需要把height设置为0
    // 这部分也可以只保留width和height，但是height写的是31.25vw，但是可能会引起浏览器兼容性的问题
    padding-bottom: 31.25% // 高度相对于宽度自动撑开，防止抖动
    background: #eee
    .swiper-img
      width: 100%
</style>
