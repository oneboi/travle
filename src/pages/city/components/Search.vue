<template>
	<div class="search">

		<input type="text"  class="search-input" name="" placeholder="输入拼音或者汉字">
	</div>
</template>

<script>
export default {

  name: 'Search',

  data () {
    return {

    };
  }
};
</script>

<style lang="css" scoped>

.search{
	height: .7rem;
	padding: 0 .1rem;
	background: #7e57c2;
}
.search-input{
	height: .62rem;
	line-height: .62rem;
	width: 100%;
	box-sizing: border-box;
	text-align: center;
	padding:  0 .1rem;
	border-radius: 0.06rem;
	color: #666;
}
</style>