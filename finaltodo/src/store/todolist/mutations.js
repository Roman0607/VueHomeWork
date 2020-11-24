import { REMOVED_TODO, SET_TODO, SET_TODOS } from "./types";

export const mutations={

    [SET_TODO]:(state,todoItem)=>{
        state.todolist.push(todoItem);
    },

    [SET_TODOS]:(state,todos)=>{
        state.todolist=todos;
    },

    [REMOVED_TODO]:(state,id)=>{
        
         state.todolist=state.todolist.filter(v=> v.id!==id);
    }
}