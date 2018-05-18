<template>

	<div class="home">
		<Header></Header>
    <Swiper></Swiper>
    <Icons></Icons>

	
		
	</div>
</template>

<script>
import Header from'./components/Header';
import Swiper from'./components/Swiper';
import Icons from'./components/Icons';
export default {

  name: 'Home',

  data () {

    return {

    };

  },
  components:{
  	Header,
    Swiper,
    Icons
  }
};
</script>

<style lang="css" scoped>
</style>