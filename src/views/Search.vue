<template>
  <div>
    <Navbar />
    <h1>Search Results</h1>
    <div class="movie-list">
      <MovieCard v-for="movie in searchResults" :key="movie.id" :movie="movie" />
    </div>
  </div>
</template>

<script>
import MovieCard from '@/components/MovieCard.vue';
import Navbar from '@/components/Navbar.vue';
import { useMovieStore } from '@/stores/index.js';

export default {
  components: {
    MovieCard,
    Navbar
  },
  computed: {
    searchResults() {
      const movieStore = useMovieStore();
      return movieStore.searchResults;
    }
  },
  created() {
    const movieStore = useMovieStore();
    const query = this.$route.query.q;
    if (query) {
      movieStore.searchMovies(query);
    }
  }
};
</script>

<style scoped>
h1 {
  margin: 20px;
  text-align: center;
}

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
