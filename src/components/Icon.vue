<template>
  <i :class="classes" :style='styles'></i>
</template>

<script>
  export default{
    props:{
      type:{
        type:String,
        default:'info'
      },
      size:{
        type:[String,Number],
        default:'.16'
      },
      color:{
        type:String,
        default:'#000'
      },
    },
    computed:{
      styles(){
        let style = {};
        style['font-size']=`${this.size}rem`;
        style.color=this.color;
        return style;
      },
      classes(){
        return `ion ion-${this.type}`
      }
    }
  }
</script>
