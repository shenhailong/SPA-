<template>
  <div>
    <Header-bar></Header-bar>
    <section class="order-content">
      <div class="order-list">
        <!--上-->
        <div class="order-num">
          <div class="item" flex="main:justify">
            <span>订单号：1181818818</span>
            <div>待收货 ></div>
          </div>
        </div>
        <!--中-->
        <div class="order-info">
          <div class="item" flex="main:justify">
            <img src="../../../../static/img/default-info.png" width="50" height="50"/>
            <div class="" flex="main:justify">
              <div class="middle">
                <p>商品:联想笔记本电T-10000ss</p>
                <p>规格：黑色 15R 100</p>
              </div>
              <div class="price">
                <p>¥11111111</p>
                <p><del>¥111</del></p>
                <p>x1</p>
              </div>
            </div>
          </div>
        </div>

        <div class="order-total">
          共1件商品 实付款：1111
        </div>

        <div class="order-btn" flex="main:right">
          <a href="javascript:void(0);" class="btn white">取消订单</a>
          <a href="javascript:void(0);" class="btn orange">立即支付</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  import HeaderBar from "../../../components/Head"
  export default{
    name:"order",
    components:{
      HeaderBar
    },
    data(){
      return {

      }
    },
    computed:{

    },
    methods :{

    }
  }
</script>
