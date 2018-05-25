<template>
  <div class="city">
      <Header></Header>
      
      <Search></Search>
       <List></List>

  </div>
</template>

<script>

import Header from './components/Header'
import Search from './components/Search'
import List from './components/List'
export default {

  name: 'City',

  data () {
    return {

    };
  },
  components:{
    Header,
    Search,
    List
  }
};
</script>

<style lang="css" scoped>
</style>