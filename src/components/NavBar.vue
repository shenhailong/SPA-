<template>
    <nav>
      <router-link to='/home'><i class="icon disB home" :class='currentIcon.home'>icon</i>首页</router-link>
      <router-link to='/classify'><i class="icon disB classify" :class='currentIcon.classify'>icon</i>分类</router-link>
      <router-link to='/search'><i class="icon disB search" :class='currentIcon.search'>icon</i>查询</router-link>
      <router-link to='/cart'><i class="icon disB cart" :class='currentIcon.cart'>icon</i>购物车</router-link>
      <router-link to='/me'><i class="icon disB me" :class='currentIcon.me'>icon</i>我的</router-link>
    </nav>
</template>

<script>
export default {
  name: '',
  components:{

  },
  data(){
    return {
      currentIcon:{
        home:'',
        classify:'',
        search:'',
        cart:'',
        me:''
      }
    }
  },
  created(){
    var current=this.$route.name
    this.curremtIcon(current);
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
