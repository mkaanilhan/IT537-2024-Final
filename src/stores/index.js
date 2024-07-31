import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    popularMovies: [],
    searchResults: [],
    movieDetails: null, // Change to null for better handling of loading state
  }),
  actions: {
    async fetchPopularMovies() {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
        const data = await response.json()
        console.log('Popular Movies Data:', data) // Debugging line
        this.popularMovies = data.results
      } catch (error) {
        console.error('Error fetching popular movies:', error) // Debugging line
      }
    },
    async searchMovies(query) {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${import.meta.env.VITE_TMDB_API_KEY}&query=${query}`)
        const data = await response.json()
        console.log('Search Results:', data.results) // Debugging line
        this.searchResults = data.results
      } catch (error) {
        console.error('Error searching movies:', error) // Debugging line
      }
    },
    async fetchMovieDetails(id) {
      try {
        this.movieDetails = null // Clear previous movie details
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}`)
        const data = await response.json()
        console.log('Movie Details:', data) // Debugging line
        this.movieDetails = data
      } catch (error) {
        console.error('Error fetching movie details:', error) // Debugging line
      }
    }
  }
})

export default useMovieStore
