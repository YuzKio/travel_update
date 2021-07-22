<template>
  <div id="app">
    <!--    除了Detail之外其他页面都可以被缓存-->
    <keep-alive exclude="Detail">
      <router-view/>
    </keep-alive>
  </div>
</template>

