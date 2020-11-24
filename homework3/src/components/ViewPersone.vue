<template>
    <div>
        <button @click="getPersone">Get Persones</button>
        <ul v-for="(persone,index) in persones" :key="index">
             <li>{{persone.name}}-{{persone.lastName}}</li>
             <button @click="removePersone(persone.id)">Remove</button>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
        persones:[]
        }
    },
    methods:{
getPersone(){
    this.$http.get('https://http-lesson1.firebaseio.com/lesson1.json')
    .then(rej=>{
        return rej.json();
    })
    .then(rej=>{
       Object.values(rej).forEach(v=>{
           this.persones.push(v);
       })
    }).catch(r=>{
        return r
    });   
    
} 
,removePersone(id){
    console.log(this.$route.params);
       this.$http.get('https://http-lesson1.firebaseio.com/lesson1.json')
    .then(rej=>{
        return rej.json();
    })
    .then(rej=>{
        for (const key in rej) {
           if(rej[key].id===id){
               this.$http.delete(`https://http-lesson1.firebaseio.com/lesson1/${key}.json`);
               
           }
        }
       
        }
    )
}
    },
    beforeMount(){
        console.log(this.$route.params);
    },

}
</script>