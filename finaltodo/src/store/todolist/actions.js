import { ADD_TODO,GET_TODOS,REMOVE_TODO,SET_TODO, SET_TODOS,REMOVED_TODO} from "./types";
import Vue from 'vue';

export const actions={

    [ADD_TODO]: async({commit},obj)=>{
        try {
           const {body:{name}}= await Vue.http.post('https://http-lesson1.firebaseio.com/todolist.json',obj);
           const todoItem={...obj, id:name};
           commit(SET_TODO,todoItem);
        } catch (e) {
            console.log(e);
        }
    },

    [GET_TODOS]:async({commit})=>{
        try {
            const todos=[];
           const {body}= await Vue.http.get('https://http-lesson1.firebaseio.com/todolist.json')
            for(let item in body){
                todos.push({...body[item],id:item});
            }
            commit(SET_TODOS,todos);
        } catch (e) {
            console.log(e);
        }
    },

    [REMOVE_TODO]:async({commit},id)=>{
       try {
         await Vue.http.delete(`https://http-lesson1.firebaseio.com/todolist/${id}.json`);
         commit(REMOVED_TODO,id);
       } catch (e) {
           console.error(e);
       }
    }
}