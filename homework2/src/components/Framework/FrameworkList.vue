<template>
    <div class="mainDiv">
      <div class="createPersone">
         <fieldset>
             <legend>Registration Form</legend>
             <form action class="form1">
                 <span>Name:</span>
             <input type="text" v-model="name">
                 <span>Last name:</span>
             <input type="text" v-model="lastName">
             <span>Age:</span>
             <input type="number" name="" v-model="age">
                 <span>Email:</span>
             <input type="email" v-model="email" >
                 <span>Password:</span>
             <input type="password" v-model="password">
            
             Men:<input type="radio" name="Male"  v-model="men">
             Women:<input type="radio" name="Female" v-model="women" > 
             <input type="button" value="Create" style="justify-content: center;"
             @click="createPersone">
             </form>
         </fieldset>
      </div>
      <div class="printPersone">
          <div v-for="(persone,id) in persones" :key="id">
              <FrameworkItem 
              :persone="persone" 
              />
               <button @click="removeButton(id)">Delete</button>
          </div>
      </div>
    </div>
</template>
<script>
import FrameworkItem from "@/components/Framework/FrameworkItem";
export default {
    name:'FrameworkList',
    data(){
        return{
         name:'',
         lastName:'',
         email:'',
         password:'',
         men:true,
         women:true,
         age:null,
         id:0,
         persones:[
           
         ]
        }
        
    },
    components:{
        FrameworkItem,
    },
    methods:{
        defaultName(){
          this.name='',
         this.lastName='',
         this.email='',
         this.password='',
         this.men=true,
         this.women=true,
         this.age=null
        },
        removeButton(index){
this.persones.splice(index,1);
        },
createPersone(){
    let gender='women';
    if(!this.men ){gender='men'}
    let newPersone={
name:this.name,
lastName:this.lastName,
age:this.age,
email:this.email,
password:this.password,
gender: gender,
    };
this.persones.push(newPersone);
this.defaultName();
console.log(this.persones);
},
// deletePersone(event){
//     this.persones.find((value,index)=>{
// if(event===value){
//     this.persones.splice(index,1);    
// }
//     });

// }
    }
}
</script>
<style scoped>
.mainDiv{
    display: flex;
    justify-content: space-evenly;
}
fieldset{
border: dashed rgb(241, 138, 138);
border-radius: 10px;

}
input{
    margin-bottom: 10px;
}
.form1{
     display: flex;
     flex-direction: column;
     align-items: center;
}
</style>