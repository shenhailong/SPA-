<template>
  <div class="wrap">
    <header>头部</header>
    <div class="content">
      <!--banner-->
      <div ref="bannerSwiper" class="swiper-container swiper-container1" style="height:146px;">
        <div class="swiper-wrapper" style="height:146px;">
          <div v-for="banner in banners" :key="banner.id" class="swiper-slide">
            <a :href="banner.link">
              <img v-bind:data-src="banner.loadableImgUrl" class="swiper-lazy" alt="">
            </a>
            <div class="swiper-pagination"></div>
          </div>
        </div>
      </div>
      <!--banner-->
    </div>
    <quill-editor v-model="content" @change="onEditorChange($event)" ref="myQuillEditor" :options="editorOption" @blur="onEditorBlur($event)" @focus="onEditorFocus($event)" @ready="onEditorReady($event)">
    </quill-editor>
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
  components: {
    navBar
  },
  data() {
    return {
      banners: [],
      loaded: false,
      content: '<h2>I am Example</h2>',
      editorOption: {
        // some quill options
      }
    }
  },
  created() {
    this.fetchData();
  },
  mounted() {

  },
  methods: {
    //轮播图
    fetchData: function () {
      var self = this;
      axios.get("/static/data/index.json").then((res) => {
        if (res.data.code === '1') {
          self.loaded = false
          self.banners = res.data.data.WAP_HOME_SLIDER_BANNER;
          self.loaded = true;
        }
      })
    },
    onEditorBlur(editor) {
      console.log('editor blur!', editor)
    },
    onEditorFocus(editor) {
      console.log('editor focus!', editor)
    },
    onEditorReady(editor) {
      console.log('editor ready!', editor)
    },
    onEditorChange({ editor, html, text }) {
      console.log('editor change!', editor, html, text)
      this.content = html
    }

  },
  watch: {
    "loaded": function (val) {
      this.$nextTick(function () {
        try {
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
        } catch (e) {
          console.log(e)
        }
      })
    }
  }
}




</script>
