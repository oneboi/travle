
export default  {
    //两个参数
    changecity (state,city) {
      // 变更状态
      console.log('.....mutations.....');
      console.log(state);
      console.log(city);
      state.city=city
      try{
        
        localStorage.city=city

      }catch(e){

      }
      
    }

    
  }

