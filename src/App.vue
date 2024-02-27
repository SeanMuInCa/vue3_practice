<template>
  <h1>{{ filter.filterKeyRef }}</h1>

  <div id="app">
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
            <input id="toggle-all" class="toggle-all" type="checkbox" />
            <label for="toggle-all">Mark all as complete</label>
            <ul class="todo-list">
                <li class="todo" v-for="todo in filter.filtedData.value" :key="todo.id">
                    <div class="view">
                        <input class="toggle" type="checkbox" />
                        <label>{{ todo.title }}</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit" type="text" />
                </li>
            </ul>
        </section>
        <footer class="footer">
            <span class="todo-count">
                <strong>3</strong>
                <span>items left</span>
            </span>
            <ul class="filters">
                <li><a href="#/all" :class="{ selected: filter.filterKeyRef === 'all'}">All</a></li>
                <li><a href="#/active" :class="{ selected: filter.filterKeyRef === 'active'}">Active</a></li>
                <li><a href="#/completed" :class="{ selected: filter.filterKeyRef === 'completed'}">Completed</a></li>
            </ul>
            <button class="clear-completed" style="display: none">
                Clear completed
            </button>
        </footer>
    </section>
</div>
</template>


<script setup lang="ts">
  import useFileter from '@/composition/useFileter'
  import useTodoList from '@/composition/useTodoList';
  import useNewTodo from '@/composition/useNewTodo';

  const list = useTodoList();
  
  const todo = useNewTodo(list.todos);

  const filter = useFileter(list.todos);

  
</script>


<style scoped>
</style>