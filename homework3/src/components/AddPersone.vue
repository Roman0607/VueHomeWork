<template>
    <div>
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
             <input type="button" value="Add" id="button"
             @click="createPersone">
             </form>
         </fieldset>
    </div>
</template>
<script>
export default {
    data(){
        return{
          name:'',
          lastName:'',
          age:'',
          email:'',
          password:'',
          men:false,
          women:false,
          persones:[]
        }
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
createPersone(){
    let time=new Date();
    let gender='woomen';
    if(!this.men){gender='men'}
let newPersone={
    name:this.name,
    lastName:this.lastName,
    age:this.age,
    email:this.email,
    password:this.password,
    gender:gender,
    id: time.getTime()
};
this.persones.push(newPersone);
this.$http.post('https://http-lesson1.firebaseio.com/lesson1.json',newPersone);
this.defaultName();
}
    }
}
</script>
<style scoped>
div{
    justify-content: center;
}
.form1{
    display: flex;
    flex-direction: column;
     align-items: center;
}
#button{
    margin-top: 10px;
}
</style>