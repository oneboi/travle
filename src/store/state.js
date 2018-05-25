
let defaultCity="昆明";
try {

   if(localStorage.city){
   	
    defaultCity=localStorage.city;
   }
}catch(e){}


export default {
    //city: '昆明'
    city:localStorage.city || '昆明'
 
 }