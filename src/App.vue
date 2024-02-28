<template>
  <div id="app">
    <h1>{{  editTodo.checkStatus() }}</h1>
    <section class="todoapp">
        <header class="header">
            <h1>todos</h1>
            <input class="new-todo" 
            autofocus="false" 
            autocomplete="off" 
            placeholder="What needs to be done?" 
            v-model="todo.newTodoTitle.value"
            @keyup.enter="todo.addTodo"/>
        </header>
        <section class="main">
            <input id="toggle-all" class="toggle-all" type="checkbox" @change="editTodo.checkAll($event.target.checked)" :checked="editTodo.checkStatus()"/>
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <li class="todo" :class="{completed: todo.isDone, editing: editTodo.editingTodoRef.value === todo}" v-for="todo in filter.filtedData.value" :key="todo.id">
                    <div class="view">
                        <input class="toggle" type="checkbox" v-model="todo.isDone"/>
                        <label @dblclick="editTodo.editTodo(todo)">{{ todo.title }}</label>
                        <button class="destroy" @click="deleteTodo.deleteOne(todo)"></button>
                    </div>
                    <input class="edit" type="text" v-model="todo.title"  
                    @blur="editTodo.modified(todo)" 
                    @keypress.enter="editTodo.modified(todo)" 
                    @keyup.escape="editTodo.cancelEdit(todo)"/>
                </li>
            </ul> 
        </section>
        <footer class="footer">
            <span class="todo-count">
                <strong>{{ filter.unfinished }}</strong>
                <span>{{ (filter.unfinished.value) === 1 ? 'item left' : 'items left' }}</span>
            </span>
            <ul class="filters">
                <li><a href="#/all" :class="{ selected: filter.filterKeyRef === 'all'}">All</a></li>
                <li><a href="#/active" :class="{ selected: filter.filterKeyRef === 'active'}">Active</a></li>
                <li><a href="#/completed" :class="{ selected: filter.filterKeyRef === 'completed'}">Completed</a></li>
            </ul>
            <button class="clear-completed" v-show="filter.finished.value > 0" @click="deleteTodo.deleteAll">
                Clear completed
            </button>
        </footer>
    </section>
</div>
</template>


<script setup lang="ts">
  import useFileter from '@/composition/useFileter';
  import useTodoList from '@/composition/useTodoList';
  import useNewTodo from '@/composition/useNewTodo';
  import useEditTodo from '@/composition/useEditTodo';
  import useDeleteTodo from '@/composition/useDeleteTodo';

  const list = useTodoList();
  
  const todo = useNewTodo(list.todos);

  const filter = useFileter(list.todos);

  const editTodo = useEditTodo(list.todos);
  
  const deleteTodo = useDeleteTodo(list.todos);

</script>


<style scoped>
</style>