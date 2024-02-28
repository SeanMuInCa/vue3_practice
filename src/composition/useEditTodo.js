import {ref} from 'vue';

export default function useEditTodo(todos){
    const editingTodoRef = ref(null);//当前正在修改的todo
    let oldTitle = null;
    function editTodo(todo){
        oldTitle = todo.title;
        console.log(oldTitle);
        editingTodoRef.value = todo;
    }

    const modified = () => {
        editingTodoRef.value = null;
    }

    const cancelEdit = (todo) => {
        editingTodoRef.value = null;
        todo.title = oldTitle;
    }
    return {
        editingTodoRef,editTodo,modified,cancelEdit
    }
}