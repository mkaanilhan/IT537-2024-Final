<script>
import { useMovieStore } from "../stores/index.js";
import MovieItem from "../components/MovieItem.vue";
import { onMounted, ref } from "vue";

export default {
  components: {
    MovieItem,
  },
  setup() {
    const store = useMovieStore();
    const movies = ref([]);

    onMounted(async () => {
      await store.fetchMovies();
      movies.value = store.movies;
    });

    return {
      movies,
    };
  },
};
</script>

<template>
  <div
    class="max-w-[1200px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 pb-16 m-auto"
  >
    <MovieItem v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
