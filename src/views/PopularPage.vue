<template>
  <div>
    <h1>Popular Anime</h1>
    <AnimeList :animes="animeList" />
  </div>
</template>

<script>
import { useAnimeStore } from '../store/anime';
import AnimeList from '../components/AnimeList.vue';
import { onMounted } from 'vue';

export default {
  components: {
    AnimeList
  },
  setup() {
    const store = useAnimeStore();
    onMounted(() => {
      store.fetchPopularAnime();
    });
    return {
      animeList: store.animeList
    };
  }
}
</script>
