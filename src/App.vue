<script setup lang="ts">
import { ref } from 'vue';

console.log("test");
let count = ref(0);
function useCount() {
  
  const increase = () => {
    console.log(count.value);
    
    count.value++;
    console.log(count.value);
  }
  return{
    count,increase
  }
}
</script>

<template>
  <h1>hello</h1>
  <h1>{{ useCount().count }}</h1>
  <button @click="useCount().increase()">click</button>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
