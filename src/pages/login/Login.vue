<template>
  <div class="loginContent">
    <Header-bar></Header-bar>
    <form class="loginForm">
      <div class="inputContent" flex="main:justify" :class="phoneTip">
        <input type="text" placeholder="手机号" class="" maxlength="11" v-model="phone" @blur="phoneCheck"/>
      </div>
      <div class="inputContent " :class="passwordTip" flex="main:justify">
        <input type="password" placeholder="密码" v-model="passWord" v-if="passwordType" @blur="passwordCheck"/>
        <input type="text" placeholder="密码" v-model="passWord" v-else @blur="passwordCheck"/>
        <i-switch @on-change="change">
          <span slot="open">开</span>
          <span slot="close">关</span>
        </i-switch>
      </div>
      <div class="inputContent " flex="main:justify" :class="codeTip">
        <input type="text" placeholder="验证码" v-model="code"/>
        <div class="code">1234</div>
        <div class="codeBtn">换一个</div>
      </div>
    </form>
    <div class="loginBtn bg-34bba9" @click="login"> 登录</div>
    <Tip v-if="showTip" :type="type" :message="message" @closeTip="closeTip">
      <Icon type="sad-outline" size=".5" slot="icon" :color="'#f30'"></Icon>
    </Tip>
  </div>
</template>


<script>
  import HeaderBar from "../../components/Head";
  import Icon from "../../components/Icon"
  import Tip from "../../components/Tip";
  import iSwitch from "../../components/Switch";
  import {mapMutations}  from 'vuex'
  import {phoneLogin}from '../../service/getData'
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
        phone:'18600206900',//手机号
        passWord:"43343",//密码
        code:'',//验证码
        userInfo:''//获取到的用户信息
      }
    },
    components:{
      HeaderBar,
      Tip,
      Icon,
      iSwitch
    },
    methods:{
      ...mapMutations([
        'RECORD_USERINFO'
      ]),
      //登录
       login:async function(){

        if(this.phone== ''||!(/^1[35784]\d{9}$/.test(this.phone))){
          this.phoneTip="error";
          this.message="请输入正确的手机号"
          this.showTip=true;
          return
        }
        if(this.passWord==''){
          this.passwordTip="error"
          this.message="请输入密码"
          this.showTip=true;
          return
        }
        this.userInfo=await phoneLogin(this.phone,this.passWord,this.code);

        if(this.userInfo.user){
          this.RECORD_USERINFO(this.userInfo);
          this.$router.go(-1)
        }else{

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
      },
      //失去焦点检查密码
      passwordCheck:function(){
        if(this.passWord==''){
          this.passwordTip="error"
        }else{
          this.passwordTip=""
        }
      },
      //密码显示
      change:function(status){
        this.passwordType=!this.passwordType
      }
    },
    watch:{
      phone:function(){
        if(this.phone.length>=11){
          this.phoneCheck();
        }
      },
      passWord:function(){
        this.passwordCheck()
      },
      userInfo:function(val){
        console.log(val)
      }
    }
  }
</script>
