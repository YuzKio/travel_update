<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl" />
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
export default {
  name: "HomeSwiper",
  data() {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        loop: true
      },
      swiperList: [{
        id: '0001',
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg"
      }, {
        id: '0002',
        imgUrl: "http://img1.qunarzz.com/piao/fusion/1802/42/7c92b9a381e46402.jpg_640x200_1cdce2a4.jpg"
      }]
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
