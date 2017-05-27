import * as login from "./dataJS/login"   //登录数据，用户信息
import * as order from "./dataJS/orderList"//订单列表


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
  var phoneLogin=(phone,password,code)=> setpromise(login.userInfo);//手机登录获取用户信息
  var getOrderList=(limit,offset)=> setpromise(order.orderList.data.orderPage.content)//订单列表
}


export {
  getUser,
  phoneLogin,
  getOrderList
}
