<template>
  <nav class="navbar">
    <router-link to="/" class="font-bold text-lg">MovieApp</router-link>
    <SearchBar />
  </nav>
</template>

<script>
import SearchBar from './SearchBar.vue';

export default {
  components: {
    SearchBar,
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #343a40;
  color: #fff;
}

.navbar-brand {
  font-size: 1.5rem;
}

.search-bar {
  max-width: 300px;
}
</style>
