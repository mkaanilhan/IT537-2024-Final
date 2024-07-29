<template>
    <div>
      <AnimeCard v-for="anime in animeList" :key="anime.id" :anime="anime" />
    </div>
  </template>
  
  <script>
  import AnimeCard from './AnimeCard.vue';
  import { useAnimeStore } from '@/store';
  
  export default {
    name: 'AnimeList',
    components: {
      AnimeCard,
    },
    computed: {
      animeList() {
        const store = useAnimeStore();
        return store.animeList;
      },
    },
    created() {
      const store = useAnimeStore();
      store.fetchAnimeList();
    },
  };
  </script>
  
  <style scoped>
  div {
    display: flex;
    flex-wrap: wrap;
  }
  </style>
  