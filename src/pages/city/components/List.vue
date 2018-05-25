<template>
	<div class="list">


		<ul>
				<li @click="changecity('昆明1')">昆明1</li>
				<li @click="changecity('昆明2')">昆明2</li>
				<li @click="changecity('昆明3')">昆明3</li>
				<li @click="changecity('昆明4')">昆明4</li>
				<li @click="changecity('昆是是是是明5')">额得出得出昆明5</li>
			</ul>	
	</div>
</template>

<script>
export default {

  name: 'List',

  data () {
    return {

    };
  },
  methods:{
  	changecity(name){
       
       this.$store.commit('changecity',name)
       this.$router.push('/');

  	}
  }
};
</script>

<style lang="css" scoped>
ul>li{
	line-height: .4rem;
	padding: .2rem 0rem;
	font-size: .4rem;
}
</style>