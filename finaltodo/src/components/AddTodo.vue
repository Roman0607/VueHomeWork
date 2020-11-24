<template>
    <div>
     <input type="text" v-model="text">
     <input type="button" value="Add Todo" @click="add">
    </div>
</template>
<script>
import {createNamespacedHelpers} from 'vuex';
import {todoListModule} from '@/store/todolist/todolist';
import {ADD_TODO} from '@/store/todolist/types';
const {mapActions}=createNamespacedHelpers(todoListModule)
export default {
    name:'AddTodo',
    data() {
        return {
            text:'',
        }
    },
    methods: {
        ...mapActions({
        addTodo: ADD_TODO
        }),
       async add(){
           try {
               const obj={
                   text:this.text
               }
               await this.addTodo(obj);
               this.text='';
              
           } catch (e) {
               console.log(e);
           }
        }
    },
}
</script>