<template>
	<div class="header">
		<div class="header-left">
			<div class="iconfont back-icon">
				&#xe624;
			</div>
		</div>
		<div class="header-input">
        <span class="iconfont">
				&#xe632;
			</span>
		输入城市/景点/主题</div>

		<router-link to="/city" class="link">
		<div class="header-right">
			<!-- vuex数据 -->
			{{city}}
			<!-- {{city}} -->
			<span class="iconfont arrow-icon">&#xe64a;
			</span>
		 </div>
		</router-link>
	</div>
</template>

<script>

import {mapState,mapMutaions,mapGetters } from 'vuex'
export default {

  name: 'Header',

  data () {
    return {

    };
  },

  computed: {
  	...mapState(['city']),
  	...mapGetters(['doubleCity'])
  },
  props:{
  	citys:String
  }
};
</script>

<style lang="css" scoped>
.header{


	line-height: 0.86rem;
	display: flex;
	background:#7e57c2;
	color: #fff;

}
.header>.header-left{
   min-width: 0.64rem;
}
.header>.header-left>.back-icon{
	font-size: 0.4rem;
	text-align: center;
}
.header>.header-input{
	flex: 1;
	background: #fff;
	border-radius: .1rem;
	margin-top: .12rem; /*12px;*/
    height: .62rem;/*86-12-12=62*/
	margin-left: .2rem;
	color: #ccc;
	padding-left: 0.2rem;
	line-height: .62rem;

}

.header>.header-right{
  width: 1.24rem;
  text-align: center;

}
.header>.header-right>.arrow-icon{
	font-size: 0.24rem;
	margin-left: -0.04rem;

}

.link{
  color: #fff;
}
</style>