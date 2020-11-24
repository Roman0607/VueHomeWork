<template>
  <div>
   <h1>Todo List</h1>
   <hr>
   <AddTodo/>
   <TodoList/>
  </div>
</template>

<script>
import AddTodo from '@/components/AddTodo';
import TodoList from '@/components/TodoList';
import {todoListModule} from '@/store/todolist/todolist';
import {GET_TODOS} from '@/store/todolist/types';

export default {
  name: 'App',
  components: {
   AddTodo,
   TodoList,

  },
  methods: {
  
  },
  async beforeMount() {
    try {
      await  this.$store.dispatch(`${todoListModule}/${GET_TODOS}`);
    } catch (e) {
      console.log(e);
    }
  },
}
</script>

<style>

</style>
