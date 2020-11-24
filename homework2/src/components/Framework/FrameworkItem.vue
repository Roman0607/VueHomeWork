<template>
    <div>
        <h2>New persone</h2>
        <span v-for="(persone,index) in persone" :key="index">
         <b> {{index}}</b>     ----<i>{{persone}}</i>
        </span>
        <!-- <button @click="deletePersone()">Delete persone</button> -->
    </div>
</template>
<script>
export default {
    name:'FrameworkItem',
    props:{
        persone:{
            type:Object,
            default:null
        }
    },
    methods:{
        // deletePersone(){
        //   this.$emit('deletePersone',this.persone);
        // }
    }
}
</script>
<style scoped>
span{
    display: flex;
    margin-bottom: 5px;
}
</style>