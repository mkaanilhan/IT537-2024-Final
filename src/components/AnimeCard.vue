<template>
    <div>
      <h3>{{ anime.title }}</h3>
      <router-link :to="`/anime/${anime.id}`">View Details</router-link>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AnimeCard',
    props: {
      anime: Object,
    },
  };
  </script>
  
  <style scoped>
  div {
    border: 1px solid #ccc;
    margin: 10px;
    padding: 10px;
    width: 200px;
    text-align: center;
  }
  </style>
  