<template>
  <div>
   <input type="text"  v-model="text">
   <button @click="addEl(text)" :class="hidden">Add</button>
   <p v-if="show">Do some task and after that add new one</p>
   <ol>
     <li v-for="(n,index) in this.arrayToDo" :key="index">
       {{n}}
       <button @click="removeEl(index)">Delete this</button>
     </li>
   </ol>
  </div>
</template>

<script>


export default {
  name: 'App',
  
 data(){
   return{
text:'',
arrayToDo:[ ],
show:false,

   }
 },
 computed:{
hidden(){
  if(this.arrayToDo.length>=10){
    return 'hidden'
  }else{return ''}
}
 },
 methods:{
addEl(text){
this.arrayToDo.push(text);
if(this.arrayToDo.length>=10) this.show=true;
},
removeEl(index){
this.arrayToDo.splice(index,1);
if(this.arrayToDo.length<10) this.show=false;
}
 }
}
</script>

<style>
.hidden{
  display: none;
}
</style>
