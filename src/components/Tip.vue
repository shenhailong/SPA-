<template>
  <transition name="bounce">
    <div class="tip-content" v-if="!closed">
      <div class="tip-text-content" flex="dir:top" :class="wrapClasses">
        <div  style="text-align:center" class="iconWrap">
          <!--<i class="ion ion-android-arrow-dropright-circle"></i>-->
          <slot name="icon">
            <Icon :type="iconType" :size="size" :color="iconColor"></Icon>
          </slot>
        </div>
        <div class="tip-text">{{message}}</div>
        <div class="tip-confirm" @click="close">确认</div>
      </div>
    </div>
  </transition>
</template>

<script>
  import Icon from "./Icon"
//type 有四种类型info success waring error
  export default{
    components:{Icon},
    props:{
      type:{
        type:String,
        default:'info'
      },
      color:{
        type:String,
        default:'info'
      },
      size:{
        type:String,
        default:'.5'
      },
      message:{
        type:String,
        default:''
      }

    },
    data (){
      return {
        closed:false
      }
    },
    computed:{
      wrapClasses(){
        return [
          `tip-icon`,
          `tip-${this.type}`
        ]
      },
      iconType(){
        let ion = '';
        switch (this.type){
          case 'info':
            ion = 'information-circled';
            break;
          case 'warning':
            ion = 'android-alert';
            break;
          case 'error':
            ion = 'close-circled';
            break;
          case 'success':
            ion = 'checkmark-circled';
            break;
        }
        return ion
      },
      iconColor(){
        let color = '';
        switch (this.type){
          case 'info':
            color = '#39f';
            break;
          case 'warning':
            color = '#f90';
            break;
          case 'error':
            color = '#f30';
            break;
          case 'success':
            color = '#0c6';
            break;
        }
        return color
      }
    },
    methods:{
      close:function(){
        console.log(787878)
        this.$emit('closeTip')
      }
    }
  }
</script>
