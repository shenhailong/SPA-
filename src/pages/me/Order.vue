<template>
  <div class="">
    <Header-bar></Header-bar>
    <section class="order-content">
      <div class="order-list" v-for="item in orderList ">
        <!--上-->
        <router-link to="/me/order/OrderDetail" class="disB">
          <div class="order-num">
            <div class="item" flex="main:justify">
              <span>订单号：{{item.orderCode}}</span>
              <div class="status">{{item.items[0].status | status}} ></div>
            </div>
          </div>
          <!--中-->
          <div class="order-info" v-for="info in item.items">
            <div class="item" flex="main:justify">
              <img src="../../../static/img/default-info.png" width="50" height="50"/>
              <div class="" flex="main:justify">
                <div class="middle">
                  <p class="name">商品:{{info.sku.name}}</p>
                  <p class="attributes">规格:{{info.sku.attributes}}</p>
                </div>
                <div class="price">
                  <p>¥{{info.unitPrice}}</p>
                  <p><del>¥{{info.price}}</del></p>
                  <p>x{{info.quantity}}</p>
                </div>
              </div>
            </div>
          </div>
        </router-link>
        <div class="order-total">
          共 {{item.items| quantity}} 件商品 实付款：{{item.items| total}}
        </div>

        <div class="order-btn" flex="main:right">
          <a href="javascript:void(0);" class="btn white" v-if="showBtn(item.items[0].status,'cancel')">取消订单</a>
          <a href="javascript:void(0);" class="btn white" v-if="showBtn(item.items[0].status,'delete')">删除订单</a>
          <a href="javascript:void(0);" class="btn orange" v-if="showBtn(item.items[0].status,'check')">查看物流</a>
          <a href="javascript:void(0);" class="btn orange" v-if="showBtn(item.items[0].status,'again')">再次购买</a>
          <a href="javascript:void(0);" class="btn orange" v-if="showBtn(item.items[0].status,'sure')">确认收货</a>
          <a href="javascript:void(0);" class="btn orange" v-if="showBtn(item.items[0].status,'makeup')">补录地址</a>
          <a href="javascript:void(0);" class="btn orange" v-if="showBtn(item.items[0].status,'revise')">修改地址</a>
          <a href="javascript:void(0);" class="btn orange" v-if="showBtn(item.items[0].status,'pay')">立即支付</a>
        </div>
      </div>
    </section>
    <transition enter-active-class="fadeInRight" leave-active-class="fadeOutRight">
      <router-view ></router-view>
    </transition>
  </div>
</template>

<script>
  import HeaderBar from "../../components/Head"
  import {getOrderList} from '../../service/getData'
  import { mapState } from 'vuex'
  import Vue from 'vue'
  //状态
  Vue.filter('status',function(val){
    var  result='';
    switch(val) {
      case 'PAID':
          // if(item.address == undefined || '' == $.trim(item.address)) {
          //     if(!provisual) {
          //         result = "补录地址";
          //     }
          //     else {
          //         result = "已支付";
          //     }
          // }
          // else {
          //     result = "已支付";
          // }
          break;
      case 'DEALED':
          result = "已处理";
          break;
      case 'SENDING':
          result = "配送中";
          break;
      case 'SUCCESS':
          result = "已完成";
          break;
      case 'CANCELED':
          result = "已取消";
          break;
      case 'EXCHANGING':
          result = "换货中";
          break;
      case 'EXCHANGED':
          result = "换货成功";
          break;
      case 'REFUNDING':
          result = "退货中";
          break;
      case 'REFUNDED':
          result = "已退货";
          break;
      case 'NO_PAY':
          result = "待支付";
          break;
      case 'NOADDRESS':
          result = "补录地址";
          break;
  };
      return result;
  })
  //数量
  Vue.filter("quantity",function(val){
    var num=0;
    val.forEach(function(element) {
      num+=element.quantity
    });
    return num
  })
  //实付款
  Vue.filter("total",function(val){
    var total=0;
    Math.formatFloat = function(f) {
        var m = Math.pow(10, 2);
        return parseInt(f * m, 10) / m;
    }
    val.forEach(function(element) {
      total=Math.formatFloat((element.quantity*element.unitPrice+total))
    });
    return total
  })

  export default{
    name:"order",
    components:{
      HeaderBar
    },
    data(){
      return {
        orderList:null,//订单列表
        offset: 0,//偏移量
        limit:10,//每次请求的条数
      }
    },
    computed:{
      ...mapState([
        'userInfo'
      ])
    },
    created:function(){
      //this.initData()
    },
    mounted(){
      this.initData();
    },
    methods :{
      async initData(){
        if(this.userInfo){
          let res=await getOrderList(this.limit,this.offset);
          this.orderList=[...res]
        }
      },
      showBtn:function(status,show){
        var  btn=false;
        switch(status){
          //未支付 操作： 立即支付 取消订单
          case "NO_PAY":
           btn = (show=='pay'||show=='cancel')?true:false;
          break;
          //
          case "PAID":

          break;
          //已处理 没有操作
          case "DEALED":

          break;
          //已发货 操作： 确认收货 查看物流
          case "SENDING":
           btn = (show=='sure'||show=='check')?true:false;
          break;
          //已完成 操作： 删除订单 再次购买
          case "SUCCESS":
           btn = (show=='delete'||show=='again')?true:false;
          break;
          //已取消 操作： 删除订单 再次购买
          case "CANCELED":
           btn = (show=='delete'||show=='again')?true:false;
          break;
          //换货中 操作： 无
          case "EXCHANGING":

          break;
          //已退货 操作： 删除订单 再次购买
          case "REFUNDED":
           btn = (show=='delete'||show=='again')?true:false;
          break;
          //"补录地址";
          case "NOADDRESS":
           btn = (show=='Makeup')?true:false;
          break;
          //换货成功 操作： 删除订单 再次购买
          case "EXCHANGED":
           btn = (show=='delete'||show=='again')?true:false;
          break;
          //退货中 操作： 无
          case "REFUNDING":

          break;
        }
        return btn
      }

    },
    watch:{
      userInfo: function(val){
        console.log(val)
        if(val){

        }
      }
    }
  }
</script>
