<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">
<!--              {{ this.$store.state.city }}-->
              {{ this.currentyCity }}
            </div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div
            class="button-wrapper"
            v-for="item of hot"
            :key="item.id"
            @click="handleCityClick(item.name)"
          >
            <div class="button">
              {{ item.name }}
            </div>
          </div>
        </div>
      </div>
<!--      对象也可以被v-for循环，循环的时候第二项不是index，是key。双层循环时，如果父级的key值和子级的key重复，是没关系的，只要同级不重复就行-->
      <div
        class="area"
        v-for="(item, key) of cities"
        :key="key"
        :ref="key"
      >
        <div class="title border-topbottom">{{ key }}</div>
        <div class="item-list">
          <div
            class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{ innerItem.name }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: "CityList",
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  methods: {
    handleCityClick (city) {
      // this.$store.dispatch('changeCity', city) 因为没有异步操作，所以可以直接用commit
      // this.$store.commit('changeCity', city) 靠mutation简化
      this.changeCity((city))
      this.$router.push('/')
    },
    // 有一个mutations叫changeCity，把这个mutation映射到组件中名字叫changeCity的方法里，
    ...mapMutations(['changeCity'])
  },
  computed: {
    // 传递的可以是个数组也可以是个对象
    ...mapState({
      // 把vuex里city这个共用的数据映射到组件的计算属性里，名字是currentCity
      currentyCity: 'city'
    })
  },
  mounted () {
    // 创建一个实例属性，直接创建，但是如果希望我们创建的实例上面的东西可以被点击，光这么写还不行，还要加click
    this.scroll = new Bscroll(this.$refs.wrapper, {
      click: true
    })
  },
  watch: {
    letter () {
      if (this.letter) {
        // 使他可以自动滚动到某个元素上，上面定义了ref
        // 通过this.$refs现在这个字母对应的area
        // 使用循环输出的ref得到的是一个数组，而不是一个标准的DOM元素
        // 但是这个方法接受的是DOM元素，或者是DOM的选择器
        // const element = this.$refs[this.letter] 所以单纯这么写是不对的
        const element = this.$refs[this.letter][0]
        this.scroll.scrollToElement(element)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/varibles.styl'
  .border-topbottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .border-bottom
    &:before
      border-color: #ccc
    &:after
      border-color: #ccc
  .list
    overflow: hidden
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    .title
      line-height: .54rem
      background: #eee
      padding-left: .2rem
      color: #666
      font-size: .26rem
    .button-list
      overflow: hidden // 因为下面写了float，所以这里要写个overflow:hidden触发其BFC
      padding: .1rem .6rem .1rem .1rem // 右边预留alphabet表
      .button-wrapper
        float: left
        width: 33.33%
        .button
          margin: .1rem
          padding: .1rem 0
          text-align: center
          border: .02rem solid #ccc
          border-radius: .06rem
    .item-list
      .item
        line-height: .76rem
        padding-left: .2rem
</style>
