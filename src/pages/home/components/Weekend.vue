<template>
	<div class="weekend">
		<!-- 周末去哪 -->
		<div class="title">周末去哪</div>
		<ul>
			<li class="item border-bottom" v-for="item in list" :key="item.id">
				<div class="item-img-wrapper">
					<img class="mp-like-img" :src="item.imgUrl" alt="石林冰雪海洋世界">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>
					
				    
				</div>
			</li>
		</ul>
		
	</div>
</template>

<script>
export default {

  name: 'Weekend',

  data () {
    return {
       
    	datalist:[
          {
          	id:'001',
          	imgurl:'http://img1.qunarzz.com/sight/source/1505/4f/a09503e4b9ee85.jpg_r_640x214_3c128df5.jpg',
          	title:'石林冰雪海洋世界',
          	desc:'描述石林冰雪海洋世界'
          },
            {
          	id:'002',
          	imgurl:'http://img1.qunarzz.com/sight/source/1505/4f/a09503e4b9ee85.jpg_r_640x214_3c128df5.jpg',
          	title:'石林冰雪海洋世界',
          	desc:'描述石林冰雪海洋世界'
          },

         {
          	id:'003',
          	imgurl:'http://img1.qunarzz.com/sight/source/1505/4f/a09503e4b9ee85.jpg_r_640x214_3c128df5.jpg',
          	title:'石林冰雪海洋世界',
          	desc:'描述石林冰雪海洋世界'
          },
            {
          	id:'004',
          	imgurl:'http://img1.qunarzz.com/sight/source/1505/4f/a09503e4b9ee85.jpg_r_640x214_3c128df5.jpg',
          	title:'石林冰雪海洋世界',
          	desc:'描述石林冰雪海洋世界'
          },





    	]

    };
  },
  props:{
  	list:Array
  }
};
</script>

<style lang="css" scoped>

.title{
	line-height: .8rem;
	background: #eee;
	text-indent: .2rem;
	margin-top: .2rem;
}

.item{
	/*height: 1.9rem;
	display: flex;
	overflow: hidden;*/
	

}
.item-img-wrapper{
	overflow: hidden;
	height: 0;
	padding-bottom: 33.9% /*宽高比*/

}
.item-img-wrapper img{
	width: 100%;
}
.item-info{
	/*flex: 1;
	min-width: 0;*/
	
}

.item-title{
	line-height: .54rem;
	font-size: .32rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	padding-left:.2rem;
}
.item-desc{
	line-height: .5rem;
	color:#ccc;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
	padding-bottom: .5rem;
	padding-left: .2rem;
}

</style>