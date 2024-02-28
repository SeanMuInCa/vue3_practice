import {computed, ref} from 'vue';

export default function useEditTodo(todos){
    const editingTodoRef = ref(null);//当前正在修改的todo
    let oldTitle = null;
    function editTodo(todo){
        oldTitle = todo.title;
        editingTodoRef.value = todo;
    }

    const modified = () => {
        editingTodoRef.value = null;
    }

    const cancelEdit = (todo) => {
        editingTodoRef.value = null;
        todo.title = oldTitle;
    }
    const allDone = computed({
        get(){
            return todos.value.filter(item => !item.isDone ).length === 0;
        },
        set(val){
            todos.value.forEach(item => item.isDone = val);
        }
    })
    // const checkStatus = () => {
        
    //     return todos.value.filter(item => item.isDone).length;
    // }
    return {
        editingTodoRef,editTodo,modified,cancelEdit,allDone
    }
}