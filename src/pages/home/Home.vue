<template>

	<div class="home">
		<Header :city="city"></Header>
    <Swiper :list="swiperList"></Swiper>
    <Icons :list="iconList"></Icons>
    <Recommend :list="recommendList"></Recommend>
    <Weekend :list="weekendList"></Weekend>
	</div>
</template>

<script>
import Header from'./components/Header';
import Swiper from'./components/Swiper';
import Icons from'./components/Icons';
import Recommend from'./components/Recommend';
import Weekend from'./components/Weekend';

import axios from 'axios';

import {mapState} from 'vuex';
export default {

  name: 'Home',

  data () {

    return {
      lastCity:"",
      swiperList:[],
      iconList:[],
      recommendList:[],
      weekendList:[]

    };

  },
  components:{
  	Header,
    Swiper,
    Icons,
    Recommend,
    Weekend
  },
  computed:{
    ...mapState(['city'])
  },
  methods:{
    
    getHomeInfo(){

      axios.get('/api/index.json?city='+this.city).then((res)=>{
          var res=res.data;
          if(res.ret&&res.data){
            const data=res.data;
            this.swiperList=data.swiperList
            this.iconList=data.iconList
            this.recommendList=data.recommendList
            this.weekendList=data.weekendList
          }
        console.log(res);
      })
    }
  },
  mounted:function(){
    this.lastCity=this.city;
    this.getHomeInfo()
  },
  activated:function(){

    if(this.lastCity !== this.city){
      this.getHomeInfo()
    }

  }
};
</script>

<style lang="css" scoped>
</style>