<template>
  <div>
    <h1>{{ animeDetails.title }}</h1>
    <p>{{ animeDetails.description }}</p>
  </div>
</template>

<script>
import { useAnimeStore } from '../store/anime';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  setup() {
    const store = useAnimeStore();
    const route = useRoute();
    onMounted(() => {
      store.fetchAnimeDetails(route.params.id);
    });
    return {
      animeDetails: store.animeDetails
    };
  }
}
</script>
