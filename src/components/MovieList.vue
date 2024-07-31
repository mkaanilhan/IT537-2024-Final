<template>
  <div class="movie-list">
    <MovieCard v-for="movie in movies" :key="movie.id" :movie="movie" />
  </div>
</template>

<script>
import { mapState } from 'pinia';
import MovieCard from './MovieCard.vue';
import { useMovieStore } from '@/stores/index.js';

export default {
  components: {
    MovieCard
  },
  computed: {
    ...mapState(useMovieStore, ['popularMovies']),
    movies() {
      return this.popularMovies;
    }
  },
  created() {
    const movieStore = useMovieStore();
    movieStore.fetchPopularMovies();
  }
};
</script>

<style scoped>
.movie-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

.movie-card {
  flex: 0 0 200px;
  margin: 10px;
}
</style>
