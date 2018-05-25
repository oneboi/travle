<template>
	<div class="gallery" @click="closeGllery">
		<div class="wrapper">
	

	<swiper  ref="mySwiper" :options="swiperOption" >
    <!-- slides -->
    <swiper-slide  v-for="(item,index) in imgs" :key="index">
    	<img class="gallery-img" :src="item" >

    
    </swiper-slide>

    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>

		</div>
	</div>
</template>

<script>
export default {

  name: 'Gallery',

  data () {
    return {
         swiperOption: {
          pagination:'.swiper-pagination',
          paginationType:'fraction',
          observer:true,
          observeParents:true
        },
    };
  },
  props:{
    imgs:{
    	type: Array,
    	default(){
    		return [
    		'http://img1.qunarzz.com/sight/p0/1710/b5/b55cc50b550b94d3a3.img.jpg_r_800x800_26a35612.jpg',
    		'http://img1.qunarzz.com/sight/p0/1412/d1/687b3dc44844286d845ea7ba11def63d.water.jpg_r_800x800_4c13e657.jpg'

    		]
    	}
    }
  },
  methods:{

  	closeGllery(){
  		this.$emit('closeGllery');
  	}
  }
};
</script>

<style lang="css" scoped>
.gallery >>> .swiper-container {
   overflow: inherit
}
.gallery{
	position: absolute;
	top:0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #000;
	display: flex;
	flex-direction: column;
	z-index: 999;
	justify-content: center;
}

.wrapper{

/*	background: #fff;*/
	/*overflow: hidden;*/
	width: 100%;
	height: 0;
	padding-bottom: 100%;
}
.gallery-img{
	width: 100%;
}
.swiper-pagination{
	color: #fff;
	bottom: -1rem;
}
</style>