<template>
  <span :class="wrapClasses"
        @click="toggle">
    	<span class="iSwitch-inner">
    	  <slot name="open" v-if="currentValue"></slot>
    	  <slot name="close" v-if="!currentValue"></slot>
    	</span>
  </span>
</template>


<script>
 export default {
    props:{
      value: {
        type:Boolean,
        default: false
      },
      disabled:{
        type:Boolean,
        default:false
      },
      size: {

      }
    },
    data (){
      return {
        currentValue:this.value
      }
    },
    computed:{
      wrapClasses(){
        return [`iSwitch`,
        {
          [`iSwitch-checked`]:this.currentValue
        }
        ]
      }
    },
    methods:{
      toggle(){
        if(this.disabled){
          return
        }
        const checked=!this.currentValue;
        this.currentValue = checked;
        this.$emit("on-change",checked)
      }
    },
    watch: {
      value (val){
        this.currentValue =val;
      }
    }
 }
</script>
