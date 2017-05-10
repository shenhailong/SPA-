<template>
  <header flex="main:justify">
    <div @click="goBack"><i class="icon icon-arrow"></i>返回</div>
    <div>{{title}}</div>

  </header>
</template>
<script>
  export default{
    name: "header",
    props: {
      title:{
        type : String ,
        default:"子页面"
      }
    },
    methods:{
      goBack(){
        window.history.go(-1)
      }
    }
  }
</script>
