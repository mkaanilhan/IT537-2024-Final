<script>


</script>


<template>
  <header>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
}

nav a {
  color: white;
  margin: 0 1rem;
  text-decoration: none;
}
</style>
