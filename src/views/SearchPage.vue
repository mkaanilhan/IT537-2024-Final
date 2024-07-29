<template>
  <div>
    <h1>Search Anime</h1>
    <input v-model="query" @keyup.enter="searchAnime" placeholder="Search for an anime..." />
    <AnimeList :animes="animeList" />
  </div>
</template>

<script>
import { useAnimeStore } from '../store/anime';
import AnimeList from '../components/AnimeList.vue';
import { ref } from 'vue';

export default {
  components: {
    AnimeList
  },
  setup() {
    const store = useAnimeStore();
    const query = ref('');
    const searchAnime = () => {
      store.searchAnime(query.value);
    };
    return {
      query,
      searchAnime,
      animeList: store.animeList
    };
  }
}
</script>
