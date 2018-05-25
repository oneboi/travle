<template>
	<div class="banner">
		<div class="banner-img" @click="handleBannerClick">
		<img class="mp-imgavatar-img" src="https://imgs.qunarzz.com/p/tts2/1511/ba/810b1232b65e34f7.jpg_640x360_2dd2003e.jpg" alt="好色之旅：东川红土地一日游天天发团（含餐+含二环内酒店接送）">
		<div class="banner-info">
			<div class="left">出发地:昆明</div>
			<div class="right">昆明合丰假期</div>
		</div>
	   </div>
	   
	   <Gallery  @closeGllery="closeGllery" :imgs="imgs" v-show="showGllery"></Gallery>
	</div>
</template>

<script>

import Gallery from '../../../common/gallery/Gallery.vue'
export default {

  name: 'Banner',

  data () {
    return {
      imgs:[
        'http://img1.qunarzz.com/sight/p0/1710/18/18b6106dca767cb9a3.img.jpg_r_800x800_bd2dbb0f.jpg',
        'http://img1.qunarzz.com/sight/p0/1710/2a/2a5a54b3fca92414a3.img.jpg_r_800x800_ad526893.jpg'
      ],
      showGllery:false,

    };
  },
  methods:{
    handleBannerClick(){
    	this.showGllery=true;
    },
    closeGllery(){
    	this.showGllery=false;
    }
  },
  components:{
  	Gallery
  }
};
</script>

<style lang="css" scoped>
/*页面防抖动*/
.banner-img{
	position: relative;
	overflow: hidden;
	height: 0;
	padding-bottom: 55%;
  }
 .banner-img>img{
 	width: 100%
 }
 .banner-img>.banner-info{
 	position: absolute;
 	left: 0 ; 
 	right: 0;
 	bottom: 0;
 	line-height: .6rem;
 	display: flex;
 	color: #fff;
 	padding: 0 .2rem;
 	font-size: .3rem;
 	background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8));
 }
 .left{
 	flex: 1;
 }
 .right{
 	
 }
</style>