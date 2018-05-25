<template>
	<div class="recomend">
		<!-- 热销推荐 -->
		<div class="title">热销推荐</div>
		<ul>
			<router-link  tag="li" class="item border-bottom" v-for="item in datalist" :key="item.id" :to=" '/detail/'+item.id">
				<div class="item-img-wrapper">
					<img class="mp-like-img" :src="item.imgurl" alt="石林冰雪海洋世界">
				</div>
				<div class="item-info">
					<p class="item-title">{{item.title}}</p>
					<p class="item-desc">{{item.desc}}</p>   
				</div>
			</router-link>
		</ul>
		
	</div>
</template>

<script>
export default {

  name: 'Recommend',

  data () {
    return {

    	datalist:[
          {
          	id:'001',
          	imgurl:'http://img1.qunarzz.com/sight/p0/1708/21/215c0b092e140ef3a3.img.jpg_200x200_7a01f355.jpg',
          	title:'石林冰雪海洋世界',
          	desc:'描述石林冰雪海洋世界'
          },
            {
          	id:'002',
          	imgurl:'http://img1.qunarzz.com/sight/p0/1708/21/215c0b092e140ef3a3.img.jpg_200x200_7a01f355.jpg',
          	title:'石林冰雪海洋世界',
          	desc:'描述石林冰雪海洋世界'
          },

         {
          	id:'003',
          	imgurl:'http://img1.qunarzz.com/sight/p0/1708/21/215c0b092e140ef3a3.img.jpg_200x200_7a01f355.jpg',
          	title:'石林冰雪海洋世界',
          	desc:'描述石林冰雪海洋世界'
          },
            {
          	id:'004',
          	imgurl:'http://img1.qunarzz.com/sight/p0/1708/21/215c0b092e140ef3a3.img.jpg_200x200_7a01f355.jpg',
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
	height: 1.9rem;
	display: flex;
	overflow: hidden;
	

}
.item-img-wrapper{
	width: 1.7rem;
	height: 1.7rem;
	padding: .1rem;

}
.item-img-wrapper img{
	width: 100%;
}
.item-info{
	flex: 1;
	min-width: 0;
	padding: .15rem;
}

.item-title{
	line-height: .54rem;
	font-size: .32rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
.item-desc{
	line-height: .5rem;
	color:#ccc;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}

</style>