import {ref} from 'vue';

export default function useEditTodo(todos){
    const editingTodoRef = ref(null);//当前正在修改的todo
    let oldTitle = null;
    function editTodo(todo){
        oldTitle = todo.title;
        editingTodoRef.value = todo;
    }

    const modified = (todo) => {
        editingTodoRef.value = null;
        const title = todo.title.trim();
        if(title){
            todo.title = title;
        }else{
            let a  = todos.value.indexOf(todo);
            todos.value.splice(a,1);
        }
    }

    const cancelEdit = (todo) => {
        editingTodoRef.value = null;
        todo.title = oldTitle;
    }
    const checkAll = (status) => {
        todos.value.forEach(item => {
            item.isDone = status;
        });
    }
    const checkStatus = () => {
        
        return todos.value.filter(item => item.isDone).length;
    }
    return {
        editingTodoRef,editTodo,modified,cancelEdit,checkAll,checkStatus
    }
}