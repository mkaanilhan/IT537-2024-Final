<template>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <router-link to="/popular">Popular</router-link>
        <router-link to="/search">Search</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: 'HeaderComponent'
  };
  </script>
  
  <style scoped>
  header {
    background-color: #333;
    padding: 1rem;
    color: white;
  }
  
  nav {
    display: flex;
    gap: 1rem;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  