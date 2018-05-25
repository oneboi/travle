<template>
     
	<div class="icons">

		<swiper :options="Option">
		  <swiper-slide    v-for="(page , index) in pages" :key="index">
			 <div class="icon" v-for="item in page" :key="item.id">
			 	<div class="icon-img">
			 		<img  class="icon-img-img" :src="item.imgUrl">
			 	</div>
			 	<p class="icon-text">{{item.desc}}</p>
			 </div>
			</swiper-slide>
			  
		</swiper>
	</div>
</template>

<script>
export default {

  name: 'Icons',

  data () {
    return {
       Option: {
           autoplay:false
        },

    	iconList:[
          {
          	id:'001',
          	imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          	desc:'图标描述'
          },
           {
          	id:'002',
          	imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          	desc:'图标描述'
          },
           {
          	id:'003',
          	imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          	desc:'图标描述'
          },
           {
          	id:'004',
          	imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          	desc:'图标描述'
          },
           {
          	id:'005',
          	imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          	desc:'图标描述'
          },
           {
          	id:'006',
          	imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          	desc:'图标描述'
          },
           {
          	id:'007',
          	imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          	desc:'图标描述'
          },
           {
          	id:'008',
          	imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          	desc:'图标描述'
          },
           {
          	id:'009',
          	imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
          	desc:'图标描述'
          },

    	]

    };
  },
  props:{

    list:Array
  },
  computed:{
  	pages () {

  		const pages=[];
  		this.list.forEach((item,index)=>{
  			const page =Math.floor(index/8)
  			if(!pages[page]){
  				pages[page]=[]
  			}
  			pages[page].push(item)
  		})
  		return pages
  		
  	}
  }
};
</script>

<style lang="css" scoped>

.icons{
  margin: .1rem;
}

.icons >>> .swiper-container{
	overflow: hidden;
	width: 100%;
	height: 0;
	padding-bottom: 50%;

}
.icon{
	position: relative;
 float: left;
  overflow: hidden;
  height: 0;
  width: 25%;
  padding-bottom:  25%;

}
.icon-img{
	position: absolute;
	top:0;
	left: 0;
	right: 0;
	bottom: .44rem;
	box-sizing: border-box;
	padding: .1rem;
}
.icon-img-img{
	height: 100%;
	display: block;
	margin:  0 auto;
}
.icon-text{
	position: absolute;
	left: 0;
	right: 0;
	line-height: 0.44rem;
	line-height: 0.44rem;
	bottom: 0;
	text-align: center;
}
</style>
