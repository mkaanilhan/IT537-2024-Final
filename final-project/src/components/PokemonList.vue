<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      <div 
        v-for="pokemon in pokemons" 
        :key="pokemon.id" 
        class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
      >
        <div class="p-4 flex flex-col items-center">
          <img :src="pokemon.image" :alt="pokemon.name" class="w-32 h-32 object-contain cursor-pointer" @click="goToPokemonDetails(pokemon.name)">
          <h3 class="mt-2 text-lg font-semibold capitalize text-center cursor-pointer" @click="goToPokemonDetails(pokemon.name)">{{ pokemon.name }}</h3>
          <div class="mt-2 flex flex-wrap justify-center gap-2">
            <span 
              v-for="type in pokemon.types" 
              :key="type"
              class="px-2 py-1 rounded-full text-xs font-medium"
              :class="getTypeColor(type)"
            >
              {{ type }}
            </span>
          </div>
          <button 
            @click="toggleFavorite(pokemon.id)"
            class="mt-2 bg-red-500 text-white px-3 py-1 rounded-full text-sm hover:bg-red-600 transition-colors duration-300"
          >
            {{ isFavorite(pokemon.id) ? '❤️' : '🤍' }}
          </button>
        </div>
      </div>
    </div>
  </template>

  <script>
  import { useRouter } from 'vue-router'
  import { usePokemonStore } from '@/stores/pokemon'

  export default {
    props: {
      pokemons: {
        type: Array,
        required: true
      }
    },
    setup() {
      const router = useRouter()
      const store = usePokemonStore()

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

      const goToPokemonDetails = (name) => {
        router.push({ name: 'PokemonDetails', params: { name } })
      }

      const toggleFavorite = (pokemonId) => {
        store.toggleFavorite(pokemonId)
      }

      const isFavorite = (pokemonId) => {
        return store.isFavorite(pokemonId)
      }

      return { getTypeColor, goToPokemonDetails, toggleFavorite, isFavorite }
    }
  }
  </script>