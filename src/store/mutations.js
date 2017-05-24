import {
  RECORD_USERINFO,
  GET_USERINFO
} from './mutation-types.js'

export default {
  [GET_USERINFO](state,info){
    state.userInfo=info;
    console.log(info)
  },
  //记录用户信息
  [RECORD_USERINFO](state,info){
    console.log(info)
    state.userInfo=info;
  }
}
