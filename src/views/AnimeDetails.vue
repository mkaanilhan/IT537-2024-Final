<template>
  <div>
    <h1>{{ anime.title }}</h1>
    <p>{{ anime.description }}</p>
  </div>
</template>

<script>
import { useAnimeStore } from '../store';

export default {
  name: 'AnimeDetails',
  data() {
    return {
      anime: {}
    };
  },
  async created() {
    const store = useAnimeStore();
    const id = this.$route.params.id;
    await store.fetchAnimeDetails(id);
    this.anime = store.animeDetails;
  }
}
</script>

<style scoped>
h1 {
  font-size: 2em;
}
</style>
