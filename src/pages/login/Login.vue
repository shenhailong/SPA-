<template>
  <div class="loginContent">
    <Header-bar></Header-bar>
    <form class="loginForm">
      <div class="inputContent" flex="main:justify">
        <input type="text" placeholder="手机号"/>
      </div>
      <div class="inputContent">
        <input type="password" placeholder="密码" v-model="passWord" v-if="passwordType"/>
        <input type="text" placeholder="密码" v-model="passWord" v-else/>
      </div>
      <div class="inputContent" flex="main:justify">
        <input type="text" placeholder="验证码"/>
        <div class="code">1234</div>
        <div class="codeBtn">换一个</div>
      </div>
    </form>
    <div class="loginBtn bg-34bba9" @click="login"> 登录</div>
  </div>
</template>


<script>
  import HeaderBar from "../../components/Head";
  export default {
    name:"order",
    data () {
      return {
        passwordType:true,
        passWord:""
      }
    },
    components:{
      HeaderBar
    },
    methods:{
      login:function(){
        this.passwordType=!this.passwordType
      }
    }
  }
</script>
