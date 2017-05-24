<template>
  <div class="wrap">
    <header>个人中心</header>
    <div class="content">
      <div class="me-list">
        <router-link :to="userInfo?'/me/order':'/login'" class="list-info bg-34bba9" flex="cross:center main:justify">
          <div flex="cross:center">
            <img src="static/img/default-info.png" class="user-img"/>
            <div class="user-info f18">
              <p>{{username}}</p>
              <p>{{mobile}}</p>
            </div>
          </div>
          <i class="icon icon-arrow icon-arrow-right"></i>
        </router-link>
        <div class="list-info" flex="box:mean">
          <router-link to="/me/order" class="item" >
            <i class="icon icon-me-card"></i>
            <p>积分</p>
            <p><span class="num f18">{{cent}}</span></p>
          </router-link>
          <router-link to="/me/order" class="item" >
            <i class="icon icon-me-coupon"></i>
            <p>优惠券</p>
            <p><span class="num f18">{{coupon}} </span><span class="f12">张</span></p>
          </router-link>
          <router-link to="/me/order" class="item" >
            <i class="icon icon-me-card"></i>
            <p>礼品卡</p>
            <p><span class="num f18">{{card}} </span><span class="f12">张</span></p>
          </router-link>
        </div>
      </div>
      <div class="me-list">
        <router-link :to="userInfo?'/me/order':'/login'" class="list-info" flex="main:justify">
          <div flex="cross:center"><i class="icon icon-me-order">icon</i>我的订单</div>
          <div><i class="icon icon-arrow icon-arrow-right"></i></div>
        </router-link>
      </div>
      <div class="me-list">
        <router-link to="/me/order" class="list-info" flex="main:justify">
          <div flex="cross:center"><i class="icon icon-me-address">icon</i>我的收货地址</div>
          <div><i class="icon icon-arrow icon-arrow-right"></i></div>
        </router-link>
      </div>
      <div class="me-list">
        <router-link to="/me/order" class="list-info" flex="main:justify">
          <div flex="cross:center"><i class="icon icon-me-question">icon</i>常见问题</div>
          <div><i class="icon icon-arrow icon-arrow-right"></i></div>
        </router-link>
      </div>
      <div class="me-list">
        <a href="tel:1234567890" class="list-info" flex="main:justify">
          <div flex="cross:center"><i class="icon icon-me-contact">icon</i>拨打热线：</div>
          <div flex="cross:center"><span class="f12 right-list">1234567890</span><i class="icon icon-arrow icon-arrow-right"></i></div>
        </a>
      </div>
      <transition enter-active-class="fadeInRight" leave-active-class="fadeOutRight">
        <router-view class="childPage"></router-view>
      </transition>
    </div>


  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'me',
  data () {
    return {
      username: '登录/注册',
      mobile:'手机号',
      cent:'0',//积分
      coupon:'0',//优惠券
      card:'0',//礼品卡
      getUserinfo:{}//获取用户信息
    }
  },
  computed:{
    ...mapState(['userInfo'])
  },
  methods:{

  },
  watch:{
    userInfo:function(value){
      console.log(value)
      this.getUserinfo = value || {};
      this.username=this.getUserinfo&&this.getUserinfo.user.name||'登录/注册';
      this.mobile=this.getUserinfo&&this.getUserinfo.user.mobilePhone||'手机号';
      this.cent=this.getUserinfo&&this.getUserinfo.userLevel.cent||'0';
      this.coupon=this.getUserinfo&&this.getUserinfo.otherInfo.couponCount||'0';
      this.card=this.getUserinfo&&this.getUserinfo.otherInfo.giftCardCount||'0';
    }
  }
}
</script>
