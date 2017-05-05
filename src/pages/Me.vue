<template>
  <div class="wrap">
    <header>个人中心</header>
    <div class="content">
      <div class="me-list">
        <div class="list-info bg-34bba9">999</div>
      </div>
      <div class="me-list">
        <router-link to="/me/order" class="list-info">我的订单</router-link>
      </div>
      <div class="me-list"></div>
      <div class="me-list"></div>
    </div>
    <router-view class="childPage"></router-view>
  </div>
</template>

<script>
export default {
  name: 'me',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
