<template>
  <div class="loginContent">
    <Header-bar></Header-bar>
    <form class="loginForm">
      <div class="inputContent" flex="main:justify" :class="phoneTip">
        <input type="text" placeholder="手机号" class="" maxlength="11" v-model="phone" @blur="phoneCheck"/>
      </div>
      <div class="inputContent " :class="passwordTip">
        <input type="password" placeholder="密码" v-model="passWord" v-if="passwordType"/>
        <input type="text" placeholder="密码" v-model="passWord" v-else/>
      </div>
      <div class="inputContent " flex="main:justify" :class="codeTip">
        <input type="text" placeholder="验证码" v-model="code"/>
        <div class="code">1234</div>
        <div class="codeBtn">换一个</div>
      </div>
    </form>
    <div class="loginBtn bg-34bba9" @click="login"> 登录</div>
    <Tip v-if="showTip" :type="type" :message="message" @closeTip="closeTip">
      <Icon type="sad-outline" size=".5" slot="icon"></Icon>
    </Tip>
  </div>
</template>


<script>
  import HeaderBar from "../../components/Head";
  import Icon from "../../components/Icon"
  import Tip from "../../components/Tip";
  export default {
    name:"login",
    data () {
      return {
        passwordType:true,//切换显示密码可见
        showTip:false,//显示组件tip
        type:'error',//组件tip的类型
        message:"请输入手机号",//提示信息
        phoneTip:'',//手机号错误提示
        passwordTip:'',//密码空提示
        codeTip:'',//验证码提示
        phone:'',//手机号
        passWord:"",//密码
        code:''//验证码
      }
    },
    components:{
      HeaderBar,
      Tip,
      Icon
    },
    methods:{
      //登录
      login:function(){
        this.showTip=true;
        this.passwordType=!this.passwordType

        if(this.phone== ''||!(/^1[35784]\d{9}$/.test(this.phone))){
          this.phoneTip="error"
        }

      },
      //关闭tip的确认
      closeTip:function(){
        this.showTip=false
      },
      //失去焦点验证手机号
      phoneCheck:function(){
        if(this.phone== ''||!(/^1[35784]\d{9}$/.test(this.phone))){
          this.phoneTip="error"
        }else{
          this.phoneTip=""
        }
      }
    },
    watch:{
      phone:function(){
        if(this.phone.length>=11){
          this.phoneCheck();
        }
      }
    }
  }
</script>
