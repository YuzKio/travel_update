<template>
  <div>
    <detail-banner :sightName="sightName" :bannerImg="bannerImg" :bannerImgs="gallaryImgs"></detail-banner>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import DetailList from "./components/List";
export default {
name: "Detail",
  components: {DetailList, DetailHeader, DetailBanner},
  data () {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: []
    }
  },
  methods: {
    getDetailInfo () {
      // 要获取动态路由的参数
      // axios.get('/api/detail.json?id=' + this.$route.params.id) 但拼接很麻烦
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      }).then(this.handleGetDataSucc)
    },
    handleGetDataSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.sightName = data.sightName
        this.bannerImg = data.bannerImg
        this.gallaryImgs = data.gallaryImgs
        this.list = data.categoryList
      }
    }
  },
  mounted () {
    this.getDetailInfo()
  },
  // activated () {
  // 和首页一样，因为会缓存页面，所以当id=0002时不会重发，但是需要更新。可以用这个生命周期钩子，也可以在keep-alive上加
  // }
}
</script>

<style lang="stylus" scoped>
  .content
    height: 50rem
</style>
