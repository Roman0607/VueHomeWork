<template>
    <div>
       <ul>
           <li v-for="(todo,id) in getTodos" :key="id">
              <TodoItem  :todo="todo"/>
           </li>
       </ul>
    </div>
</template>
<script>
import { createNamespacedHelpers } from 'vuex';
import {todoListModule} from '@/store/todolist/todolist';
import { TODOS } from "@/store/todolist/types";
import TodoItem from '@/components/TodoItem';
const {mapGetters}= createNamespacedHelpers(todoListModule);
export default {
    name:'TodoList',
    data() {
        return {
            todoList:[],
        }
    },
    components:{
     TodoItem,
    },
    computed: {
        ...mapGetters({
           getTodos: TODOS
        })
    },
}
</script>