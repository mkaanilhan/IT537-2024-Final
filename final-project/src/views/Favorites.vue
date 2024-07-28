<template>
    <div class="min-h-screen bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-500 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-7xl mx-auto">
        <h1 class="text-4xl font-extrabold text-white text-center mb-8">Your Favorite Pokémon</h1>
        
        <div v-if="favoritePokemon.length === 0" class="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl p-8 text-center">
          
          <p class="text-xl text-white">You haven't added any Pokémon to your favorites yet.</p>
          <router-link to="/" class="mt-4 inline-block bg-white text-purple-600 font-bold py-2 px-4 rounded-full hover:bg-purple-100 transition-colors duration-300">
            Explore Pokémon
          </router-link>
        </div>
        
        <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <div 
            v-for="pokemon in favoritePokemon" 
            :key="pokemon.id" 
            class="bg-white bg-opacity-20 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
          >
            <router-link :to="{ name: 'PokemonDetails', params: { name: pokemon.name } }" class="block">
              <div class="relative">
                <img :src="pokemon.image" :alt="pokemon.name" class="w-full h-48 object-contain bg-white bg-opacity-50">
                <div class="absolute top-0 right-0 bg-white bg-opacity-70 rounded-bl-xl px-2 py-1">
                  <span class="text-sm font-semibold text-purple-600">#{{ pokemon.id }}</span>
                </div>
              </div>
              <div class="p-4">
                <h3 class="text-xl font-bold text-white capitalize">{{ pokemon.name }}</h3>
                <div class="mt-2 flex flex-wrap gap-2">
                  <span 
                    v-for="type in pokemon.types" 
                    :key="type"
                    class="px-2 py-1 rounded-full text-xs font-medium"
                    :class="getTypeColor(type)"
                  >
                    {{ type }}
                  </span>
                </div>
              </div>
            </router-link>
            <button 
              @click="removeFavorite(pokemon.id)"
              class="w-full bg-red-500 text-white py-2 hover:bg-red-600 transition-colors duration-300 flex items-center justify-center"
            >
              <span class="mr-2">Remove from Favorites</span>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { computed } from 'vue'
  import { usePokemonStore } from '@/stores/pokemon'
  
  export default {
    name: 'Favorites',
    setup() {
      const store = usePokemonStore()
  
      const favoritePokemon = computed(() => 
        store.pokemonList.filter(pokemon => store.favorites.includes(pokemon.id))
      )
  
      const removeFavorite = (id) => {
        store.toggleFavorite(id)
      }
  
      const getTypeColor = (type) => {
        const colors = {
          normal: 'bg-gray-400 text-white',
          fire: 'bg-red-500 text-white',
          water: 'bg-blue-500 text-white',
          electric: 'bg-yellow-400 text-black',
          grass: 'bg-green-500 text-white',
          ice: 'bg-blue-200 text-black',
          fighting: 'bg-red-700 text-white',
          poison: 'bg-purple-500 text-white',
          ground: 'bg-yellow-600 text-white',
          flying: 'bg-indigo-400 text-white',
          psychic: 'bg-pink-500 text-white',
          bug: 'bg-green-400 text-white',
          rock: 'bg-yellow-700 text-white',
          ghost: 'bg-purple-700 text-white',
          dragon: 'bg-indigo-700 text-white',
          dark: 'bg-gray-700 text-white',
          steel: 'bg-gray-400 text-white',
          fairy: 'bg-pink-300 text-black'
        }
        return colors[type] || 'bg-gray-500 text-white'
      }
  
      return { favoritePokemon, removeFavorite, getTypeColor }
    }
  }
  </script>