<template>
  <div class="movie-card">
    <router-link :to="{ name: 'MovieDetails', params: { id: movie.id } }">
      <img
        :src="movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : defaultPoster"
        :alt="movie.title"
        class="movie-poster"
      />
      <div v-if="!movie.poster_path" class="no-poster-text">No Image Available</div>
    </router-link>
    <h2>{{ movie.title }}</h2>
  </div>
</template>

<script>
import defaultPoster from '@/assets/default-poster.png';

export default {
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      defaultPoster
    };
  }
};
</script>

<style scoped>
.movie-card {
  position: relative;
  text-align: center;
  margin: 10px;
}

.movie-poster {
  width: 100%;
  height: auto;
}

.no-poster-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 14px;
}

h2 {
  margin-top: 10px;
}
</style>
