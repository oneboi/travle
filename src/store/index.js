import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

//导出 通过Vuex创建的一个仓库
import state from './state.js'
import mutations from './mutations.js'
export default new Vuex.Store({
   state:state,
   mutations:mutations,
   getters:{
     doubleCity(state){
      return  state.city +'||'+state.city;
     }
   }
})