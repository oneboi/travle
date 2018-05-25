<template>
	<div class="header">
       城市列表

       <router-link to="/" class="link" >
      	<div class="iconfont header-back">
				&#xe624;
			</div>
		</router-link>
	</div>
</template>

<script>
export default {

  name: 'Header',

  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>
.header{
 position: relative;
 height: .86rem;
 line-height: .86rem;
 text-align: center;
 color: #fff;
 background:#7e57c2;
 overflow: hidden;
 font-size: .32rem;
}
.header-back{

position: absolute;
color: #fff;
text-align: center;
font-size: .4rem;
top: 0;
left: 0;
}
.link{
  color: #fff;
}
</style>