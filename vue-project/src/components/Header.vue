<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/explorer">Explorer</router-link> |
      <router-link to="/quiz">Quiz</router-link> |
      <router-link to="/notebook">Notebook</router-link>
    </nav>
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HeaderComponent',
});
</script>

<style scoped>
header {
  background-color: #4CAF50;
  padding: 20px;
  text-align: center;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
}

a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}
</style>