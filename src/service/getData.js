import * as login from "./dataJS/login"   //登录数据，用户信息



// 使用 promise 加载本地测试数据

const setpromise = data =>{
  return new Promise((resolve,regect) =>{
    resolve(data)
  })
}


//生产环境使用axios加载数据，
if(false){

}else{
  var getUser = () => setpromise(login.userInfo);//用户信息
}


export {
  getUser
}
