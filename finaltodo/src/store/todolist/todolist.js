import {getters} from '@/store/todolist/getters';
import {actions} from '@/store/todolist/actions';
import {mutations} from '@/store/todolist/mutations';
import {state} from '@/store/todolist/state';

const namespaced=true;

export const todoListModule='todolist';
export const todolist={
    actions,
    getters,
    mutations,
    namespaced,
    state
}