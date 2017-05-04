<template>
  <div class="wrap">
    <header>头部</header>
    <div class="content">
      <!--banner-->
      <div ref="bannerSwiper"
           class="swiper-container swiper-container1">
        <div class="swiper-wrapper">
          <div v-for="banner in banners"
            :key="banner.id"
            class="swiper-slide">
            <a :href="banner.link">
              <img v-bind:data-src="banner.img" class="swiper-lazy"
                 alt="">
            </a>
            <div class="swiper-lazy-preloader"></div>
          </div>
        </div>
      </div>
      <!--banner-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  components:{

  },
  data(){
    return {
      currentIcon:{
        home:'active',
        classify:'',
        search:'',
        cart:'',
        me:''
      }
    }
  },
  created(){

  },
  mounted(){

  },
  methods:{
    //底部导航切换显示当前
    curremtIcon(current){
      this.currentIcon={
        home:'',
        classify:'',
        search:'',
        cart:'',
        me:''
      }
      for(var key in this.currentIcon){
        if(current==key){
          this.currentIcon[key]='active'
          break;
        }
      }
    }

  },
  watch:{
    '$route'(to,from){
      this.curremtIcon(to.name)
    }
  }
}




</script>
