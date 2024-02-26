import {ref } from 'vue'
import { generateId } from '../util/todoStorage';
export default function useNewTodo(){
    const newTodoTitle = ref("");//新任务的标题

    const addTodo = () => {//新增任务
        const value = newTodoTitle.value && newTodoTitle.value.trim();
        if(!value) return;
        
        //生成一个任务对象，加到list里
        const todo = {
            id:generateId(),
            title: value,
            isDone: false,
            
        }
        console.log(todo);
    }

    return {
        newTodoTitle,addTodo
    }
}