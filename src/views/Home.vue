<template>
    <div>
      <Navbar />
      <div class="container mx-auto p-4 mt-20">
        <h1 class="text-4xl font-bold my-4">Popular Movies</h1>
        <div v-if="popularMovies.length > 0" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          <MovieCard v-for="movie in popularMovies" :key="movie.id" :movie="movie" />
        </div>
        <div v-else class="text-center">Loading...</div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue'
  import MovieCard from '../components/MovieCard.vue'
  import useMovieStore from '../stores'
  import { onMounted, computed } from 'vue'
  
  export default {
    name: 'Home',
    components: { Navbar, MovieCard },
    setup() {
      const store = useMovieStore()
      onMounted(() => {
        store.fetchPopularMovies()
      })
      return {
        popularMovies: computed(() => store.popularMovies)
      }
    }
  }
  </script>
  