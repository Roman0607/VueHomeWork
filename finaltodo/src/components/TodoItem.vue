<template>
    <div>
     <p>{{todo.text}}
    <button @click="remove">Remove Todo</button>
     </p>
    </div>
</template>
<script>
import {REMOVE_TODO} from '@/store/todolist/types';
import {todoListModule} from '@/store/todolist/todolist';
import { createNamespacedHelpers } from 'vuex';

const{mapActions}= createNamespacedHelpers(todoListModule);
export default {
    name:'TodoItem',
    props:{
        todo:{
            type:Object
        }
    },
    methods: {
        ...mapActions({
            removeTodo:REMOVE_TODO
        }),
        async remove(){
            try {
                await this.removeTodo(this.todo.id);
            } catch (e) {
                console.log(e);
            }
        }
    },
}
</script>