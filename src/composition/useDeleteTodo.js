import {ref} from 'vue';

export default function useDeleteTodo(todos){
    const deleteOne = (todo) => {
        todos.value.splice(todos.value.indexOf(todo),1);
    }

    const deleteAll = () => {
        todos.value = todos.value.filter(item => item.isDone === false);
    }
    return {
        deleteOne,deleteAll
    }
}