<template>
    <div>
      <Navbar />
      <div class="container mx-auto p-4 mt-20">
        <div v-if="loading" class="text-center">Loading...</div>
        <div v-else-if="movieDetails">
          <div class="flex">
            <img :src="`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`" alt="Movie Poster" class="w-64">
            <div class="ml-4">
              <h1 class="text-4xl font-bold">{{ movieDetails.title }}</h1>
              <p class="mt-4">{{ movieDetails.overview }}</p>
              <p class="mt-2"><strong>Release Date:</strong> {{ movieDetails.release_date }}</p>
            </div>
          </div>
        </div>
        <div v-else class="text-center">Movie details not available.</div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from '../components/Navbar.vue'
  import { useRoute } from 'vue-router'
  import { useMovieStore } from '../stores'
  import { watch, onMounted, ref, computed } from 'vue'
  
  export default {
    name: 'MovieDetails',
    components: { Navbar },
    setup() {
      const route = useRoute()
      const store = useMovieStore()
      const loading = ref(true)
  
      const fetchMovie = async () => {
        loading.value = true
        await store.fetchMovieDetails(route.params.id)
        loading.value = false
        console.log('Fetched Movie Details:', store.movieDetails) // Debugging line
      }
  
      onMounted(fetchMovie)
      watch(route, fetchMovie, { immediate: true })
  
      return {
        movieDetails: computed(() => store.movieDetails),
        loading
      }
    }
  }
  </script>
  