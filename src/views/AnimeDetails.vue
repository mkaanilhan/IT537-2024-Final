<template>
    <div>
      <h1>Anime Details</h1>
      <p>{{ animeDetails.title }}</p>
      <p>{{ animeDetails.description }}</p>
    </div>
  </template>
  
  <script>
  import { useAnimeStore } from '@/store';
  
  export default {
    name: 'AnimeDetails',
    data() {
      return {
        animeDetails: {},
      };
    },
    async mounted() {
      const store = useAnimeStore();
      const animeId = this.$route.params.id;
      await store.fetchAnimeDetails(animeId);
      this.animeDetails = store.animeDetails;
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
  