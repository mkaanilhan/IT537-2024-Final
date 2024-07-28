<template>
    <button 
      @click="toggleFavorite"
      class="px-4 py-2 rounded-full bg-red-500 text-white hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
    >
      {{ isFavorite ? 'Remove from Favorites' : 'Add to Favorites' }}
    </button>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { usePokemonStore } from '@/stores/pokemon'
  
  export default {
    props: {
      pokemonId: {
        type: Number,
        required: true
      }
    },
    setup(props) {
      const store = usePokemonStore()
  
      const isFavorite = computed(() => store.favorites.includes(props.pokemonId))
  
      const toggleFavorite = () => {
        store.toggleFavorite(props.pokemonId)
      }
  
      return { isFavorite, toggleFavorite }
    }
  }
  </script>