<template>
  <div class="wrap">
    <header>头部</header>
    <div class="content">
      <!--banner-->
      <div ref="bannerSwiper"
           class="swiper-container swiper-container1" style="height:146px;">
        <div class="swiper-wrapper" style="height:146px;">
          <div v-for="banner in banners"
            :key="banner.id"
            class="swiper-slide">
            <a :href="banner.link">
              <img v-bind:data-src="banner.loadableImgUrl" class="swiper-lazy"
                 alt="">
            </a>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <!--banner-->
    </div>
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import navBar from "../components/NavBar"
//import Swiper from 'Swiper'
export default {
  name: 'app',
  components:{
      navBar
  },
  data(){
    return {
      banners :[],
      loaded : false
    }
  },
  created(){
    this.fetchData();
  },
  mounted(){

  },
  methods:{
    //轮播图
    fetchData: function(){
      var self=this;
      axios.get("/static/data/index.json").then((res)=>{
        if(res.data.code==='1'){
          self.loaded  = false
          self.banners = res.data.data.WAP_HOME_SLIDER_BANNER;
          self.loaded  =true;
        }
      })
    }

  },
  watch:{
    "loaded":function(val){
      this.$nextTick(function(){
        try{
            this.bannerSwiper && this.bannerSwiper.destroy()
            this.bannerSwiper = new Swiper(this.$refs.bannerSwiper, {
              autoplay: 5000,
              speed: 800,
              loop: true,
              lazyLoading: true,
              lazyLoadingOnTransitionStart: true,
              lazyLoadingInPrevNext: true,
              lazyLoadingInPrevNextAmount: 2
            })
          }catch(e){
            console.log(e)
          }
      })
    }
  }
}




</script>
