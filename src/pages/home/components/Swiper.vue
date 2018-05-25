<template>

	<div class="wrapper">
		  <swiper :options="swiperOption" ref="mySwiper"  v-if="list.length">
    <!-- slides -->
    <swiper-slide v-for="item in list" :key="item.id" >
    	<img class="swipe-img" :src="item.imgUrl" >
    </swiper-slide>
    
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
  </swiper>

	</div>

</template>

<script>
  export default {
    name: 'carrousel',//为什么不可以写swiper
    data() {
      return {
        swiperOption: {
          pagination:'.swiper-pagination',
          loop:true,
          autoplay:false
        },
        datalist:[

          {id:'001',imgurl:"http://img1.qunarzz.com/piao/fusion/1802/73/d1ba8edc561d1f02.jpg_750x200_1ae7b013.jpg"},
          {id:'002',imgurl:"http://img1.qunarzz.com/piao/fusion/1701/77/70bc6fcd3da51b02.jpg_750x200_05b80faa.jpg"},
          {id:'003',imgurl:"http://img1.qunarzz.com/piao/fusion/1805/e5/59fad13a64807d02.jpg_750x200_713ae984.jpg"},


         ]
      }
    },
    props:{
      list:Array
    },
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      },
      showSwiper(){

        return this.list.length;//解决显示第四章的问题
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
   
       
      
      
      
    }
  }
</script>
<style  scoped>
.wrapper >>> .swiper-pagination-bullet-active {    
   background:#fff;
 }
	.swipe-img{
		width: 100%;
	}
	.wrapper{
     width: 100%;
     height: 0;
     overflow: hidden;
     background: #999;
     /*图片的宽高比*/
     padding-bottom: 31.25%;/*宽比上高*/
	}

</style>