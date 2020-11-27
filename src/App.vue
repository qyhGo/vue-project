<template>
  <div id="app">
    <TabBar>
      <tabbar-item path="/home" activeColor="">
        <img slot="item-icon" src="./assets/img/tabbar/home.png" alt="">
        <img slot="item-icon2" src="./assets/img/tabbar/home_active.png" alt="">
        <div slot="item-title">首页</div>
      </tabbar-item>
      <tabbar-item path="/category">
        <img slot="item-icon" src="./assets/img/tabbar/category.png" alt="">
        <img slot="item-icon2" src="./assets/img/tabbar/category_active.png" alt="">
        <div slot="item-title">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart">
        <img slot="item-icon" src="./assets/img/tabbar/cart.png" alt="">
        <img slot="item-icon2" src="./assets/img/tabbar/cart_active.png" alt="">
        <div slot="item-title">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile">
        <img slot="item-icon" src="./assets/img/tabbar/profile.png" alt="">
        <img slot="item-icon2" src="./assets/img/tabbar/profile_active.png" alt="">
        <div slot="item-title">我的</div>
      </tabbar-item>
    </TabBar>
    <router-view></router-view>
  </div>
</template>

<script>
import TabBar from './components/common/tabbar/TabBar'
import TabbarItem from './components/common/tabbar/tabbar-item.vue'
export default {
  name: 'App',
  components: {
    TabBar,
    TabbarItem
  }
}
</script>

<style>
@import url('./assets/css/base.css');
.tabbar-item img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}

.tabbar-item div {
  font-family: '楷体';
  font-size: 12px;
}
</style>
